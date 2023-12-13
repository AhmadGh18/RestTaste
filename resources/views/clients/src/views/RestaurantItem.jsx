import React from "react";
import { useNavigate } from "react-router-dom";
import nopic from "../assets/nopic.jpg";

const RestaurantItem = ({ item }) => {
    const nav = useNavigate();

    return (
        <div
            className="restaurant-item-container"
            style={{
                width: "300px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                height: "400px",
                margin: "10px",
            }}
        >
            <div className="profile-pic" style={{ height: "60%" }}>
                <img
                    src={
                        item.image
                            ? `http://localhost:8000/storage/${item.image}`
                            : nopic
                    }
                    alt="Description"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px 8px 0 0",
                    }}
                />
            </div>
            <div className="item-details" style={{ padding: "10px" }}>
                <p
                    className="title"
                    style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                    {item.title}
                </p>
                <p>
                    <strong>Description:</strong> {item.description}
                </p>
                <p>
                    <span
                        onClick={() =>
                            nav(`/Restaurants/${item.restaurant_name}`)
                        }
                        style={{
                            cursor: "pointer",
                            color: "red",
                            fontWeight: "bold",
                        }}
                    >
                        {item.restaurant_name}
                    </span>
                </p>
                <p>
                    <strong>Price:</strong> {item.price}
                </p>
                <p style={{ marginBottom: "5px" }}>{item.Posted_at}</p>
                <p>
                    {item.tags.split(",").map(
                        (tag, index) =>
                            tag != "" && (
                                <span className="tagcon" key={index}>
                                    #{tag}
                                </span>
                            )
                    )}
                </p>
            </div>
        </div>
    );
};

export default RestaurantItem;
