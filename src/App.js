import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductstPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPAge";
import RootLayout from "./pages/Root";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductstPage /> },
      { path: "/productDetails", element: <ProductDetails /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
