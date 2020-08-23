import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import Loading from "./loading";
import "./exchangepage.css";

class ExchangePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exchangeData: {},
      loading: true,
    };
  }

  //Obtiene el id del exchange que esta en la URL
  getCryptoId = (url) => {
    var n = url.lastIndexOf("/");
    return url.substring(n + 1);
  };

  componentDidMount() {
    //Solicita info de la coin específica
    axios
      .get(
        "https://api.coingecko.com/api/v3/exchanges/" +
          this.getCryptoId(window.location.href)
      )
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
                  Ubicación: <strong>{this.state.exchangeData.country}</strong>
                </p>
              </div>
              <div className="row">
                <p>
                  Año de creación:
                  <strong> {this.state.exchangeData.year_established}</strong>
                </p>
              </div>
              <div className="row">
                <p>
                  Centralizado:{" "}
                  <strong>
                    {this.state.exchangeData.centralized ? "Si" : "No"}
                  </strong>
                </p>
              </div>
            </div>

            <div className="col-md-4 exchange-page centrar-vertical">
              <div className="row">
                <p>
                  Volúmen (últ 24h):{" "}
                  <strong>
                    <NumberFormat
                      value={this.state.exchangeData.trade_volume_24h_btc}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      decimalScale={2}
                      suffix={" BTC"}
                    />{" "}
                  </strong>
                </p>
              </div>
              <div className="row">
                <p>
                  Ranking de confianza: #
                  <strong>{this.state.exchangeData.trust_score_rank}</strong>
                </p>
              </div>
              <div className="row">
                <p>
                  Sitio oficial:{" "}
                  <a
                    style={{ fontWeight: 800 }}
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
          <p className="text-center">
            Estos datos acerca del exchange {this.state.exchangeData.name}{" "}
            fueron obtenidos a través de la base de datos de CoinGecko.
          </p>
          <p className="text-center">
            Para obtener más información, no olvides visitar el sitio web
            oficial indicado en la descripción.
          </p>
          <br />
        </div>
      </React.Fragment>
    );
  }
}
export default ExchangePage;
