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
                setShows(request.data.anime);
            }
            return request;
        }
        fetchData();
    }, [type, fetchURL])

    console.log(shows)
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
            {shows.map(show => (
                <img
                key={show.mal_id}
                className="row_poster" 
                src={show.image_url} alt={show.title}/>
            ))}
            </div>
        </div>
    )
}

export default Row