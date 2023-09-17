import { Fragment } from "react";
import ShowProducts from "../componnets/ShowProducts";
import image from "../images/HeroSection.jpg";
import classes from "./HomePage.module.css";

const HomePage = ({ showProductDetails }) => {
  return (
    <Fragment>
      <div className={classes["main-container"]}>
        <img
          className={classes["hero-image"]}
          src={image}
          alt="producst on sale"
        />
        <h1>Featured products</h1>
        <ShowProducts showProductDetails={showProductDetails} />
      </div>
    </Fragment>
  );
};
export default HomePage;
