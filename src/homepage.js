import React from "react";
import Coins from "./coins";
import Header from "./header";
import Market from "./Market";

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
