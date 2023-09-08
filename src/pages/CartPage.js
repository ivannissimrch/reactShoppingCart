import Card from "../componnets/Card";
const CartPage = ({ productsOnCart }) => {
  console.log(productsOnCart);
  return (
    <div>
      {productsOnCart.map((product) => (
        <Card productData={product} key={product.id} />
      ))}
    </div>
  );
};
export default CartPage;
