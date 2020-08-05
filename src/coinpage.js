import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import "./coinpage.css";

class CoinPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coindata: {
        image: "",
        description: "",
        market_data: {
          current_price: "",
          market_cap: "",
          market_cap_rank: "",
          high_24h: "",
          low_24h: "",
        },
        links: {
          homepage: "",
        },
      },
    };
  }

  getCryptoId = (url) => {
    var n = url.lastIndexOf("/");
    return url.substring(n + 1);
  };

  componentDidMount() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/" +
          this.getCryptoId(window.location.href)
      )
      .then((res) => {
        const coindata = res.data;
        console.log("esto es coin data", coindata);
        this.setState({ coindata: coindata });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container board-header">
          <div className="row">
            <div className="col-md-12">
              <h2>
                {this.state.coindata.name} ({this.state.coindata.symbol})
              </h2>
            </div>
          </div>
        </div>
        <div className="container board">
          <div className="row">
            <div className="col-md-4 center">
              <img
                className="logo"
                src={this.state.coindata.image.large}
                alt=""
              />
            </div>
            <div className="col-md-4 margin15">
              <div className="row">
                <p>
                  Precio actual:{" "}
                  <NumberFormat
                    value={this.state.coindata.market_data.current_price.usd}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </p>
              </div>
              <div className="row">
                <p>
                  Precio máx. ult. 24 horas:{" "}
                  <NumberFormat
                    value={this.state.coindata.market_data.high_24h.usd}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </p>
              </div>
              <div className="row">
                <p>
                  Precio min. ult. 24 horas:{" "}
                  <NumberFormat
                    value={this.state.coindata.market_data.low_24h.usd}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </p>
              </div>
            </div>

            <div className="col-md-4 margin15">
              <div className="row">
                <p>
                  Capitalización de mercado:{" "}
                  <NumberFormat
                    value={this.state.coindata.market_data.market_cap.usd}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </p>
              </div>
              <div className="row">
                <p>
                  Ranking según capitalización: #
                  {this.state.coindata.market_data.market_cap_rank}
                </p>
              </div>
              <div className="row">
                <p>
                  Sitio oficial:{" "}
                  <a
                    href={this.state.coindata.links.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {this.state.coindata.links.homepage}{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="col-md-12 center top15">
            {this.state.coindata.description.es}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CoinPage;
