import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import "./App.css";

class App extends React.Component {
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
      <div className="App">
        {Object.keys(this.state.cryptos).map((coin) => (
          <div className="crypto-container" key={coin}>
            <span className="left">{coin}</span>
            <span className="right">
              <NumberFormat
                value={this.state.cryptos[coin].USD}
                displayType={"text"}
                thousandSeparator={"."}
                decimalSeparator={","}
                decimalScale={2}
                prefix={"$"}
              />
            </span>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
