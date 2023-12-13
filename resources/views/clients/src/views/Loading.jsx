import React from "react";
import gifLoad from "../views/Dual Ring-1s-200px.gif";

const Loading = () => {
    return (
        <div className="load-container">
            <img src={gifLoad} alt="loading" className="load-image" />
        </div>
    );
};

export default Loading;
