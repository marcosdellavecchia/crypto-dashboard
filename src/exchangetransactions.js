import React from "react";
import NumberFormat from "react-number-format";
import "./exchangepage.css";

class ExchangeTransactions extends React.Component {
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
          }}
        >
          <div id="exchange-coin" className="col-md-3">
            Moneda
          </div>
          <div className="col-md-3">Par</div>
          <div className="col-md-3">Volumen (BTC)</div>
          <div id="exchange-bidask" className="col-md-3">
            Bid/Ask
          </div>
        </div>
        <div className="container board">
          {Object.keys(this.props.transactions).map((i) => (
            <div className="exchanges" key={i}>
              <div id="exchange-coin" className="col-md-3 exchange">
                <p>{this.props.transactions[i].coin_id}</p>
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
                  {this.props.transactions[i].bid_ask_spread_percentage
                    .toString()
                    .substr(0, 6)}
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
