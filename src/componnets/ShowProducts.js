import { useLoaderData, useNavigate } from "react-router-dom";
import Card from "../componnets/Card";
import classes from "./ShowProducts.module.css";
const ShowProducts = () => {
  const productsData = useLoaderData();
  const navigate = useNavigate();
  const handleClick = (product) => {
    navigate(`/${product.id}`);
  };

  return (
    <div className={classes["main-container"]}>
      {productsData.map((product) => (
        <Card
          productData={product}
          onClick={() => handleClick(product)}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ShowProducts;
