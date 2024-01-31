import styles from "./_Sidebar.module.scss";
import SidebarBtn from "./SidebarBtn";
import SidebarBtnInner from "./SidebarBtnInner";

import {
  FaCirclePlus,
  FaChartSimple,
  FaDatabase,
  FaGear,
  FaArrowRightFromBracket,
  FaPaw,
  FaNewspaper,
} from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import { useEffect, useRef, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../../../../utils/config";

const Sidebar = () => {
  const { logout: logoutHandler } = useAuth();
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const sidebarRef = useRef();
  const addBtnRef = useRef();
  const subMenuRef = useRef();

  const openSidebarHandler = () => {
    setIsSidebarActive(true);
  };
  const closeSidebarHandler = () => {
    setIsSidebarActive(false);
  };

  useEffect(() => {
    const listener = (e) => {
      const addBtn = addBtnRef.current;
      const sidebarOpenBtn = document.body.querySelector(
        `.${styles["sidebar-open-icon"]}`
      );
      const subMenu = subMenuRef.current;

      if (
        e.target !== sidebarRef.current &&
        e.target.closest(`.${styles["sidebar-open-icon"]}`) !==
          sidebarOpenBtn &&
        e.target.closest(`.${styles.li}`) !== addBtn
      )
        closeSidebarHandler();
      else if (e.target.closest(`.${styles["sub-menu"]}`) === subMenu)
        closeSidebarHandler();
    };

    document.body.addEventListener("click", listener);
  }, []);

  const isTabletOrMobile = useMediaQuery({
    query: `(max-width:${breakpoints.md}px)`,
  });

  const sidebarClasses = !isTabletOrMobile
    ? styles.sidebar
    : isSidebarActive
    ? `${styles.sidebar} ${styles.active}`
    : styles.sidebar;

  return (
    <>
      <aside className={sidebarClasses} ref={sidebarRef}>
        <nav className={styles.nav}>
          <ul className={`${styles.ul} `}>
            <li className={styles.li} ref={addBtnRef}>
              <SidebarBtn subpages to="add">
                <FaCirclePlus className={styles["btn-icon"]} /> Dodaj
              </SidebarBtn>
              <div className={styles["sub-menu"]} ref={subMenuRef}>
                <SidebarBtnInner to="add/animal">
                  <FaPaw className={styles["btn-icon--inner"]} />
                  Zwierzę
                </SidebarBtnInner>
                <SidebarBtnInner value="Artykuł" to="add/article">
                  <FaNewspaper className={styles["btn-icon--inner"]} />
                  Artykuł
                </SidebarBtnInner>
              </div>
            </li>

            <li className={styles.li}>
              <SidebarBtn to="stats">
                <FaChartSimple className={styles["btn-icon"]} />
                Statystyki
              </SidebarBtn>
            </li>
            <li className={styles.li}>
              <SidebarBtn to="base">
                <FaDatabase className={styles["btn-icon"]} />
                Baza Danych
              </SidebarBtn>
            </li>
            <li className={styles.li}>
              <SidebarBtn to="settings">
                <FaGear className={styles["btn-icon"]} />
                Ustawienia konta
              </SidebarBtn>
            </li>
            <li className={styles.li}>
              <SidebarBtn to={"/login"} onClick={logoutHandler}>
                <FaArrowRightFromBracket className={styles["btn-icon"]} />
                Wyloguj
              </SidebarBtn>
            </li>
          </ul>
        </nav>
      </aside>
      <FaRegArrowAltCircleRight
        onClick={openSidebarHandler}
        className={styles["sidebar-open-icon"]}
      />
    </>
  );
};

export default Sidebar;
