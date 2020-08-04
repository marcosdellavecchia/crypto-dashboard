import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import "./coins.css";

class CoinPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: "",
    };
  }

  componentDidMount() {
    let search = this.props.history.location.search;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container board-header">asd</div>

        <div className="container board"></div>
      </React.Fragment>
    );
  }
}
export default CoinPage;
