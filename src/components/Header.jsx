import React from "react";
import {
  FaSearch,
  FaUser,
  FaBriefcase,
  FaHome,
  FaBolt,
} from "react-icons/fa";

const Header = ({ currentView, setCurrentView, userType }) => {
  return (
    <header className="backdrop-blur-lg bg-black/20 border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => setCurrentView("home")}
          >
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
              <FaBolt className="text-white text-lg" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              JobQuest
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentView("home")}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                currentView === "home"
                  ? "text-blue-400 bg-blue-400/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <FaHome className="text-sm" />
              <span>Home</span>
            </button>

            <button
              onClick={() => setCurrentView("jobs")}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                currentView === "jobs"
                  ? "text-blue-400 bg-blue-400/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <FaSearch className="text-sm" />
              <span>Find Jobs</span>
            </button>

            {userType === "jobseeker" && (
              <button
                onClick={() => setCurrentView("jobseeker")}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  currentView === "jobseeker"
                    ? "text-blue-400 bg-blue-400/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <FaUser className="text-sm" />
                <span>Dashboard</span>
              </button>
            )}

            {userType === "employer" && (
              <button
                onClick={() => setCurrentView("employer")}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  currentView === "employer"
                    ? "text-blue-400 bg-blue-400/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <FaBriefcase className="text-sm" />
                <span>Dashboard</span>
              </button>
            )}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {!userType ? (
              <div className="flex items-center space-x-2">
                <button className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                  Sign In
                </button>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Sign Up
                </button>
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <FaUser className="text-white text-sm" />
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
