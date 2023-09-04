import classes from "./Card.module.css";
const Card = ({ productData }) => {
  console.log(productData);
  return (
    <div className={classes.card}>
      <img className={classes.image} src={productData.image} alt="product" />
    </div>
  );
};

export default Card;
