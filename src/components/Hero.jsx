import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">

      <div className="glass-card-hero">

        <div className="hero-left">
          <h1>
            Find Your <br /> Dream Career
          </h1>

          <p>
          Job matching platform connecting talent
            with the right opportunities using intelligent ATS scoring.
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
              Post Jobs
            </button>
          </div>
        </div>

        <div className="hero-right">
        
        </div>

      </div>

    </section>
  );
};

export default Hero;