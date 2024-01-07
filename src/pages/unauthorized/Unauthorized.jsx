import styles from "./_Unauthorized.module.scss";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className={styles.unauthorized}>
      <h1>403 - Forbidden</h1>
      <p>Brak uprawnień do zasobów tej strony.</p>
    </div>
  );
};

export default Unauthorized;
