import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt, FaBookmark, FaRegBookmark, FaSlidersH, FaTimes, FaClock, FaMoneyBillWave } from "react-icons/fa";
import { JOBS } from "./Jobs";

const TYPES = ["All", "Full-time", "Part-time", "Contract"];
const EXPERIENCES = ["All", "Junior (1-3 yrs)", "Mid (3-5 yrs)", "Senior (5+ yrs)"];
const SALARIES = [
  { label: "Any", min: 0, max: 999 },
  { label: "$0–$80k", min: 0, max: 80 },
  { label: "$80–$120k", min: 80, max: 120 },
  { label: "$120k+", min: 120, max: 999 },
];

const JobListings = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("All");
  const [experience, setExperience] = useState("All");
  const [salaryIdx, setSalaryIdx] = useState(0);
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const [saved, setSaved] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("savedJobs") || "[]");
    } catch {
      return [];
    }
  });

  const toggleSave = (id, e) => {
    e.stopPropagation();
    setSaved(prev => {
      const next = prev.includes(id)
        ? prev.filter(x => x !== id)
        : [...prev, id];
      localStorage.setItem("savedJobs", JSON.stringify(next));
      return next;
    });
  };

  const salary = SALARIES[salaryIdx];

  const filtered = useMemo(() => {
    return JOBS.filter(j => {
      const q = query.toLowerCase();

      const matchQ =
        !q ||
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.skills.some(s => s.toLowerCase().includes(q));

      const matchL =
        !location ||
        j.location.toLowerCase().includes(location.toLowerCase());

      const matchT = type === "All" || j.type === type;
      const matchE = experience === "All" || j.experience === experience;
      const matchS = j.salaryMin <= salary.max && j.salaryMax >= salary.min;
      const matchR = !remoteOnly || j.remote;

      return matchQ && matchL && matchT && matchE && matchS && matchR;
    });
  }, [query, location, type, experience, salary, remoteOnly]);

  return (
    <div className="jobs-page">

      <div className="jobs-page-header">
        <h1 className="jobs-page-title">
          Find Your <span className="accent">Dream Job</span>
        </h1>
        <p className="jobs-page-sub">
          {filtered.length} opportunities waiting for you
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <h3>No jobs found</h3>
        </div>
      ) : (
        <div className="jobs-list">
          {filtered.map(job => (
            <div
              key={job.id}
              className="job-card"
              onClick={() => navigate(`/jobs/${job.id}`)}
            >

              <div className="job-card-top">
                <div
                  className="job-company-logo"
                  style={{
                    background: `linear-gradient(135deg,${job.color},${job.color}99)`
                  }}
                >
                  {job.initials}
                </div>

                <div style={{ flex: 1 }}>
                  <div className="job-title">{job.title}</div>
                  <div className="company-name">{job.company}</div>

                  <div className="job-meta-row">
                    <span>
                      <FaMapMarkerAlt /> {job.location}
                    </span>

                    <span>
                      <FaClock /> {job.posted}
                    </span>

                    <span className="job-type-badge">
                      {job.type}
                    </span>

                    {job.remote && (
                      <span className="job-remote-badge">
                        🌍 Remote
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <div className="job-salary">
                    {job.salary}
                  </div>
                </div>
              </div>

              <p className="job-description">
                {job.description.slice(0, 120)}...
              </p>

              <div className="job-footer">
                <div>
                  {job.skills.map((s, i) => (
                    <span key={i} className="skill-tag">
                      {s}
                    </span>
                  ))}
                </div>

                <button
                  className="apply-btn"
                  onClick={e => {
                    e.stopPropagation();
                    navigate(`/jobs/${job.id}`);
                  }}
                >
                  View Details →
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobListings;