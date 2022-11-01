import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Task from "./bigweb/Task";
import StpWatch from "./bigweb/StpWatch";
import SignUp from "./bigweb/SignUp";
import MainWeb from "./bigweb/MainWeb";
import Teamwork from "./bigweb/Teamwork";
import Work from "./bigweb/Work";
import proof from "./bigweb/proof";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Task" element={<Task />} />
        <Route path="/StpWatch" element={<StpWatch />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="proof" element={<proof />} />
        {/* <Route path="MainWeb" element={<MainWeb />}></Route>
        <Route path="/Teamwork" element={<Teamwork />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/proof" element={<proof> />} */}
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <div>
      <Header />
      <MainWeb />
      <Teamwork />
      <Work />
      
    </div>
  );
};

const Header = () => {
  return (
    <div className="App">
      <Link to="/Task">Task</Link>
      <Link to="/Todo">Todo</Link>
      <Link to="/SignUp">SignUp</Link>
      <Link to="MainWeb">MainWeb</Link>
      <Link to="StpWatch">StpWatch</Link>
      <Link to="Teamwork">Teamwork</Link>
      <Link to="proof">proof</Link>
    </div>
  );
};

export default App;
