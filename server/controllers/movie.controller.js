const Movie=require('../models/movie.model.js')
const getallmovies=async(req,res)=>{
    try {
        const movies=await Movie.find();
        res.send({data:movies});
    } catch (error) {
        res.status(500).send(error.message)
        
    }
}
const getmovie=async(req,res)=>{
    try {
        const movies=await Movie.findById(req.params.id)
        if(!movies)
        {
            return res.status(404).send({message: 'Movie not found'})
        }
    
        res.send({data:movies});
    } catch (error) {
        res.status(500).send(error.message)
        
    }
}
const postmovie=async(req,res)=>{
    // console.log(req.body)
    try {
        const {title,description,rating,cast,synopsis,genre,year,director,image}=req.body;
        if(!title || !description || !rating||!cast||!synopsis || !genre||!year||!director||!image)
        {
            return res.status(404).send({message:'missing field'});
        }
        const movies=await Movie.create({title,description,rating,cast,synopsis,genre,year,director,image});
        res.send({data:movies});

    } catch (error) {
        res.status(500).send(error.message)
        
    }
}
const editmovie=async(req,res)=>{

    try {
        const movies=await Movie.findByIdAndUpdate(req.params.id,{...req.body},{new:true});
        res.send({data:movies});
    } catch (error) {
        res.status(500).send(error.message)
        
    }
}
const deletemovie=async(req,res)=>{
    try {
        const movies=await Movie.findByIdAndDelete(req.params.id);
        
        res.send({data:movies});
    } catch (error) {
        res.status(500).send(error.message)
        
    }
}
module.exports ={getallmovies,getmovie,postmovie,deletemovie,editmovie}