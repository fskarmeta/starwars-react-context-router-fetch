import React from "react";
import { Link } from "react-router-dom";
import { Navlist } from "./navlist";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <img
            src="../img/star-wars-4.svg"
            alt="star wars logo"
            className="star-wars-logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Navlist />
      </nav>
    </>
  );
};
