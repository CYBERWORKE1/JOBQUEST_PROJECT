import React from "react";
import {
  FaUpload,
  FaBriefcase,
  FaBolt,
  FaBullseye,
  FaAward,
} from "react-icons/fa";
import JobSearchBar from "./JobSearchBar";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    localStorage.setItem("userType", role);
    localStorage.setItem("isAuthenticated", "true");

    if (role === "jobseeker") {
      navigate("/jobseeker");
    } else {
      navigate("/employer");
    }
  };

  return (
    <div className="relative min-h-screen animated-bg overflow-hidden">

      {/* Soft White Floating Lights */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-white/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-white/5 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">

        <div className="text-center space-y-10 mb-20 fade-up">

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="text-white">Find Your</span>
            <br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Dream Career
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AI-powered job matching platform connecting talent with the right
            opportunities using intelligent ATS scoring.
          </p>

          <JobSearchBar />

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">

            <button
              onClick={() => handleRoleSelect("jobseeker")}
              className="glass-card hover-lift px-10 py-4 text-white font-medium flex items-center space-x-3 transition-all duration-300"
            >
              <FaUpload className="text-gray-200" />
              <span>I'm Looking for Jobs</span>
            </button>

            <button
              onClick={() => handleRoleSelect("employer")}
              className="glass-card hover-lift px-10 py-4 text-white font-medium flex items-center space-x-3 transition-all duration-300"
            >
              <FaBriefcase className="text-gray-300" />
              <span>I'm Hiring Talent</span>
            </button>

          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-10 mb-28 fade-up">
          <FeatureCard icon={FaBolt} title="AI-Powered ATS Parsing" />
          <FeatureCard icon={FaBullseye} title="Smart Keyword Matching" />
          <FeatureCard icon={FaAward} title="Quality Scoring" />
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-10 fade-up">
          <StatCard number="50K+" label="Active Jobs" />
          <StatCard number="95%" label="Match Accuracy" />
          <StatCard number="10K+" label="Companies" />
          <StatCard number="2x" label="Faster Hiring" />
        </div>

      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title }) => (
  <div className="glass-card hover-lift p-10 text-center transition-all duration-500">
    <div className="mb-6 p-4 inline-flex rounded-2xl bg-white/10">
      <Icon className="text-gray-200 text-2xl" />
    </div>
    <h3 className="text-xl font-semibold text-white tracking-wide">
      {title}
    </h3>
  </div>
);

const StatCard = ({ number, label }) => (
  <div className="text-center space-y-3 hover-lift transition-all duration-500">
    <div className="text-5xl font-extrabold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
      {number}
    </div>
    <div className="text-gray-300 text-lg">{label}</div>
  </div>
);

export default Hero;