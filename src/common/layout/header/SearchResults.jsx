import { Link } from "react-router-dom";
import styles from "./_SearchResults.module.scss";
import LoadingSpinner from "../../UI/LoadingSpinner";
import formatAge from "../../../utils/formatAge";

const SearchResults = (props) => {
  const { data, isLoading, error, getName, getElement, isOpened } = props;
  const { animals: animalsArray, count } = data;

  const animals = animalsArray.map((animal) => (
    <li className={styles["list-item"]} key={animal._id}>
      <Link
        onClick={() => getName(animal.name)}
        className={styles.link}
        to={`/animals/${animal._id}`}
      >
        <picture className={styles.picture}>
          <img src={animal.imageSrcSmall} alt={animal.species} />
        </picture>
        <div className={styles.info}>
          <span className={styles.name}>{animal.name}</span>
          <div className={styles.data}>
            <div>
              <span className={styles.label}>Rasa: </span>
              <span className={styles.value}>{animal.breed}</span>
            </div>
            <div>
              <span className={styles.label}>Wiek: </span>
              <span className={styles.value}>{`${animal.age} ${formatAge(
                animal.age
              )}`}</span>
            </div>
            <div>
              <span className={styles.label}>Waga: </span>
              <span className={styles.value}>{`${animal.weight}kg`}</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  ));

  return (
    <ul
      className={`${styles.list} ${isOpened ? styles.focus : ""}`}
      onClick={props.onClick}
    >
      {isLoading ? <LoadingSpinner className={styles.spinner} /> : animals}
    </ul>
  );
};

export default SearchResults;
