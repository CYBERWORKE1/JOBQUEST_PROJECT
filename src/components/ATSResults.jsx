import React, { useEffect, useState } from "react";
import {
  FaBullseye,
  FaCheckCircle,
  FaExclamationTriangle,
  FaChartLine,
} from "react-icons/fa";

const ATSResults = ({ score }) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start >= score) {
        clearInterval(interval);
        start = score;
      }
      setAnimatedScore(start);
    }, 15);
  }, [score]);

  const getScoreStatus = (score) => {
    if (score >= 90)
      return { text: "Excellent", icon: FaCheckCircle, color: "text-green-400" };
    if (score >= 80)
      return { text: "Strong", icon: FaCheckCircle, color: "text-blue-400" };
    if (score >= 70)
      return {
        text: "Average",
        icon: FaExclamationTriangle,
        color: "text-yellow-400",
      };
    return {
      text: "Needs Improvement",
      icon: FaExclamationTriangle,
      color: "text-red-400",
    };
  };

  const status = getScoreStatus(score);
  const StatusIcon = status.icon;

  const keywords = [
    { word: "JavaScript", matched: true },
    { word: "React", matched: true },
    { word: "Node.js", matched: true },
    { word: "TypeScript", matched: false },
    { word: "Python", matched: true },
    { word: "AWS", matched: false },
    { word: "Docker", matched: true },
    { word: "MongoDB", matched: true },
  ];

  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset =
    circumference - (animatedScore / 100) * circumference;

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
      
      {/* Header */}
      <div className="flex items-center space-x-3 mb-10">
        <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg">
          <FaBullseye className="text-white text-xl" />
        </div>
        <h2 className="text-2xl font-bold text-white tracking-wide">
          ATS Analysis Report
        </h2>
      </div>

      {/* Score Section */}
      <div className="text-center mb-10">
        <div className="relative inline-flex items-center justify-center w-40 h-40">
          <svg className="w-40 h-40 -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="40"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="80"
              cy="80"
              r="40"
              stroke="#8B5CF6"
              strokeWidth="10"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-500 ease-out"
            />
          </svg>

          <div className="absolute text-center">
            <div className="text-4xl font-bold text-white">
              {animatedScore}%
            </div>
            <div
              className={`flex items-center justify-center space-x-1 text-sm ${status.color}`}
            >
              <StatusIcon />
              <span>{status.text}</span>
            </div>
          </div>
        </div>

        {score >= 80 && (
          <div className="mt-6 inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-green-500/20 border border-green-500/30">
            <FaCheckCircle className="text-green-400" />
            <span className="text-green-300 font-medium">
              Resume is ATS Optimized
            </span>
          </div>
        )}
      </div>

      {/* Keyword Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <FaChartLine className="text-blue-400" />
          <h3 className="text-lg font-semibold text-white">
            Keyword Matching
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {keywords.map((keyword, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                keyword.matched
                  ? "bg-green-500/10 border border-green-500/20"
                  : "bg-red-500/10 border border-red-500/20"
              }`}
            >
              <span className="text-white">{keyword.word}</span>
              {keyword.matched ? (
                <FaCheckCircle className="text-green-400" />
              ) : (
                <FaExclamationTriangle className="text-red-400" />
              )}
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
          <h4 className="text-blue-300 font-semibold mb-2">
            Smart Recommendations
          </h4>
          <ul className="text-gray-300 text-sm space-y-2">
            {score < 80 && (
              <li>• Add missing technical keywords like TypeScript & AWS.</li>
            )}
            <li>• Tailor resume keywords to job description.</li>
            <li>• Quantify achievements with measurable results.</li>
            <li>• Keep formatting ATS friendly.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ATSResults;
