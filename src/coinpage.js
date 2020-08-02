import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import "./coins.css";

class CoinPage extends React.Component {
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
        <div className="container board-header"></div>

        <div className="container board"></div>
      </React.Fragment>
    );
  }
}
export default CoinPage;
