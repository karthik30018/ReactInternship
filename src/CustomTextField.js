import React from "react";
function CustomTextField({typ,plh}){
    return(

        <div>
         <input type={typ} placeholder={plh}/>
        </div>
    )
}

export default CustomTextField;