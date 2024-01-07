import styles from "./_SidebarBtn.module.scss";
import { ArrowIconSmall } from "../../../../common/UI/icons";
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
      {props.subpages && <ArrowIconSmall className={styles.arrow} />}
    </NavLink>
  );
};

export default SidebarBtn;
