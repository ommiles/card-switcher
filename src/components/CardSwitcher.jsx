import React, { useState } from "react";

const CardSwitcher = ({ transactions, products }) => {
  const [transactionList, setTransactionList] = useState([]);

  const handleClick = (e) => {
    if (transactions[`${e.target.id}`] !== undefined) {
      setTransactionList(...[transactions[`${e.target.id}`].transactions]);
    } else {
      setTransactionList(["No Transactions Available"]);
    }
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.type}>
          <img
            id={product.type}
            src={product.cardArt}
            alt="cardImage"
            onClick={handleClick}
          ></img>
        </div>
      ))}
      <div>
        {transactionList.map((transaction, idx) => {
          return (
            <div key={idx}>
              <h3>{transaction}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSwitcher;
