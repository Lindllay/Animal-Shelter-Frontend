import styles from "./_Sidebar.module.scss";
import SidebarBtn from "./SidebarBtn";
import ArrowIcon from "../../../../assets/icons/ArrowIcon";
import { useContext, useState } from "react";
import AuthContext from "../../../../context/authContext";

const Sidebar = () => {
	const [isActive, setIsActive] = useState(true);

	const sidebarClasses = `${styles.sidebar} ${isActive ? styles.active : ""}`;

	const { logout: logoutHandler } = useContext(AuthContext);

	const toggleSidebar = () => {
		setIsActive((prev) => {
			return !prev;
		});
	};

	return (
		<aside className={sidebarClasses}>
			<nav className={styles.nav}>
				<ul className={styles.ul}>
					<li className={styles.li}>
						<SidebarBtn to="add">Dodaj</SidebarBtn>
					</li>
					<li className={styles.li}>
						<SidebarBtn to="base">Baza danych</SidebarBtn>
					</li>
					<li className={styles.li}>
						<SidebarBtn to="stats">Statystyki</SidebarBtn>
					</li>
					<li className={styles.li}>
						<SidebarBtn to="settings ">Ustawienia konta</SidebarBtn>
					</li>
					<li className={styles.li}>
						<SidebarBtn to={"/login"} onClick={logoutHandler}>
							Wyloguj
						</SidebarBtn>
					</li>
				</ul>
			</nav>
			<ArrowIcon className={styles.icon} onClick={toggleSidebar} />
		</aside>
	);
};

export default Sidebar;
