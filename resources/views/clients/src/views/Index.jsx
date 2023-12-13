import React, { useEffect, useState } from "react";
import img from "../assets/mylogo.jpg";
import bgimg from "../assets/front-view-burger-stand.jpg";
import "./mainpage.css";
import itemimg from "../assets/mainsec.png";
import res from "../assets/res.jpg";

const Index = () => {
    {
        return (
            <div>
                <header>
                    <input type="checkbox" id="nav_check" hidden />
                    <nav>
                        <ul>
                            <li>
                                <a href="" className="active">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="">Aboutus</a>
                            </li>
                            <li>
                                <a href="">Contactus</a>
                            </li>
                            <li>
                                <a href="">Login</a>
                            </li>
                        </ul>
                    </nav>
                    <label htmlFor="nav_check" className="hamburger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>
                </header>
                <section className="main-sec">
                    <div className="todown">
                        <div className="text-main">
                            <h1>
                                Check <br /> TasteOfLeb{" "}
                            </h1>
                            <p>
                                First website in lebanon to explore all possible
                                item <br />
                                and restuarants around lebanon
                            </p>
                            <button>Explore more</button>
                        </div>
                    </div>
                    <div className="mainImg">
                        <img src={bgimg} alt="burger" />
                    </div>
                </section>
                <section className="secnd-sec">
                    <h1>Check It now !</h1>
                    <h2>Search throw hundreds of restaurants and Items</h2>
                    <p>
                        simply just enter the city you want explore throw
                        hundred ot resturants <br />
                        all around lebanon or search for specific item and
                        filter price
                    </p>
                </section>
                <section className="thirdSec">
                    <div>
                        <p>see all availablw Restaurant</p>
                        <img src={res} alt="explore item" />
                    </div>

                    <div>
                        <p>see all availablw Items</p>
                        <img src={itemimg} alt="explore item" />
                    </div>
                </section>
                <section className="frth">
                    <h1>become A part of this website !</h1>
                    <p>If you have a restaurant plz following number</p>
                    <p>81501748</p>
                </section>
            </div>
        );
    }
};

export default Index;
