import React, { useState } from "react";
import { FaTimes, FaBriefcase } from "react-icons/fa";

const JobPostingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "full-time",
    salary: "",
    description: "",
    requirements: "",
    keywords: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job posted:", formData);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative backdrop-blur-2xl bg-white/5 rounded-2xl p-10 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center space-x-4">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg">
            <FaBriefcase className="text-white text-xl" />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-wide">
            Create Job Posting
          </h2>
        </div>

        <button
          onClick={onClose}
          className="p-3 rounded-xl hover:bg-white/10 transition-all duration-300"
        >
          <FaTimes className="text-gray-400 hover:text-white text-lg" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Basic Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Job Title"
            className="form-input"
          />

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="Company Name"
            className="form-input"
          />
        </div>

        {/* Location / Type / Salary */}
        <div className="grid md:grid-cols-3 gap-6">
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="form-input"
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="form-input"
          >
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
            <option value="remote">Remote</option>
          </select>

          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Salary Range"
            className="form-input"
          />
        </div>

        {/* Description */}
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Job Description"
          className="form-input resize-none"
        />

        {/* Requirements */}
        <textarea
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Requirements"
          className="form-input resize-none"
        />

        {/* Keywords */}
        <input
          type="text"
          name="keywords"
          value={formData.keywords}
          onChange={handleChange}
          placeholder="Skills (React, Node.js, AWS...)"
          className="form-input"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-3 rounded-xl border border-white/20 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-10 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300"
          >
            Post Job
          </button>
        </div>

      </form>
    </div>
  );
};

export default JobPostingForm;