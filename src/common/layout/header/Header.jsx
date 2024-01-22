import styles from "./_Header.module.scss";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Search from "./Search";
import { breakpoints } from "../../../utils/config";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchRef = useRef();

  const isTabletOrMobile = useMediaQuery({
    query: `(max-width:${breakpoints.md}px)`,
  });

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

  useEffect(() => {
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";
  }, [isTabletOrMobile]);

  return (
    <header className={styles.header}>
      <Link className={styles["logo-img"]} to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div
        className={`${styles.wrapper} ${isSearchActive ? styles.active : ""}`}
      >
        {!isTabletOrMobile && (
          <Navigation activateSearch={activateSearchHandler} />
        )}
        {isTabletOrMobile && (
          <MobileNavigation
            activateSearch={activateSearchHandler}
            isTabletOrMobile
          />
        )}
        <Search searchRef={searchRef} />
      </div>
    </header>
  );
};
export default Header;
