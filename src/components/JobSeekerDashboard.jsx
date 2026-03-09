import { useState } from "react";
import { FaUser, FaFileAlt, FaBullseye, FaStar, FaBookmark, FaCheckCircle, FaBell, FaEdit } from "react-icons/fa";
import ResumeUpload from "./ResumeUpload";
import ATSResults from "./ATSResults";
import JobMatches from "./JobMatches";

const JobSeekerDashboard = () => {
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [atsScore, setAtsScore] = useState(null);

  const savedCount = (() => {
    try { return JSON.parse(localStorage.getItem("savedJobs") || "[]").length; } catch { return 0; }
  })();

  const appliedJobs = [
    { id:1, title:"Senior Frontend Developer", company:"TechCorp Inc.",  status:"Interview", date:"Mar 5, 2026", color:"#3b82f6" },
    { id:2, title:"Full Stack Engineer",        company:"DataFlow Labs",  status:"Applied",   date:"Mar 3, 2026", color:"#7c3aed" },
    { id:3, title:"React Developer",            company:"StartupXYZ",    status:"Rejected",  date:"Feb 28, 2026", color:"#ec4899" },
  ];

  const statusStyle = {
    Interview: { bg:"#dcfce7", color:"#16a34a", label:"🎉 Interview" },
    Applied:   { bg:"#dbeafe", color:"#1d4ed8", label:"📨 Applied"   },
    Rejected:  { bg:"#fee2e2", color:"#b91c1c", label:"❌ Rejected"  },
  };

  return (
    <div className="dashboard-page">

      {/* ── Header ── */}
      <div className="jsd-header">
        <div style={{ display:"flex", alignItems:"center", gap:"16px" }}>
          <div className="jsd-avatar">
            <FaUser style={{ fontSize:"24px", color:"#fff" }} />
          </div>
          <div>
            <h1 className="jsd-name">Welcome back, Eklavya! 👋</h1>
            <p className="jsd-role">Job Seeker · Full Stack Developer</p>
          </div>
        </div>
        <button className="jsd-edit-btn"><FaEdit style={{ fontSize:"13px" }} /> Edit Profile</button>
      </div>

      {/* ── Stats ── */}
      <div className="jsd-stats-grid">
        <StatCard icon={FaFileAlt}   label="Resume"       value={resumeUploaded ? "Uploaded" : "Not Uploaded"} sub={resumeUploaded ? "Ready for ATS" : "Upload to start"} gradient="linear-gradient(135deg,#3b82f6,#7c3aed)" bg="#eff6ff" iconColor={resumeUploaded ? "#22c55e" : "#ef4444"} />
        <StatCard icon={FaBullseye}  label="ATS Score"    value={atsScore ? `${atsScore}%` : "—"} sub={atsScore ? (atsScore>=80?"Strong resume":"Needs work") : "Upload resume"} gradient="linear-gradient(135deg,#7c3aed,#ec4899)" bg="#fdf4ff" />
        <StatCard icon={FaStar}      label="Job Matches"  value="4"  sub="AI matched today"   gradient="linear-gradient(135deg,#f59e0b,#f97316)" bg="#fffbeb" />
        <StatCard icon={FaBookmark}  label="Saved Jobs"   value={savedCount} sub="Bookmarked"   gradient="linear-gradient(135deg,#22c55e,#16a34a)" bg="#f0fdf4" />
      </div>

      {/* ── Main content ── */}
      <div className="jsd-main-grid">

        {/* Left column */}
        <div style={{ display:"flex", flexDirection:"column", gap:"24px" }}>

          {/* Resume Upload */}
          <ResumeUpload onResumeUpload={setResumeUploaded} onATSScore={setAtsScore} />

          {/* ATS Results */}
          {atsScore && <ATSResults score={atsScore} />}

          {/* Applications tracker */}
          <div className="jsd-applications-card">
            <div className="jsd-card-header">
              <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                <FaCheckCircle style={{ color:"var(--blue-primary)" }} />
                <h3 className="jsd-card-title">My Applications</h3>
              </div>
              <span className="jsd-badge">{appliedJobs.length} total</span>
            </div>

            <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
              {appliedJobs.map(job => {
                const s = statusStyle[job.status];
                return (
                  <div key={job.id} className="jsd-application-item">
                    <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                      <div style={{ width:"40px", height:"40px", borderRadius:"10px",
                        background:`linear-gradient(135deg,${job.color},${job.color}88)`,
                        display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                        <FaFileAlt style={{ color:"#fff", fontSize:"14px" }} />
                      </div>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div className="jsd-app-title">{job.title}</div>
                        <div className="jsd-app-company">{job.company} · {job.date}</div>
                      </div>
                    </div>
                    <span className="jsd-status-chip" style={{ background:s.bg, color:s.color }}>{s.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right column */}
        <div style={{ display:"flex", flexDirection:"column", gap:"24px" }}>

          {/* Alerts */}
          <div className="jsd-alerts-card">
            <div className="jsd-card-header">
              <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                <FaBell style={{ color:"#f59e0b" }} />
                <h3 className="jsd-card-title">Job Alerts</h3>
              </div>
            </div>
            {[
              { text:"3 new React jobs in San Francisco", time:"2h ago", dot:"#3b82f6" },
              { text:"TechCorp viewed your profile",       time:"5h ago", dot:"#22c55e" },
              { text:"Your ATS score improved to high",    time:"1d ago", dot:"#7c3aed" },
            ].map((a,i) => (
              <div key={i} className="jsd-alert-item">
                <div className="jsd-alert-dot" style={{ background:a.dot }} />
                <div style={{ flex:1 }}>
                  <div className="jsd-alert-text">{a.text}</div>
                  <div className="jsd-alert-time">{a.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Job Matches */}
          <JobMatches />

        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value, sub, gradient, bg }) => (
  <div className="stat-card">
    <div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div style={{ fontSize:"12px", color:"var(--text-muted)", fontWeight:500, marginTop:"2px" }}>{sub}</div>
    </div>
    <div className="stat-icon-wrap" style={{ background:bg }}>
      <div style={{ width:"36px", height:"36px", borderRadius:"10px", background:gradient,
        display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 2px 8px rgba(0,0,0,.15)" }}>
        <Icon style={{ color:"#fff", fontSize:"16px" }} />
      </div>
    </div>
  </div>
);

export default JobSeekerDashboard;