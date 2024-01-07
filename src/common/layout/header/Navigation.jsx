import { NavLink } from "react-router-dom";
import styles from "./_Navigation.module.scss";
import {
  BookIcon,
  PawIcon,
  QuestionIcon,
  PeopleIcon,
  PhoneIcon,
  MagnifierIcon,
} from "../../UI/icons";

const Navigation = (props) => (
  <nav>
    <ul className={styles.ul}>
      <li>
        <NavLink to="/news" className={`${styles.link} ${styles["link--1"]} `}>
          <BookIcon className={styles["nav-icon"]} />
          Aktualności
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/animals"
          className={`${styles.link} ${styles["link--1"]}`}
        >
          <PawIcon className={styles["nav-icon"]} />
          Zwierzęta
        </NavLink>
      </li>
      <li>
        <NavLink to="/help" className={`${styles.link} ${styles["link--1"]}`}>
          <QuestionIcon className={styles["nav-icon"]} />
          Jak pomóc?
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={`${styles.link} ${styles["link--1"]}`}>
          <PeopleIcon className={styles["nav-icon"]} />O nas
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={`${styles.link} ${styles["link--2"]} `}
        >
          <PhoneIcon className={styles["nav-icon"]} />
          Kontakt
        </NavLink>
      </li>
      <li>
        <button className={styles["search-btn"]} onClick={props.activateSearch}>
          <MagnifierIcon className={styles["search-icon"]} />
        </button>
      </li>
    </ul>
  </nav>
);

export default Navigation;
