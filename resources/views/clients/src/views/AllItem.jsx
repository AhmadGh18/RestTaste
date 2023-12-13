import React, { useContext, useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axiosClient";

const AllItem = (props) => {
    const { User, Restaurant } = useStateContext();
    return (
        <div className="item-container">
            <img src={props.img} alt="mpy" />

            <p>{props.title}</p>
            <p>{props.tags}</p>
            <p>{props.description}</p>

            <h6>{props.price}</h6>
            <div></div>
        </div>
    );
};

export default AllItem;
