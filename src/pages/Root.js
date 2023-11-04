import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Fragment } from "react";

const RootLayout = ({ productsOnCart }) => {
  return (
    <Fragment>
      <NavBar productsOnCart={productsOnCart} />
      <Outlet />
    </Fragment>
  );
};
export default RootLayout;
