import { Fragment } from "react";
import NavBar from "../componnets/NavBar";

const ErrorPage = () => {
  return (
    <Fragment>
      <NavBar />
      <main>
        <p>Page not Found</p>
      </main>
    </Fragment>
  );
};

export default ErrorPage;
