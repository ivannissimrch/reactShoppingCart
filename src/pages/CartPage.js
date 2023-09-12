import { Fragment } from "react";
import CardCart from "../componnets/CardCart";
import classes from "./CartPage.module.css";

const CartPage = ({ productsOnCart, deleteProduct, editProductAmount }) => {
  //calculate total amount to pay
  const total = productsOnCart.reduce((current, total) => {
    return current + total.price * total.amount;
  }, 0);

  if (total === 0 && productsOnCart.length <= 0) {
    return <h1>cart is empty</h1>;
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
          {`Total Amount : ${total}`}
          <button>Buy now</button>
        </div>
      </Fragment>
    );
  }
};
export default CartPage;
