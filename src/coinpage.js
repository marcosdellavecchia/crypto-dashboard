import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import { Line } from "react-chartjs-2";
import Loading from "./loading";
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
      loading: true,
      chartValues: [],
    };
  }

  //Obtiene el id de la criptomoneda que esta en la URL
  getCryptoId = (url) => {
    var n = url.lastIndexOf("/");
    return url.substring(n + 1);
  };

  componentDidMount() {
    //Solicita info de la coin específica
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/" +
          this.getCryptoId(window.location.href)
      )
      .then((res) => {
        const coindata = res.data;
        this.setState({
          coindata: coindata,
          loading: false,
        });
      });

    //Solicita valores de precio para el chart
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/" +
          this.getCryptoId(window.location.href) +
          "/market_chart?vs_currency=usd&days=1"
      )
      .then((res) => {
        const chartInfo = res.data.prices;
        const chartValues = [];
        // Recorre la informacion en res.data.prices y la agrega a un al array chartValues que contiene unicamente los valores que van a graficarse
        chartInfo.map((item, i) => {
          chartValues.push(item[1]);
          return chartValues;
        });
        console.log("esto es chartValues", chartValues);
        this.setState({
          chartValues: chartValues,
          loading: false,
        });
      });
  }

  render() {
    const chartData = (canvas) => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 100, 0);

      // Cantidad de dias que se muestran en el eje X (seteado en 120)
      var chartDays = [];
      for (var i = 1; i <= 120; i++) {
        chartDays.push(i);
      }

      return {
        labels: chartDays,
        backgroundColor: gradient,
        datasets: [
          {
            label: "Precio",
            data: this.state.chartValues,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
          },
        ],
      };
    };

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
        <div className="container board">
          <div className="row">
            <div className="col-md-3 centrar margin15">
              <img
                className="logo"
                src={this.state.coindata.image.large}
                alt=""
              />
            </div>
            <div className="col-md-4 centrar-vertical">
              <div className="row">
                <p>
                  Precio actual:{" "}
                  <strong>
                    <NumberFormat
                      value={this.state.coindata.market_data.current_price.usd}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      decimalScale={2}
                      prefix={"$"}
                    />{" "}
                  </strong>
                </p>
              </div>
              <div className="row">
                <p>
                  Precio máx. ult. 24 horas:{" "}
                  <strong>
                    <NumberFormat
                      value={this.state.coindata.market_data.high_24h.usd}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      decimalScale={2}
                      prefix={"$"}
                    />
                  </strong>
                </p>
              </div>
              <div className="row">
                <p>
                  Precio min. ult. 24 horas:{" "}
                  <strong>
                    {" "}
                    <NumberFormat
                      value={this.state.coindata.market_data.low_24h.usd}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      decimalScale={2}
                      prefix={"$"}
                    />
                  </strong>
                </p>
              </div>
            </div>

            <div className="col-md-4 centrar-vertical">
              <div className="row">
                <p>
                  Capitalización de mercado:{" "}
                  <strong>
                    <NumberFormat
                      value={this.state.coindata.market_data.market_cap.usd}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      decimalScale={2}
                      prefix={"$"}
                    />
                  </strong>
                </p>
              </div>
              <div className="row">
                <p>
                  Ranking según capitalización: #
                  <strong>
                    {this.state.coindata.market_data.market_cap_rank}
                  </strong>
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
          <div className="col-md-12">
            {
              <Line
                data={chartData}
                width={300}
                height={300}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    yAxes: [
                      {
                        type: "linear",
                      },
                    ],
                  },
                }}
              />
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CoinPage;
