import styles from "./_AnimalCard.module.scss";
import { Link } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner.jsx";
import formatAge from "../../utils/formatAge.jsx";
import { forwardRef } from "react";

const AnimalCard = forwardRef((props, ref) => {
  const { name, age, breed, gender, imageSrc, weight } = props.data;
  const { isLoading } = props;

  if (isLoading)
    return (
      <li className={styles.li}>
        <Link className={styles.card}>
          <LoadingSpinner className={styles.spinner} />
        </Link>
      </li>
    );
  if (!isLoading)
    return (
      <li className={styles.li}>
        <Link className={styles.card} to={props.to} ref={ref}>
          <div className={styles["image-wrapper"]}>
            <img src={imageSrc} className={styles.image}></img>
          </div>
          <div className={styles.content}>
            <p className={styles.name}>
              Imię: <span>{name}</span>
            </p>
            <p className={styles.breed}>
              Rasa: <span>{breed}</span>
            </p>
            <p className={styles.age}>
              Wiek: <span>{`${age} ${formatAge(age)}`}</span>
            </p>
            <p className={styles.gender}>
              Płeć: <span>{gender === "male" ? "Samiec" : "Samica"}</span>
            </p>
            <p className={styles.weight}>
              Waga: <span>{weight}kg</span>
            </p>
          </div>
        </Link>
      </li>
    );
});

export default AnimalCard;
