import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.svg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            1,200+ new jobs this week
          </div>

          <h1>
            Find Your <span className="accent">Dream Job</span><br />
            With Confidence
          </h1>

          <p>
            Discover thousands of opportunities from top companies.
            Upload your resume and get AI-matched with the right career in minutes.
          </p>

          <div className="hero-stats">
            <div><div className="hero-stat-num">50k+</div><div className="hero-stat-label">Active Jobs</div></div>
            <div><div className="hero-stat-num">12k+</div><div className="hero-stat-label">Companies</div></div>
            <div><div className="hero-stat-num">98%</div><div className="hero-stat-label">Match Rate</div></div>
          </div>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate("/jobs")}>Browse Jobs →</button>
            <button className="secondary-btn" onClick={() => navigate("/signup")}>Post a Job</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="hero-float-card hero-float-1">
            <span className="hero-float-dot" />
            New match found — 96% fit
          </div>
          <img src={heroImage} alt="Job Search" className="hero-image" />
          <div className="hero-float-card hero-float-2">
            🎉 Sarah got hired at TechCorp!
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;