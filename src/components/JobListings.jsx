import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
} from "react-icons/fa";

const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full Time",
      salary: "$120k - $150k",
      posted: "2 hours ago",
      featured: true,
      description:
        "We are looking for a Senior Frontend Developer to join our innovative team...",
      skills: ["React", "TypeScript", "Node.js", "GraphQL"],
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "Remote",
      type: "Full Time",
      salary: "$100k - $130k",
      posted: "5 hours ago",
      featured: false,
      description:
        "Join our fast-growing startup as a Full Stack Engineer...",
      skills: ["JavaScript", "Python", "AWS", "Docker"],
    },
    {
      id: 3,
      title: "React Developer",
      company: "Digital Solutions",
      location: "New York, NY",
      type: "Contract",
      salary: "$90k - $120k",
      posted: "1 day ago",
      featured: true,
      description:
        "We need a skilled React Developer to build amazing user interfaces...",
      skills: ["React", "Redux", "CSS", "JavaScript"],
    },
    {
      id: 4,
      title: "Backend Engineer",
      company: "CloudTech",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$110k - $140k",
      posted: "2 days ago",
      featured: false,
      description:
        "Looking for a Backend Engineer to work on scalable cloud infrastructure...",
      skills: ["Python", "AWS", "PostgreSQL", "Redis"],
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Find Your Next Job
        </h1>
        <p className="text-gray-300">
          Discover opportunities that match your skills and aspirations
        </p>
      </div>

      {/* Search Section */}
      <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
        <div className="grid md:grid-cols-4 gap-4">

          {/* Search Input */}
          <div className="md:col-span-2">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, companies, skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
              />
            </div>
          </div>

          {/* Location Filter */}
          <div>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300 appearance-none"
              >
                <option value="">All Locations</option>
                <option value="remote">Remote</option>
                <option value="san-francisco">San Francisco, CA</option>
                <option value="new-york">New York, NY</option>
                <option value="austin">Austin, TX</option>
              </select>
            </div>
          </div>

          {/* Filter Button */}
          <div>
            <button className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-300">
              <FaFilter />
              <span>More Filters</span>
            </button>
          </div>

        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        <p className="text-gray-300">
          Showing {filteredJobs.length} jobs
        </p>

        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

const JobCard = ({ job }) => {
  return (
    <div
      className={`group backdrop-blur-lg bg-white/5 rounded-xl p-6 border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-2xl ${
        job.featured
          ? "border-purple-500/30 hover:border-purple-400/50"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
            {job.title}
          </h3>
          <p className="text-gray-300 font-medium">{job.company}</p>
        </div>

        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-300">
          Apply Now
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-4 text-sm">
        <div className="flex items-center space-x-2 text-gray-300">
          <FaMapMarkerAlt />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <FaClock />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <FaDollarSign />
          <span>{job.salary}</span>
        </div>
        <div className="text-gray-400 text-right">
          {job.posted}
        </div>
      </div>

      <p className="text-gray-300 mb-4">{job.description}</p>

      <div className="flex flex-wrap gap-2">
        {job.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
