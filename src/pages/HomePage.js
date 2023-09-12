import { useLoaderData, Link, useNavigate } from "react-router-dom";
import Card from "../componnets/Card";
import classes from "./HomePage.module.css";

const HomePage = ({ showProductDetails }) => {
  const featureProductsData = useLoaderData();
  const navigate = useNavigate();
  const handleOnClick = (product) => {
    showProductDetails(product);
    navigate(`products/${product.id}`);
  };

  return (
    <div>
      Feature Producst
      <div className={classes["main-container"]}>
        {featureProductsData.map((product) => (
          <Card
            productData={product}
            onClick={() => handleOnClick(product)}
            key={product.id}
          />
        ))}
      </div>
      <Link to="products">All Products</Link>
    </div>
  );
};
export default HomePage;

export async function HomeLoader() {
  const response = await fetch("https://fakestoreapi.com/products?limit=5");
  if (!response.ok) {
    //review this and use json() instead?
    throw new Response("Error");
  } else {
    return response;
  }
}
