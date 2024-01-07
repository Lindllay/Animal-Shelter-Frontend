import styles from "./_Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<p>© Copyright 2023 | Maciej Semeniuk</p>
			<Link to={"/login"} className={styles.link}>
				Panel Administracyjny
			</Link>
		</footer>
	);
};

export default Footer;
