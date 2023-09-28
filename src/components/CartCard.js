import classes from "./Card.module.css";

const CartCard = ({ productData, onDelete, onEditProductAmount }) => {
  const { amount } = productData;

  const handleReduceClick = () => {
    if (amount <= 1) {
      onDelete(productData);
    } else {
      onEditProductAmount(productData, amount - 1);
    }
  };

  const handleIncreaseClick = (event) => {
    onEditProductAmount(productData, amount + 1);
  };

  const handleAmountChange = (event) => {
    const newAmount = parseInt(event.target.value);
    if (newAmount === 0) {
      onDelete(productData);
    } else {
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
          <label htmlFor="amountOfProducts"> Amount</label>
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

export default CartCard;
