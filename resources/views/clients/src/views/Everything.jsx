import React, { useEffect, useState } from "react";
import axiosClient from "../axiosClient";
import nopic from "../assets/5787100.png";
import { useNavigate } from "react-router-dom";
import Item from "./Item";
import Loading from "./Loading";
import Filters from "./Filters";

const Everything = () => {
    const [allItems, setAllItems] = useState([]);
    const [count, setCount] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [tags, settags] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axiosClient
            .get("/AllPosts")
            .then((data) => {
                setLoading(false);

                console.log(data.data);
                setAllItems(data.data);
                settags(data.data.tags);
            })
            .catch((err) => console.log(err));
    }, [searchText]);

    return (
        <div>
            <Filters />
            <div className="tags_hold">
                <input
                    type="search"
                    placeholder="search for item"
                    onChange={(e) => {
                        console.log(e.target.value);
                        setSearchText(e.target.value);
                    }}
                />
            </div>
            <div className="AvailableItem">
                {!loading ? (
                    allItems
                        .filter((el) => el.title.includes(searchText))
                        .map((el) => <Item key={el.id} item={el} />)
                ) : (
                    <Loading />
                )}
                {!allItems && <h1>No Item found</h1>}
            </div>
        </div>
    );
};

export default Everything;
