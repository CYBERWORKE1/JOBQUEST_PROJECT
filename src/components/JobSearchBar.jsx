import { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const JobSearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!keyword && !location) return;

    setLoading(true);

    setTimeout(() => {
      navigate(
        `/jobs?keyword=${encodeURIComponent(
          keyword
        )}&location=${encodeURIComponent(location)}`
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full flex justify-center mt-12 px-4">

      {/* Subtle White Glow Border */}
      <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-white via-gray-300 to-white animate-gradient-x">

        {/* Glass Container */}
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center w-full max-w-5xl overflow-hidden">

          {/* Job Input */}
          <div className="flex items-center px-6 py-5 w-full md:w-1/2 border-b md:border-b-0 md:border-r border-white/10">
            <FaSearch className="text-gray-300 mr-3 text-lg" />
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>

          {/* Location Input */}
          <div className="flex items-center px-6 py-5 w-full md:w-1/2">
            <FaMapMarkerAlt className="text-gray-300 mr-3 text-lg" />
            <input
              type="text"
              placeholder='City, state, zip code, or "remote"'
              className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>

          {/* Button */}
          <button
            onClick={handleSearch}
            className="bg-white text-black hover:bg-gray-200 px-12 py-5 font-semibold transition-all duration-300 md:rounded-none rounded-b-3xl md:rounded-r-3xl flex items-center justify-center min-w-[170px]"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Find Jobs"
            )}
          </button>

        </div>
      </div>

    </div>
  );
};

export default JobSearchBar;