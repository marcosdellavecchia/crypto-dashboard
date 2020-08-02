import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Coins from "./coins";
import Header from "./header";
import Market from "./market";
import Exchanges from "./exchanges";
import HomePage from "./";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Market />
        <Coins />
      </React.Fragment>
    );
  }
}
export default App;
