import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Task from "./bigweb/Task";
import StpWatch from "./bigweb/StpWatch";
import SignUp from "./bigweb/SignUp";
import MainWeb from "./bigweb/MainWeb";
import Teamwork from "./bigweb/Teamwork";
import "./App.css";

function App() {
  const Header = () => {
    return (
      <div className="App">
        <Link to="/Task">Task</Link>
        <Link to="/Todo">Todo</Link>
        <Link to="/SignUp">SignUp</Link>
        <Link to="MainWeb"></Link>
        <Link to="StpWatch">StpWatch</Link>
        <Link to="Teamwork">Teamwork</Link>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Task" element={<Task />} />
        <Route path="/StpWatch" element={<StpWatch />} />
        <Route path="SignUp" element={<SignUp />} />

        <Route path="MainWeb" element={<MainWeb />}></Route>
        <Route path="/Teamwork" element={<Teamwork />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
