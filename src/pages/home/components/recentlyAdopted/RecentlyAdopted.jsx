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

	useEffect(() => {
		sendRequest(
			{
				url: `${url}api/v1/animals`,
				payload: { params: { sort: "-adoptedAt", limit: 3 } },
			},
			transformData
		);
	}, []);

	const animals = data.map((animalData) => (
		<AnimalCard
			data={animalData}
			key={animalData.id}
			to={`animals/${animalData.id}`}
		/>
	));

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.header}>Ostatnio przyjęte</h2>
			<ul className={styles.list}>{animals}</ul>
		</section>
	);
};

export default RecentlyAdopted;
