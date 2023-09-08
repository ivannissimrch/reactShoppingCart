import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductstPage, { loader as productsLoader } from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import RootLayout from "./pages/Root";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";

function App() {
  const [productsOnCart, setProductsOnCart] = useState([]);
  const updateCart = (product) => {
    //add product to cart with amount of 1
    if (!productsOnCart.some((item) => item.id === product.id)) {
      setProductsOnCart((prev) => [...prev, { ...product, amount: 1 }]);
    } else {
      //update amount of product on cart
      const productIndex = productsOnCart.findIndex(
        (item) => item.id === product.id
      );
      const updatedCart = [...productsOnCart];
      updatedCart[productIndex].amount += 1;
      setProductsOnCart(updatedCart);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "products",
          element: <ProductstPage updateCart={updateCart} />,
          loader: productsLoader,
        },
        { path: "cart", element: <CartPage productsOnCart={productsOnCart} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
