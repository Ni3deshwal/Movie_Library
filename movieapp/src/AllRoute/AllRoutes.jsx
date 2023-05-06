import React from 'react'
import {Routes, Route} from "react-router-dom"
import Movie from '../pages/movie/Movie'

import Addmovie from '../pages/Addmovie/Addmovie'
import Home from '../pages/Home/Home'
import Editmovie from '../components/editmovie/Editmovie'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addmovie' element={<Addmovie/>}></Route>
        <Route path='/movie/:id' element={<Movie />}></Route>
        <Route path='/edit/:id' element={<Editmovie/>}></Route>
    </Routes>
  )
}

export default AllRoutes