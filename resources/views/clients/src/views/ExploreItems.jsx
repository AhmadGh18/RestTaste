import React, { useEffect, useState } from "react";
import axiosClient from "../axiosClient";
import AllItem from "./AllItem";
import imgd from "../assets/nopic.jpg";

const ExploreItems = () => {
    const [allItems, setAllItems] = useState([]);
    const [count, setCount] = useState(0);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        axiosClient
            .get("/AllPosts")
            .then((data) => {
                setAllItems(data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    function add() {
        console.log(count);
        setCount((old) => old + 1);
    }

    return (
        <>
            <button onClick={add}>Fetch Again</button>
            <input
                value={searchText}
                type="search"
                onChange={(e) => {
                    console.log(e.target.value);
                    setSearchText(e.target.value);
                }}
            />

            <div className="conthold">
                {allItems
                    .filter((el) => el.title.includes(searchText))
                    .map((el) => (
                        <div key={el.id}>
                            <AllItem
                                title={el.title}
                                price={el.price}
                                description={el.description}
                                tags={el.tags}
                                img={
                                    el.image === ""
                                        ? imgd
                                        : `http://localhost:8000/storage/${el.image}`
                                }
                            />
                        </div>
                    ))}
            </div>
        </>
    );
};

export default ExploreItems;
