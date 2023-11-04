import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Fragment } from "react";
import Footer from "../components/Footer";

const RootLayout = ({ productsOnCart }) => {
  return (
    <Fragment>
      <NavBar productsOnCart={productsOnCart} />
      <Outlet />
      <Footer />
    </Fragment>
  );
};
export default RootLayout;
