import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import am from './Editmovie.module.css'


function Editmovie() {
    const navigate = useNavigate();


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
    const { id } = useParams()

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            let response = await fetch(`https://kind-cyan-abalone-kilt.cyclic.app/movie/edit/${id}`, {
                method: "PATCH",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            let data = await response.json();
            navigate('/')

        } catch (error) {
            console.log(error);

        }


    };

    const fetchdata = async () => {
        const response = await fetch(`https://kind-cyan-abalone-kilt.cyclic.app/movie/${id}`)
        const data = await response.json()
        let { title,
            genre,
            description,
            image,
            director,
            year,
            cast,
            synopsis,
            rating } = data.data
        setFormData({
            ...formData, title,
            genre,
            description,
            image,
            director,
            year,
            cast,
            synopsis,
            rating
        })
    }
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    useEffect(() => {
        fetchdata()
    }, [])

    return (

        <form onSubmit={handleSubmit} className={am.form}>
            <span>Edit Movie</span>
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
            <button type="submit">Update</button>
        </form>

    )
}

export default Editmovie