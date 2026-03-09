import { useState } from "react";
import { FaSearch, FaUser, FaBriefcase, FaHome, FaSun, FaMoon, FaBars, FaTimes, FaInfoCircle } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useDarkMode } from "./DarkModeProvider";

const Header = ({ isAuthenticated, setIsAuthenticated, userType, setUserType }) => {
  const navigate    = useNavigate();
  const location    = useLocation();
  const currentPath = location.pathname;
  const { dark, toggle } = useDarkMode();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userType");
    setIsAuthenticated(false);
    setUserType(null);
    navigate("/");
    setMobileOpen(false);
  };

  const goTo = (path) => { navigate(path); setMobileOpen(false); };

  const navLinks = [
    { path:"/",      icon:<FaHome/>,      label:"Home"      },
    { path:"/jobs",  icon:<FaSearch/>,    label:"Jobs"      },
    { path:"/about", icon:<FaInfoCircle/>,label:"About"     },
    ...(isAuthenticated && userType==="jobseeker" ? [{ path:"/jobseeker", icon:<FaUser/>,     label:"Dashboard" }] : []),
    ...(isAuthenticated && userType==="employer"  ? [{ path:"/employer",  icon:<FaBriefcase/>,label:"Dashboard" }] : []),
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="logo-container" onClick={() => goTo("/")}>
          <img src="/logo.png" alt="JobQuest" className="logo-img" />
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav-links desktop-nav">
          {navLinks.map(n => (
            <button key={n.path} onClick={() => goTo(n.path)} className={`nav-button ${currentPath===n.path?"active":""}`}>
              {n.icon}<span>{n.label}</span>
            </button>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <button className="dark-toggle" onClick={toggle} title={dark?"Light mode":"Dark mode"}>
            {dark ? <FaSun style={{ color:"#f59e0b" }}/> : <FaMoon style={{ color:"#64748b" }}/>}
          </button>

          {/* Desktop auth */}
          <div className="desktop-auth">
            {!isAuthenticated ? (
              <div className="nav-auth">
                <button onClick={() => goTo("/signin")} className="login-btn">Sign In</button>
                <button onClick={() => goTo("/signup")} className="signup-btn">Get Started →</button>
              </div>
            ) : (
              <div className="nav-user">
                <div className="avatar"><FaUser/></div>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button className="hamburger-btn" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="mobile-nav-links">
            {navLinks.map(n => (
              <button key={n.path} onClick={() => goTo(n.path)} className={`mobile-nav-btn ${currentPath===n.path?"active":""}`}>
                {n.icon}<span>{n.label}</span>
              </button>
            ))}
          </div>
          <div className="mobile-auth">
            {!isAuthenticated ? (
              <>
                <button onClick={() => goTo("/signin")} className="login-btn" style={{ width:"100%" }}>Sign In</button>
                <button onClick={() => goTo("/signup")} className="signup-btn" style={{ width:"100%" }}>Get Started →</button>
              </>
            ) : (
              <button onClick={handleLogout} className="logout-btn" style={{ width:"100%" }}>Logout</button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;