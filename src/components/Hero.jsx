import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-left">
          <h1>Find Your Dream Job</h1>

          <p>
            Discover thousands of opportunities from top companies.
            Upload your resume and get matched with the right career.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/jobs")}
            >
              Browse Jobs
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/signup")}
            >
              Post a Job
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={heroImage}
            alt="Job Search"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;