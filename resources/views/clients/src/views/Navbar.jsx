import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <div className={`hold ${click ? "show-menu" : ""}`}>
            <FaBars className="icon" onClick={handleClick} />

            <nav className="navbar">
                <a className="logo">TasteOfLeb</a>
                <div className="leftnav">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Servecies</li>
                        <li>Login</li>
                        <li>Pages</li>
                        <li>
                            <button>Explore more</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
