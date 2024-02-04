import styles from "./_SidebarBtn.module.scss";
import { NavLink } from "react-router-dom";

import { IoMdArrowDropright } from "react-icons/io";

const SidebarBtn = (props) => {
  return (
    <NavLink
      to={props.to}
      className={styles["sidebar-btn"]}
      onClick={props.onClick}
    >
      {props.children}
      {props.subpages && <IoMdArrowDropright className={styles.arrow} />}
    </NavLink>
  );
};

export default SidebarBtn;
