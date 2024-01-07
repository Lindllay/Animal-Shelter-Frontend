import styles from "./_Home.module.scss";
import Hero from "./components/hero/Hero";
import Tax from "./components/tax/Tax";
import RecentlyAdopted from "./components/recentlyAdopted/RecentlyAdopted";
import Questions from "./components/questions/Questions";
import Benefits from "./components/benefits/Benefits";

const Home = (props) => {
  return (
    <>
      <Hero />
      {/* <Benefits /> */}
      <Tax />
      <RecentlyAdopted />
      <Questions />
    </>
  );
};

export default Home;
