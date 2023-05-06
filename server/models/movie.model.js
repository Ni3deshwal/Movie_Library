const mongoose=require('mongoose')
const MovieSchema=new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
   rating:{type:Number, required:true},
    year:{type:Number, required:true},
    director:{type:String, required:true},
    genre:{type:String, required:true},
    image:{type:String, required:true},
    synopsis:{type:String,required:true},
    cast:{type:String, required:true}, 
})
const Movie=mongoose.model('Movie',MovieSchema);
module.exports = Movie;