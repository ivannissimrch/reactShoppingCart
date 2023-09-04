import { useEffect, useState } from "react";
import Card from "../componnets/Card";
import classes from "./ProductsPage.module.css";
const ProducstPage = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    try {
      const getProducstData = async () => {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProducts(data);
      };
      getProducstData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className={classes["main-container"]}>
      {!products && <h1>Loading producs</h1>}
      {products && products.map((product) => <Card productData={product} />)}
    </div>
  );
};
export default ProducstPage;
