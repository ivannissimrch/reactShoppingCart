import ProductList from "../components/ProductList";
import classes from "./ProductsPage.module.css";
const ProductsPage = () => {
  return (
    <main className={classes["main-container"]}>
      <ProductList />
    </main>
  );
};
export default ProductsPage;

async function productsLoader(numberOfProducst) {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Response("Error");
  } else {
    return response;
  }
}

export { productsLoader };
