import React from "react";
import ProductList1 from "./ProductList1";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productdetails from "./Productdetails";
// import Components from './Components';
// import ComponentsOne from "./ComponentsOne";
// import Login from "./Login";
// import Button from "./Button";
// import CustomTextField from "./CustomTextField";

function App() {
  return (
    <div>
      {/* <ol>Import components in App.js file</ol>
    <ol >Use that tag</ol>
    <Components></Components>
    <ComponentsOne></ComponentsOne>
    <Login/>

    <ol>Properties(Props)</ol>
    <ol>Used to customize the components for reusability.</ol>
    <Button name="Sign Up"/>
    <ol>In the above example name can be any variable.</ol>
    <ol>Create object name same as variable name in Button component </ol>
    <ol>Pass the object inside the button tag</ol>
    <ol>When ever button component is used use the variable name and pass required value</ol>
   <o>To install Library to call API
      - npm install packagename  or  npm i packagename
      -Open package.json and check weather it is installed in dependencies
      - Import the package in required component file
   </o>

    <CustomTextField typ="text" plh="User Name"/>
    <CustomTextField typ="password" plh="Password"/> */}

      {/* <ProductList1/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/product" element={<ProductList1 />} />
          <Route path="/details" element={<Productdetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//Router dom
//useNav
//To store data always use state

//To make function call or API call we have to use useEffect import from react
//useEffect has to parameter useEffect(()=>{function_name();},[])