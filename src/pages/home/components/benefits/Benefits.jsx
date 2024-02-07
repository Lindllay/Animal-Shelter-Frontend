import styles from "./_Benefits.module.scss";
import image from "../../../../assets/companion.jpeg";

const Benefits = () => {
  return (
    <section className={styles.section}>
      <picture className={styles.picture}>
        <img src={image} alt="woman and dog"></img>
      </picture>
      <div className={styles.content}>
        <h2 className={styles.h2}>
          Find Your Perfect Companion at Our Animal Shelter
        </h2>
        <h3 className={styles.h3}>
          Adopting a pet not only brings joy to your life, but also saves a
          precious life.
        </h3>
        <div className={styles.list}>
          <span>Give a loving home to a deserving animal today</span>
          <span>Make a difference in an animal's life through adoption</span>
          <span>Help us create a brighter future for shelter animals.</span>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
