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
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Hero Section */}
        <div className="text-center space-y-8 mb-20">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Find Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Dream Job
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Advanced ATS-powered platform that matches job seekers with perfect opportunities 
              and helps employers find ideal candidates with 80%+ compatibility scores.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <button
              onClick={() => handleRoleSelect("jobseeker")}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <div className="flex items-center space-x-2">
                <FaUpload />
                <span>I'm Looking for Jobs</span>
              </div>
            </button>

            <button
              onClick={() => handleRoleSelect("employer")}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <div className="flex items-center space-x-2">
                <FaBriefcase />
                <span>I'm Hiring Talent</span>
              </div>
            </button>

          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <FeatureCard
            icon={FaBolt}
            title="AI-Powered ATS Parsing"
            description="Advanced algorithms analyze resumes with 95% accuracy, ensuring perfect job matches with scores ≥80%"
            gradient="from-blue-500 to-cyan-500"
          />
          <FeatureCard
            icon={FaBullseye}
            title="Smart Keyword Matching"
            description="Intelligent matching system highlights relevant skills and experience, saving employers valuable time"
            gradient="from-purple-500 to-pink-500"
          />
          <FeatureCard
            icon={FaAward}
            title="Quality Scoring"
            description="Comprehensive compatibility scoring ensures only the best matches are highlighted for review"
            gradient="from-green-500 to-blue-500"
          />
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8">
          <StatCard number="50,000+" label="Active Jobs" />
          <StatCard number="95%" label="Match Accuracy" />
          <StatCard number="10,000+" label="Companies" />
          <StatCard number="2x" label="Faster Hiring" />
        </div>

      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, gradient }) => {
  return (
    <div className="group relative backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
      <div className="space-y-4">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient}`}>
          <Icon className="text-white text-xl" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ number, label }) => {
  return (
    <div className="text-center space-y-2">
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
};

export default Hero;
