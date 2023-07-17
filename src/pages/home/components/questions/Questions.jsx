import styles from "./_Questions.module.scss";
import catImage from "../../../../assets/images/cat-questions.png";

const Questions = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.text}>
				<h2 className={styles.h2}>Masz pytania?</h2>
				<h3 className={styles.h3}>Chętnie udzielimy Ci odpowiedzi</h3>
				<button className={styles.button}>Skontaktuj się z nami</button>
			</div>
			<picture className={styles.picture}>
				<img src={catImage} alt="cat" />
			</picture>
		</section>
	);
};

export default Questions;
