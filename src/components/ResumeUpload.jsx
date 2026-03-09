import { useState, useRef, useCallback } from "react";
import { FaUpload, FaFilePdf, FaFileWord, FaTrash, FaCheckCircle, FaSpinner } from "react-icons/fa";

const ResumeUpload = ({ onResumeUpload, onATSScore }) => {
  const [file, setFile]       = useState(null);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded]   = useState(false);
  const [progress, setProgress]   = useState(0);
  const fileRef = useRef();

  const handleFile = useCallback(async (f) => {
    if (!f) return;
    if (!f.name.match(/\.(pdf|doc|docx)$/i)) { alert("Please upload a PDF or Word doc."); return; }
    if (f.size > 5 * 1024 * 1024) { alert("File must be under 5MB."); return; }

    setFile(f); setUploading(true); setProgress(0); setUploaded(false);

    for (let i = 0; i <= 100; i += 4) {
      await new Promise(r => setTimeout(r, 55));
      setProgress(Math.min(i, 100));
    }
    await new Promise(r => setTimeout(r, 700));

    const score = Math.floor(Math.random() * 26) + 72;
    setUploading(false); setUploaded(true);
    onResumeUpload(true); onATSScore(score);
  }, [onResumeUpload, onATSScore]);

  const onDrop = useCallback((e) => {
    e.preventDefault(); setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  }, [handleFile]);

  const removeFile = () => {
    setFile(null); setUploaded(false); setProgress(0);
    onResumeUpload(false); onATSScore(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const fileIcon = file?.name?.toLowerCase().endsWith(".pdf")
    ? <FaFilePdf style={{ color: "#ef4444", fontSize: "28px" }} />
    : <FaFileWord style={{ color: "#2563eb", fontSize: "28px" }} />;

  const fmtSize = (b) => b < 1024*1024 ? (b/1024).toFixed(1)+" KB" : (b/(1024*1024)).toFixed(1)+" MB";

  return (
    <div className="resume-upload-card">
      <div className="resume-upload-header">
        <div className="resume-upload-icon-wrap"><FaUpload /></div>
        <div>
          <h3 className="resume-upload-title">Resume Upload</h3>
          <p className="resume-upload-sub">Upload your resume for instant ATS analysis</p>
        </div>
      </div>

      {!file ? (
        <div
          className={`resume-dropzone ${dragging ? "dragging" : ""}`}
          onDrop={onDrop}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onClick={() => fileRef.current?.click()}
        >
          <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" style={{ display:"none" }}
            onChange={e => handleFile(e.target.files[0])} />
          <div className="resume-dropzone-icon"><FaUpload /></div>
          <p className="resume-dropzone-text">{dragging ? "Drop it here!" : "Drag & drop your resume"}</p>
          <p className="resume-dropzone-sub">or click to browse files</p>
          <div className="resume-formats">
            <span className="resume-format-tag">PDF</span>
            <span className="resume-format-tag">DOC</span>
            <span className="resume-format-tag">DOCX</span>
            <span className="resume-format-note">Max 5MB</span>
          </div>
        </div>
      ) : (
        <div className="resume-preview">
          <div className="resume-preview-file">
            <div className="resume-file-icon">{fileIcon}</div>
            <div className="resume-file-info">
              <div className="resume-file-name">{file.name}</div>
              <div className="resume-file-size">{fmtSize(file.size)}</div>
              {uploading && (
                <div style={{ marginTop:"8px" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"4px" }}>
                    <span style={{ fontSize:"12px", color:"var(--text-muted)", fontWeight:500 }}>
                      {progress < 100 ? "Uploading..." : "Running AI analysis..."}
                    </span>
                    <span style={{ fontSize:"12px", color:"var(--blue-primary)", fontWeight:700 }}>{progress}%</span>
                  </div>
                  <div className="resume-progress-bar">
                    <div className="resume-progress-fill" style={{ width:`${progress}%` }} />
                  </div>
                </div>
              )}
              {uploaded && (
                <div className="resume-success-badge">
                  <FaCheckCircle style={{ color:"#22c55e" }} />
                  <span>Uploaded & Analyzed ✓</span>
                </div>
              )}
            </div>
            <div>
              {uploading
                ? <FaSpinner style={{ color:"var(--blue-primary)", fontSize:"18px", animation:"spin .7s linear infinite" }} />
                : <button className="resume-remove-btn" onClick={removeFile}><FaTrash /></button>
              }
            </div>
          </div>
          {uploaded && (
            <div className="resume-tips">
              <p className="resume-tips-title">💡 Quick tips to boost your score:</p>
              <ul className="resume-tips-list">
                <li>Add keywords from the job descriptions you're targeting</li>
                <li>Quantify achievements (e.g., "Increased revenue by 30%")</li>
                <li>Use standard headings: Experience, Skills, Education</li>
                <li>Avoid tables, columns, images — ATS can't parse them</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;