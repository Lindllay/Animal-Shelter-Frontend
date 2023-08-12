import styles from "./_Article.module.scss";
import { Link } from "react-router-dom";

const Article = (props) => {
  const {
    _id: id,
    title,
    date,
    image,
    introduction,
    description,
    alt,
  } = props.data;

  return (
    <article className={styles.article}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <span>{date.split("T")[0]}</span>
        <p>{introduction}</p>
        <Link className={styles.link}>Czytaj więcej</Link>
      </div>
      <picture className={styles.picture}>
        <img src={image} alt={alt} />
      </picture>
    </article>
  );
};

export default Article;
