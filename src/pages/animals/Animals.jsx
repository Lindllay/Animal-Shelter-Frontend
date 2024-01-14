import { useEffect, useState, useContext } from "react";
import FiltersContext from "../../context/filtersContext";
import styles from "./_Animals.module.scss";
import AnimalCard from "../../common/animalCard/AnimalCard";
import Filter from "./filter/Filter";
import LoadingSpinner from "../../common/UI/LoadingSpinner";
import { url } from "../../utils/config";
import useHttp from "../../hooks/useHttp";

const Animals = () => {
  const filtersCtx = useContext(FiltersContext);
  const { filters } = filtersCtx;

  const { isLoading, sendRequest, error } = useHttp();

  const [data, setData] = useState({ animals: [], amount: null });

  const fetchAnimalsHandler = () => {
    sendRequest(
      {
        url: `${url}api/v1/animals`,
        payload: { params: filters },
        method: "get",
      },
      setData
    );
  };

  const animals = data.animals.map((animalData) => (
    <AnimalCard data={animalData} key={animalData._id} to={animalData._id} />
  ));

  useEffect(() => {
    fetchAnimalsHandler();
  }, []);

  const results = (value) => {
    if (value == 1) {
      return "wynik";
    } else if (value == 2 || value == 3 || value == 4) {
      return "wyniki";
    } else {
      return "wyników";
    }
  };

  return (
    <div className={styles.wrapper}>
      <Filter onSubmit={fetchAnimalsHandler} />
      {isLoading && <LoadingSpinner className={styles.spinner} />}
      {!isLoading && (
        <>
          <h1 className={styles.h1}>{`Znaleziono ${data.amount} ${results(
            data.amount
          )}`}</h1>
          <ul className={styles.list}>{animals}</ul>
        </>
      )}
    </div>
  );
};

export default Animals;
