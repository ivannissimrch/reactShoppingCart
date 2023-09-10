import { Fragment } from "react";
import CardCart from "../componnets/CardCart";
const CartPage = ({ productsOnCart, deleteProduct, editProductAmount }) => {
  //calculate total amount to pay
  //something is wrong with this the total amount is not wrigth
  const total = productsOnCart.reduce((current, total) => {
    return current + total.price * total.amount;
  }, 0);

  if (total === 0) {
    return <h1>cart is empty</h1>;
  } else {
    return (
      <Fragment>
        <div>
          {productsOnCart.map((product) => (
            <CardCart
              productData={product}
              key={product.id}
              onDelete={deleteProduct}
              onEditProductAmount={editProductAmount}
            />
          ))}
          {`Total Amount : ${total}`}
        </div>
        <button>Buy now</button>
      </Fragment>
    );
  }
};
export default CartPage;
