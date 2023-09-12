import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, { HomeLoader } from "./pages/HomePage";
import ProductsPage, { loader as productsLoader } from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import RootLayout from "./pages/Root";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  const [productsOnCart, setProductsOnCart] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const showProductDetails = (currentProduct) => {
    setProductDetails(currentProduct);
  };

  //add poduct to cart
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
      updatedCart[productIndex].amount += 1;
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
    //make this a function
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage showProductDetails={showProductDetails} />,
          loader: HomeLoader,
        },
        {
          path: "products",
          element: <ProductsPage showProductDetails={showProductDetails} />,
          loader: productsLoader,
        },
        {
          path: "products/:productId",
          element: (
            <ProductDetailPage
              productDetails={productDetails}
              addProductToCart={addProductToCart}
            />
          ),
        },
        {
          path: "cart",
          element: (
            <CartPage
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
