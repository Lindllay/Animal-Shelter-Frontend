import { useState } from "react";
import styles from "./_MobileNavigation.module.scss";
import { NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import {
  PiPawPrint,
  PiNewspaperClipping,
  PiQuestion,
  PiPhoneCall,
} from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { SlMagnifier } from "react-icons/sl";
import { ImCross } from "react-icons/im";
import { Reveal, Fade } from "react-awesome-reveal";

const MobileNavigation = (props) => {
  const [isNavOpened, setIsNavOpened] = useState(false);

  const openNavHandler = () => {
    setIsNavOpened(true);
    document.body.style.overflow = "hidden";
  };
  const closeNavHandler = () => {
    setIsNavOpened(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      <nav className={styles["btn-wrapper"]}>
        <button className={styles["search-btn"]} onClick={props.activateSearch}>
          <SlMagnifier className={styles["search-icon"]} />
        </button>
        <GiHamburgerMenu onClick={openNavHandler} size="24" color="#5a2306" />
      </nav>

      {isNavOpened && (
        <nav className={styles.nav}>
          <Reveal triggerOnce cascade damping={0.05}>
            <ul className={styles.ul}>
              <Fade delay={1000} triggerOnce>
                <ImCross
                  onClick={closeNavHandler}
                  className={styles["cross-icon"]}
                />
              </Fade>

              <li>
                <NavLink
                  to="/animals"
                  className={`${styles.link} ${styles["link--1"]}`}
                  onClick={closeNavHandler}
                >
                  <PiPawPrint
                    className={styles["nav-icon"]}
                    onClick={closeNavHandler}
                  />
                  Zwierzęta
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  className={`${styles.link} ${styles["link--1"]} `}
                  onClick={closeNavHandler}
                >
                  <PiNewspaperClipping className={styles["nav-icon"]} />
                  Aktualności
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/help"
                  className={`${styles.link} ${styles["link--1"]}`}
                  onClick={closeNavHandler}
                >
                  <PiQuestion className={styles["nav-icon"]} />
                  Jak pomóc?
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={`${styles.link} ${styles["link--1"]}`}
                  onClick={closeNavHandler}
                >
                  <GoPeople className={styles["nav-icon"]} />O nas
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={`${styles.link} ${styles["link--1"]} `}
                  onClick={closeNavHandler}
                >
                  <PiPhoneCall className={styles["nav-icon"]} />
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </Reveal>
        </nav>
      )}
    </>
  );
};

export default MobileNavigation;
