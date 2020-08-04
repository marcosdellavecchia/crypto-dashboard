import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Coins from "./coins";
import Header from "./header";
import Market from "./market";
import Exchanges from "./exchanges";
import CoinPage from "./coinpage";
import Homepage from "./homepage";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Market />
        <Switch>
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
      </Router>
    );
  }
}
export default App;
