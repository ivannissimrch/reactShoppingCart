import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={classes.navBar}>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/Cart">Cart</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
