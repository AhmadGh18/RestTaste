import React from "react";
import Allresturants from "./Allresturants";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
    return (
        <div>
            <div className="choices">
                <Link to="/users/allitems">All items</Link>
                <Link to="/users/Allrestaurants">All Restaurant</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Users;
