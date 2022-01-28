import React, { useState, useEffect } from "react";
import axios from '../requests/axios';
import './Row.css'

function Row({type, title, fetchURL}) {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            if(type === "Top") {
                setShows(request.data.top);
            }
            else if (type === "Genre") {
                setShows(request.data.anime.sort((a, b) => 0.5 - Math.random()));
            }
            else if (type === "Seasonal") {
                setShows(request.data.anime);
            }
            else if (type === "Current") {
                setShows(request.data.anime);
            }
            return request;
        }
        fetchData();
        title = 'bruh';
    }, [type, title, fetchURL])

    const handleClick = (show) => {
        console.log(show.title)
        title = "bruh"
        console.log(title)
    }
    return (
        <div className="row">
            <h2 className="row_title">{title}</h2>
            <div className="row_posters">
                {shows.map(show => (
                    <img
                        key={show.mal_id}
                        onClick={() => handleClick(show)}
                        className="row_poster" 
                        src={show.image_url} alt={show.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row