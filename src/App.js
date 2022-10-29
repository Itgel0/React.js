import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./bigweb/Home";
import StpWatch from "./bigweb/StpWatch";
import SignUp from "./bigweb/SignUp";
import MainWeb from "./bigweb/MainWeb";
import teamwork from "./bigweb/teamwork";
import './App.css';

function App() {

const Header = () => {
  return (
    <div className="App">
      <Link to="/Home">Home</Link>
      <Link to="/Todo">Todo</Link>
      <Link to="/SignUp">SignUp</Link>
    </div>
  )
}

return(
  <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/StpWatch" element={<StpWatch />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/MainWeb" element={<MainWeb/>} />
      <Route path="/teamwork" element={<teamwork/>} />
    </Routes>
  </BrowserRouter>
)

}

export default App;