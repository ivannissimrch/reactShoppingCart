import { useLoaderData, useNavigate } from "react-router-dom";
import Card from "./Card";
import classes from "./ProductList.module.css";

const ProductList = () => {
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

export default ProductList;
