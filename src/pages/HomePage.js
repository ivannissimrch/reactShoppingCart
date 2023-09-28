import ProductList from "../components/ProductList";
import image from "../images/HeroSection.jpg";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes["main-container"]}>
      <img
        className={classes["hero-image"]}
        src={image}
        alt="producst on sale"
      />
      <h1>Featured products</h1>
      <ProductList />
    </div>
  );
};
export default HomePage;

async function featuredProductsLoader(numberOfProducst) {
  const response = await fetch(
    `https://fakestoreapi.com/products?limit=${numberOfProducst}`
  );
  if (!response.ok) {
    throw new Response("Error");
  } else {
    return response;
  }
}

export { featuredProductsLoader };
