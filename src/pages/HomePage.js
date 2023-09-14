import { Fragment } from "react";
import ShowProducts from "../componnets/ShowProducts";

const HomePage = ({ showProductDetails }) => {
  return (
    <Fragment>
      <div>
        <h1>Featured products</h1>
      </div>
      <ShowProducts showProductDetails={showProductDetails} />
    </Fragment>
  );
};
export default HomePage;
