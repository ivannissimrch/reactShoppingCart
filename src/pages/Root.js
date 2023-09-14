import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../componnets/NavBar";

const RootLayout = ({ productsOnCart }) => {
  return (
    <Fragment>
      <NavBar productsOnCart={productsOnCart} />
      <Outlet />
    </Fragment>
  );
};
export default RootLayout;
