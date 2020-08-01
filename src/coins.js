import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import "./coins.css";

class Coins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((res) => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos: cryptos });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container board-header">
          <div className="col-md-2">Logo</div>
          <div className="col-md-2">Símbolo</div>
          <div className="col-md-2">Nombre</div>
          <div className="col-md-2">Cotización</div>
          <div className="col-md-2">Variación (Últ. 24h)</div>
          <div className="col-md-2">Capitalización</div>
        </div>
        <div className="container board">
          {Object.keys(this.state.cryptos).map((coin) => (
            <div className="cryptos" key={coin}>
              <div className="col-md-2 coin">
                <img src={this.state.cryptos[coin].image} alt="Crypto Icon" />
              </div>
              <div className="col-md-2 coin">
                <p>{this.state.cryptos[coin].symbol.toUpperCase()}</p>
              </div>
              <div className="col-md-2 coin">
                <p>{this.state.cryptos[coin].name}</p>
              </div>
              <div className="col-md-2 coin">
                <p>
                  <NumberFormat
                    value={this.state.cryptos[coin].current_price}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </p>
              </div>
              <div className="col-md-2 coin">
                <p>
                  <NumberFormat
                    value={this.state.cryptos[coin].price_change_percentage_24h}
                    displayType={"text"}
                    decimalSeparator={"."}
                    decimalScale={2}
                    suffix={"%"}
                  />
                </p>
              </div>
              <div className="col-md-2 coin">
                <p>
                  <NumberFormat
                    value={this.state.cryptos[coin].market_cap}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default Coins;
