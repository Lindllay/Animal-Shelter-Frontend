import styles from "./_Articles.module.scss";
import formatDate from "../../../utils/formatDate";
import { FaEdit, FaTrash } from "react-icons/fa";
import LoadingSpinner from "../../../common/UI/LoadingSpinner";
import truncateString from "../../../utils/truncateString";

const Articles = (props) => {
  const { data, isLoading } = props;

  const articlesList = data.map((article, index) => (
    <li className={styles.row} key={article._id}>
      <span className={styles.number}>{index + 1}</span>
      <picture className={styles.picture}>
        <img src={article.imageSrc} />
      </picture>
      <span className={styles.title}>{article.title}</span>
      <span className={styles.introduction}>
        {truncateString(article.introduction, 10)}
      </span>

      <span className={styles.date}>{formatDate(article.date)}</span>
      <div className={styles.controllers}>
        <button>
          <FaTrash
            size="16"
            color="rgb(126, 0, 0)"
            title="Usuń"
            onClick={props.onModalOpen.bind(null, article)}
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
          <span className={styles.title}>Tytuł</span>
          <span className={styles.introduction}>Opis</span>
          <span className={styles.date}>Data dodania</span>
        </div>
        {isLoading && loadingScreen}
        {!isLoading && <ul className={styles.list}>{articlesList}</ul>}
      </div>
    </>
  );
};

export default Articles;
