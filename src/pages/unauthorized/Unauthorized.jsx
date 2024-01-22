import styles from "./_Unauthorized.module.scss";

const Unauthorized = () => {
  return (
    <div className={styles.unauthorized}>
      <p>Brak uprawnień do zasobów tej strony.</p>
    </div>
  );
};

export default Unauthorized;
