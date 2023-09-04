import classes from "./Card.module.css";
const Card = ({ productData }) => {
  console.log(productData);
  return (
    <div className={classes["card-container"]}>
      <img className={classes.image} src={productData.image} alt="product" />
      <h4>{`Price : $${productData.price}`}</h4>
      <button>Buy</button>
    </div>
  );
};

export default Card;
