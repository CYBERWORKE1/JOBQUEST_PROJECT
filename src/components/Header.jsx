import React from "react";
import {
  FaSearch,
  FaUser,
  FaBriefcase,
  FaHome,
  FaBolt,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({
  isAuthenticated,
  setIsAuthenticated,
  userType,
  setUserType,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userType");
    setIsAuthenticated(false);
    setUserType(null);
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="logo" onClick={() => navigate("/")}>
          <FaBolt />
          <span>JobQuest</span>
        </div>

        <nav className="nav-links">

          <NavButton
            active={currentPath === "/"}
            onClick={() => navigate("/")}
            icon={<FaHome />}
            label="Home"
          />

          <NavButton
            active={currentPath === "/jobs"}
            onClick={() => navigate("/jobs")}
            icon={<FaSearch />}
            label="Jobs"
          />

          {isAuthenticated && userType === "jobseeker" && (
            <NavButton
              active={currentPath === "/jobseeker"}
              onClick={() => navigate("/jobseeker")}
              icon={<FaUser />}
              label="Dashboard"
            />
          )}

          {isAuthenticated && userType === "employer" && (
            <NavButton
              active={currentPath === "/employer"}
              onClick={() => navigate("/employer")}
              icon={<FaBriefcase />}
              label="Dashboard"
            />
          )}

        </nav>

        {!isAuthenticated ? (
          <div className="nav-auth">
            <button
              onClick={() => navigate("/signin")}
              className="login-btn"
            >
              Sign In
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="signup-btn"
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div className="nav-user">
            <div className="avatar">
              <FaUser />
            </div>

            <button
              onClick={handleLogout}
              className="logout-btn"
            >
              Logout
            </button>
          </div>
        )}

      </div>
    </header>
  );
};

const NavButton = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`nav-button ${active ? "active" : ""}`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default Header;