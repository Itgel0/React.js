import React from "react";

import './MainWeb.css';

const MainWeb = () => {
    return(
        <div className="webContainer">
            <div className="top">
                <div className="t-logo">
                    <div className="t-text">team</div>
                    <div className="dot">.</div>
                </div>
                <div className="buttonz">
                    <button className="Products">Products</button>
                    <button className="Services">Services</button>
                    <button className="Contact">Contact</button>
                    <button className="Log-in">Log in</button>
                    <div className="Get-Access">Get Access</div>
                </div>
            </div>
        </div>
    )
}






export default MainWeb;