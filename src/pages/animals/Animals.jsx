import { useCallback, useEffect, useState, useContext } from "react";
import FiltersContext from "../../context/filtersContext";
import styles from "./_Animals.module.scss";
import axios from "axios";
import AnimalCard from "../../common/animalCard/AnimalCard";
import Filter from "../../common/filter/Filter";
import LoadingSpinner from "../../common/UI/LoadingSpinner";
import { url } from "../../utils/config";
import { Routes, Route } from "react-router-dom";

const Animals = (props) => {
	const filtersCtx = useContext(FiltersContext);

	const [data, setData] = useState([]);
	const { filters } = filtersCtx;
	const [isLoading, setIsLoading] = useState(false);

	const fetchAnimalsHandler = useCallback(async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(`${url}api/v1/animals`, {
				params: filters,
			});

			const transformedData = data.animals.map((animal) => {
				return {
					id: animal._id,
					age: animal.age,
					breed: animal.breed,
					createdAt: animal.createdAt,
					description: animal.description,
					gender: animal.gender,
					image: animal.image,
					name: animal.name,
					species: animal.species,
					weight: animal.weight,
				};
			});
			setData(transformedData);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	}, [filters]);

	useEffect(() => {
		fetchAnimalsHandler();
	}, []);

	const animals = data.map((animalData) => (
		<AnimalCard data={animalData} key={animalData.id} />
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
