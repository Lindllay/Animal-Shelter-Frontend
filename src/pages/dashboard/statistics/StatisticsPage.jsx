import { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from "recharts";
import styles from "./_StatisticsPage.module.scss";
import { Select } from "../../../common/form";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../../../utils/config";

const StatisticsPage = () => {
  const [shelter, setShelter] = useState([]);
  const [adopted, setAdopted] = useState([]);
  const [temporary, setTemporary] = useState([]);

  const isTabletOrMobile = useMediaQuery({
    query: `(max-width:${breakpoints.md}px)`,
  });

  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateValues = () => {
    setShelter([
      {
        name: "Psy w schronisku",
        fill: "#a94723",
        value: generateNumber(16, 231),
      },
      {
        name: "Koty w schronisku",
        fill: "#e18a6b",
        value: generateNumber(12, 126),
      },
    ]);
    setAdopted([
      { name: "Adoptowane psy", value: generateNumber(5, 56), fill: "#ffab66" },
      {
        name: "Adoptowane koty",
        value: generateNumber(2, 36),
        fill: "#ff8f33",
      },
    ]);
    setTemporary([
      {
        name: "Psy w domu tymczasowym",
        value: generateNumber(2, 32),
        fill: "#331700",
      },
      {
        name: "Koty w domu tymczasowym",
        value: generateNumber(4, 18),
        fill: "#662e00",
      },
    ]);
  };

  const onInputChange = () => {
    generateValues();
  };

  useEffect(() => {
    generateValues();
  }, []);

  return (
    <>
      <Select
        className={
          !isTabletOrMobile
            ? styles.select
            : `${styles.select} ${styles.mobile}`
        }
        onChange={onInputChange}
      >
        <option>Sierpień 2023</option>
        <option>Lipiec 2023</option>
        <option>Czerwiec 2023</option>
        <option>Maj 2023</option>
        <option>Kwiecień 2023</option>
        <option>Marzec 2023</option>
        <option>Luty 2023</option>
        <option>Styczeń 2023</option>
      </Select>
      <ResponsiveContainer width="100%" height={!isTabletOrMobile ? 500 : 1200}>
        <PieChart margin={{ top: 50, right: 30, left: 20, bottom: 55 }}>
          <Legend verticalAlign="bottom" iconSize={30} />
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={shelter}
            cx={!isTabletOrMobile ? "15%" : "50%"}
            cy={!isTabletOrMobile ? "50%" : "22.5%"}
            outerRadius={!isTabletOrMobile ? 100 : 125}
            innerRadius={!isTabletOrMobile ? 50 : 75}
            fill="#8884d8"
            label
            fontSize={18}
          />
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={adopted}
            cx={!isTabletOrMobile ? "50%" : "50%"}
            cy={!isTabletOrMobile ? "50%" : "52.5%"}
            outerRadius={!isTabletOrMobile ? 100 : 125}
            innerRadius={!isTabletOrMobile ? 50 : 75}
            fill="#123456"
            label
            fontSize={18}
          />
          <Pie
            label
            dataKey="value"
            isAnimationActive={true}
            data={temporary}
            cx={!isTabletOrMobile ? "85%" : "50%"}
            cy={!isTabletOrMobile ? "50%" : "82.5%"}
            outerRadius={!isTabletOrMobile ? 100 : 125}
            innerRadius={!isTabletOrMobile ? 50 : 75}
            fill="#123456"
            fontSize={18}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default StatisticsPage;
