import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="nf-illustration">
        <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="nfg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6"/>
              <stop offset="100%" stopColor="#7c3aed"/>
            </linearGradient>
          </defs>
          <circle cx="150" cy="100" r="80" fill="url(#nfg)" opacity="0.08"/>
          <circle cx="150" cy="100" r="55" fill="url(#nfg)" opacity="0.12"/>
          <rect x="100" y="60" width="100" height="80" rx="12" fill="none" stroke="url(#nfg)" strokeWidth="2.5"/>
          <line x1="110" y1="80" x2="190" y2="80" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
          <line x1="110" y1="93" x2="160" y2="93" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
          <line x1="110" y1="106" x2="150" y2="106" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="150" cy="100" r="30" fill="white" fillOpacity="0.9"/>
          <text x="150" y="106" textAnchor="middle" fontSize="20" fill="#ef4444" fontWeight="bold">?</text>
          <circle cx="80" cy="50" r="5" fill="#3b82f6" opacity="0.4"/>
          <circle cx="230" cy="160" r="7" fill="#7c3aed" opacity="0.3"/>
          <circle cx="240" cy="45" r="4" fill="#ec4899" opacity="0.4"/>
        </svg>
      </div>

      <div className="nf-code">404</div>
      <h1 className="nf-title">Page Not Found</h1>
      <p className="nf-sub">
        Oops! The page you're looking for doesn't exist.<br/>
        It might have been moved or deleted.
      </p>

      <div className="nf-actions">
        <button className="primary-btn" onClick={() => navigate("/")}>Go Home</button>
        <button className="secondary-btn" onClick={() => navigate("/jobs")}>Browse Jobs</button>
      </div>

      <div className="nf-links">
        <button className="nf-link" onClick={() => navigate("/signin")}>Sign In</button>
        <span style={{ color:"#cbd5e1" }}>·</span>
        <button className="nf-link" onClick={() => navigate("/signup")}>Sign Up</button>
        <span style={{ color:"#cbd5e1" }}>·</span>
        <button className="nf-link" onClick={() => navigate("/about")}>About</button>
      </div>
    </div>
  );
};

export default NotFound;