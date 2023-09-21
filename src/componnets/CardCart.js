import { useState } from "react";
import classes from "./Card.module.css";

const CardCart = ({ productData, onDelete, onEditProductAmount }) => {
  const [amount, setAmount] = useState(productData.amount);

  const handleReduceClick = () => {
    if (amount <= 1) {
      onDelete(productData);
    } else {
      setAmount((prev) => prev - 1);
      onEditProductAmount(productData, amount - 1);
    }
  };

  const handleIncreaseClick = (event) => {
    setAmount((prev) => prev + 1);

    onEditProductAmount(productData, amount + 1);
  };

  const handleAmountChange = (event) => {
    if (event.target.value === "0" || event.target.value.includes("-")) {
      onDelete(productData);
    } else {
      const newAmount = event.target.value;
      setAmount(newAmount);
      onEditProductAmount(productData, newAmount);
    }
  };

  const handleDelete = () => {
    onDelete(productData);
  };

  return (
    <div className={classes["card-container"]}>
      <img className={classes.image} src={productData.image} alt="product" />
      <h4>{`Price : $${productData.price}`}</h4>
      <div>
        <button onClick={handleDelete} name={productData.title}>
          Delete
        </button>
        <div>
          <label htmlFor="amountOFProducst"> Amount</label>
          <div className={classes["amount-container"]}>
            <button onClick={handleReduceClick}>-</button>
            <input
              onChange={handleAmountChange}
              name="amountOfProducts"
              type="number"
              min={0}
              value={amount}
            />
            <button onClick={handleIncreaseClick}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
