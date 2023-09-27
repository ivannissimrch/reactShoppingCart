import { Fragment } from "react";
import CardCart from "../componnets/CardCart";
import classes from "./CartPage.module.css";
import { useState } from "react";

const CartPage = ({
  productsOnCart,
  onDeleteProduct,
  onEditProductAmount,
  onResetProducts,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  //calculate total amount to pay
  const total = productsOnCart.reduce((current, total) => {
    return current + total.price * total.amount;
  }, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    resetProducts([]);
    setIsProcessing(true);
  };

  if (total === 0 && productsOnCart.length <= 0 && !isProcessing) {
    return <h1>Cart is Empty</h1>;
  }
  if (isProcessing) {
    return <h1>processing</h1>;
  } else {
    return (
      <Fragment>
        <div className={classes["cart-style"]}>
          {productsOnCart.map((product) => (
            <CardCart
              productData={product}
              key={product.id}
              onDelete={deleteProduct}
              onEditProductAmount={editProductAmount}
            />
          ))}
          <div>{`Total Amount : ${total.toFixed(2)}`}</div>
        </div>
        <form onSubmit={handleSubmit}>
          <button>Buy now</button>
        </form>
      </Fragment>
    );
  }
};
export default CartPage;
