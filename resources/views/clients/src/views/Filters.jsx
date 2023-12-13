import React from "react";
import cities from "../assets/lb.json";

const Filters = () => {
    return (
        <div className="filterpage">
            <div className="choicess">
                <label>1-5$</label>
                <input type="checkbox" value="1-5" />
            </div>
            <label>5-10$</label>

            <input type="checkbox" value="5-10" />
            <label>10-20$</label>

            <input type="checkbox" value="10-20" />
            <select name="country" required>
                {cities.map((el) => {
                    return <option key={el.lat}>{el.city}</option>;
                })}
            </select>
        </div>
    );
};

export default Filters;
