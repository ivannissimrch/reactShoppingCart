import { useState } from "react";
import classes from "./Card.module.css";

const CardCart = ({ productData, onDelete, onEditProductAmount }) => {
  const [amount, setAmount] = useState(productData.amount);
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
          <input
            onChange={handleAmountChange}
            name="amountOfProducts"
            type="number"
            step={1}
            min={0}
            value={amount}
          />
        </div>
      </div>
    </div>
  );
};

export default CardCart;