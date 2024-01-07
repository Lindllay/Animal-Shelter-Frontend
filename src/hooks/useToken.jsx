import { useState } from "react";
import axios from "axios";
import { url } from "../utils/config";

const useToken = () => {
  const [isFetched, setIsFetched] = useState(false);
  /** isFetched allows to avoid situation that occurs when user is 
    logging in - displaying the unauthorized component for a split second. 
    This happens when Dashboard components are rendered only based on isAuthorized state.
    It's because after navigating to protected source, current state of isAuthorized 
    might be false, until verifyToken function completes its work by updating the 
    isAuthorized state. 
      IsFetched is true only after verifyToken has completed,
    which allows to render Unauthorized component based on that condition .**/
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState(null);

  const verifyToken = async () => {
    try {
      setIsLoading(true);

      const token = localStorage.getItem("token");

      if (!token) throw new Error("Unauthenticated");

      const response = await axios.get(`${url}api/v1/dashboard`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setRole(response.data.role);
      setIsAuthenticated(true);
      setIsLoading(false);
      setIsFetched(true);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsAuthenticated(false);
      setIsFetched(true);
      setRole(null);
    }
  };

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsFetched(false);
    setIsAuthenticated(false);
    setRole(null);
  };

  return {
    isAuthenticated,
    isLoading,
    verifyToken,
    login,
    logout,
    role,
    setRole,
    isFetched,
    setIsFetched,
  };
};

export default useToken;
