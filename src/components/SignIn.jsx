import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = ({ setIsAuthenticated, setUserType }) => {
  const navigate = useNavigate();
  const [role, setRole] = useState("jobseeker");

  const handleLogin = () => {
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
      <div className="bg-white/5 p-8 rounded-xl border border-white/10 w-96">
        <h2 className="text-2xl text-white mb-6">Sign In</h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full mb-4 p-3 bg-white/10 text-white"
        >
          <option value="jobseeker">Job Seeker</option>
          <option value="employer">Employer</option>
        </select>

        <button
          onClick={handleLogin}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;