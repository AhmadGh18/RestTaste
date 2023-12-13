import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axiosClient";
import "../App.css";
import ResturantInfo from "../views/ResturantInfo";
import AddItem from "../views/AddItem";

const Default = () => {
    const [notfound, setNofound] = useState(false);
    const [loading, setisLoading] = useState(true);
    const { User, token, Restaurant, setUser, setToken, setRestaurant } =
        useStateContext();

    useEffect(() => {
        axiosClient.get("/user").then(({ data }) => setUser(data));
    }, []);

    useEffect(() => {
        setisLoading(true);
        axiosClient
            .get("/getRes")
            .then(({ data }) => {
                console.log(data);
                setRestaurant(data.restaurant);
            })
            .catch((err) => {
                if (err.response.status === 404) {
                    setNofound(true);
                }
            })
            .finally(() => {
                setisLoading(false); // Set loading to false regardless of success or failure
            });
    }, []);

    if (!token) {
        return <Navigate to="/login" />;
    }

    const onlogout = (ev) => {
        ev.preventDefault();
        axiosClient.post("/logout").then(() => {
            setUser({});
            setToken(null);
        });
        // window.localStorage.removeItem("AccessToken");
    };

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Home Page</Link>
                <Link to="/users">browse all</Link>
            </aside>
            <div className="content">
                <header>
                    <div>header</div>
                    {/* <div>welcome {User.name}</div> */}
                    <a onClick={onlogout} href="#d" className="btn-logout">
                        log out
                    </a>
                    <a>Change Info</a>
                </header>
                <main>
                    {Restaurant.id}
                    {!loading ? (
                        Restaurant.id ? (
                            <Outlet />
                        ) : (
                            <ResturantInfo />
                        )
                    ) : (
                        "Loading...."
                    )}
                </main>
            </div>
        </div>
    );
};

export default Default;
