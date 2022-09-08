import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <ul className={styles.brand}>
        <li>
          <span>Real</span>
        </li>
        <li>
          <span>Our Location</span>
        </li>
        <li>
          <span>Call us: +123 456 789</span>
        </li>
        <li>
          <div className={styles.socials}>
            <Link to="/">
              <AiOutlineInstagram />
            </Link>
            <Link to="/">
              <AiOutlineFacebook />
            </Link>
            <Link to="/">
              <AiOutlineTwitter />
            </Link>
          </div>
        </li>
      </ul>

      <ul className={styles.services}>
        <li>
          <span>Services</span>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
        <li>
          <Link to="/">Our Team</Link>
        </li>
      </ul>

      <ul className={styles.support}>
        <li>
          <span>Support</span>
        </li>
        <li>
          <Link to="/">FAQ's</Link>
        </li>
        <li>
          <Link to="/">Support Center</Link>
        </li>
        <li>
          <Link to="/">Help Center</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;