import React from "react";
import NumberFormat from "react-number-format";
import "./exchangepage.css";

class ExchangeTransactions extends React.Component {
  //Primera letra mayuscula
  firstUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  convertToPercent = (string) => {
    return (string * 100).toString().substring(0, 7) + "%";
  };

  render() {
    return (
      <React.Fragment>
        {/* INFORMACION SOBRE TRANSACCIONES */}

        <div
          className="container board-header"
          style={{
            backgroundColor: "white",
            boxShadow:
              "6px 0 7px -2px rgba(0, 0, 0, 0.3), -6px 0 7px -2px rgba(0, 0, 0, 0.3)",
            fontWeight: 600,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
        >
          <div id="exchange-coin" className="col-md-3">
            Moneda
          </div>
          <div className="col-md-3">Paridad</div>
          <div className="col-md-3">Volumen (BTC)</div>
          <div id="exchange-bidask" className="col-md-3">
            Ratio Bid/Ask
          </div>
        </div>
        <div className="container board">
          {/* MAPEA LAS ULTIMAS 50 TRANSACCIONES */}
          {Object.keys(this.props.transactions)
            .slice(0, 50)
            .map((i) => (
              <div className="exchanges" key={i}>
                <div id="exchange-coin" className="col-md-3 exchange">
                  <p>
                    {this.firstUpperCase(this.props.transactions[i].coin_id)}
                  </p>
                </div>
                <div className="col-md-3 exchange">
                  <p>
                    {this.props.transactions[i].base}/
                    {this.props.transactions[i].target}
                  </p>
                </div>
                <div className="col-md-3 exchange">
                  <p>
                    <NumberFormat
                      value={this.props.transactions[i].volume}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      decimalScale={2}
                    />
                  </p>
                </div>
                <div id="exchange-bidask" className="col-md-3 exchange">
                  <p>
                    {this.convertToPercent(
                      this.props.transactions[i].bid_ask_spread_percentage
                    )}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ExchangeTransactions;
