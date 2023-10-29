import React,{useState,useEffect} from "react";
import axios from "axios";
import"./App.css"
import { useNavigate } from "react-router-dom";

function ProductList1(){

    
//state,management in react
//useState--a function called from react library
//products--statefull value setproducts---function to update product variable
const [products,setproducts] = useState([]);
const navigateTo=useNavigate(()=>{
    loadProduct();
},[]);

useEffect(()=>{
    loadProduct()
},[]);

    function loadProduct(){
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            if(res.status===200){
                console.log(res.data);
                setproducts(res.data);
            }
        }).catch((err)=>{
            console.log(err);
        });
    }
    // axios.get(address)-- get the data from the address(api end point)
    // .then(callbackfunction)-- check the data is proper by using callbackfunction
    //.catch()-- used to catch the unknown error
    //To perform post or put or delete inplace of get ues it.
        //alert("working...");
        
        function SendData(ProductData){
            navigateTo("/Details",{state:ProductData})
        }
    

    return(
        <div >
        {/* <button onClick={loadProduct}>Get Product</button>
         */}
            <div className="MainWrapper">
          {products.map((ele)=> {
                return(
                 <div class="productcart">
                    <img src={ele.image} width={150} height={150} alt="img"/>
                    <p>Title is: {ele.title}</p>
                    <p>Price is: {ele.price}</p>

                    {/* <p>Description: {ele.description}</p> */}
                    <p>Rating: {ele.rating.rate}</p>
                    <p>Reviewed it: {ele.rating.count}</p>
                   <button className="viewMore" onClick={()=>{SendData(ele);}}  >more</button>   {/*//navigate and passes data */}
                 </div>
                );
    
                
            })}
        
        </div>
        </div>
    
        
    );
    
}
export default ProductList1;

// Create a eventlistener eg.onClick 
// loadProduct is user defined function where we have to specify the step to perform 