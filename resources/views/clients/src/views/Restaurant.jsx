import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axiosClient";
import RestaurantItem from "./RestaurantItem";
import nopic from "../assets/nopic.jpg";
import Loading from "./Loading";
import Navbar from "./Navbar";
import { FaBars, FaArrowAltCircleLeft } from "react-icons/fa";

const Restaurant = () => {
    const { restaurant_name } = useParams();
    const [restaurantData, setRestaurantData] = useState(null);
    const [loading, setLoading] = useState(true);
    const nav = useNavigate();

    useEffect(() => {
        if (restaurant_name) {
            const trimmedName = restaurant_name.trim();
            axiosClient
                .get(`/SingleRestaurantItem/${trimmedName}`)
                .then((response) => {
                    setRestaurantData(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                });
        }
    }, [restaurant_name]);

    if (loading) {
        return <Loading />;
    }

    // Check if restaurantData has the expected structure
    if (
        !restaurantData ||
        !restaurantData.restaurant ||
        !restaurantData.posts
    ) {
        return <p>Error: Data structure is incorrect.</p>;
    }
    function handlemove() {
        nav("/Everything");
    }
    const { restaurant, posts } = restaurantData;
    return (
        <div>
            <FaArrowAltCircleLeft onClick={handlemove} />
            <div className="useless"></div>
            <Navbar />

            <div className="profilimg">
                <img
                    src={
                        restaurant.profile_pic_url
                            ? `http://localhost:8000/storage/${restaurant.profile_pic_url}`
                            : nopic
                    }
                    alt="Profile Pic"
                />
            </div>

            <center>
                <h1>{restaurant.restaurant_name}</h1>
            </center>
            <p>{restaurant.description}</p>

            <div className="Allitem_con">
                {posts.length > 0 ? (
                    posts.map((el) => <RestaurantItem key={el.id} item={el} />)
                ) : (
                    <p>No posts available for this restaurant.</p>
                )}
            </div>
        </div>
    );
};

export default Restaurant;
