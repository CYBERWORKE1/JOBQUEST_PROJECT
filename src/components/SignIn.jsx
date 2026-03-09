import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaBriefcase } from "react-icons/fa";
import { useToast } from "./ToastProvider";

const SignIn = ({ setIsAuthenticated, setUserType }) => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw]     = useState(false);
  const [role, setRole]         = useState("jobseeker");
  const [loading, setLoading]   = useState(false);
  const [errors, setErrors]     = useState({});

  const validate = () => {
    const e = {};
    if (!email)                          e.email    = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) e.email   = "Enter a valid email";
    if (!password)                        e.password = "Password is required";
    else if (password.length < 6)         e.password = "Min 6 characters";
    return e;
  };

  const handleLogin = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    // Simulate network delay
    await new Promise(r => setTimeout(r, 1200));
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userType", role);
    setIsAuthenticated(true);
    setUserType(role);
    showToast(`Welcome back! 👋`, "success");
    navigate(role === "employer" ? "/employer" : "/jobseeker");
  };

  return (
    <div className="auth-page">

      {/* ── LEFT PANEL — illustration ── */}
      <div className="auth-left">
        <div className="auth-left-content">

          <div className="auth-brand">
            <div className="auth-brand-icon"><FaBriefcase /></div>
            <span className="auth-brand-name">JobQuest</span>
          </div>

          <h2 className="auth-left-heading">
            Your next big<br/>opportunity awaits
          </h2>
          <p className="auth-left-sub">
            Sign in to access your dashboard, track applications,
            and get matched with top companies.
          </p>

          {/* Illustration SVG */}
          <div className="auth-illustration">
            <svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="si1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6"/>
                  <stop offset="100%" stopColor="#7c3aed"/>
                </linearGradient>
                <linearGradient id="si2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22c55e"/>
                  <stop offset="100%" stopColor="#16a34a"/>
                </linearGradient>
              </defs>
              {/* Monitor */}
              <rect x="60" y="40" width="200" height="130" rx="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
              <rect x="60" y="40" width="200" height="26" rx="12" fill="rgba(255,255,255,0.2)"/>
              <circle cx="76" cy="53" r="4" fill="#ef4444" opacity="0.8"/>
              <circle cx="90" cy="53" r="4" fill="#f59e0b" opacity="0.8"/>
              <circle cx="104" cy="53" r="4" fill="#22c55e" opacity="0.8"/>
              {/* Screen rows */}
              <rect x="76" y="78" width="168" height="8" rx="4" fill="rgba(255,255,255,0.25)"/>
              <rect x="76" y="93" width="120" height="7" rx="3" fill="rgba(255,255,255,0.18)"/>
              <rect x="76" y="107" width="100" height="7" rx="3" fill="rgba(255,255,255,0.18)"/>
              <rect x="76" y="121" width="140" height="7" rx="3" fill="rgba(255,255,255,0.18)"/>
              {/* Progress */}
              <rect x="76" y="138" width="168" height="5" rx="2" fill="rgba(255,255,255,0.1)"/>
              <rect x="76" y="138" width="110" height="5" rx="2" fill="url(#si1)"/>
              {/* Stand */}
              <rect x="148" y="170" width="24" height="22" rx="4" fill="rgba(255,255,255,0.2)"/>
              <rect x="120" y="188" width="80" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
              {/* Floating cards */}
              <rect x="10" y="80" width="90" height="38" rx="8" fill="white" opacity="0.95"/>
              <circle cx="26" cy="99" r="8" fill="url(#si1)"/>
              <rect x="40" y="91" width="50" height="6" rx="3" fill="#1e293b"/>
              <rect x="40" y="102" width="36" height="5" rx="2" fill="#94a3b8"/>
              <rect x="220" y="120" width="90" height="38" rx="8" fill="white" opacity="0.95"/>
              <circle cx="236" cy="139" r="8" fill="url(#si2)"/>
              <path d="M231 139 l4 4 7-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <rect x="250" y="131" width="50" height="6" rx="3" fill="#1e293b"/>
              <rect x="250" y="142" width="38" height="5" rx="2" fill="#94a3b8"/>
              {/* Person */}
              <circle cx="260" cy="68" r="16" fill="#fbbf24"/>
              <path d="M246,60 Q248,48 260,46 Q272,44 274,56 Q268,50 260,51 Q252,52 246,60Z" fill="#1e293b"/>
              <rect x="244" y="82" width="32" height="40" rx="10" fill="url(#si1)"/>
              <rect x="236" y="88" width="10" height="28" rx="5" fill="url(#si1)"/>
              <rect x="274" y="88" width="10" height="28" rx="5" fill="url(#si1)"/>
              <rect x="248" y="120" width="10" height="32" rx="5" fill="#1e293b"/>
              <rect x="262" y="120" width="10" height="32" rx="5" fill="#1e293b"/>
              {/* Sparkles */}
              <circle cx="30" cy="40" r="3" fill="rgba(255,255,255,0.5)"/>
              <circle cx="290" cy="55" r="2" fill="rgba(255,255,255,0.4)"/>
              <circle cx="50" cy="200" r="4" fill="rgba(255,255,255,0.3)"/>
              <line x1="300" y1="80" x2="300" y2="90" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="295" y1="85" x2="305" y2="85" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Trust badges */}
          <div className="auth-trust-row">
            <div className="auth-trust-item"><span className="auth-trust-num">50k+</span><span className="auth-trust-label">Jobs</span></div>
            <div className="auth-trust-divider"/>
            <div className="auth-trust-item"><span className="auth-trust-num">12k+</span><span className="auth-trust-label">Companies</span></div>
            <div className="auth-trust-divider"/>
            <div className="auth-trust-item"><span className="auth-trust-num">98%</span><span className="auth-trust-label">Match Rate</span></div>
          </div>

        </div>
      </div>

      {/* ── RIGHT PANEL — form ── */}
      <div className="auth-right">
        <div className="auth-form-box">

          <div className="auth-form-header">
            <h1 className="auth-form-title">Welcome back</h1>
            <p className="auth-form-sub">Sign in to your JobQuest account</p>
          </div>

          {/* Role toggle */}
          <div className="auth-role-toggle">
            <button
              className={`auth-role-btn ${role === "jobseeker" ? "active" : ""}`}
              onClick={() => setRole("jobseeker")}
            >
              Job Seeker
            </button>
            <button
              className={`auth-role-btn ${role === "employer" ? "active" : ""}`}
              onClick={() => setRole("employer")}
            >
              Employer
            </button>
          </div>

          {/* Email */}
          <div className="auth-field">
            <label className="auth-label">Email address</label>
            <div className="auth-input-wrap">
              <FaEnvelope className="auth-input-icon"/>
              <input
                className={`auth-input ${errors.email ? "auth-input-error" : ""}`}
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => { setEmail(e.target.value); setErrors(p => ({...p, email:""})); }}
              />
            </div>
            {errors.email && <span className="auth-error-msg">{errors.email}</span>}
          </div>

          {/* Password */}
          <div className="auth-field">
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <label className="auth-label">Password</label>
              <button className="auth-forgot">Forgot password?</button>
            </div>
            <div className="auth-input-wrap">
              <FaLock className="auth-input-icon"/>
              <input
                className={`auth-input ${errors.password ? "auth-input-error" : ""}`}
                type={showPw ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={e => { setPassword(e.target.value); setErrors(p => ({...p, password:""})); }}
              />
              <button className="auth-pw-toggle" onClick={() => setShowPw(!showPw)}>
                {showPw ? <FaEyeSlash/> : <FaEye/>}
              </button>
            </div>
            {errors.password && <span className="auth-error-msg">{errors.password}</span>}
          </div>

          {/* Submit */}
          <button
            className="auth-submit-btn"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? <span className="auth-spinner"/> : "Sign In →"}
          </button>

          <p className="auth-switch-text">
            Don't have an account?{" "}
            <button className="auth-switch-link" onClick={() => navigate("/signup")}>
              Create one free
            </button>
          </p>

        </div>
      </div>

    </div>
  );
};

export default SignIn;