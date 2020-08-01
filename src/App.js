import React from "react";
import Coins from "./coins";
import Header from "./header";
import Market from "./market";
import Exchanges from "./exchanges";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Market />
        <Exchanges />
      </div>
    );
  }
}
export default App;
