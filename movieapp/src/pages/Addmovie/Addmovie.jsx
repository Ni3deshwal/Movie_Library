import React, { useState } from "react";
import am from '../Addmovie/Addmovie.module.css'


function Addmovie() {



  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    description: "",
    image: "",
    director: "",
    year: "",
    cast: "",
    synopsis: "",
    rating: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert("running")
    try {
      let response = await fetch(`https://kind-cyan-abalone-kilt.cyclic.app/movie/create`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      console.log(data);

    } catch (error) {
      console.log(error);

    }


  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (

    <form onSubmit={handleSubmit} className={am.form}>
      <span>Add Movie</span> 
      <div>
        <label htmlFor="title">Title:</label><br />
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="genre">Genre:</label><br />
        <input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="director">Director:</label><br />
        <input
          type="text"
          id="director"
          name="director"
          value={formData.director}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label><br />
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label><br />
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label><br />
        <input
          type="text"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="cast">Cast:</label><br />
        <input
          id="cast"
          name="cast"
          value={formData.cast}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="synopsis">Synopsis:</label><br />
        <input
          id="synopsis"
          name="synopsis"
          value={formData.synopsis}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label><br />
        <input
          type="text"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Addmovie