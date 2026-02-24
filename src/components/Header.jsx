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
    <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          <div
            onClick={() => navigate("/")}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-blue-800">
              <FaBolt className="text-white" />
            </div>
            <span className="text-2xl font-semibold text-blue-400 tracking-wide">
              JobQuest
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <NavButton active={currentPath === "/"} onClick={() => navigate("/")} icon={<FaHome />} label="Home" />
            <NavButton active={currentPath === "/jobs"} onClick={() => navigate("/jobs")} icon={<FaSearch />} label="Find Jobs" />

            {isAuthenticated && userType === "jobseeker" && (
              <NavButton active={currentPath === "/jobseeker"} onClick={() => navigate("/jobseeker")} icon={<FaUser />} label="Dashboard" />
            )}

            {isAuthenticated && userType === "employer" && (
              <NavButton active={currentPath === "/employer"} onClick={() => navigate("/employer")} icon={<FaBriefcase />} label="Dashboard" />
            )}
          </nav>

          {!isAuthenticated ? (
            <div className="flex space-x-4">
              <button onClick={() => navigate("/signin")} className="text-gray-400 hover:text-white">Sign In</button>
              <button onClick={() => navigate("/signup")} className="px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded-lg">Sign Up</button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <div className="w-9 h-9 bg-blue-800 rounded-full flex items-center justify-center">
                <FaUser />
              </div>
              <button onClick={handleLogout} className="text-gray-400 hover:text-red-400">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const NavButton = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition ${
      active ? "bg-blue-900/40 text-blue-400" : "text-gray-400 hover:text-white hover:bg-white/5"
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default Header;