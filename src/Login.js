import React from "react";  //  ; -- is optional
import Button from "./Button";
import { Navigate, useNavigate } from "react-router-dom";
function Login(){
    const goTopage=useNavigate();
    function NavigateTo(){
        goTopage("/product")
    }

    return(
        <div style={{backgroundColor:"black"}}>
            <h1 style={{color:"aqua"}}>Login</h1>
            <div>
            <input style={{background:"white",color:"black"}} type="text" placeholder="User Name"></input>
            <br/>
            <input style={{background:"white",color:"black"}} type="password" placeholder="Password"></input>
            <br/>
            <button onClick={NavigateTo}>Login</button>
            
            </div>
        </div>
    )
}
export default Login;