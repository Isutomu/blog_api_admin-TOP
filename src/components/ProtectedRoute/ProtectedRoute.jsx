import { Outlet, Navigate } from "react-router-dom";
import isLogged from "../../utils/auth/isLogged";

const ProtectedRoute = () => {
  if (!isLogged()) {
    return <Navigate to="/logIn" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
