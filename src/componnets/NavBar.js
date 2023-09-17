import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ productsOnCart }) => {
  const totalProducts = productsOnCart.reduce((current, total) => {
    return parseInt(current) + parseInt(total.amount);
  }, 0);
  return (
    <header className={classes.navBar}>
      <nav>
        <ul>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Products
          </NavLink>
          <NavLink
            to="cart"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <FontAwesomeIcon icon={faCartShopping} />
            {` ${totalProducts > 0 ? totalProducts : ""}`}
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
