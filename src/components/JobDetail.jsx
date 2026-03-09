import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
  FaBookmark,
  FaRegBookmark,
  FaCheckCircle,
  FaBriefcase,
  FaArrowLeft,
  FaExternalLinkAlt,
  FaShare
} from "react-icons/fa";

import { JOBS } from "./Jobs";
import { useToast } from "./ToastProvider";

const JobDetail = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const job = JOBS.find(j => j.id === parseInt(id));

  const [saved, setSaved] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("savedJobs") || "[]").includes(job?.id);
    } catch {
      return false;
    }
  });

  const [applied, setApplied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  if (!job) {
    return (
      <div className="not-found-page">
        <div className="nf-code">404</div>
        <h2 className="nf-title">Job Not Found</h2>
        <p className="nf-sub">This job posting may have been removed.</p>

        <button
          className="primary-btn"
          onClick={() => navigate("/jobs")}
        >
          ← Back to Jobs
        </button>
      </div>
    );
  }

  const toggleSave = () => {
    setSaved(prev => {

      const saved = JSON.parse(localStorage.getItem("savedJobs") || "[]");

      const next = prev
        ? saved.filter(x => x !== job.id)
        : [...saved, job.id];

      localStorage.setItem("savedJobs", JSON.stringify(next));

      showToast(
        prev ? "Job removed from saved" : "Job saved! 🔖",
        prev ? "info" : "success"
      );

      return !prev;
    });
  };

  const handleApply = () => {
    setApplied(true);
    setShowModal(false);

    showToast(
      `Applied to ${job.title} at ${job.company}! 🎉`,
      "success"
    );
  };

  return (
    <div className="job-detail-page">

      {/* Back button */}

      <button
        className="jd-back-btn"
        onClick={() => navigate("/jobs")}
      >
        <FaArrowLeft /> Back to Jobs
      </button>


      <div className="jd-layout">

        {/* MAIN CONTENT */}

        <div className="jd-main">

          <div className="jd-header-card">

            <div className="jd-header-top">

              <div
                className="jd-company-logo"
                style={{
                  background: `linear-gradient(135deg,${job.color},${job.color}99)`
                }}
              >
                {job.initials}
              </div>

              <div style={{ flex: 1 }}>

                <h1 className="jd-title">{job.title}</h1>

                <div className="jd-company">
                  {job.company}
                </div>

                <div className="jd-meta-row">

                  <span className="jd-meta">
                    <FaMapMarkerAlt /> {job.location}
                  </span>

                  <span className="jd-meta">
                    <FaBriefcase /> {job.type}
                  </span>

                  <span className="jd-meta">
                    <FaClock /> {job.posted}
                  </span>

                  <span className="jd-meta">
                    <FaMoneyBillWave /> {job.salary}
                  </span>

                  {job.remote && (
                    <span className="job-remote-badge">
                      🌍 Remote OK
                    </span>
                  )}

                  {job.featured && (
                    <span className="job-featured-badge">
                      ⭐ Featured
                    </span>
                  )}

                </div>
              </div>
            </div>


            <div className="jd-header-actions">

              {applied ? (

                <div className="jd-applied-badge">
                  <FaCheckCircle /> Applied ✓
                </div>

              ) : (

                <button
                  className="jd-apply-btn"
                  onClick={() => setShowModal(true)}
                >
                  Apply Now
                  <FaExternalLinkAlt style={{ fontSize: "12px" }} />
                </button>

              )}


              <button
                className={`jd-save-btn ${saved ? "saved" : ""}`}
                onClick={toggleSave}
              >
                {saved ? <FaBookmark /> : <FaRegBookmark />}
                {saved ? "Saved" : "Save Job"}
              </button>


              <button
                className="jd-share-btn"
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  showToast("Link copied!", "info");
                }}
              >
                <FaShare />
              </button>

            </div>

          </div>


          {/* ABOUT ROLE */}

          <div className="jd-section-card">

            <h2 className="jd-section-title">
              About the Role
            </h2>

            <p className="jd-description">
              {job.description}
            </p>

          </div>


          {/* RESPONSIBILITIES */}

          <div className="jd-section-card">

            <h2 className="jd-section-title">
              Responsibilities
            </h2>

            <ul className="jd-list">

              {job.responsibilities.map((r, i) => (

                <li key={i} className="jd-list-item">

                  <FaCheckCircle
                    className="jd-list-icon"
                    style={{ color: "#22c55e" }}
                  />

                  {r}

                </li>

              ))}

            </ul>

          </div>


          {/* REQUIREMENTS */}

          <div className="jd-section-card">

            <h2 className="jd-section-title">
              Requirements
            </h2>

            <ul className="jd-list">

              {job.requirements.map((r, i) => (

                <li key={i} className="jd-list-item">

                  <FaCheckCircle
                    className="jd-list-icon"
                    style={{ color: "var(--blue-primary)" }}
                  />

                  {r}

                </li>

              ))}

            </ul>

          </div>


          {/* SKILLS */}

          <div className="jd-section-card">

            <h2 className="jd-section-title">
              Skills & Technologies
            </h2>

            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px"
            }}>

              {job.skills.map((s, i) => (

                <span
                  key={i}
                  className="jd-skill-tag"
                >
                  {s}
                </span>

              ))}

            </div>

          </div>

        </div>


        {/* SIDEBAR */}

        <div className="jd-sidebar">

          <div className="jd-sidebar-card">

            <h3 className="jd-sidebar-title">
              Quick Apply
            </h3>

            <div className="jd-quick-info">

              <div className="jd-quick-row">
                <span>Type</span>
                <strong>{job.type}</strong>
              </div>

              <div className="jd-quick-row">
                <span>Experience</span>
                <strong>{job.experience}</strong>
              </div>

              <div className="jd-quick-row">
                <span>Salary</span>
                <strong>{job.salary}</strong>
              </div>

              <div className="jd-quick-row">
                <span>Remote</span>
                <strong>{job.remote ? "Yes" : "No"}</strong>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default JobDetail;