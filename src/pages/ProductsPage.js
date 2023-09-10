import { useLoaderData, useNavigate } from "react-router-dom";
import Card from "../componnets/Card";
import classes from "./ProductsPage.module.css";
const ProductsPage = ({ updateCart, showProductDetails }) => {
  const navigate = useNavigate();
  const handleOnClick = (product) => {
    showProductDetails(product);
    navigate(`${product.id}`);
  };
  const productsData = useLoaderData();

  return (
    <div className={classes["main-container"]}>
      {productsData.map((product) => (
        <Card
          productData={product}
          onClick={() => handleOnClick(product)}
          key={product.id}
        />
      ))}
    </div>
  );
};
export default ProductsPage;

export async function loader() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    //review this and use json() instead?
    throw new Response("Error");
  } else {
    return response;
  }
}
