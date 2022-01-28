import React, { useState, useEffect } from "react";
import axios from '../requests/axios';
import requests from "../requests/home_requests";
import './Banner.css';

function Banner() {
    const [show, setShow] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTopAiring);
            const shows = request.data.top;
            const randShow = shows[Math.floor(Math.random() * 10)];
            setShow(randShow);
            const request2 = await axios.get(`${requests.fetchAnime}/${randShow.mal_id}`);
            setShow(request2.data);
            return request;
        }
        fetchData();
    }, [])
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return(
        <header className="banner"
            style={{
                backgroundSize: "scale-down no-repeat",
                backgroundImage: `url(https://www.awn.com/sites/default/files/styles/original/public/image/featured/attackontitan_s4_seasonalassets_16x9_twitter-post.jpg?itok=izKVfEwm)`/*`url(${show.image_url})`*/,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <div className="banner_contents_background">
                    <h1 className="banner_title">{show.title}</h1>
                    <div className="banner_buttons">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">More Info</button>
                    </div>
                    <h1 className="banner_description">{truncate(show.synopsis, 300)}</h1>
                </div>
            </div>

            <div className="banner--fadeBottom"/>
        </header>
    );

}

export default Banner;