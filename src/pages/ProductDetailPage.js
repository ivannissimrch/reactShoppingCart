import Card from "../componnets/Card";
import classes from "./ProductDetailsPage.module.css";
import { useNavigate } from "react-router-dom";

const ProductDetailPage = ({ productDetails, addProductToCart }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    addProductToCart(productDetails);
    navigate("../cart");
  };

  return (
    <div className={classes.productDetails}>
      <Card productData={productDetails} />
      <p>{productDetails.description}</p>
      <button onClick={handleOnClick}>Add to cart</button>
    </div>
  );
};
export default ProductDetailPage;
