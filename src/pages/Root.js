import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import classes from "./Root.module.css";

const RootLayout = ({ productsOnCart }) => {
  return (
    <main className={classes["main-container"]}>
      <NavBar productsOnCart={productsOnCart} />
      <section className={classes["section-container"]}>
        <Outlet />
      </section>

      <Footer />
    </main>
  );
};
export default RootLayout;
