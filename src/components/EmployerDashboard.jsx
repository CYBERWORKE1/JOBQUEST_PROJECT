import React, { useState } from "react";
import JobPostingForm from "./JobPostingForm";
import CandidateMatches from "./CandidateMatches";
import {
  FaBriefcase,
  FaUsers,
  FaPlus,
  FaEye,
} from "react-icons/fa";

const EmployerDashboard = () => {
  const [showJobForm, setShowJobForm] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Dashboard Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
              <FaBriefcase className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                Employer Dashboard
              </h1>
              <p className="text-gray-300">
                Manage your job postings and candidates
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowJobForm(!showJobForm)}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
          >
            <FaPlus />
            <span>Post New Job</span>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <DashboardCard
            icon={FaBriefcase}
            title="Active Jobs"
            value="8"
            color="purple"
          />
          <DashboardCard
            icon={FaUsers}
            title="Total Candidates"
            value="124"
            color="blue"
          />
          <DashboardCard
            icon={FaEye}
            title="Views This Week"
            value="342"
            color="green"
          />
          <DashboardCard
            icon={FaUsers}
            title="Hired"
            value="3"
            color="yellow"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Column */}
        <div className="lg:col-span-2">
          {showJobForm ? (
            <JobPostingForm onClose={() => setShowJobForm(false)} />
          ) : (
            <div className="backdrop-blur-lg bg-white/5 rounded-xl p-8 border border-white/10 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <FaPlus className="text-purple-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Post Your First Job
                  </h3>
                  <p className="text-gray-300">
                    Start finding qualified candidates with our AI-powered matching system
                  </p>
                </div>
                <button
                  onClick={() => setShowJobForm(true)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:from-purple-400 hover:to-pink-500 transition-all duration-300"
                >
                  Create Job Posting
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div>
          <CandidateMatches />
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ icon: Icon, title, value, color }) => {
  const colorClasses = {
    purple: "from-purple-500 to-pink-500",
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-emerald-500",
    yellow: "from-yellow-500 to-orange-500",
  };

  return (
    <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-300 text-sm">{title}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
        <div
          className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses[color]}`}
        >
          <Icon className="text-white text-lg" />
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
