import styles from "./_RecentylyAdopted.module.scss";

import { useState, useEffect, useRef } from "react";
import useHttp from "../../../../hooks/useHttp";
import { url } from "../../../../utils/config";

import AnimalCard from "../../../../common/animalCard/AnimalCard";

const RecentlyAdopted = () => {
  const { isLoading, sendRequest } = useHttp();

  const [data, setData] = useState({
    animals: [{ _id: 1 }, { _id: 2 }, { _id: 3 }],
    amount: null,
  });

  console.log(data);

  const cardRef = useRef();
  const sectionRef = useRef();

  const startFetching = (entries, observer) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      sendRequest(
        {
          url: `${url}api/v1/animals`,
          payload: { params: { sort: "-adoptedAt", limit: 3 } },
          method: "get",
        },
        setData
      );
      observer.unobserve(entry.target);
    }
  };

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(startFetching, {
      root: null,
      threshold: 0,
      rootMargin: "0px",
    });

    sectionObserver.observe(sectionRef.current);
  }, []);

  useEffect(() => {
    const cardsContainer = document.querySelector(`.${styles.list}`);
    const cardsArray = [...cardsContainer.childNodes];

    cardsArray.map((card) => {
      card.addEventListener("mouseenter", (e) => {
        const siblings = cardsArray.filter((node) => node !== card);
        siblings.map((sibling) => sibling.classList.add(`${styles.scaleDown}`));
        card.classList.add(`${styles.scaleUp}`);
      });
      card.addEventListener("mouseleave", (e) => {
        const siblings = cardsArray.filter((node) => node !== card);
        siblings.map((sibling) =>
          sibling.classList.remove(`${styles.scaleDown}`)
        );
        card.classList.remove(styles.scaleUp);
      });
    });
  }, [data]);

  const animals = data.animals.map((animalData) => (
    <AnimalCard
      data={animalData}
      key={animalData._id}
      to={`animals/${animalData._id}`}
      isLoading={isLoading}
      ref={cardRef}
    />
  ));

  return (
    <section className={styles.wrapper} id="section" ref={sectionRef}>
      <h2 className={styles.header}>Ostatnio przyjęte</h2>
      <ul className={styles.list}>{animals}</ul>
    </section>
  );
};

export default RecentlyAdopted;
