import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Teamwork.css";

const Teamwork = () => {
    return (
        <div className="container-of-all">
            <div className="first-container">
                <div className="bigTxt">Your Hub for teamwork</div>
                <div className="lilTxt">Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</div>
                <div className="learnMore">Learn more --</div>
            </div>
            <div className="second-container">
                <img className="bigPic" src={require('./ooto Meetings 1.png')}></img>
            </div>
        </div>
    )
}

export default Teamwork;