import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import Loading from "./loading";
import "./coins.css";

class Coins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: [],
      loading: true,
    };
  }

  // numberColor = () => {
  //   const number = document.getElementById("var24h");
  //   if (number.value > 0) {
  //     number.classList.add("positive");
  //   } else if (number.value < 0) {
  //     number.classList.add("negative");
  //   }
  // };

  componentDidMount() {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((res) => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos: cryptos, loading: false });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
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
            <Link
              to={"/coinpage/" + this.state.cryptos[coin].id}
              style={{ textDecoration: "none" }}
              key={coin}
            >
              <div className="cryptos">
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
                  <p
                    style={{
                      color: NumberFormat < 0 ? "red" : "green",
                    }}
                  >
                    <NumberFormat
                      id="var24h"
                      value={
                        this.state.cryptos[coin].price_change_percentage_24h
                      }
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
            </Link>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default Coins;
