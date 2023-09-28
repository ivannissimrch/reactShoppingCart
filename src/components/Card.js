import classes from "./Card.module.css";
const Card = ({ productData, onClick }) => {
  return (
    <div className={classes["card-container"]} onClick={onClick}>
      <img className={classes.image} src={productData.image} alt="product" />
      <div>
        <h4>{productData.title}</h4>
        <h4>{`Price : $${productData.price}`}</h4>
      </div>
    </div>
  );
};

export default Card;
