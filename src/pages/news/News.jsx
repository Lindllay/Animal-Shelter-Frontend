import styles from "./_News.module.scss";
import ArticleCard from "./article/ArticleCard";
import { useState, useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import { url } from "../../utils/config";
import LoadingSpinner from "../../common/UI/LoadingSpinner";

const News = () => {
  const [data, setData] = useState({ articles: [] });
  const { sendRequest, isLoading } = useHttp();

  const fetchArticlesHandler = () => {
    sendRequest({ url: `${url}api/v1/articles`, method: "get" }, setData);
  };

  useEffect(() => {
    fetchArticlesHandler();
  }, []);

  const articles = data.articles.map((articlesData) => (
    <ArticleCard
      data={articlesData}
      key={articlesData._id}
      to={articlesData._id}
    />
  ));

  return (
    <section className={styles.section}>
      {isLoading && <LoadingSpinner className={styles.spinner} />}
      {!isLoading && (
        <>
          <h1 className={styles.h1}>Aktualności</h1>
          <div className={styles.articles}>{articles}</div>
        </>
      )}
    </section>
  );
};

export default News;
