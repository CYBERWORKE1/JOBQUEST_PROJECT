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
    navigate(role === "employer" ? "/employer" : "/jobseeker");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-xl w-96 shadow-2xl">
        <h2 className="text-2xl mb-6 text-center">Create Account</h2>
        <input className="w-full mb-4 p-3 bg-white/10 rounded-lg border border-white/10" placeholder="Full Name" />
        <input className="w-full mb-4 p-3 bg-white/10 rounded-lg border border-white/10" placeholder="Email" />
        <input type="password" className="w-full mb-4 p-3 bg-white/10 rounded-lg border border-white/10" placeholder="Password" />
        <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full mb-6 p-3 bg-white/10 rounded-lg border border-white/10">
          <option value="jobseeker">Job Seeker</option>
          <option value="employer">Employer</option>
        </select>
        <button onClick={handleSignUp} className="w-full py-3 bg-blue-800 hover:bg-blue-700 rounded-lg">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignUp;