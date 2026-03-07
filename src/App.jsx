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
    <div className="app-wrapper">

      {/* Background shapes */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>

      <div className="content-layer">

        <Header
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          userType={userType}
          setUserType={setUserType}
        />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<JobListings />} />

            <Route
              path="/signin"
              element={
                isAuthenticated ? (
                  <Navigate
                    to={userType === "employer" ? "/employer" : "/jobseeker"}
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
                    to={userType === "employer" ? "/employer" : "/jobseeker"}
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
        </main>

        <Footer />

      </div>
    </div>
  );
}

export default App;