import { createContext } from "react";
import useToken from "../hooks/useToken";

const AuthContext = createContext({
	isAuthenticated: false,
	isLoading: false,
	verifyToken: () => {},
	logout: () => {},
});

export const AuthContextProvider = (props) => {
	const { isAuthenticated, isLoading, verifyToken, login, logout } = useToken();

	const contextValue = {
		isAuthenticated,
		isLoading,
		verifyToken,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
