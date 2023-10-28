import React from "react";  //  ; -- is optional
import Button from "./Button";
function Login(){
    return(
        <div style={{backgroundColor:"black"}}>
            <h1 style={{color:"aqua"}}>Login</h1>
            <div>
            <input style={{background:"white",color:"black"}} type="text" placeholder="User Name"></input>
            <br/>
            <input style={{background:"white",color:"black"}} type="password" placeholder="Password"></input>
            <br/>
            <Button name="LogIn"/>
            
            </div>
        </div>
    )
}
export default Login;