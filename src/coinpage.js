import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import "./coins.css";

class CoinPage extends React.Component {
  render() {
    var getCryptoId = (url) => {
      var n = url.lastIndexOf("/");
      return url.substring(n + 1);
    };

    return (
      <React.Fragment>
        <div className="container board-header">
          {getCryptoId(window.location.href)}
        </div>

        <div className="container board"></div>
      </React.Fragment>
    );
  }
}
export default CoinPage;
