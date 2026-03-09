import React from "react";
import { FaUser, FaStar, FaDownload, FaEye, FaCommentDots } from "react-icons/fa";

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

  const getScoreGradient = (score) => {
    if (score >= 90) return "linear-gradient(135deg,#22c55e,#16a34a)";
    if (score >= 80) return "linear-gradient(135deg,#3b82f6,#06b6d4)";
    return "linear-gradient(135deg,#f59e0b,#f97316)";
  };

  return (
    <div className="candidates-panel">

      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"20px" }}>
        <div style={{
          width:"40px", height:"40px", borderRadius:"10px",
          background:"linear-gradient(135deg,#3b82f6,#7c3aed)",
          display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0
        }}>
          <FaUser style={{ color:"#fff", fontSize:"16px" }} />
        </div>
        <div>
          <div className="candidates-panel-title">Top Candidates</div>
          <div className="candidates-panel-sub">ATS Score ≥ 80%</div>
        </div>
      </div>

      {/* Cards */}
      <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
        {candidates.map((c) => (
          <div key={c.id} className="candidate-card">

            {/* Top row */}
            <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"10px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                {/* Avatar */}
                <div style={{
                  width:"40px", height:"40px", borderRadius:"50%",
                  background:"linear-gradient(135deg,#3b82f6,#7c3aed)",
                  display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0
                }}>
                  <FaUser style={{ color:"#fff", fontSize:"14px" }} />
                </div>
                <div>
                  <div className="candidate-name">{c.name}</div>
                  <div className="candidate-title-text">{c.title}</div>
                  <div className="candidate-meta">{c.experience} · {c.location}</div>
                </div>
              </div>

              {/* Score */}
              <div style={{ display:"flex", alignItems:"center", gap:"6px", flexShrink:0 }}>
                <div className="score-badge" style={{ background: getScoreGradient(c.matchScore) }}>
                  {c.matchScore}%
                </div>
                <FaStar style={{ color:"#f59e0b", fontSize:"13px" }} />
              </div>
            </div>

            {/* Status */}
            <div style={{ marginBottom:"10px" }}>
              <span className={`status-badge ${c.status === "Available" ? "status-available" : "status-interviewing"}`}>
                <span style={{
                  width:"6px", height:"6px", borderRadius:"50%",
                  background: c.status === "Available" ? "#22c55e" : "#f59e0b",
                  display:"inline-block"
                }} />
                {c.status}
              </span>
            </div>

            {/* Skills */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginBottom:"12px" }}>
              {c.skills.map((skill, i) => (
                <span key={i} className="cand-skill-tag">{skill}</span>
              ))}
            </div>

            {/* Actions */}
            <div style={{ display:"flex", gap:"8px" }}>
              <button className="view-profile-btn">
                <FaEye style={{ fontSize:"12px" }} />
                View Profile
              </button>
              <button className="icon-btn"><FaDownload /></button>
              <button className="icon-btn"><FaCommentDots /></button>
            </div>

          </div>
        ))}
      </div>

      {/* Footer */}
      <button className="view-all-btn">View All Candidates →</button>

    </div>
  );
};

export default CandidateMatches;