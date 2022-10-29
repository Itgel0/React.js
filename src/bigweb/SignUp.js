import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignUp.css";

const Todo = () => {
  const inputName = useRef();
  const inputEmail = useRef();

  const Alert = () => {
    alert(
      `name: ${inputName.current.value}  email: ${inputEmail.current.value}`
    );
  };

  return (
    <div className="container">
      
      <div className="signUp">
        <div className="Big">SIGN UP</div>
        <div className="line"></div>
      </div>
      <div className="Name">
        <p>Name</p>
        <input className="typer" ref={inputName} placeholder="Enter your name"></input>
        <div className="line2"></div>
      </div>
      <div className="Email">
        <p>Email</p>
        <input className="typer" ref={inputEmail} placeholder="Enter your gmail"></input>
        <div className="line3"></div>
      </div>
      <button className="blueBtn" onClick={Alert}>SUBMIT</button>
     <div className="Routerx">
          <Link to="/Task">Task</Link>
          <Link to="SignUp">SignUp</Link>
          <Link to="MainWeb">MainWeb</Link>
          <Link to="StpWatch">StpWatch</Link>
      </div> 
    </div>
  );
};

export default Todo;
