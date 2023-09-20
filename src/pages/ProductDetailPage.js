import Card from "../componnets/Card";
import classes from "./ProductDetailsPage.module.css";
import { useNavigate, useLoaderData } from "react-router-dom";

const ProductDetailPage = ({ addProductToCart }) => {
  const productData = useLoaderData();

  const navigate = useNavigate();
  const handleOnClick = () => {
    addProductToCart(productData);
    navigate("../cart");
  };

  return (
    <div className={classes.productDetails}>
      <Card productData={productData} />
      <p>{productData.description}</p>
      <button onClick={handleOnClick}>Add to cart</button>
    </div>
  );
};
export default ProductDetailPage;

async function productsDetailLoader({ params }) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  if (!response.ok) {
    throw new Response("Error");
  } else {
    return response;
  }
}

export { productsDetailLoader };
