import styles from "./_Home.module.scss";
import Hero from "./components/hero/Hero";
import Tax from "./components/tax/Tax";
import RecentlyAdopted from "./components/recentlyAdopted/RecentlyAdopted";
import Questions from "./components/questions/Questions";

const Home = (props) => {
	return (
		<section className={styles.home}>
			<Hero />
			<Tax />
			<RecentlyAdopted />
			<Questions />
		</section>
	);
};

export default Home;
