import styles from "./_Navigation.module.scss";
import { NavLink } from "react-router-dom";

import {
  PiNewspaperClipping,
  PiPawPrint,
  PiQuestion,
  PiPhoneCall,
} from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { SlMagnifier } from "react-icons/sl";

const Navigation = (props) => {
  return (
    <nav>
      <ul className={styles.ul}>
        <li>
          <NavLink
            to="/animals"
            className={`${styles.link} ${styles["link--1"]}`}
          >
            <PiPawPrint className={styles["nav-icon"]} />
            Zwierzęta
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={`${styles.link} ${styles["link--1"]} `}
          >
            <PiNewspaperClipping className={styles["nav-icon"]} />
            Aktualności
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" className={`${styles.link} ${styles["link--1"]}`}>
            <PiQuestion className={styles["nav-icon"]} />
            Jak pomóc?
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={`${styles.link} ${styles["link--1"]}`}
          >
            <GoPeople className={styles["nav-icon"]} />O nas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={`${styles.link} ${styles["link--2"]} `}
          >
            <PiPhoneCall className={styles["nav-icon"]} />
            Kontakt
          </NavLink>
        </li>
        <li>
          <button
            className={styles["search-btn"]}
            onClick={props.activateSearch}
          >
            <SlMagnifier className={styles["search-icon"]} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
