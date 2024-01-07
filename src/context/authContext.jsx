import { createContext } from "react";
import useToken from "../hooks/useToken";

const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: false,
  isFetched: false,
  setIsFetched: () => {},
  role: null,
  setRole: () => {},
  verifyToken: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const {
    isAuthenticated,
    isLoading,
    isFetched,
    setIsFetched,
    role,
    setRole,
    verifyToken,
    login,
    logout,
  } = useToken();

  const contextValue = {
    isAuthenticated,
    isLoading,
    isFetched,
    setIsFetched,
    role,
    setRole,
    verifyToken,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
