import React, { useState, useRef } from "react";
import {
  FaUpload,
  FaFileAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaBolt,
} from "react-icons/fa";

const ResumeUpload = ({ onResumeUpload, onATSScore }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      simulateUpload();
    }
  };

  const simulateUpload = () => {
    setIsUploading(true);
    setUploadStatus("uploading");
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadStatus("success");
          onResumeUpload(true);

          setTimeout(() => {
            const score = Math.floor(Math.random() * 20) + 80;
            onATSScore(score);
          }, 1000);

          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="backdrop-blur-lg bg-white/5 rounded-xl p-8 border border-white/10">
      <div className="text-center space-y-6">

        {/* Header */}
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
            <FaUpload className="text-white text-lg" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            Upload Your Resume
          </h2>
        </div>

        {/* Idle State */}
        {uploadStatus === "idle" && (
          <>
            <p className="text-gray-300">
              Upload your resume to get instant ATS scoring and job matching
            </p>

            <div
              onClick={triggerFileSelect}
              className="border-2 border-dashed border-white/20 rounded-xl p-12 hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center space-y-4">
                <FaFileAlt className="text-blue-400 text-4xl" />
                <p className="text-lg text-white font-semibold">
                  Drop your resume here
                </p>
                <p className="text-gray-300">or click to browse files</p>
              </div>
            </div>
          </>
        )}

        {/* Uploading State */}
        {uploadStatus === "uploading" && (
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <FaBolt className="text-blue-400 animate-pulse" />
              <span className="text-white font-semibold">
                Processing {fileName}
              </span>
            </div>

            <div className="w-full bg-white/10 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Success State */}
        {uploadStatus === "success" && (
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <FaCheckCircle />
              <span className="font-semibold">
                Resume uploaded successfully!
              </span>
            </div>

            <button
              onClick={triggerFileSelect}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-300"
            >
              Upload New Resume
            </button>
          </div>
        )}

        {/* Error State */}
        {uploadStatus === "error" && (
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-red-400">
              <FaExclamationCircle />
              <span className="font-semibold">Upload failed</span>
            </div>

            <button
              onClick={triggerFileSelect}
              className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg hover:from-red-400 hover:to-pink-500 transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ResumeUpload;
