import classes from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
      <span className={classes.deleteBtn}>
        <button onClick={handleDelete} name={productData.title}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </span>
      <img className={classes.image} src={productData.image} alt="product" />
      <h4>{`Price : $${productData.price}`}</h4>
      <label htmlFor="amountOfProducts"> Quantity</label>
      <div>
        <div className={classes["amount-container"]}>
          <button
            className={classes.changeAmountBtn}
            onClick={handleReduceClick}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <input
            onChange={handleAmountChange}
            name="amountOfProducts"
            type="number"
            min={0}
            value={amount}
          />
          <button
            className={classes.changeAmountBtn}
            onClick={handleIncreaseClick}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
