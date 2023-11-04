import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = ({ productsOnCart }) => {
  return (
    <footer className={classes.footer}>
      <Link to="">
        <FontAwesomeIcon className={classes.icon} icon={faFacebookF} />
      </Link>
      <Link to="">
        <FontAwesomeIcon className={classes.icon} icon={faInstagram} />
      </Link>
      <Link to="">
        <FontAwesomeIcon className={classes.icon} icon={faYoutube} />
      </Link>
    </footer>
  );
};

export default Footer;
