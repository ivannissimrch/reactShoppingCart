import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../componnets/NavBar";

const RootLayout = () => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  );
};
export default RootLayout;
