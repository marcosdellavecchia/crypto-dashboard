import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Coins from "./Coins";
import Header from "./Header";
import Market from "./Market";
import Exchanges from "./Exchanges";
import CoinPage from "./CoinPage";
import ExchangePage from "./ExchangePage";
import Footer from "./Footer";
import "./css/App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Market />
        <Switch>
          <Route path="/exchangepage">
            <ExchangePage />
          </Route>
          <Route path="/exchanges">
            <Exchanges />
          </Route>
          <Route path="/coinpage">
            <CoinPage />
          </Route>
          <Route path="/">
            <Coins />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
