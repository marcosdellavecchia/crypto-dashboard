import React from "react";
import Coins from "./coins";
import Header from "./header";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Coins />
      </div>
    );
  }
}
export default App;
