import { Link } from "react-router-dom";

import React from "react";

const Task = () => {
  return (
    
    <div className="app-container">
      <div className="Routers">
          <Link to="/Task">Task</Link>
          <Link to="SignUp">SignUp</Link>
          <Link to="MainWeb">MainWeb</Link>
          <Link to="StpWatch">StpWatch</Link>
          <Link to="Teamwork">Teamwork</Link>
      </div>
      <div className="quote">
        <div
          className="stars"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fee%2Fsearch%3Fk%3Donline%2Breview%2B5%2Bstar&psig=AOvVaw3QqfSkfyyFdSMn9d07jYvs&ust=1666492152111000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCIjGmJfl8voCFQAAAAAdAAAAABAE"
        ></div>
        <div className="text">
          Give everyone you work with—inside and outside your emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place.
        </div>
        <div className="picnname">
            <img className="woman" src="https://eadn-wc01-4165600.nxedge.io/wp-content/uploads/2021/06/VestaenBalbuena.png"></img>
            <p className="NAME">Amy Klassen</p>
          </div>
        </div>
      <div className="News-thingy">
        <img src="https://cdn-res.keymedia.com/cms/images/us/075/0305_637825601172357950.jpg"></img>
        <div className="Text">Data-Driven Design is Killing Our Instincts</div>
        <p>Our latest updates and blogs about managing your team</p>
        <p>Our latest updates and blogs about managing your team</p>
        <div className="datentime">
          <img
            className="pic2"
            src="https://eadn-wc01-4165600.nxedge.io/wp-content/uploads/2021/06/VestaenBalbuena.png"
          ></img>
          <p className="name">Jane Cooper</p>
          <p className="date">2nd January,2022</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
