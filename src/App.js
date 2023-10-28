import React from "react";
import Components from './Components';
import ComponentsOne from "./ComponentsOne";
import Login from "./Login";
import Button from "./Button";
import CustomTextField from "./CustomTextField";


function App() {
  return (
   <div>
    <ol>Import components in App.js file</ol>
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
   

    <CustomTextField typ="text" plh="User Name"/>
    <CustomTextField typ="password" plh="Password"/>
  </div>    
  );
}

export default App;
