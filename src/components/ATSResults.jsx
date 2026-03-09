import { useEffect, useState } from "react";
import { FaBullseye, FaCheckCircle, FaExclamationTriangle, FaChartLine, FaLightbulb } from "react-icons/fa";

const ATSResults = ({ score }) => {
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    let s = 0;
    const t = setInterval(() => {
      s += 2;
      if (s >= score) { clearInterval(t); s = score; }
      setAnimated(s);
    }, 18);
    return () => clearInterval(t);
  }, [score]);

  const status =
    score >= 90 ? { text:"Excellent",         color:"#22c55e", icon:FaCheckCircle }
  : score >= 80 ? { text:"Strong",            color:"#3b82f6", icon:FaCheckCircle }
  : score >= 70 ? { text:"Average",           color:"#f59e0b", icon:FaExclamationTriangle }
  :               { text:"Needs Improvement", color:"#ef4444", icon:FaExclamationTriangle };

  const StatusIcon = status.icon;
  const C = 2 * Math.PI * 52;
  const offset = C - (animated / 100) * C;

  const keywords = [
    { word:"React",       matched:true  },
    { word:"JavaScript",  matched:true  },
    { word:"Node.js",     matched:true  },
    { word:"TypeScript",  matched:false },
    { word:"Python",      matched:true  },
    { word:"AWS",         matched:false },
    { word:"Docker",      matched:true  },
    { word:"MongoDB",     matched:true  },
  ];

  return (
    <div className="ats-card">
      {/* Header */}
      <div className="ats-header">
        <div className="ats-header-icon"><FaBullseye /></div>
        <div>
          <h2 className="ats-title">ATS Analysis Report</h2>
          <p className="ats-sub">How recruiters' systems see your resume</p>
        </div>
      </div>

      {/* Score ring + labels */}
      <div className="ats-score-section">
        <div style={{ position:"relative", width:"140px", height:"140px" }}>
          <svg width="140" height="140" style={{ transform:"rotate(-90deg)" }}>
            <circle cx="70" cy="70" r="52" fill="none" stroke="#f1f5f9" strokeWidth="10" />
            <circle cx="70" cy="70" r="52" fill="none"
              stroke={status.color} strokeWidth="10"
              strokeDasharray={C} strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition:"stroke-dashoffset .3s ease" }}
            />
          </svg>
          <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
            <div style={{ fontSize:"32px", fontWeight:"800", color:"var(--text-primary)", letterSpacing:"-.03em" }}>{animated}%</div>
            <div style={{ display:"flex", alignItems:"center", gap:"4px", fontSize:"12px", fontWeight:600, color:status.color }}>
              <StatusIcon /><span>{status.text}</span>
            </div>
          </div>
        </div>

        <div className="ats-score-meta">
          <div className="ats-meta-row">
            <span className="ats-meta-label">Resume Match</span>
            <span className="ats-meta-val" style={{ color:status.color }}>{score}%</span>
          </div>
          <div className="ats-meta-row">
            <span className="ats-meta-label">Keywords Found</span>
            <span className="ats-meta-val">{keywords.filter(k=>k.matched).length}/{keywords.length}</span>
          </div>
          <div className="ats-meta-row">
            <span className="ats-meta-label">Format Score</span>
            <span className="ats-meta-val" style={{ color:"#22c55e" }}>Good</span>
          </div>

          {score >= 80 && (
            <div className="ats-optimized-badge">
              <FaCheckCircle style={{ color:"#22c55e" }} />
              ATS Optimized ✓
            </div>
          )}
        </div>
      </div>

      {/* Keywords */}
      <div className="ats-section">
        <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"14px" }}>
          <FaChartLine style={{ color:"var(--blue-primary)" }} />
          <h3 className="ats-section-title">Keyword Matching</h3>
        </div>
        <div className="ats-keywords-grid">
          {keywords.map((kw, i) => (
            <div key={i} className={`ats-keyword ${kw.matched ? "matched" : "missing"}`}>
              <span>{kw.word}</span>
              {kw.matched
                ? <FaCheckCircle style={{ color:"#22c55e", fontSize:"12px" }} />
                : <FaExclamationTriangle style={{ color:"#ef4444", fontSize:"12px" }} />
              }
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="ats-recommendations">
        <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"12px" }}>
          <FaLightbulb style={{ color:"#f59e0b" }} />
          <h3 className="ats-section-title">Smart Recommendations</h3>
        </div>
        <ul className="ats-rec-list">
          {score < 80 && <li>Add missing keywords like TypeScript & AWS to your resume</li>}
          <li>Tailor resume keywords to each specific job description</li>
          <li>Quantify all achievements with measurable numbers and impact</li>
          <li>Keep formatting clean — avoid tables, graphics, or columns</li>
          <li>Include a strong skills section at the top of your resume</li>
        </ul>
      </div>
    </div>
  );
};

export default ATSResults;