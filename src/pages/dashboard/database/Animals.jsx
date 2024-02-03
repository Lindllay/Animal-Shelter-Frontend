import styles from "./_Animals.module.scss";
import formatAge from "../../../utils/formatAge";
import formatDate from "../../../utils/formatDate";
import LoadingSpinner from "../../../common/UI/LoadingSpinner";
import { FaTrash } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../../../utils/config";

const Animals = (props) => {
  const { data, isLoading } = props;

  const isMobile = useMediaQuery({
    query: `(max-width:${breakpoints.sm}px)`,
  });

  console.log(isMobile);

  const animalsList = data.map((animal, index) => (
    <li className={styles.row} key={animal._id}>
      {/* <span className={styles.number}>{index + 1}</span> */}
      <div className={styles.main}>
        <picture className={styles.picture}>
          <img
            src={animal.imageSrcSmall}
            alt={`${animal.name} ${animal.species}`}
          />
        </picture>
        <span className={styles.name}>{animal.name}</span>
        <span className={styles.species}>
          {animal.species === "dog" ? "Pies" : "Kot"}
        </span>
      </div>

      <span className={styles.breed}>{animal.breed}</span>
      <span className={styles.age}>
        {isMobile
          ? `Wiek: ${animal.age} ${formatAge(animal.age)}`
          : `${animal.age} ${formatAge(animal.age)}`}
      </span>
      <span className={styles.weight}>
        {isMobile ? `Waga: ${animal.weight}kg` : `${animal.weight}kg`}
      </span>
      <span className={styles.gender}>
        {isMobile
          ? animal.gender === "male"
            ? "Płeć: Samiec"
            : "Płeć: Samica"
          : animal.gender === "male"
          ? "Samiec"
          : "Samica"}
      </span>
      <span className={styles.adoptedAt}>
        {isMobile
          ? `Data przyjęcia: ${formatDate(animal.adoptedAt)}`
          : formatDate(animal.adoptedAt)}
      </span>
      <div className={styles.controllers}>
        <button>
          <FaTrash
            size="16"
            color="rgb(126, 0, 0)"
            title="Usuń"
            onClick={props.onModalOpen.bind(null, animal)}
          />
        </button>
      </div>
    </li>
  ));

  const loadingScreen = (
    <>
      <div className={styles["loading-row"]}>
        <LoadingSpinner className={styles.spinner} />
      </div>
      <div className={styles["loading-row"]}>
        <LoadingSpinner className={styles.spinner} />
      </div>
      <div className={styles["loading-row"]}>
        <LoadingSpinner className={styles.spinner} />
      </div>
    </>
  );

  return (
    <>
      <div>
        <div className={styles.row} key="">
          {!isMobile && (
            <>
              <span className={styles.number}></span>
              <span className={styles.name}></span>
              <span className={styles.breed}>Rasa</span>
              <span className={styles.age}>Wiek</span>
              <span className={styles.weight}>Waga</span>
              <span className={styles.gender}>Płeć</span>
              <span className={styles.adoptedAt}>Data przyjęcia</span>
            </>
          )}
        </div>
        {isLoading && loadingScreen}
        {!isLoading && <ul className={styles.list}>{animalsList}</ul>}
      </div>
    </>
  );
};

export default Animals;
