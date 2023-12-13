import React, { useState, useRef } from "react";
import axiosClient from "../axiosClient";
import { useStateContext } from "../context/ContextProvider";
import "./check.css";
import { Navigate, useNavigate } from "react-router-dom";
const AddItem = (props) => {
    const { Restaurant } = useStateContext();
    const [imagePreview, setImagePreview] = useState("");
    const titleRef = useRef(null);
    const priceRef = useRef(null);
    const currencyRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);
    const categoryRef = useRef(null);
    const tagsRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const previewURL = URL.createObjectURL(file);
            setImagePreview(previewURL);
        }
    };
    const nav = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            restaurant_id: Restaurant.id,
            title: titleRef.current.value,
            price: priceRef.current.value,
            currency: currencyRef.current.value,
            description: descriptionRef.current.value,
            image: imageRef.current.files[0],
            category: categoryRef.current.value,
            tags: tagsRef.current.value.split(",").map((tag) => tag.trim()),
        };

        const formData = new FormData();
        formData.append("restaurant_id", payload.restaurant_id);
        formData.append("title", payload.title);
        formData.append("price", payload.price);
        formData.append("currency", payload.currency);
        formData.append("description", payload.description);
        formData.append("image", payload.image);
        formData.append("category", payload.category);
        formData.append("tags", payload.tags.join(","));

        axiosClient
            .post("/Addprod", formData)
            .then((response) => {
                console.log(response.data);
                props.hideAddItem(); // Hide the AddItem component
                props.onItemSubmit(); // Trigger the parent component to fetch data
                return nav("/dashboard");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="mainContainer">
            <form onSubmit={handleSubmit}>
                <div className="inputHolder">
                    {imagePreview && (
                        <img
                            className="image"
                            src={imagePreview}
                            alt="Preview"
                        />
                    )}
                    <label className="addimgbtn">
                        Choose Image
                        <input
                            className="fileInput"
                            type="file"
                            onChange={handleImageChange}
                            ref={imageRef}
                        />
                    </label>
                    <p className="label">Title</p>
                    <input className="input" type="text" ref={titleRef} />
                    <p className="label">Price</p>
                    <div className="priceHolder">
                        <input
                            className="priceInput"
                            type="text"
                            ref={priceRef}
                        />
                        <select className="currencySelect" ref={currencyRef}>
                            <option value="$">$$</option>
                            <option value="L.L">L.L</option>
                        </select>
                    </div>
                    <p className="label">Description</p>
                    <input className="input" type="text" ref={descriptionRef} />
                    <p className="label">Category</p>
                    <input
                        className="input"
                        type="text"
                        ref={categoryRef}
                        placeholder="Ex vegan,fastFood,drinks ... add more then one"
                    />
                    <p className="label">Tags (comma-separated)</p>
                    <input
                        className="input"
                        type="text"
                        ref={tagsRef}
                        placeholder="drinks,lebanon,offer,..."
                    />
                    <input type="submit" value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;
