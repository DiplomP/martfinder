import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="headerContainer">
              <h1> Хватит думать где дешевле </h1>
              <p> Предоставь это нам.</p>
              <Link to="/menu">
              <button> Начать </button>
              </Link>
            </div>
        </div>
    );
}

export default Home;