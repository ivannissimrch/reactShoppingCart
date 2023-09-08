import classes from "./Card.module.css";
const Card = ({ productData, onClick }) => {
  return (
    <div className={classes["card-container"]}>
      <img className={classes.image} src={productData.image} alt="product" />
      <h4>{`Price : $${productData.price}`}</h4>
      <button onClick={onClick} name={productData.title}>
        Buy
      </button>
    </div>
  );
};

export default Card;
