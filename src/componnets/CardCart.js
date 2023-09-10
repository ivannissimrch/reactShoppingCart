import { useState } from "react";
import classes from "./Card.module.css";

const CardCart = ({ productData, onDelete, onEditProductAmount }) => {
  const [amount, setAmount] = useState(productData.amount);
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("update amount");
    onEditProductAmount(productData, amount);
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="amountOFProducst"> Amount</label>
          <input
            onChange={handleAmountChange}
            name="amountOfProducts"
            type="number"
            step={1}
            min={1}
            value={amount}
          />
        </form>
      </div>
    </div>
  );
};

export default CardCart;
