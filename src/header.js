import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid header">
        <div className="container row">
          <nav className="navbar col-md-4">
            <ul>
              <li>Monedas</li>
              <li>Mercados</li>
              <li>Acerca de</li>
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
