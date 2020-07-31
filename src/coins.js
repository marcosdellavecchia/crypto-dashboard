import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";

class Coins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DAI,LTC,XRP,DASH&tsyms=USD"
      )
      .then((res) => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos: cryptos });
      });
  }

  render() {
    return (
      <React.Fragment>
        {Object.keys(this.state.cryptos).map((coin) => (
          <div className="container cryptos" key={coin}>
            <div className="col-md-2">
              <p>{coin}</p>
            </div>
            <div className="col-md-2">
              <p>
                <NumberFormat
                  value={this.state.cryptos[coin].USD}
                  displayType={"text"}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  decimalScale={2}
                  prefix={"$"}
                />
              </p>
            </div>
            <div className="col-md-2">
              <p>Columna</p>
            </div>
            <div className="col-md-2">
              <p>Columna</p>
            </div>
            <div className="col-md-2">
              <p>Columna</p>
            </div>
            <div className="col-md-2">
              <p>Columna</p>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default Coins;
