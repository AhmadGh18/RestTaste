import React, { useEffect, useState } from "react";
import axiosClient from "../axiosClient";
import imgd from "../assets/nopic.jpg";
import { Link } from "react-router-dom";

const AllRestaurants = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        axiosClient
            .get("/AllRestaurants")
            .then((data) => {
                setAllRestaurants(data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <input
                value={searchText}
                type="search"
                placeholder="Search Restaurants"
                onChange={(e) => setSearchText(e.target.value)}
            />

            <div className="Allresty">
                {allRestaurants
                    .filter(
                        (el) =>
                            el.restaurant_name
                                .toLowerCase()
                                .includes(searchText.toLowerCase()) ||
                            el.Location.toLowerCase().includes(
                                searchText.toLowerCase()
                            )
                    )

                    .map((el) => (
                        <div key={el} className="singlered">
                            <div className="imgcon">
                                <img
                                    src={`http://localhost:8000/storage/${
                                        el.profile_pic_url
                                            ? el.profile_pic_url
                                            : imgd
                                    }`}
                                />
                            </div>
                            <p>{el.restaurant_name}</p>
                            <p>{el.Location}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default AllRestaurants;
