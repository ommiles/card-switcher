import React from "react";
import ReactDOM from "react-dom";
import CardSwitcher from "./components/CardSwitcher";
import "./styles.css";

const transactions = {
  productA: {
    transactions: [2.11, 5.13, 44.33]
  },
  productB: {
    transactions: [31.21, 17.99]
  }
};

const products = [
  {
    type: "productA",
    cardArt:
      "https://www.aexp-static.com/online/myca/shared/summary/cardasset/images/NUS000000180_480x304_STRAIGHT_96.jpg"
  },
  {
    type: "productB",
    cardArt:
      "https://www.aexp-static.com/online/myca/shared/summary/cardasset/images/NUS000000043_480x304_STRAIGHT_96.jpg"
  },
  {
    type: "productC",
    cardArt:
      "https://www.aexp-static.com/online/myca/shared/summary/cardasset/images/NUS000000174_480x304_STRAIGHT_96.jpg"
  }
];

const App = () => {
  return (
    <div className="App">
      <CardSwitcher transactions={transactions} products={products} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
