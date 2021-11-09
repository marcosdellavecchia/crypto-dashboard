import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import Loading from "../components/Loading";
import Chart from "../components/Chart";
import "../css/CoinPage.css";

class CoinPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: {},
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
      loading: true,
      chartValues: [],
      chartDates: [],
    };
  }

  //Obtiene el id de la criptomoneda que esta en la URL
  getCryptoId = (url) => {
    var n = url.lastIndexOf("/");
    return url.substring(n + 1);
  };

  componentDidMount() {
    const coinID = this.getCryptoId(window.location.href);

    //Solicita info de la coin específica
    axios
      .get("https://api.coingecko.com/api/v3/coins/" + coinID)
      .then((res) => {
        const coindata = res.data;
        this.setState({
          coindata: coindata,
          loading: false,
        });
      });

    //Solicita valores de precio y fecha de los últimos 30 días para el chart
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/" +
          this.getCryptoId(window.location.href) +
          "/market_chart?vs_currency=usd&days=30"
      )
      .then((res) => {
        const chartInfo = res.data.prices;
        // Recorre la informacion en res.data.prices y la agrega a un al array chartValues que contiene unicamente los precios que van a graficarse
        const chartValues = [];
        chartInfo.map((item, i) => {
          chartValues.push(item[1]);
          return chartValues;
        });

        // Recorre la informacion en res.data.prices y la agrega a un al array chartDates que contiene unicamente las fechas que van a graficarse.
        const chartDates = [];
        chartInfo.map((item, i) => {
          chartDates.push(new Date(item[0]));
          return chartDates;
        });

        this.setState({
          chartValues: chartValues,
          chartDates: chartDates,
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
              <h2>
                {this.state.coindata.name}{" "}
                <span className="text-uppercase">
                  ({this.state.coindata.symbol})
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container board padding30">
          <div className="row">
            <div className="col-md-3 centrar margin15">
              <img
                className="logo"
                src={this.state.coindata.image.large}
                alt=""
              />
            </div>
            <div className="col-md-4 centrar-vertical">
              <div className="row coin-page">
                <p>
                  Current price:{" "}
                  <NumberFormat
                    className="crypto-data"
                    value={this.state.coindata.market_data.current_price.usd}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    decimalScale={2}
                    prefix={"$"}
                  />{" "}
                </p>
              </div>
              <div className="row coin-page">
                <p>
                  Max price. (last 24 hours):{" "}
                  <NumberFormat
                    className="crypto-data"
                    value={this.state.coindata.market_data.high_24h.usd}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </p>
              </div>
              <div className="row coin-page">
                <p>
                  Min price. (last 24 hours):{" "}
                  <NumberFormat
                    className="crypto-data"
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

            <div className="col-md-4 centrar-vertical">
              <div className="row coin-page">
                <p>
                  Market capitalization:{" "}
                  <NumberFormat
                    className="crypto-data"
                    value={this.state.coindata.market_data.market_cap.usd}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    decimalScale={2}
                    prefix={"$"}
                  />
                </p>
              </div>
              <div className="row coin-page">
                <p>
                  Market capitalization ranking: #
                  <span className="crypto-data">
                    {this.state.coindata.market_data.market_cap_rank}{" "}
                  </span>
                </p>
              </div>
              <div className="row coin-page">
                <p>
                  Official website:{" "}
                  <a
                    className="crypto-data"
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
          <h3 className="text-center subtitle">
            {this.state.coindata.name} evolution during last month
          </h3>

          <div className="col-md-12 chart">
            <Chart
              dates={this.state.chartDates}
              prices={this.state.chartValues}
              coin={this.state.coindata.name}
            />
          </div>
          <div className="container">
            <p className="text-secondary">
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.coindata.description.en,
                }}
              ></div>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CoinPage;
