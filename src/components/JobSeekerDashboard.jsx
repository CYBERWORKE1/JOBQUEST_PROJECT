import React, { useState } from "react";
import ResumeUpload from "./ResumeUpload";
import ATSResults from "./ATSResults";
import JobMatches from "./JobMatches";
import {
  FaUser,
  FaFileAlt,
  FaBullseye,
  FaStar,
} from "react-icons/fa";

const JobSeekerDashboard = () => {
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [atsScore, setAtsScore] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <FaUser className="text-white text-2xl" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              Job Seeker Dashboard
            </h1>
            <p className="text-gray-300">
              Manage your profile and track job applications
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <DashboardCard
            icon={FaFileAlt}
            title="Resume Status"
            value={resumeUploaded ? "Uploaded" : "Not Uploaded"}
            color={resumeUploaded ? "green" : "red"}
          />
          <DashboardCard
            icon={FaBullseye}
            title="ATS Score"
            value={atsScore ? `${atsScore}%` : "N/A"}
            color={atsScore && atsScore >= 80 ? "green" : "yellow"}
          />
          <DashboardCard
            icon={FaStar}
            title="Job Matches"
            value="12"
            color="blue"
          />
          <DashboardCard
            icon={FaUser}
            title="Applications"
            value="5"
            color="purple"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left */}
        <div className="lg:col-span-2 space-y-8">
          <ResumeUpload
            onResumeUpload={setResumeUploaded}
            onATSScore={setAtsScore}
          />

          {atsScore && <ATSResults score={atsScore} />}
        </div>

        {/* Right */}
        <div className="space-y-8">
          <JobMatches />
        </div>

      </div>
    </div>
  );
};

const DashboardCard = ({ icon: Icon, title, value, color }) => {
  const colorClasses = {
    green: "from-green-500 to-emerald-500",
    red: "from-red-500 to-pink-500",
    yellow: "from-yellow-500 to-orange-500",
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-pink-500",
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

export default JobSeekerDashboard;
