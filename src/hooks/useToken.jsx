import { useState } from "react";
import axios from "axios";
import { url } from "../utils/config";

const useToken = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const verifyToken = async () => {
		try {
			setIsLoading(true);

			const token = localStorage.getItem("token");

			if (!token) throw new Error("Unauthenticated");

			await axios.get(`${url}api/v1/dashboard`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			setIsLoading(false);
			setIsAuthenticated(true);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			setIsAuthenticated(false);
		}
	};

	const login = () => {
		setIsAuthenticated(true);
	};

	const logout = () => {
		localStorage.removeItem("token");
		setIsAuthenticated(false);
	};

	return {
		isAuthenticated,
		isLoading,
		verifyToken,
		login,
		logout,
	};
};

export default useToken;
