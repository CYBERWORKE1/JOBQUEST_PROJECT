import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import JobSeekerDashboard from "./components/JobSeekerDashboard";
import EmployerDashboard from "./components/EmployerDashboard";
import JobListings from "./components/JobListings";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    const role = localStorage.getItem("userType");

    if (auth === "true") setIsAuthenticated(true);
    if (role) setUserType(role);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col text-white">

      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/night.jpg')" }}
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col flex-grow">

        <Header
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          userType={userType}
          setUserType={setUserType}
        />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<JobListings />} />

            <Route
              path="/signin"
              element={
                isAuthenticated ? (
                  <Navigate
                    to={
                      userType === "employer"
                        ? "/employer"
                        : "/jobseeker"
                    }
                  />
                ) : (
                  <SignIn
                    setIsAuthenticated={setIsAuthenticated}
                    setUserType={setUserType}
                  />
                )
              }
            />

            <Route
              path="/signup"
              element={
                isAuthenticated ? (
                  <Navigate
                    to={
                      userType === "employer"
                        ? "/employer"
                        : "/jobseeker"
                    }
                  />
                ) : (
                  <SignUp
                    setIsAuthenticated={setIsAuthenticated}
                    setUserType={setUserType}
                  />
                )
              }
            />

            <Route
              path="/jobseeker"
              element={
                <ProtectedRoute allowedRole="jobseeker">
                  <JobSeekerDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/employer"
              element={
                <ProtectedRoute allowedRole="employer">
                  <EmployerDashboard />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        {/* Footer Always at Bottom */}
        <Footer />

      </div>
    </div>
  );
}

export default App;