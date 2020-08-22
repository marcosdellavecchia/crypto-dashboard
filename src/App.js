import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Coins from "./coins";
import Header from "./header";
import Market from "./market";
import Exchanges from "./exchanges";
import CoinPage from "./coinpage";
import ExchangePage from "./exchangepage";
import Footer from "./footer";
import "./App.css";

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
