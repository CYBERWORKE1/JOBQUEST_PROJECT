import React from "react";
import {
  FaUpload,
  FaBriefcase,
  FaBolt,
  FaBullseye,
  FaAward,
} from "react-icons/fa";

const Hero = ({ onGetStarted, onUserTypeSelect }) => {
  const handleRoleSelect = (role) => {
    onUserTypeSelect(role);
    onGetStarted(role);
  };

  return (
    <div className="relative overflow-hidden">

      {/* Soft Blue Ambient Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-indigo-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* Hero Section */}
        <div className="text-center space-y-8 mb-24">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-white">
              Find Your
            </span>
            <br />
            <span className="text-blue-400">
              Dream Career
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            AI-powered job matching platform connecting talent with the right
            opportunities using intelligent ATS scoring and smart compatibility
            analysis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">

            <button
              onClick={() => handleRoleSelect("jobseeker")}
              className="px-8 py-4 bg-blue-800 hover:bg-blue-700 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/40"
            >
              <div className="flex items-center space-x-2">
                <FaUpload />
                <span>I'm Looking for Jobs</span>
              </div>
            </button>

            <button
              onClick={() => handleRoleSelect("employer")}
              className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-white font-medium transition-all duration-300 backdrop-blur-xl"
            >
              <div className="flex items-center space-x-2">
                <FaBriefcase />
                <span>I'm Hiring Talent</span>
              </div>
            </button>

          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">

          <FeatureCard
            icon={FaBolt}
            title="AI-Powered ATS Parsing"
            description="Advanced resume analysis with intelligent keyword detection and smart ranking."
          />

          <FeatureCard
            icon={FaBullseye}
            title="Smart Keyword Matching"
            description="Automatically match skills and job requirements with high precision."
          />

          <FeatureCard
            icon={FaAward}
            title="Quality Scoring"
            description="Get compatibility scores that highlight the best opportunities instantly."
          />

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8">

          <StatCard number="50K+" label="Active Jobs" />
          <StatCard number="95%" label="Match Accuracy" />
          <StatCard number="10K+" label="Companies" />
          <StatCard number="2x" label="Faster Hiring" />

        </div>

      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-900/20">
      <div className="mb-4 p-3 inline-flex rounded-xl bg-blue-900/40">
        <Icon className="text-blue-400 text-xl" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const StatCard = ({ number, label }) => {
  return (
    <div className="text-center space-y-2">
      <div className="text-4xl font-bold text-blue-400">
        {number}
      </div>
      <div className="text-gray-400">
        {label}
      </div>
    </div>
  );
};

export default Hero;