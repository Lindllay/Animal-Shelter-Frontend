import Form from "../../components/form/Form";

// import dogImage from "../../../../assets/images/dog-hero.png";
import styles from "./_Hero.module.scss";

const Hero = (props) => {
	return (
		<section className={styles.hero}>
			<Form />
			<picture className={styles["img-container"]}>
				{/* <img src={dogImage} className={styles.image} /> */}
			</picture>
		</section>
	);
};

export default Hero;
