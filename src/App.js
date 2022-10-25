import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./bigweb/Home";
import Todo from "./bigweb/StpWatch";
import SignUp from "./bigweb/SignUp";
import MainWeb from "./bigweb/MainWeb";
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
      <Route path="/Todo" element={<Todo />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
)

}

export default App;