import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Unauthorized from "../pages/unauthorized/Unauthorized";

const RequireAuth = ({ allowedRole }) => {
  const { role } = useAuth();
  const location = useLocation();

  return role === allowedRole ? <Outlet /> : <Unauthorized />;
};

export default RequireAuth;
