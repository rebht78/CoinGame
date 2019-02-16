import React from "react";
import ReactDOM from "react-dom";
import ActionButton from "./components/ActionButton";
import Card from "./components/Card";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to THE GAME</h1>
        <ActionButton actiontext="Start Normal Game!" />
        <h2>Coin Available: 10,000</h2>
        <Card
          frontImage="https://uploads.codesandbox.io/uploads/user/9a910904-cbc5-451e-96a7-077b36805102/mQAw-js.png"
          backImage="https://uploads.codesandbox.io/uploads/user/9a910904-cbc5-451e-96a7-077b36805102/Hu9u-react.png"
          clickHander={this.onCardClick}
        />
      </div>
    );
  }
  onCardClick = event => {
    alert("Card Clicked!");
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
