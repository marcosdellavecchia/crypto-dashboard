import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import Loading from "../components/Loading";
import ExchangeTransactions from "../components/ExchangeTransactions";
import "../css/ExchangePage.css";

class ExchangePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exchangeData: {
        tickers: [],
      },
      loading: true,
    };
  }

  //Obtiene el id del exchange que esta en la URL
  getCryptoId = (url) => {
    var n = url.lastIndexOf("/");
    return url.substring(n + 1);
  };

  componentDidMount() {
    const exchangeID = this.getCryptoId(window.location.href);
    //Solicita info de la coin específica
    axios
      .get("https://api.coingecko.com/api/v3/exchanges/" + exchangeID)
      .then((res) => {
        const exchangeData = res.data;
        this.setState({
          exchangeData: exchangeData,
          loading: false,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}

        {/* INFORMACION SOBRE EXCHANGE */}

        <div className="container board-header">
          <div className="row">
            <div className="col-md-12">
              <h2>{this.state.exchangeData.name}</h2>
            </div>
          </div>
        </div>
        <div className="container board padding30">
          <div className="row">
            <div className="col-md-3 centrar margin15">
              <img
                className="exchange-logo"
                src={this.state.exchangeData.image}
                alt=""
              />
            </div>
            <div className="col-md-4 exchange-page centrar-vertical">
              <div className="row">
                <p>
                  Location:{" "}
                  <span className="crypto-data">
                    {this.state.exchangeData.country}
                  </span>
                </p>
              </div>
              <div className="row">
                <p>
                  Foundation year:
                  <span className="crypto-data">
                    {" "}
                    {this.state.exchangeData.year_established}
                  </span>
                </p>
              </div>
              <div className="row">
                <p>
                  Centralized:{" "}
                  <span className="crypto-data">
                    {this.state.exchangeData.centralized ? "Si" : "No"}
                  </span>
                </p>
              </div>
            </div>

            <div className="col-md-4 exchange-page centrar-vertical">
              <div className="row">
                <p>
                  Volume (last 24h):{" "}
                  <NumberFormat
                    className="crypto-data"
                    value={this.state.exchangeData.trade_volume_24h_btc}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    decimalScale={2}
                    suffix={" BTC"}
                  />{" "}
                </p>
              </div>
              <div className="row">
                <p>
                  Trust ranking: #
                  <span className="crypto-data">
                    {this.state.exchangeData.trust_score_rank}
                  </span>
                </p>
              </div>
              <div className="row">
                <p>
                  Official website:{" "}
                  <a
                    className="crypto-data"
                    href={this.state.exchangeData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {this.state.exchangeData.url}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <hr />
          <br />
          <h3 className="text-center subtitle">
            {this.state.exchangeData.name} transactions detail
          </h3>

          {/* INFORMACION SOBRE TRANSACCIONES */}

          <ExchangeTransactions
            transactions={this.state.exchangeData.tickers}
          />
          <br />
          <p className="text-center" style={{ lineHeight: 0.8 }}>
            This data about the exchange {this.state.exchangeData.name} was
            obtained through the CoinGecko database.
          </p>
          <p className="text-center" style={{ lineHeight: 0.9 }}>
            For more information, don't forget to visit the official website
            linked in the description above.
          </p>
        </div>
      </React.Fragment>
    );
  }
}
export default ExchangePage;
