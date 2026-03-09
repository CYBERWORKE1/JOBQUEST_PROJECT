import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaRocket, FaBrain } from "react-icons/fa";

const About = () => {
  const skills = ["React", "Node.js", "MongoDB", "HTML", "CSS", "JavaScript"];

  const features = [
    { icon:<FaBrain/>, title:"AI-Powered Matching", desc:"Smart ATS algorithm matches your resume to the best-fit jobs in seconds." },
    { icon:<FaRocket/>, title:"Instant ATS Analysis", desc:"Upload your resume and get a real-time ATS compatibility score with improvement tips." },
    { icon:<FaCode/>,  title:"Built with Modern Stack", desc:"React, Node.js, and MongoDB powering a fast, scalable job search experience." },
  ];

  return (
    <div className="about-page">

      {/* Hero section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <div className="about-avatar-wrap">
            <img src="/eklavya.jpeg" alt="Eklavya Kumar" className="about-avatar"
              onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }} />
            <div className="about-avatar-fallback" style={{ display:"none" }}>EK</div>
          </div>
          <h1 className="about-name">Eklavya Kumar</h1>
          <p className="about-role">Full Stack Developer · </p>
          <p className="about-bio">
            I'm a Front-End Developer passionate about building websites.
            JobQuest is my vision of a smarter job search — one that uses AI to match
            candidates with the right opportunities through ATS-based resume analysis.
          </p>
          <div className="about-skills">
            {skills.map((s, i) => <span key={i} className="about-skill-tag">{s}</span>)}
          </div>
          <div className="about-contact">
            <a href="mailto:eklavyakumar8155@gmail.com" className="about-contact-btn">
              <FaEnvelope /> eklavyakumar8155@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/eklavya-kumar-63a264260/" target="_blank" rel="noreferrer" className="about-social-btn linkedin">
              <FaLinkedin />
            </a>
            <a href="https://github.com/CYBERWORKE1" target="_blank" rel="noreferrer" className="about-social-btn github">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* About JobQuest */}
      <div className="about-project">
        <div className="about-project-inner">
          <h2 className="about-section-title">About <span className="accent">JobQuest</span></h2>
          <p className="about-project-desc">
            JobQuest is job board platform that helps job seekers find
            the right opportunities through smart resume analysis and intelligent matching.
            Employers can post jobs and instantly discover top candidates ranked by
            ATS compatibility scores.
          </p>

          <div className="about-features-grid">
            {features.map((f, i) => (
              <div key={i} className="about-feature-card">
                <div className="about-feature-icon">{f.icon}</div>
                <h3 className="about-feature-title">{f.title}</h3>
                <p className="about-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="about-stats">
        {[
          { num:"50k+", label:"Jobs Listed" },
          { num:"12k+", label:"Companies" },
          { num:"98%",  label:"Match Rate" },
          { num:"100%", label:"Free to Use" },
        ].map((s, i) => (
          <div key={i} className="about-stat">
            <div className="about-stat-num">{s.num}</div>
            <div className="about-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default About;