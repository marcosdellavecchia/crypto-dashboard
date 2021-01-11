import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "./css/Exchanges.css";

class Exchanges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exchanges: [],
      results: 30,
      loading: true,
    };
  }

  componentDidMount() {
    axios.get("https://api.coingecko.com/api/v3/exchanges").then((res) => {
      const exchanges = res.data;
      this.setState({ exchanges: exchanges, loading: false });
    });
  }

  // Función que permite cargar más resultados de exchanges
  viewMore = () => {
    if (this.state.results < 90) {
      this.setState({ results: this.state.results + 20 });
      window.scrollBy(0, -250);
    } else if (this.state.results >= 90) {
      this.setState({ results: this.state.results + 20 });
      window.scrollBy(0, -250);
      document.getElementById("view-more-button").className = "none";
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        <div className="container board-header">
          <div id="exchange-ranking" className="col-md-1">
            Ranking
          </div>
          <div className="col-md-1">Logo</div>
          <div className="col-md-3">Nombre</div>
          <div id="exchange-country" className="col-md-3">
            Ubicación
          </div>
          <div id="exchange-year" className="col-md-1">
            Año
          </div>
          <div className="col-md-3">Volumen BTC (últ. 24h)</div>
        </div>
        <div className="container board">
          {Object.keys(this.state.exchanges)
            // Limita la cantidad de resultados al valor alojado en el estado 'results'.
            .slice(0, this.state.results)
            .map((coin) => (
              <Link
                to={"/exchangepage/" + this.state.exchanges[coin].id}
                style={{ textDecoration: "none" }}
                key={coin}
              >
                <div className="exchanges" key={coin}>
                  <div id="exchange-ranking" className="col-md-1 exchange">
                    <p>{this.state.exchanges[coin].trust_score_rank}</p>
                  </div>
                  <div className="col-md-1 exchange">
                    <img
                      src={this.state.exchanges[coin].image}
                      alt="Exchange logo"
                    />
                  </div>
                  <div className="col-md-3 exchange">
                    <p>{this.state.exchanges[coin].name}</p>
                  </div>
                  <div id="exchange-country" className="col-md-3 exchange">
                    <p>{this.state.exchanges[coin].country}</p>
                  </div>
                  <div id="exchange-year" className="col-md-1 exchange">
                    <p>{this.state.exchanges[coin].year_established}</p>
                  </div>
                  <div className="col-md-3 exchange">
                    <p>
                      <NumberFormat
                        value={this.state.exchanges[coin].trade_volume_24h_btc}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        decimalScale={2}
                      />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <div className="view-more-container">
          <button
            onClick={this.viewMore}
            className="view-more-button"
            id="view-more-button"
          >
            Ver más
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default Exchanges;
