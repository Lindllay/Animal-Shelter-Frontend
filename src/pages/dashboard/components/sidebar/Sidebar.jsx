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

import useAuth from "../../../../hooks/useAuth";

const Sidebar = () => {
  const { logout: logoutHandler } = useAuth();

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={`${styles.ul} `}>
          <li className={styles.li}>
            <SidebarBtn subpages to="add">
              <FaCirclePlus className={styles["btn-icon"]} /> Dodaj
            </SidebarBtn>
            <div className={styles["sub-menu"]}>
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
  );
};

export default Sidebar;
