import React, { useState } from "react";
import JobPostingForm from "./JobPostingForm";
import CandidateMatches from "./CandidateMatches";
import { FaBriefcase, FaUsers, FaPlus, FaEye } from "react-icons/fa";

const EmployerDashboard = () => {
  const [showJobForm, setShowJobForm] = useState(false);

  return (
    <div className="dashboard-page">

      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"32px", flexWrap:"wrap", gap:"16px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"16px" }}>
          <div style={{
            width:"56px", height:"56px", borderRadius:"16px",
            background:"linear-gradient(135deg,#7c3aed,#ec4899)",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 4px 14px rgba(124,58,237,.35)", flexShrink:0
          }}>
            <FaBriefcase style={{ color:"#fff", fontSize:"22px" }} />
          </div>
          <div>
            <h1 style={{ fontSize:"26px", fontWeight:"800", color:"var(--text-primary)", letterSpacing:"-.03em", marginBottom:"2px" }}>
              Employer Dashboard
            </h1>
            <p style={{ fontSize:"14px", color:"var(--text-muted)", fontWeight:"500" }}>
              Manage your job postings and candidates
            </p>
          </div>
        </div>

        <button className="post-job-btn" onClick={() => setShowJobForm(!showJobForm)}>
          <FaPlus style={{ fontSize:"12px" }} />
          Post New Job
        </button>
      </div>

      {/* Stat cards */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"16px", marginBottom:"32px" }}>
        <StatCard icon={FaBriefcase} label="Active Jobs"       value="8"   gradient="linear-gradient(135deg,#7c3aed,#ec4899)" bg="#fdf4ff" />
        <StatCard icon={FaUsers}    label="Total Candidates"   value="124" gradient="linear-gradient(135deg,#3b82f6,#06b6d4)" bg="#eff6ff" />
        <StatCard icon={FaEye}      label="Views This Week"    value="342" gradient="linear-gradient(135deg,#22c55e,#16a34a)" bg="#f0fdf4" />
        <StatCard icon={FaUsers}    label="Hired"              value="3"   gradient="linear-gradient(135deg,#f59e0b,#f97316)" bg="#fffbeb" />
      </div>

      {/* Main grid */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 380px", gap:"24px", alignItems:"start" }}>

        {/* Left */}
        <div>
          {showJobForm ? (
            <JobPostingForm onClose={() => setShowJobForm(false)} />
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">
                <FaPlus style={{ color:"#7c3aed", fontSize:"22px" }} />
              </div>
              <h3>Post Your First Job</h3>
              <p>Start finding qualified candidates with our AI-powered matching system</p>
              <button
                className="post-job-btn"
                onClick={() => setShowJobForm(true)}
                style={{ margin:"0 auto" }}
              >
                Create Job Posting
              </button>
            </div>
          )}
        </div>

        {/* Right */}
        <CandidateMatches />

      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value, gradient, bg }) => (
  <div className="stat-card">
    <div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
    </div>
    <div className="stat-icon-wrap" style={{ background: bg }}>
      <div style={{
        width:"36px", height:"36px", borderRadius:"10px",
        background: gradient,
        display:"flex", alignItems:"center", justifyContent:"center",
        boxShadow:"0 2px 8px rgba(0,0,0,.15)"
      }}>
        <Icon style={{ color:"#fff", fontSize:"16px" }} />
      </div>
    </div>
  </div>
);

export default EmployerDashboard;