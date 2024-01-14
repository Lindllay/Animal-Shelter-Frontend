import styles from "./_ArticleCard.module.scss";
import { Link } from "react-router-dom";

const ArticleCard = (props) => {
  const { title, date, imageSrc, introduction, alt } = props.data;

  return (
    <article className={styles.article}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <span>{date.split("T")[0]}</span>
        <p>{introduction}</p>
        <Link className={styles.link} to={props.to}>
          Czytaj więcej
        </Link>
      </div>
      <picture className={styles.picture}>
        <img src={imageSrc} alt={alt} />
      </picture>
    </article>
  );
};

export default ArticleCard;
