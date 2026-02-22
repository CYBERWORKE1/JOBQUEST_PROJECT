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
    <header className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-blue-700">
              <FaBolt className="text-white text-lg" />
            </div>
            <span className="text-2xl font-semibold text-blue-400 tracking-wide">
              JobQuest
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">

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
              label="Find Jobs"
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

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => navigate("/signin")}
                  className="text-gray-400 hover:text-white transition"
                >
                  Sign In
                </button>

                <button
                  onClick={() => navigate("/signup")}
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-lg transition"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center">
                  <FaUser className="text-white text-sm" />
                </div>

                <button
                  onClick={handleLogout}
                  className="text-gray-400 hover:text-red-400 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

const NavButton = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition ${
      active
        ? "bg-blue-900/40 text-blue-400"
        : "text-gray-400 hover:text-white hover:bg-white/5"
    }`}
  >
    <span className="text-sm">{icon}</span>
    <span>{label}</span>
  </button>
);

export default Header;