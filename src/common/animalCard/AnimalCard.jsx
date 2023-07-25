import styles from "./_AnimalCard.module.scss";
import { Link } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner.jsx";

const AnimalCard = (props) => {
  const { name, age, breed, gender, image, weight, id } = props.data;
  const { isLoading } = props;

  return (
    <li className={styles.li}>
      <Link className={styles.card} to={props.to}>
        {isLoading && <LoadingSpinner className={styles.spinner} />}
        {!isLoading && (
          <>
            <div className={styles["image-wrapper"]}>
              <img src={image} className={styles.image}></img>
            </div>
            <div className={styles.content}>
              <p className={styles.name}>
                Imię: <span>{name}</span>
              </p>
              <p className={styles.breed}>
                Rasa: <span>{breed}</span>
              </p>
              <p className={styles.age}>
                Wiek: <span>{age}</span>
              </p>
              <p className={styles.gender}>
                Płeć: <span>{gender === "male" ? "samiec" : "samica"}</span>
              </p>
              <p className={styles.age}>
                Waga: <span>{weight}</span>
              </p>
            </div>
          </>
        )}
      </Link>
    </li>
  );
};

export default AnimalCard;
