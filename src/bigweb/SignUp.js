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
        <input ref={inputName} placeholder="Enter your name"></input>
        <div className="line2"></div>
      </div>
      <div className="Email">
        <p>Email</p>
        <input ref={inputEmail} placeholder="Enter your gmail"></input>
        <div className="line3"></div>
      </div>
      <button onClick={Alert}>SUBMIT</button>
    </div>
  );
};

export default Todo;
