import Card from "../components/Card";
import classes from "./ProductDetailsPage.module.css";
import { useNavigate, useLoaderData } from "react-router-dom";

const ProductDetailPage = ({ onAddToCart }) => {
  const productData = useLoaderData();

  const navigate = useNavigate();
  const handleClick = () => {
    onAddToCart(productData);
    navigate("../cart");
  };

  return (
    <div className={classes.productDetails}>
      <Card productData={productData} />
      <p>{productData.description}</p>
      <button onClick={handleClick}>Add to cart</button>
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
