import styles from "./_SidebarBtnInner.module.scss";
import { NavLink } from "react-router-dom";

const SidebarBtnInner = (props) => {
  return (
    <NavLink to={props.to} className={styles.btn} onClick={props.onClick}>
      {props.children}
    </NavLink>
  );
};

export default SidebarBtnInner;
