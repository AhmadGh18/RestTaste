import React, { useState } from "react";
import "./style3.css";
import { FaBars } from "react-icons/fa";
import spinimg from "../assets/hero.png";
import { Link } from "react-router-dom";
const Entry = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <div>
            <div className={`hold ${click ? "show-menu" : ""}`}>
                <nav className="navbar">
                    <a className="logo">TasteOfLeb</a>
                    <div className="leftnav">
                        <ul className="entyul">
                            <li>Home</li>
                            <li>About</li>
                            <li>Servecies</li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>Pages</li>
                            <li>
                                <button>Explore more</button>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="mainsection">
                    <div className="textmain">
                        <p className="fi">welcom to TasteofLeb</p>
                        <p className="sec">
                            The first website to discover places
                        </p>
                        <button className="explore">Start exploring</button>
                    </div>
                    <img src={spinimg} className="spinning-image" />
                </div>
            </div>

            <FaBars className="icon" onClick={handleClick} />

            <section className="secondsec"></section>
            <a className="logo3">TasteOfLeb</a>
        </div>
    );
};

export default Entry;
