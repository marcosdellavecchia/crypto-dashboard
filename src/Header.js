import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import "./css/Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <section id="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light container header">
          <Link to="/">
            <h1 className="navbar-brand title">
              Cryptoboard Project{" "}
              <span role="img" aria-label="Rocket">
                🚀
              </span>
            </h1>
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
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Monedas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/exchanges">
                  Exchanges
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  <About initialModalState={false} />
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;
