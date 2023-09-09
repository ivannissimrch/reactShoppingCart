import classes from "./Card.module.css";
const CardCart = ({ productData, onClick }) => {
  return (
    <div className={classes["card-container"]}>
      <img className={classes.image} src={productData.image} alt="product" />
      <h4>{`Price : $${productData.price}`}</h4>
      <div>
        <button onClick={onClick} name={productData.title}>
          Delete
        </button>
        <button>{productData.amount}</button>
      </div>
    </div>
  );
};

export default CardCart;
