import Form from "./form/Form";

import dogImage from "../../../../assets/images/dog-hero.png";
import dogImageBig from "../../../../assets/images/dog-hero-big.png";
import styles from "./_Hero.module.scss";

const Hero = (props) => {
	return (
		<section className={styles.hero}>
			<Form />
			<picture className={styles["img-container"]}>
				<source srcSet={dogImage} media="(max-width: 87.5em)"></source>
				<img
					srcSet={dogImageBig}
					className={styles.image}
					alt="dog full resolution"
				/>
			</picture>
		</section>
	);
};

export default Hero;
