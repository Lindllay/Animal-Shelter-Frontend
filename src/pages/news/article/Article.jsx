import styles from "./_Article.module.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useHttp from "../../../hooks/useHttp";
import { url } from "../../../utils/config";
import LoadingSpinner from "../../../common/UI/LoadingSpinner";
import PreviousPageBtn from "../../../common/UI/PreviousPageBtn";

const Article = () => {
  const [data, setData] = useState([]);
  const { sendRequest, isLoading } = useHttp();

  const { id } = useParams();

  useEffect(() => {
    sendRequest({ url: `${url}api/v1/articles/${id}`, method: "get" }, setData);
  }, []);

  if (isLoading)
    return (
      <h1>
        <LoadingSpinner className={styles.spinner} />
      </h1>
    );
  if (!isLoading && data)
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <img src={data.imageSrc} className={styles.img} alt={data.alt} />
          <h1 className={styles.h1}>{data.title}</h1>
          <h2 className={styles.h2}>{data.introduction}</h2>
          <p className={styles.paragraph}>{data.description}</p>
        </div>
        <PreviousPageBtn />
      </div>
    );
};

export default Article;
