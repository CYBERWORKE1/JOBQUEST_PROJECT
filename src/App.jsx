import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import About from "./components/About";

import JobListings from "./components/JobListings";
import JobDetail from "./components/JobDetail";

import JobSeekerDashboard from "./components/JobSeekerDashboard";
import EmployerDashboard from "./components/EmployerDashboard";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

import { ToastProvider } from "./components/ToastProvider";
import { DarkModeProvider } from "./components/DarkModeProvider";


/* Animated route wrapper */
const AnimatedRoutes = ({
  isAuthenticated,
  setIsAuthenticated,
  userType,
  setUserType
}) => {

  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">

      <Routes location={location}>

        <Route path="/" element={<Hero />} />

        <Route path="/about" element={<About />} />

        <Route path="/jobs" element={<JobListings />} />

        <Route path="/jobs/:id" element={<JobDetail />} />


        <Route
          path="/signin"
          element={
            isAuthenticated
              ? <Navigate to={userType === "employer" ? "/employer" : "/jobseeker"} replace />
              : <SignIn
                  setIsAuthenticated={setIsAuthenticated}
                  setUserType={setUserType}
                />
          }
        />

        <Route
          path="/signup"
          element={
            isAuthenticated
              ? <Navigate to={userType === "employer" ? "/employer" : "/jobseeker"} replace />
              : <SignUp
                  setIsAuthenticated={setIsAuthenticated}
                  setUserType={setUserType}
                />
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


        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
  );
};


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  useEffect(() => {

    if (localStorage.getItem("isAuthenticated") === "true") {
      setIsAuthenticated(true);
    }

    const role = localStorage.getItem("userType");
    if (role) {
      setUserType(role);
    }

  }, []);


  return (
    <DarkModeProvider>

      <ToastProvider>

        <div className="app-wrapper">

          <div className="bg-shape shape-1" />
          <div className="bg-shape shape-2" />
          <div className="bg-shape shape-3" />

          <div className="content-layer">

            <Header
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              userType={userType}
              setUserType={setUserType}
            />

            <main className="page-content">

              <AnimatedRoutes
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                userType={userType}
                setUserType={setUserType}
              />

            </main>

            <Footer />

          </div>

        </div>

      </ToastProvider>

    </DarkModeProvider>
  );
}

export default App;