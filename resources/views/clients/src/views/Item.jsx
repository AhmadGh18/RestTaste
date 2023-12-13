import React from "react";
import { useNavigate } from "react-router-dom";
import nopic from "../assets/nopic.jpg";
const Item = ({ item }) => {
    const nav = useNavigate();

    return (
        <div key={item.id} className="singleitem">
            <img
                src={
                    item.image
                        ? `http://localhost:8000/storage/${item.image}`
                        : nopic
                }
                alt="Description"
            />

            <p className="title">{item.title}</p>
            <p>
                <strong>description :</strong> {item.description}
            </p>
            <p>
                <strong>restaurant name : </strong>
                <span
                    onClick={() =>
                        nav(`/Restaurants/${item.restaurant.restaurant_name}`)
                    }
                    style={{ cursor: "pointer", color: "red" }}
                >
                    {item.restaurant.restaurant_name}
                </span>
            </p>

            <p>
                <strong>price : </strong>
                {item.price}
                <p>{item.Posted_at}</p>
                <p>
                    {item.tags.split(",").map((tag, index) => (
                        <span className="tagcon" key={index}>
                            #{tag}
                        </span>
                    ))}
                </p>
            </p>
        </div>
    );
};

export default Item;
