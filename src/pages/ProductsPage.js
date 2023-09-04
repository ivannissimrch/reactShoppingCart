import { useLoaderData } from "react-router-dom";
import Card from "../componnets/Card";
import classes from "./ProductsPage.module.css";
const ProducstPage = () => {
  const productsData = useLoaderData();

  return (
    <div className={classes["main-container"]}>
      {productsData.map((product) => (
        <Card productData={product} />
      ))}
    </div>
  );
};
export default ProducstPage;

export async function loader() {
  const response = await fetch("https://fakestoreapi.com/products/");
  if (!response.ok) {
    //do latter
  } else {
    const productsData = await response.json();
    return productsData;
  }
}
