import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductstPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPAge";
import RootLayout from "./pages/Root";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index : true, element: <HomePage /> },
      { path: "products", element: <ProductstPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
