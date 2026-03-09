import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaBookmark, FaExternalLinkAlt } from "react-icons/fa";

const MATCHED = [
  { id:1, title:"Senior Frontend Developer", company:"TechCorp Inc.", location:"San Francisco, CA", salary:"$120k–$160k", match:96, skills:["React","TypeScript"], remote:true },
  { id:2, title:"Full Stack Engineer",       company:"DataFlow Labs",  location:"New York, NY",       salary:"$100k–$140k", match:88, skills:["JavaScript","Node.js"], remote:true },
  { id:4, title:"DevOps Engineer",           company:"CloudNine",      location:"Seattle, WA",        salary:"$130k–$170k", match:79, skills:["AWS","Docker"],        remote:true },
  { id:5, title:"React Native Developer",    company:"MobileFirst",    location:"Remote",             salary:"$60k–$90k",   match:74, skills:["React Native"],       remote:true },
];

const getMatchColor = (m) => m >= 90 ? "#22c55e" : m >= 80 ? "#3b82f6" : "#f59e0b";

const JobMatches = () => {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(() => {
    try { return JSON.parse(localStorage.getItem("savedJobs") || "[]"); } catch { return []; }
  });

  const toggleSave = (id) => {
    setSaved(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      localStorage.setItem("savedJobs", JSON.stringify(next));
      return next;
    });
  };

  return (
    <div className="job-matches-panel">
      <div className="job-matches-header">
        <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
          <FaStar style={{ color:"#f59e0b" }} />
          <span className="job-matches-title">AI Job Matches</span>
        </div>
        <span className="job-matches-count">{MATCHED.length} matches</span>
      </div>

      <div className="job-matches-list">
        {MATCHED.map(job => (
          <div key={job.id} className="job-match-card">
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"8px" }}>
              <div style={{ flex:1, minWidth:0 }}>
                <div className="jm-title">{job.title}</div>
                <div className="jm-company">{job.company}</div>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:"6px", flexShrink:0 }}>
                <div className="jm-match-badge" style={{ background: getMatchColor(job.match) }}>
                  {job.match}%
                </div>
                <button className={`jm-save-btn ${saved.includes(job.id) ? "saved" : ""}`}
                  onClick={() => toggleSave(job.id)}>
                  <FaBookmark />
                </button>
              </div>
            </div>

            <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"10px" }}>
              <span className="jm-meta"><FaMapMarkerAlt style={{ fontSize:"10px" }} /> {job.location}</span>
              <span className="jm-meta">{job.salary}</span>
              {job.remote && <span className="jm-remote-tag">Remote</span>}
            </div>

            <div style={{ display:"flex", gap:"6px", marginBottom:"12px", flexWrap:"wrap" }}>
              {job.skills.map((s,i) => <span key={i} className="jm-skill">{s}</span>)}
            </div>

            <button className="jm-apply-btn" onClick={() => navigate(`/jobs/${job.id}`)}>
              <FaExternalLinkAlt style={{ fontSize:"11px" }} /> View & Apply
            </button>
          </div>
        ))}
      </div>

      <button className="jm-view-all" onClick={() => navigate("/jobs")}>
        Browse All Jobs →
      </button>
    </div>
  );
};

export default JobMatches;