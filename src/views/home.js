import React from "react";
import "../styles/home.css";

export const Home = () => (
  <>
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 d-flex justify-content-center text-center flex-column">
          <img
            src="./img/star-wars-head.png"
            alt="head"
            className="star-wars-head align-self-center"
          />
          <h1 className="home-text">Consuming an API</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <iframe
            title="home video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8Qn_spdM5Zg?autoplay=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <img src="./img/fighter.png" alt="spaceship" className="spaceship" />
      <img src="./img/fighter2.png" alt="spaceship2" className="spaceship2" />
    </div>
    <div className="background" />
  </>
);
