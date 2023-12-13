import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Notfound from "./views/Notfound";
import Users from "./views/Users";
import GuestLayout from "./components/GuestLayout";
import Default from "./components/Default";

import Dashboard from "./views/Dashboard";
import ResturantInfo from "./views/ResturantInfo";
import AddItem from "./views/AddItem";
import Allresturants from "./views/Allresturants";
import ExploreItems from "./views/ExploreItems";
import Index from "./views";
import Everything from "./views/Everything";
import Restaurant from "./views/Restaurant";
import RestaurantComponent from "./views/RestaurantComponent";
import Entry from "./views/Entry";
const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Entry />,
    // },
    {
        path: "/",
        element: <Default />,
        children: [
            {
                path: "/",
                element: <Navigate to="/users" />,
            },
            {
                path: "/users",
                element: <Users />,
                children: [
                    {
                        path: "/users/Allrestaurants",
                        element: <Allresturants />,
                    },
                    {
                        path: "/users/allitems",
                        element: <ExploreItems />,
                    },
                    {
                        path: "/users",
                        element: <ExploreItems />,
                    },
                ],
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/ResturantInfo",
                element: <ResturantInfo />,
            },
            {
                path: "/AddItem",
                element: <AddItem />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
    {
        path: "/index",
        element: <Index />,
    },
    {
        path: "/Everything",
        element: <Everything />,
    },
    {
        path: `/Restaurants/:restaurant_name`,
        element: <Restaurant />,
    },

    {
        path: "*",
        element: <Notfound />,
    },

    // {
    //     path: "/users",
    //     element: <Users />,
    //     children: [

    //     ],
    // },
]);
export default router;
