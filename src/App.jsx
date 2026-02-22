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
    <div className="min-h-screen bg-[#0b0f19] text-white">
      <Header
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        userType={userType}
        setUserType={setUserType}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
            </>
          }
        />

        <Route path="/jobs" element={<JobListings />} />

        <Route
          path="/signin"
          element={
            isAuthenticated ? (
              <Navigate
                to={userType === "employer" ? "/employer" : "/jobseeker"}
                replace
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
                replace
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

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;