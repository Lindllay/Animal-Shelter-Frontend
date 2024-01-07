import styles from "./_Header.module.scss";
import Navigation from "./Navigation";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Search from "./Search";

const Header = (props) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchRef = useRef();

  const activateSearchHandler = () => {
    setIsSearchActive(true);
  };
  const deactivateSearchHandler = () => {
    setIsSearchActive(false);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.addEventListener("click", (e) => {
      if (
        e.target !== searchRef.current &&
        !e.target.closest(`.${styles.wrapper}`)
      ) {
        deactivateSearchHandler();
      }
    });
  }, []);

  return (
    <header className={styles.header}>
      <Link className={styles["logo-img"]} to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div
        className={`${styles.wrapper} ${isSearchActive ? styles.active : ""}`}
      >
        <Navigation activateSearch={activateSearchHandler} />
        <Search searchRef={searchRef} />
      </div>
    </header>
  );
};
export default Header;
