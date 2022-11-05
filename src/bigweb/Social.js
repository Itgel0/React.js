import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Social.css";

const Social = () => {
    return(
        <div className="bodyOfEnd">
            <div className="containerOfEnd">
                <div className="logos">
                    <div className="t-logo">
                        <div className="t-text">team</div>
                        <div className="dot">.</div>
                    </div>
                    <img className="scialApp" src={require('./Screen Shot 2022-11-05 at 09.49.03.png')}></img>
                </div>
            </div>
        </div>
    )
}

export default Social;