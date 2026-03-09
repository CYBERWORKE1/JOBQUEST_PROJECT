import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser, FaBriefcase } from "react-icons/fa";
import { useToast } from "./ToastProvider";

const SignUp = ({ setIsAuthenticated, setUserType }) => {
  const navigate  = useNavigate();
  const { showToast } = useToast();

  const [role, setRole]         = useState("jobseeker");
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw]     = useState(false);
  const [loading, setLoading]   = useState(false);
  const [errors, setErrors]     = useState({});

  const validate = () => {
    const e = {};
    if (!name.trim())                      e.name     = "Full name is required";
    if (!email)                            e.email    = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))  e.email    = "Enter a valid email";
    if (!password)                         e.password = "Password is required";
    else if (password.length < 6)          e.password = "Min 6 characters";
    return e;
  };

  const handleSignUp = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userType", role);
    setIsAuthenticated(true);
    setUserType(role);
    showToast(`Account created! Welcome to JobQuest 🎉`, "success");
    navigate(role === "employer" ? "/employer" : "/jobseeker");
  };

  const strength = password.length === 0 ? 0
    : password.length < 6 ? 1
    : password.length < 10 ? 2 : 3;
  const strengthLabel = ["","Weak","Good","Strong"][strength];
  const strengthColor = ["","#ef4444","#f59e0b","#22c55e"][strength];

  return (
    <div className="auth-page">

      {/* ── LEFT PANEL ── */}
      <div className="auth-left">
        <div className="auth-left-content">

          <div className="auth-brand">
            <div className="auth-brand-icon"><FaBriefcase /></div>
            <span className="auth-brand-name">JobQuest</span>
          </div>

          <h2 className="auth-left-heading">
            Start your career<br/>journey today
          </h2>
          <p className="auth-left-sub">
            Join thousands of professionals finding their dream jobs
            through AI-powered matching.
          </p>

          {/* Feature list */}
          <div className="auth-features">
            {[
              { icon:"🎯", text:"AI-powered job matching" },
              { icon:"📄", text:"Smart resume analysis" },
              { icon:"🔔", text:"Real-time job alerts" },
              { icon:"💼", text:"Direct employer connections" },
            ].map((f,i) => (
              <div key={i} className="auth-feature-item">
                <span className="auth-feature-icon">{f.icon}</span>
                <span className="auth-feature-text">{f.text}</span>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="auth-trust-row">
            <div className="auth-trust-item"><span className="auth-trust-num">50k+</span><span className="auth-trust-label">Jobs</span></div>
            <div className="auth-trust-divider"/>
            <div className="auth-trust-item"><span className="auth-trust-num">12k+</span><span className="auth-trust-label">Companies</span></div>
            <div className="auth-trust-divider"/>
            <div className="auth-trust-item"><span className="auth-trust-num">Free</span><span className="auth-trust-label">Forever</span></div>
          </div>

        </div>
      </div>

      {/* ── RIGHT PANEL — form ── */}
      <div className="auth-right">
        <div className="auth-form-box">

          <div className="auth-form-header">
            <h1 className="auth-form-title">Create account</h1>
            <p className="auth-form-sub">Join JobQuest — it's completely free</p>
          </div>

          {/* Role toggle */}
          <div className="auth-role-toggle">
            <button className={`auth-role-btn ${role==="jobseeker"?"active":""}`} onClick={()=>setRole("jobseeker")}>
              Job Seeker
            </button>
            <button className={`auth-role-btn ${role==="employer"?"active":""}`} onClick={()=>setRole("employer")}>
              Employer
            </button>
          </div>

          {/* Name */}
          <div className="auth-field">
            <label className="auth-label">Full name</label>
            <div className="auth-input-wrap">
              <FaUser className="auth-input-icon"/>
              <input
                className={`auth-input ${errors.name?"auth-input-error":""}`}
                placeholder="Eklavya Kumar"
                value={name}
                onChange={e=>{ setName(e.target.value); setErrors(p=>({...p,name:""})); }}
              />
            </div>
            {errors.name && <span className="auth-error-msg">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="auth-field">
            <label className="auth-label">Email address</label>
            <div className="auth-input-wrap">
              <FaEnvelope className="auth-input-icon"/>
              <input
                className={`auth-input ${errors.email?"auth-input-error":""}`}
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e=>{ setEmail(e.target.value); setErrors(p=>({...p,email:""})); }}
              />
            </div>
            {errors.email && <span className="auth-error-msg">{errors.email}</span>}
          </div>

          {/* Password */}
          <div className="auth-field">
            <label className="auth-label">Password</label>
            <div className="auth-input-wrap">
              <FaLock className="auth-input-icon"/>
              <input
                className={`auth-input ${errors.password?"auth-input-error":""}`}
                type={showPw?"text":"password"}
                placeholder="••••••••"
                value={password}
                onChange={e=>{ setPassword(e.target.value); setErrors(p=>({...p,password:""})); }}
              />
              <button className="auth-pw-toggle" onClick={()=>setShowPw(!showPw)}>
                {showPw ? <FaEyeSlash/> : <FaEye/>}
              </button>
            </div>
            {errors.password && <span className="auth-error-msg">{errors.password}</span>}
            {/* Strength bar */}
            {password.length > 0 && (
              <div style={{marginTop:"8px"}}>
                <div style={{display:"flex",gap:"4px",marginBottom:"4px"}}>
                  {[1,2,3].map(i=>(
                    <div key={i} style={{
                      flex:1, height:"3px", borderRadius:"2px",
                      background: i<=strength ? strengthColor : "#e2e8f0",
                      transition:"background .3s"
                    }}/>
                  ))}
                </div>
                <span style={{fontSize:"11px",fontWeight:"600",color:strengthColor}}>{strengthLabel} password</span>
              </div>
            )}
          </div>

          {/* Submit */}
          <button className="auth-submit-btn" onClick={handleSignUp} disabled={loading}>
            {loading ? <span className="auth-spinner"/> : "Create Account →"}
          </button>

          <p className="auth-switch-text">
            Already have an account?{" "}
            <button className="auth-switch-link" onClick={()=>navigate("/signin")}>Sign in</button>
          </p>

        </div>
      </div>

    </div>
  );
};

export default SignUp;