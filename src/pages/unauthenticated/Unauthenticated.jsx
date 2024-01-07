import styles from "./_Unauthenticated.module.scss";
import { Link } from "react-router-dom";

const Unauthenticated = () => {
  return (
    <div className={styles.unauthenticated}>
      <h1>401 - Unauthenticated</h1>
      <p>
        You need to <Link to={"/login"}>Login</Link> access this page
      </p>
    </div>
  );
};

export default Unauthenticated;
