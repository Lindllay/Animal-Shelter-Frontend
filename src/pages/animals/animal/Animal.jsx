import { useParams } from "react-router-dom";
import styles from "./_Animal.module.scss";
import { useState, useEffect } from "react";
import { url } from "../../../utils/config";
import useHttp from "../../../hooks/useHttp";
import LoadingSpinner from "../../../common/UI/LoadingSpinner";

const Animal = () => {
	const [data, setData] = useState(null);
	const { sendRequest, isLoading } = useHttp();

	// const isLoading = true;

	const { id } = useParams();

	const transformData = (data) => {
		setData(data);
	};

	useEffect(() => {
		sendRequest({ url: `${url}api/v1/animals/${id}` }, transformData);
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
				<picture className={styles.picture}>
					<img src={data.image} alt="animal photo" />
				</picture>
				<div className={styles.info}>
					<ul className={styles.ul}>
						<li>
							<span className={styles.label}>Imię:</span>
							<span className={styles.value}>{data.name}</span>
						</li>
						<li>
							<span className={styles.label}>Gatunek:</span>
							<span className={styles.value}>
								{data.species === "dog" ? "Pies" : "Kot"}
							</span>
						</li>
						<li>
							<span className={styles.label}>Płeć:</span>
							<span className={styles.value}>
								{data.gender === "male" ? "Samiec" : "Samica"}
							</span>
						</li>
						<li>
							<span className={styles.label}>Rasa:</span>
							<span className={styles.value}>{data.breed}</span>
						</li>
						<li>
							<span className={styles.label}>Wiek:</span>
							<span className={styles.value}>{data.age} lat</span>
						</li>
						<li>
							<span className={styles.label}>Waga:</span>
							<span className={styles.value}>{data.weight}kg</span>
						</li>
						<li>
							<span className={styles.label}>Przyjęty:</span>
							<span className={styles.value}>
								{data.adoptedAt.split("T")[0]}
							</span>
						</li>
						<li>
							<span className={styles.description}>
								{data.species === "dog"
									? `Oto ${data.name}, uroczy czworonóg o wyjątkowym
								charakterze. Ten średniej wielkości pies o pięknej, kędzierzawej
								sierści w odcieniach złota i białego z pewnością przyciąga
								uwagę. Jego błyszczące oczy są pełne ciepła i
								wrażliwości. ${data.name} uwielbia przytulanie i jest wspaniałym
								towarzyszem dla każdego, kto szuka wiernego przyjaciela. Jest
								pełen energii i gotów na każdą przygodę, ale równocześnie
								potrafi być spokojnym i posłusznym psem. Będzie idealnym
								dodatkiem do Twojej rodziny i sprawi, że każdy dzień będzie
								pełen radości i miłości.`
									: `Ten niezwykły kot o imieniu ${data.name} to prawdziwy klejnot schroniska. Jego jedwabista sierść w odcieniach czarnego marmuru zdobi jego harmonijne ciało, a hipnotyzujące zielone oczy sprawiają, że trudno oderwać od niego wzrok. ${data.name} to nie tylko piękny, ale także inteligentny i przyjazny kot, który uwielbia zabawy i długie sesje przytulania. Jego łagodny charakter sprawia, że jest doskonałym towarzyszem dla rodzin i singli, gotowym dać mnóstwo miłości i radości. Jeśli szukasz wyjątkowego kota, ${data.name} jest idealnym wyborem!`}
							</span>
						</li>
					</ul>
				</div>
			</div>
		);
};

export default Animal;
