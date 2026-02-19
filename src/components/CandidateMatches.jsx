import React from "react";
import {
  FaUser,
  FaStar,
  FaDownload,
  FaEye,
  FaCommentDots,
} from "react-icons/fa";

const CandidateMatches = () => {
  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Frontend Developer",
      experience: "5+ years",
      matchScore: 96,
      skills: ["React", "TypeScript", "Node.js"],
      location: "San Francisco, CA",
      status: "Available",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Full Stack Engineer",
      experience: "4+ years",
      matchScore: 89,
      skills: ["JavaScript", "Python", "AWS"],
      location: "Remote",
      status: "Available",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "React Developer",
      experience: "3+ years",
      matchScore: 84,
      skills: ["React", "Redux", "GraphQL"],
      location: "Austin, TX",
      status: "Interviewing",
    },
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return "from-green-500 to-emerald-500";
    if (score >= 80) return "from-blue-500 to-cyan-500";
    return "from-yellow-500 to-orange-500";
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Interviewing":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10">
      
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
          <FaUser className="h-5 w-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Top Candidates</h2>
          <p className="text-gray-300 text-sm">ATS Score ≥ 80%</p>
        </div>
      </div>

      {/* Candidate Cards */}
      <div className="space-y-4">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="group backdrop-blur-lg bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <FaUser className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">
                    {candidate.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {candidate.title}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {candidate.experience} • {candidate.location}
                  </p>
                </div>
              </div>

              {/* Match Score */}
              <div className="flex items-center space-x-2">
                <div
                  className={`px-3 py-1 rounded-full bg-gradient-to-r ${getScoreColor(
                    candidate.matchScore
                  )} text-white text-sm font-bold`}
                >
                  {candidate.matchScore}%
                </div>
                <FaStar className="text-yellow-400" />
              </div>
            </div>

            {/* Status */}
            <div className="mb-3">
              <span
                className={`px-2 py-1 rounded text-xs border ${getStatusColor(
                  candidate.status
                )}`}
              >
                {candidate.status}
              </span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {candidate.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button className="flex-1 flex items-center justify-center space-x-2 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-300 text-sm">
                <FaEye />
                <span>View Profile</span>
              </button>

              <button className="p-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-all duration-300">
                <FaDownload />
              </button>

              <button className="p-2 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-all duration-300">
                <FaCommentDots />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center">
        <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200">
          View All Candidates →
        </button>
      </div>
    </div>
  );
};

export default CandidateMatches;
