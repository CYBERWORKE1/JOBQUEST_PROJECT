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
    <div className="backdrop-blur-lg bg-white/5 rounded-xl p-8 border border-white/10">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600">
            <FaBriefcase className="text-white text-lg" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            Create Job Posting
          </h2>
        </div>

        <button
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
        >
          <FaTimes className="text-gray-400" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Basic Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Job Title"
            className="input"
          />

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="Company Name"
            className="input"
          />
        </div>

        {/* Location, Type, Salary */}
        <div className="grid md:grid-cols-3 gap-6">

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="input"
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="input"
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
            className="input"
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
          className="input"
        />

        {/* Requirements */}
        <textarea
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Requirements"
          className="input"
        />

        {/* Keywords */}
        <input
          type="text"
          name="keywords"
          value={formData.keywords}
          onChange={handleChange}
          placeholder="React, Node.js, AWS..."
          className="input"
        />

        {/* Buttons */}
        <div className="flex space-x-4 pt-6">
          <button
            type="submit"
            className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-400 hover:to-pink-500 transition-all duration-300"
          >
            Post Job
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 bg-white/10 border border-white/20 text-gray-300 rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default JobPostingForm;
