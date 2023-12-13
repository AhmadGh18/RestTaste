import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axiosClient";
import "../App.css";
import ResturantInfo from "../views/ResturantInfo";
import AddItem from "../views/AddItem";
import AllItem from "./AllItem";
import Everything from "./Everything";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { setUser, setToken, setRestaurant, Restaurant } = useStateContext();
    const [isAddItemVisible, setAddItemVisibility] = useState(false);
    const [items, setAllItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axiosClient
            .get("/getItems")
            .then((data) => {
                setAllItems(data.data.items);
                console.log(data.data.items);
            })
            .catch((err) => console.log(err));
    };

    const handleAddItemClick = () => {
        setAddItemVisibility(true);
    };

    const handleAddItemSubmit = () => {
        setAddItemVisibility(false);
        fetchData();
    };
    const nav = useNavigate();
    return (
        <div>
            <div className="profilimg">
                <img
                    src={`http://localhost:8000/storage/${Restaurant.profile_pic_url}`}
                    alt="[rofile"
                />
            </div>
            <div className="conthold">
                <div className="prodductadd">
                    <span onClick={() => nav("/AddItem")}>+</span>
                    <p>Add item</p>
                </div>
                {/* {isAddItemVisible && (
                    <AddItem
                        hideAddItem={() => setAddItemVisibility(false)}
                        onItemSubmit={handleAddItemSubmit}
                    />
                )} */}
                {items.length >= 1 &&
                    items.map((el) => (
                        <AllItem
                            key={el.id}
                            title={el.title}
                            price={el.price}
                            description={el.description}
                            tags={el.tags}
                            img={`http://localhost:8000/storage/${el.image}`}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Dashboard;
