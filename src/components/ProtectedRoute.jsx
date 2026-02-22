import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const userType = localStorage.getItem("userType");

  if (isAuthenticated !== "true") {
    return <Navigate to="/signin" replace />;
  }

  if (allowedRole && userType !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;