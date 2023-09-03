import { Fragment } from "react";
import NavBar from "../componnets/NavBar";

const ErrorPage = () => {
  return (
    <Fragment>
      <NavBar />
      <main>
        <p>An error ocurred</p>
      </main>
    </Fragment>
  );
};

export default ErrorPage;
