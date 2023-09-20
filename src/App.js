import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import productsLoader from "./helpers/productsLoader";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";
import ProductDetailPage from "./pages/ProductDetailPage";
import { productsDetailLoader } from "./pages/ProductDetailPage";

function App() {
  const [productsOnCart, setProductsOnCart] = useState([]);
  const productsToShow = 5;

  //add product to cart
  const addProductToCart = (product) => {
    //add product to cart with amount of 1
    if (!productsOnCart.some((item) => item.id === product.id)) {
      setProductsOnCart((prev) => [...prev, { ...product, amount: 1 }]);
    } else {
      //update amount of product on cart don't add new product
      const productIndex = productsOnCart.findIndex(
        (item) => item.id === product.id
      );
      const updatedCart = [...productsOnCart];
      updatedCart[productIndex].amount =
        parseInt(updatedCart[productIndex].amount) + 1;
      setProductsOnCart(updatedCart);
    }
  };

  //Delete product from cart
  const deleteProduct = (productToDelete) => {
    const updatedCartProducts = productsOnCart.filter(
      (productToBuy) => productToBuy.id !== productToDelete.id
    );
    setProductsOnCart(updatedCartProducts);
  };

  //edit amount of producst
  const editProductAmount = (productToUpdate, newAmount) => {
    //make this a function
    const productIndex = productsOnCart.findIndex(
      (item) => item.id === productToUpdate.id
    );
    const updatedCart = [...productsOnCart];
    updatedCart[productIndex].amount = newAmount;
    setProductsOnCart(updatedCart);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout productsOnCart={productsOnCart} />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: () => productsLoader(productsToShow),
        },
        {
          path: "products",
          element: <ProductsPage />,
          loader: productsLoader,
        },
        {
          path: ":productId",
          element: <ProductDetailPage addProductToCart={addProductToCart} />,
          loader: productsDetailLoader,
        },
        {
          path: "cart",
          element: (
            <CartPage
              resetProducts={setProductsOnCart}
              productsOnCart={productsOnCart}
              deleteProduct={deleteProduct}
              editProductAmount={editProductAmount}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
