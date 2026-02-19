import React from "react";
import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaArrowUp,
} from "react-icons/fa";

const JobMatches = () => {
  const jobMatches = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$120k - $150k",
      matchScore: 94,
      postedTime: "2 hours ago",
      keywords: ["React", "TypeScript", "Node.js"],
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "Remote",
      salary: "$100k - $130k",
      matchScore: 87,
      postedTime: "5 hours ago",
      keywords: ["JavaScript", "Python", "AWS"],
    },
    {
      id: 3,
      title: "React Developer",
      company: "Digital Solutions",
      location: "New York, NY",
      salary: "$90k - $120k",
      matchScore: 82,
      postedTime: "1 day ago",
      keywords: ["React", "Redux", "GraphQL"],
    },
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return "from-green-500 to-emerald-500";
    if (score >= 80) return "from-blue-500 to-cyan-500";
    return "from-yellow-500 to-orange-500";
  };

  return (
    <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10">

      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-500">
          <FaStar className="text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Job Matches</h2>
          <p className="text-gray-300 text-sm">Based on your resume</p>
        </div>
      </div>

      {/* Match Cards */}
      <div className="space-y-4">
        {jobMatches.map((job) => (
          <div
            key={job.id}
            className="group backdrop-blur-lg bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
          >

            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-200">
                  {job.title}
                </h3>
                <p className="text-gray-300 text-sm">{job.company}</p>
              </div>

              {/* Match Score */}
              <div className="flex items-center space-x-2">
                <div
                  className={`px-3 py-1 rounded-full bg-gradient-to-r ${getScoreColor(
                    job.matchScore
                  )} text-white text-sm font-bold`}
                >
                  {job.matchScore}%
                </div>
                <FaArrowUp className="text-green-400 text-sm" />
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <FaMapMarkerAlt />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FaClock />
                <span>{job.postedTime}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-gray-300 text-sm mb-3">
              <FaDollarSign />
              <span>{job.salary}</span>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2">
              {job.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-500/30"
                >
                  {keyword}
                </span>
              ))}
            </div>

            {/* Button */}
            <div className="mt-4 pt-3 border-t border-white/10">
              <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-300">
                Apply Now
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center">
        <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200">
          View All Matches →
        </button>
      </div>

    </div>
  );
};

export default JobMatches;
