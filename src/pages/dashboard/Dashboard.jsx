import { Route, Routes, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";

import styles from "./_Dashboard.module.scss";
import AddPage from "./add/AddPage";

import DatabasePage from "./database/DatabasePage";
import StatisticsPage from "./statistics/StatisticsPage";
import SettingsPage from "./settings/SettingsPage";
import Unauthorized from "../unauthorized/Unauthorized";

import Sidebar from "./components/sidebar/Sidebar";

import AuthContext from "../../context/authContext";

const Dashboard = (props) => {
	const {
		isAuthenticated,
		isLoading: isVerifying,
		verifyToken,
	} = useContext(AuthContext);

	const { pathname } = useLocation();

	useEffect(() => {
		verifyToken();
	}, [pathname]);

	if (!isAuthenticated && isVerifying)
		return (
			<div className={styles.wrapper}>
				<Sidebar />
			</div>
		);

	if (!isAuthenticated && !isVerifying)
		return (
			<div className={styles.wrapper}>
				<Unauthorized />
			</div>
		);

	if (isAuthenticated)
		return (
			<div className={styles.wrapper}>
				<Sidebar />
				<Routes>
					<Route path="add" element={<AddPage />} />
					<Route path="database" element={<DatabasePage />} />
					<Route path="statistics" element={<StatisticsPage />} />
					<Route path="settings" element={<SettingsPage />} />
				</Routes>
			</div>
		);
};

export default Dashboard;
