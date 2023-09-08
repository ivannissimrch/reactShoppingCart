import { Fragment } from "react";
import NavBar from "../componnets/NavBar";

const ErrorPage = () => {
  return (
    <Fragment>
      <NavBar />
      <main>
        <p>An Error occurred</p>
      </main>
    </Fragment>
  );
};

export default ErrorPage;
