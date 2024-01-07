import styles from "./_Sidebar.module.scss";
import SidebarBtn from "./SidebarBtn";
import SidebarBtnInner from "./SidebarBtnInner";
import {
  AddIcon,
  WorldIcon,
  ChartIcon,
  GearIcon,
  LogoutIcon,
  PawIconFilled,
  ArticleIcon,
} from "../../../../common/UI/icons";
import useAuth from "../../../../hooks/useAuth";

const Sidebar = () => {
  const { logout: logoutHandler } = useAuth();

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={`${styles.ul} `}>
          <li className={styles.li}>
            <SidebarBtn subpages to="add">
              <AddIcon className={styles["btn-icon"]} /> Dodaj
            </SidebarBtn>
            <div className={styles["sub-menu"]}>
              <SidebarBtnInner to="add/animal">
                <PawIconFilled className={styles["btn-icon--inner"]} /> Zwierzę
              </SidebarBtnInner>
              <SidebarBtnInner value="Artykuł" to="add/article">
                <ArticleIcon className={styles["btn-icon--inner"]} />
                Artykuł
              </SidebarBtnInner>
            </div>
          </li>

          <li className={styles.li}>
            <SidebarBtn to="stats">
              <ChartIcon className={styles["btn-icon"]} />
              Statystyki
            </SidebarBtn>
          </li>
          <li className={styles.li}>
            <SidebarBtn to="base">
              <WorldIcon className={styles["btn-icon"]} />
              Baza Danych
            </SidebarBtn>
          </li>
          <li className={styles.li}>
            <SidebarBtn to="settings">
              <GearIcon className={styles["btn-icon"]} />
              Ustawienia konta
            </SidebarBtn>
          </li>
          <li className={styles.li}>
            <SidebarBtn to={"/login"} onClick={logoutHandler}>
              <LogoutIcon className={styles["btn-icon"]} />
              Wyloguj
            </SidebarBtn>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
