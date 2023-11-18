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
    <main className={classes["main-container"]}>
      <div className={classes["card-container"]}>
        <Card productData={productData} />
        <p>{productData.description}</p>
      </div>
      <button className={classes.btn} onClick={handleClick}>
        Add to cart
      </button>
    </main>
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
