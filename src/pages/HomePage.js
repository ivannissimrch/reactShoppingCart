import { useLoaderData, Link, useNavigate } from "react-router-dom";
import Card from "../componnets/Card";
import classes from "./HomePage.module.css";

const HomePage = ({ showProductDetails }) => {
  const navigate = useNavigate();
  const handleOnClick = (product) => {
    showProductDetails(product);
    navigate(`/${product.id}`);
  };
  const featureProductsData = useLoaderData();

  return (
    <div>
      Featured Producst
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
