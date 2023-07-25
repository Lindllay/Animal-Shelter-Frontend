import styles from "./_RecentylyAdopted.module.scss";

import { useState, useEffect } from "react";
import useHttp from "../../../../hooks/useHttp";
import { url } from "../../../../utils/config";

import AnimalCard from "../../../../common/animalCard/AnimalCard";

const RecentlyAdopted = () => {
  const { isLoading, error, sendRequest } = useHttp();

  const [data, setData] = useState([]);

  const transformData = (data) => {
    const transformedData = data.animals.map((animal) => {
      return { ...animal, id: animal._id };
    });
    setData(transformedData);
  };

  const startFetching = (entries, observer) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      sendRequest(
        {
          url: `${url}api/v1/animals`,
          payload: { params: { sort: "-adoptedAt", limit: 3 } },
        },
        transformData
      );
      console.log(entry);
      observer.unobserve(entry.target);
    }
  };

  useEffect(() => {
    const section = document.querySelector("#section");
    const sectionObserver = new IntersectionObserver(startFetching, {
      root: null,
      threshold: 0,
      rootMargin: "0px",
    });

    sectionObserver.observe(section);
  }, []);

  const animals = data.map((animalData) => (
    <AnimalCard
      data={animalData}
      key={animalData.id}
      to={`animals/${animalData.id}`}
      isLoading={isLoading}
    />
  ));

  return (
    <section className={styles.wrapper} id="section">
      <h2 className={styles.header}>Ostatnio przyjęte</h2>
      <ul className={styles.list}>{animals}</ul>
    </section>
  );
};

export default RecentlyAdopted;
