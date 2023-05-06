import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Movie() {
  const { id } = useParams()
  const [element, setElement] = useState([])
  const fetchdata = async () => {
    const response = await fetch(`https://kind-cyan-abalone-kilt.cyclic.app/movie/${id}`)
    const data = await response.json()
    setElement(data.data)
  }
  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <div>
      <img src={element.image} alt="" />
      <h1>{element.title}</h1>
      <p>{element.description}</p>
      <p>{element.year}</p>
      <p>{element.rating}</p>
      <p>{element.cast}</p>
      <p>{element.genre}</p>
      <p>{element.synopsis}</p>
    </div>
  )
}

export default Movie