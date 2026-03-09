import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userType = localStorage.getItem("userType");

  if (!isAuthenticated) return <Navigate to="/signin" replace />;
  if (allowedRole && userType !== allowedRole) {
    return <Navigate to={userType === "employer" ? "/employer" : "/jobseeker"} replace />;
  }
  return children;
};

export default ProtectedRoute;