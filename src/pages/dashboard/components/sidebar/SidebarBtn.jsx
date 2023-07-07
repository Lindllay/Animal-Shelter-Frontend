import styles from "./_SidebarBtn.module.scss";
import { NavLink } from "react-router-dom";

const SidebarBtn = (props) => {
	return (
		<NavLink
			to={props.to}
			className={(btn) =>
				btn.isActive
					? `${styles["sidebar-btn"]} ${styles.active}`
					: styles["sidebar-btn"]
			}
			onClick={props.onClick}
		>
			{props.children}
		</NavLink>
	);
};

export default SidebarBtn;
