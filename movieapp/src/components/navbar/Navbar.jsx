import React from 'react'
import navbar from '../navbar/Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className={navbar.navbar}>
        <div className={navbar.ml}>
          <Link to='/'><h3>Movie Library</h3></Link> 

        </div>
        <div>
            <Link to='/addmovie'><button>Add Movie</button></Link>
        </div>
    </div>
  )
}

export default Navbar