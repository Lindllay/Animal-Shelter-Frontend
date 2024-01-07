import Footer from "./footer/Footer.jsx";
import Header from "./header/Header.jsx";
import styles from "./_Layout.module.scss";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  const classes = `${props.className ? props.className : ""} ${styles.layout}`;
  return (
    <>
      <Header />
      <main className={classes}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
