import { useLoaderData, useNavigate } from "react-router-dom";
import Card from "../componnets/Card";
import classes from "./ProductsPage.module.css";
const ProductsPage = ({ showProductDetails }) => {
  const navigate = useNavigate();
  const handleOnClick = (product) => {
    showProductDetails(product);
    navigate(`/${product.id}`);
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
