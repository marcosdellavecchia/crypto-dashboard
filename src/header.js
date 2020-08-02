import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid header">
        <div className="container row">
          <nav className="navbar col-md-4">
            <ul>
              <Link to="/">
                <li>Monedas</li>
              </Link>
              <Link to="/exchanges">
                <li>Exchanges</li>
              </Link>
              <li>
                USD
                <select></select>
              </li>
            </ul>
          </nav>
          <h1 className="title col-md-4">
            Crypto Dashboard{" "}
            <span role="img" aria-label="Rocket">
              🚀
            </span>
          </h1>
        </div>
      </div>
    );
  }
}
export default Header;
