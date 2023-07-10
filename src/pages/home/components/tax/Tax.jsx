import styles from "./_Tax.module.scss";

const Tax = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.main}>
					<p>Podaruj 1% swojego podatku zwierzętom w schronisku</p>
					<span>One nie mają nikogo</span>
				</div>
				<p className={styles.krs}>KRS: 0000000000</p>
			</div>
		</section>
	);
};

export default Tax;
