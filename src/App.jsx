import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JobSeekerDashboard from "./components/JobSeekerDashboard";
import EmployerDashboard from "./components/EmployerDashboard";
import JobListings from "./components/JobListings";
import About from "./components/About";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [userType, setUserType] = useState(null);

  const renderCurrentView = () => {
    switch (currentView) {

      case "home":
        return (
          <>
            <Hero
              onGetStarted={setCurrentView}
              onUserTypeSelect={setUserType}
            />
            <About />
          </>
        );

      case "signin":
        return <SignIn setCurrentView={setCurrentView} />;

      case "signup":
        return <SignUp setCurrentView={setCurrentView} />;

      case "jobseeker":
        return <JobSeekerDashboard />;

      case "employer":
        return <EmployerDashboard />;

      case "jobs":
        return <JobListings />;

      default:
        return (
          <>
            <Hero
              onGetStarted={setCurrentView}
              onUserTypeSelect={setUserType}
            />
            <About />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10">
        <Header
          currentView={currentView}
          setCurrentView={setCurrentView}
          userType={userType}
          setUserType={setUserType}
        />

        {renderCurrentView()}
      </div>
    </div>
  );
}

export default App;
