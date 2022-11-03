import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./proof.css";

const Proof = () => {
    return (
        <div className="container-of-prf">
            <div className="second-work">
                <div className="bunchaTitle">
                    <p className="hugeTitle">Scheduling that actually works</p>
                    <p className="smallTitle">Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
                    <p className="learnMore">Learn more --</p>
                </div>
                <img className="picOfProof" src={require('./Screen Shot 2022-11-03 at 17.19.55.png')}></img>
            </div>
        </div>
    )
}


export default Proof;
