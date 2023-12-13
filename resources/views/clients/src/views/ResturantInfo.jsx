import React, { useRef, useState } from "react";
import ".././file.css";
import cities from "../assets/lb.json";
import axiosClient from "../axiosClient";
import { useStateContext } from "../context/contextProvider";

function ResturantInfo() {
    const { User, setRestaurant, Restaurant } = useStateContext();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const personalPhoneRef = useRef();
    const restaurantNameRef = useRef();
    const restaurantPhoneRef = useRef();
    const countryRef = useRef();
    const resturantSpecielityRef = useRef();
    const imageRef = useRef();
    const fileInputRef = useRef();
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = () => {
        const file = fileInputRef.current.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImagePreview(reader.result);
            };

            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const removeImage = () => {
        fileInputRef.current.value = null;
        setImagePreview(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const locationValue = countryRef.current.value;

        if (!locationValue) {
            // You might want to handle this case, such as showing an error message.
            console.error("Location is required");
            return;
        }

        const formData = new FormData();
        formData.append("user_id", User.id);
        formData.append("first_name", firstNameRef.current.value);
        formData.append("last_name", lastNameRef.current.value);
        formData.append("Personal_Phone", personalPhoneRef.current.value);
        formData.append("restaurant_name", restaurantNameRef.current.value);
        formData.append("restaurant_phone", restaurantPhoneRef.current.value);
        formData.append("location", locationValue); // Append the location value
        formData.append("specielity", resturantSpecielityRef.current.value);
        formData.append("profile_pic_url", fileInputRef.current.files[0]);

        // Use the formData object to send the request.
        axiosClient
            .post("/AddingInfo", formData)
            .then((res) => {
                console.log(res.data);
                setRestaurant(res.data.restaurant);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="form-v10">
            <div className="page-content">
                <div className="form-v10-content">
                    <form
                        className="form-detail"
                        action="#"
                        method="post"
                        id="myform"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-left">
                            <h2>Owner Information</h2>
                            <div className="form-group">
                                <div className="form-row form-row-1">
                                    <input
                                        type="text"
                                        ref={firstNameRef}
                                        id="first_name"
                                        className="input-text"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div className="form-row form-row-2">
                                    <input
                                        type="text"
                                        ref={lastNameRef}
                                        id="last_name"
                                        className="input-text"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <input
                                    type="text"
                                    ref={personalPhoneRef}
                                    placeholder="Personal Phone Number"
                                />
                            </div>
                        </div>
                        <div className="form-right">
                            <h2>Restaurant Details</h2>
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="restaurant_Name"
                                    ref={restaurantNameRef}
                                    className="street"
                                    id="restaurant_Name"
                                    placeholder="Restaurant Name"
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="Restaurant_Phone"
                                    ref={restaurantPhoneRef}
                                    className="additional"
                                    id="additional"
                                    placeholder="Restaurant Phone"
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="specielity"
                                    ref={resturantSpecielityRef}
                                    className="additional"
                                    id="additional"
                                    placeholder="Specialty ex cafe restaurant resort"
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <select
                                    name="country"
                                    ref={countryRef}
                                    required
                                >
                                    {cities.map((el) => {
                                        return (
                                            <option key={el.lat}>
                                                {el.city}
                                            </option>
                                        );
                                    })}
                                </select>
                                <div>
                                    <p className="chhoseimg">
                                        Choose profile pic (for the restaurant)
                                    </p>
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        ref={fileInputRef}
                                    />
                                    {imagePreview && (
                                        <div>
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                style={{
                                                    maxWidth: "100px",
                                                    maxHeight: "100px",
                                                }}
                                            />
                                            <button
                                                type="button"
                                                onClick={removeImage}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <span className="select-btn">
                                    <i className="zmdi zmdi-chevron-down"></i>
                                </span>
                            </div>
                            <div className="form-row-last">
                                <input
                                    type="submit"
                                    name="register"
                                    className="register"
                                    value="Confirm"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResturantInfo;

// import React, { useRef, useState } from "react";
// import ".././file.css";
// import cities from "../assets/lb.json";
// import axiosClient from "../axiosClient";
// import { useStateContext } from "../context/contextProvider";

// function ResturantInfo() {
//     const { User, setRestaurant } = useStateContext();
//     const firstNameRef = useRef();
//     const lastNameRef = useRef();
//     const personalPhoneRef = useRef();
//     const restaurantNameRef = useRef();
//     const restaurantPhoneRef = useRef();
//     const countryRef = useRef();
//     const resturantSpecielityRef = useRef();
//     const imageRef = useRef(null);
//     const fileInputRef = useRef();
//     const [imagePreview, setImagePreview] = useState(null);

//     const handleFileChange = () => {
//         const file = fileInputRef.current.files[0];

//         if (file) {
//             const reader = new FileReader();

//             reader.onloadend = () => {
//                 setImagePreview(reader.result);
//             };

//             reader.readAsDataURL(file);
//         } else {
//             setImagePreview(null);
//         }
//     };

//     const removeImage = () => {
//         fileInputRef.current.value = null;
//         setImagePreview(null);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append("user_id", User.id);
//         formData.append("first_name", firstNameRef.current.value);
//         formData.append("last_name", lastNameRef.current.value);
//         formData.append("Personal_Phone", personalPhoneRef.current.value);
//         formData.append("restaurant_name", restaurantNameRef.current.value);
//         formData.append("restaurant_phone", restaurantPhoneRef.current.value);
//         formData.append("location", countryRef.current.value);
//         formData.append("specielity", resturantSpecielityRef.current.value);
//         formData.append("profile_pic_url", imageRef.current.files[0]);

//         Use the formData object to send the request.
//         axiosClient
//             .post("/AddingInfo", formData)
//             .then((res) => {
//                 console.log(res.data);
//                 setRestaurant(res.data.restaurant);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     return (
//         <div className="form-v10">
//             <div className="page-content">
//                 <div className="form-v10-content">
//                     <form
//                         className="form-detail"
//                         action="#"
//                         method="post"
//                         id="myform"
//                         onSubmit={handleSubmit}
//                     >
//                         <div className="form-left">
//                             <h2>Owner Information</h2>
//                             <div className="form-group">
//                                 <div className="form-row form-row-1">
//                                     <input
//                                         type="text"
//                                         ref={firstNameRef}
//                                         id="first_name"
//                                         className="input-text"
//                                         placeholder="First Name"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="form-row form-row-2">
//                                     <input
//                                         type="text"
//                                         ref={lastNameRef}
//                                         id="last_name"
//                                         className="input-text"
//                                         placeholder="Last Name"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                             <div className="form-row">
//                                 <input
//                                     type="text"
//                                     ref={personalPhoneRef}
//                                     placeholder="Personal Phone Number"
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-right">
//                             <h2>Restaurant Details</h2>
//                             <div className="form-row">
//                                 <input
//                                     type="text"
//                                     name="restaurant_Name"
//                                     ref={restaurantNameRef}
//                                     className="street"
//                                     id="restaurant_Name"
//                                     placeholder="Restaurant Name"
//                                     required
//                                 />
//                             </div>
//                             <div className="form-row">
//                                 <input
//                                     type="text"
//                                     name="Restaurant_Phone"
//                                     ref={restaurantPhoneRef}
//                                     className="additional"
//                                     id="additional"
//                                     placeholder="Restaurant Phone"
//                                     required
//                                 />
//                             </div>
//                             <div className="form-row">
//                                 <input
//                                     type="text"
//                                     name="specielity"
//                                     ref={resturantSpecielityRef}
//                                     className="additional"
//                                     id="additional"
//                                     placeholder="Specialty ex cafe restaurant resort"
//                                     required
//                                 />
//                             </div>
//                             <div className="form-row">
//                                 <select name="country" ref={countryRef}>
//                                     {cities.map((el) => (
//                                         <option key={el.lat}>{el.city}</option>
//                                     ))}
//                                 </select>
//                                 <div>
//                                     <p className="chhoseimg">
//                                         Choose profile pic (for the restaurant)
//                                     </p>
//                                     <input
//                                         type="file"
//                                         onChange={handleFileChange}
//                                         name="profile_pic_url"
//                                         ref={imageRef}
//                                     />
//                                     {imagePreview && (
//                                         <div>
//                                             <img
//                                                 src={imagePreview}
//                                                 alt="Preview"
//                                                 style={{
//                                                     maxWidth: "100px",
//                                                     maxHeight: "100px",
//                                                 }}
//                                             />
//                                             <button
//                                                 type="button"
//                                                 onClick={removeImage}
//                                             >
//                                                 Remove
//                                             </button>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <span className="select-btn">
//                                     <i className="zmdi zmdi-chevron-down"></i>
//                                 </span>
//                             </div>
//                             <div className="form-row-last">
//                                 <input
//                                     type="submit"
//                                     name="register"
//                                     className="register"
//                                     value="Confirm"
//                                 />
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ResturantInfo;
