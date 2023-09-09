import CardCart from "../componnets/CardCart";
const CartPage = ({ productsOnCart, totalAmount }) => {
  console.log(productsOnCart);
  const total = productsOnCart.reduce((current, total) => {
    return (current + total.price) * total.amount;
  }, 0);

  return (
    <div>
      {productsOnCart.map((product) => (
        <CardCart productData={product} key={product.id} />
      ))}
      {`Total Amount : ${total}`}
    </div>
  );
};
export default CartPage;
