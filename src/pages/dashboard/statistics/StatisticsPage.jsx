import { useEffect, useState, useCallback } from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from "recharts";
import styles from "./_StatisticsPage.module.scss";
import { Select } from "../../../common/form";

const StatisticsPage = () => {
  const [shelter, setShelter] = useState([]);
  const [adopted, setAdopted] = useState([]);
  const [temporary, setTemporary] = useState([]);

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
      <Select className={styles.select} onChange={onInputChange}>
        <option>Sierpień 2023</option>
        <option>Lipiec 2023</option>
        <option>Czerwiec 2023</option>
        <option>Maj 2023</option>
        <option>Kwiecień 2023</option>
        <option>Marzec 2023</option>
        <option>Luty 2023</option>
        <option>Styczeń 2023</option>
      </Select>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart margin={{ top: 50, right: 30, left: 20, bottom: 55 }}>
          <Legend verticalAlign="bottom" iconSize={30} />
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={shelter}
            cx="20%"
            cy="50%"
            outerRadius={100}
            innerRadius={50}
            fill="#8884d8"
            label
            fontSize={18}
          />
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={adopted}
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={50}
            fill="#123456"
            label
            fontSize={18}
          />
          <Pie
            label
            dataKey="value"
            isAnimationActive={true}
            data={temporary}
            cx="80%"
            cy="50%"
            outerRadius={100}
            innerRadius={50}
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
