import React, { useEffect, useState } from 'react'
import ml from '../movielisting/Movielisting.module.css'
import { useNavigate } from 'react-router-dom'
function Movielisting() {
    const nevigate = useNavigate();
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState('');
    const [select, setSelect] = useState('all');
    const [year,setYear]=useState('all')
    const [newData,setNewData]=useState([])

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchClick = () => {
        const newdata = newData.filter((item) => {
            return Object.keys(item).filter(key => key !== 'image'&& key!=="_id").some((key) => {
              return item[key].toString().toLowerCase().includes(searchValue.toLowerCase());
            });
          });


        
        setData(newdata)
    };
    const handledelete = async (id) => {
        try {
            let response = await fetch(`https://kind-cyan-abalone-kilt.cyclic.app/movie/delete/${id}`, {
                method: "DELETE",
            })
            fetchdata();

        } catch (error) {
            console.log(error);

        }


    }
    const fetchdata = async () => {
        const response = await fetch('https://kind-cyan-abalone-kilt.cyclic.app/movie')
        const data = await response.json()
        setData(data.data)
        console.log(data)
        setNewData(data.data)
    }
    const handlechange = (e) => {
        setSelect(e.target.value)

        if (e.target.value === 'asc') {
            setData(data.sort((a, b) => a.title.localeCompare(b.title)))

        }
        else {

            setData(data.sort((a, b) => b.title.localeCompare(a.title)))

        }
        console.log(data)
    }
    const handleyear = (e) => {
        setYear(e.target.value)

        if (e.target.value === 'lth') {
            setData(data.sort((a, b) => a.year-b.year))

        }
        else {

            setData(data.sort((a, b) => b.year-a.year))

        }
        console.log(data)
    }
   
    useEffect(() => {
        fetchdata()
    }, [])
    return (

        <>

            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleInputChange}
                    style={{margin:"15px 5px",padding:"8px",borderRadius:'10px'}}
                />
                <button onClick={handleSearchClick} style={{margin:"15px 0px",padding:"8px",borderRadius:'10px'}}>Search</button>
            </div>
            <label htmlFor="Sort by movie name">Sort by title</label>
            <select name="" id="" onChange={handlechange} style={{margin:"15px",padding:"8px",borderRadius:'10px'}}>
                <option value="all">All</option>
                <option value="asc">Ascending</option>
                <option value="dsc">Decending</option>
            </select><br />
            <label htmlFor="Sort by year">Sort by Year</label>
            <select name="" id="" onChange={handleyear}style={{margin:"0px 0px 15px 15px",padding:"8px",borderRadius:'10px'}}>
                <option value="all">All</option>
                <option value="htl"> Recent</option>
                <option value="lth">Oldest</option>
            </select>

            <div className={ml.ml}>

                {
                    data.map((element, index) => {
                        return (
                            <div key={index} >
                                
                                <img src={element.image} alt="" onClick={() => nevigate(`/movie/${element._id}`)} />
                                <h4><b>Title: </b> {element.title}</h4>
                                <p><b>Description: </b>{element.description}</p>
                                <p><b>Year: </b>{element.year}</p>
                                <p><b>Rating: </b>{element.rating}</p>
                                <p><b>Cast: </b>{element.cast}</p>
                                <p><b>Genre: </b>{element.genre}</p>
                                <p><b>Synopsis: </b>{element.synopsis}</p>
                                <button onClick={() => nevigate(`/edit/${element._id}`)} >Update</button>
                                <button onClick={() => handledelete(element._id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div></>

    )
}

export default Movielisting
