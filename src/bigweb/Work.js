import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Work.css";


const Work = () => {
    return (
        <div className="container-of-evrt">
            <div className="first-work">
                <img className="brok-pic" src={require('./Screen Shot 2022-11-01 at 17.13.55.png')}></img>
                <div className="news">
                    <p className="big-title">Simple task management</p>
                    <p className="lil-title">Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
                    <p className="learnMore">Learn more --</p>
                </div>
            </div>
        </div>
    )
}


export default Work;