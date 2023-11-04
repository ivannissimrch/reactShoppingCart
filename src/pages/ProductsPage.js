import ProductList from "../components/ProductList";
const ProductsPage = () => {
  return <ProductList />;
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
