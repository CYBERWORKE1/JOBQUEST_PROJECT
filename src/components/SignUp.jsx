import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setIsAuthenticated, setUserType }) => {
  const navigate = useNavigate();
  const [role, setRole] = useState("jobseeker");

  const handleSignUp = () => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userType", role);

    setIsAuthenticated(true);
    setUserType(role);

    if (role === "jobseeker") {
      navigate("/jobseeker");
    } else {
      navigate("/employer");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 w-96">
        <h2 className="text-2xl text-white mb-6 text-center">
          Sign Up
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-3 rounded-lg bg-white/10 text-white border border-white/20"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-lg bg-white/10 text-white border border-white/20"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 rounded-lg bg-white/10 text-white border border-white/20"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full mb-6 p-3 rounded-lg bg-white/10 text-white border border-white/20"
        >
          <option value="jobseeker">Job Seeker</option>
          <option value="employer">Employer</option>
        </select>

        <button
          onClick={handleSignUp}
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignUp;