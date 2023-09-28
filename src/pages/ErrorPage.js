import { Fragment } from "react";
import NavBar from "../components/NavBar";

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
