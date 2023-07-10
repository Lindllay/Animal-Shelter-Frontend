import styles from "./_RecentylyAdopted.module.scss";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { url } from "../../../../utils/config";

const RecentlyAdopted = () => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const fetchAnimalsHandler = useCallback(async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(`${url}api/v1/animals`, {
				params: "adoptedAt",
			});

			console.log(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	}, []);

	useEffect(() => {
		fetchAnimalsHandler();
	});

	return (
		<section>
			<h2 className={styles.header}>Ostatnio przyjęte</h2>
			<div className={styles.content}></div>
		</section>
	);
};

export default RecentlyAdopted;
