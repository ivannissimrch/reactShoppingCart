import CartCard from "../components/CartCard";
import classes from "./CartPage.module.css";
import { useState } from "react";

const CartPage = ({
  productsOnCart,
  onDeleteProduct,
  onEditProductAmount,
  onResetCart,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  //calculate total amount to pay
  const total = productsOnCart.reduce((total, current) => {
    return total + current.price * current.amount;
  }, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onResetCart();
    setIsProcessing(true);
  };

  if (total === 0 && productsOnCart.length <= 0 && !isProcessing) {
    return (
      <div className={classes.container}>
        <h1>Cart is Empty</h1>
      </div>
    );
  }
  if (isProcessing) {
    return (
      <div className={classes.container}>
        <h1>Proccesing</h1>
      </div>
    );
  } else {
    return (
      <div className={classes.container}>
        {productsOnCart.map((product) => (
          <CartCard
            productData={product}
            key={product.id}
            onDelete={onDeleteProduct}
            onEditProductAmount={onEditProductAmount}
          />
        ))}
        <div>{`Total Amount : ${isNaN(total) ? 0 : total.toFixed(2)}`}</div>
        <form onSubmit={handleSubmit}>
          <button className={classes.btn}>Checkout</button>
        </form>
      </div>
    );
  }
};
export default CartPage;
