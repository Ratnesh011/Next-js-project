"use client";
import React, { useState } from "react";
import Login from "../_Components/Login";
import Signup from "../_Components/Signup";
import Header from "../_Components/Header";
import './style.css';
import Footer from "../_Components/Footer";



const Restaurant = () => {
  const [login, setLogin] = useState(true);
  
  return (

    <>
    <div className="container">
    <Header />
      <h1>Restaurant Login/signup page</h1>

      {

        login? <Login /> : <Signup />
        
      }


      <button className="button-link" onClick={() => setLogin(!login)}>
        {login ? "Do not have account ? signup" : "Already have an account ?"}
      </button>

      </div>

      
      
     <Footer />
    </>
  );
};

export default Restaurant;
