import React from "react";
import { useLocation } from "react-router-dom";

function Productdetails()
{
    const data=useLocation();

    return(
        <div>
            <h1>
                Product details
            </h1>
            <p>Title is {data.state.title}</p>
            <p>Price :{data.state.price}</p>
            <p>Description :{data.state.description}</p>
        </div>
    )
}
export default Productdetails;