import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

import styles from "./_Dashboard.module.scss";

import DatabasePage from "./database/DatabasePage";
import StatisticsPage from "./statistics/StatisticsPage";
import SettingsPage from "./settings/SettingsPage";
import AddAnimal from "./add/AddAnimal";
import AddArticle from "./add/AddArticle";

import Sidebar from "./components/sidebar/Sidebar";
import RequireAuth from "../../utils/requireAuth";

import useAuth from "../../hooks/useAuth";
import Unauthenticated from "../unauthenticated/Unauthenticated";
import InfoCard from "./components/_InfoCard";
import LoadingSpinner from "../../common/UI/LoadingSpinner";

const Dashboard = () => {
  const { isAuthenticated, isFetched, verifyToken } = useAuth();

  const { pathname } = useLocation();

  useEffect(() => {
    verifyToken();
  }, [pathname]);

  if (!isAuthenticated && isFetched)
    return (
      <div className={styles.wrapper}>
        <Unauthenticated />
      </div>
    );

  if (!isFetched)
    return (
      <div className={styles.wrapper}>
        <LoadingSpinner className={styles.spinner} />
      </div>
    );

  if (isAuthenticated && isFetched)
    return (
      <div className={styles.wrapper}>
        <InfoCard />
        <Sidebar />
        <Routes>
          <Route path="add" element={<Navigate to="animal" />} />
          <Route path="add/animal" element={<AddAnimal />} />
          <Route path="add/article" element={<AddArticle />} />
          <Route path="base" element={<DatabasePage />} />
          <Route path="stats" element={<StatisticsPage />} />
          <Route element={<RequireAuth allowedRole={"admin"} />}>
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </div>
    );
};

export default Dashboard;
