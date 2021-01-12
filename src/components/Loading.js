import React from "react";
import "../css/Loading.css";
import Preloader from "../images/preloader.gif";

const Loading = () => {
  return (
    <React.Fragment>
      <div className="loading">
        <div className="col-md-12">
          <div className="row centrar">
            <img className="loading-animation" src={Preloader} alt="Loading" />
          </div>
          <div className="row centrar">
            <h4>Cargando criptomonedas...</h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Loading;
