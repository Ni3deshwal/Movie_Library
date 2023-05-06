const {getallmovies,getmovie,postmovie,deletemovie,editmovie}=require('../controllers/movie.controller.js')
const express=require('express')
const router=express.Router();

router.get('/',getallmovies)
router.get('/:id',getmovie)
router.post('/create',postmovie)
router.patch('/edit/:id',editmovie)
router.delete('/delete/:id',deletemovie)

module.exports=router