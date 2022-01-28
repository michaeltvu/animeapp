import React, { useState, useEffect } from "react";
import anime_logo from "../assets/anime_logo.png"
import settings_logo from "../assets/settings_logo.png"
import search_icon from "../assets/search_icon.png"
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } 
            else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return(
        <div className={`nav ${show && "nav_black"}`}>
            <input 
                type="image"
                className="nav_logo"
                src={anime_logo}
                alt="logo"
            />
            <input 
                type="image"
                className="nav_search_icon"
                src={search_icon}
                alt="search"
            />
            <input 
                type="image"
                className="nav_profile_icon"
                src={settings_logo}
                alt="profile"
            />
        </div>
    );
}

export default Nav;