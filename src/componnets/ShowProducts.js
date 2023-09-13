import { useLoaderData, useNavigate } from "react-router-dom";
import Card from "../componnets/Card";
import classes from "./ShowProducts.module.css";
const ShowProducts = ({ showProductDetails }) => {
  const navigate = useNavigate();
  const handleOnClick = (product) => {
    showProductDetails(product);
    navigate(`/${product.id}`);
  };
  const featureProductsData = useLoaderData();

  return (
    <div className={classes["main-container"]}>
      {featureProductsData.map((product) => (
        <Card
          productData={product}
          onClick={() => handleOnClick(product)}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ShowProducts;
