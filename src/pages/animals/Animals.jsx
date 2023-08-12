import { useEffect, useState, useContext } from "react";
import FiltersContext from "../../context/filtersContext";
import styles from "./_Animals.module.scss";
import AnimalCard from "../../common/animalCard/AnimalCard";
import Filter from "../../common/filter/Filter";
import LoadingSpinner from "../../common/UI/LoadingSpinner";
import { url } from "../../utils/config";
import useHttp from "../../hooks/useHttp";

const Animals = (props) => {
  const filtersCtx = useContext(FiltersContext);
  const { filters } = filtersCtx;

  const { isLoading, sendRequest } = useHttp();

  const [data, setData] = useState([]);

  const fetchAnimalsHandler = () => {
    sendRequest(
      {
        url: `${url}api/v1/animals`,
        payload: { params: filters },
      },
      transformData
    );
  };

  const transformData = (data) => {
    const transformedData = data.animals.map((animal) => {
      return { ...animal, id: animal._id };
    });

    setData(transformedData);
  };

  useEffect(() => {
    fetchAnimalsHandler();
  }, []);

  const animals = data.map((animalData) => (
    <AnimalCard data={animalData} key={animalData.id} to={animalData.id} />
  ));

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
          <h1 className={styles.h1}>{`Znaleziono ${data.length} ${results(
            data.length
          )}`}</h1>
          <ul className={styles.list}>{animals}</ul>
        </>
      )}
    </div>
  );
};

export default Animals;
