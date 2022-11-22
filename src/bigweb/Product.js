import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./Product.css";

const Product = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://dummyapi.io/data/v1/post?limit=10", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "636a0100b23c1794f297d097",
        },
      });

      setData(res.data.data);

      console.log(res.data.data);
    } catch (err) {
      alert("dahiad yavul");
    }
  };
  return (
    <div className="App">
      <button className="req" onClick={getData}>sending request</button>

      {data.map((cur) => (
        <div className="img-container">
          {cur.text}
          <img src={cur.image} />
        </div>
      ))}
    </div>
  );
};

export default Product;