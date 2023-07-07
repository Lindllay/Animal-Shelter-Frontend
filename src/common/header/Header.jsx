import styles from "./_Header.module.scss";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = (props) => (
	<header className={styles.header}>
		<Link className={styles["logo-img"]} to="/">
			<img src={logo} alt="logo" />
		</Link>
		<Navigation />
	</header>
);
export default Header;
