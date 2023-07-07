import styles from "./_Home.module.scss";
import Hero from "./components/hero/Hero";

const Home = (props) => {
	return (
		<div className={styles.home}>
			<Hero />
		</div>
	);
};

export default Home;
