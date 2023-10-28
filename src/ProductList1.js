import React from "react";
import axios from "axios";
function ProductList1(){

    function loadProduct(){
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            if(res.status===200){
                console.log(res.data)
            }
        }).catch((err)=>{
            console.log(err)
        });
    // axios.get(address)-- get the data from the address(api end point)
    // .then(callbackfunction)-- check the data is proper by using callbackfunction
    //.catch()-- used to catch the unknown error
    //To perform post or put or delete inplace of get ues it.
        //alert("working...");
    }
    return(
        <div>
        <button onClick={loadProduct}>Get Product</button>
        </div>
    )
}
export default ProductList1;

// Create a eventlistener eg.onClick 
// loadProduct is user defined function where we have to specify the step to perform 