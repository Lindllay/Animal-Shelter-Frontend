import Hero from "./components/hero/Hero";
import Tax from "./components/tax/Tax";
import RecentlyAdopted from "./components/recentlyAdopted/RecentlyAdopted";
import Questions from "./components/questions/Questions";
import Benefits from "./components/benefits/Benefits";
import { Fade } from "react-awesome-reveal";

const Home = (props) => {
  return (
    <Fade triggerOnce>
      <Hero />
      {/* <Benefits /> */}
      <Tax />
      <RecentlyAdopted />
      <Questions />
    </Fade>
  );
};

export default Home;
