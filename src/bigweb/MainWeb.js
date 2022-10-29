import React, { useRef } from "react";
import { Link } from "react-router-dom";
import './MainWeb.css';

const MainWeb = () => {
    
    const inptEmail = useRef();

    const Alert = () => {
        alert(
            `email: ${inptEmail.current.value}`
        );
    };

    return(
        <div className="webContainer">

            <div className="first-page">
                <div className="Routerz">
                    <Link to="/Task">Task</Link>
                    <Link to="/SignUp">SignUp</Link>
                    <Link to="/StpWatch">StpWatch</Link>
                </div>
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
                        <button className="Get-Access">Get Access</button>
                    </div>
                </div>
                <div className="Bottom">
                    <div className="bigText">Instant collaborations for remote teams</div>
                    <div className="smallText">All in one for your remote team chats, collaboration and track projects</div>
                    <div className="emailnBtn">
                        <input className="typeEmail" ref={inptEmail} placeholder="Email"></input>
                        <button className="sendBtn" onClick={Alert}>Get early access</button>
                    </div>
                </div>
                <div className="btmRouter">
                    <Link to="/Teamwork">Teamwork</Link>
                </div>
            </div>
            <div className="second-page">
                <div className="texts">
                    <div className="big-Text"></div>
                </div>
            </div>
        </div>
            
    )
}






export default MainWeb;