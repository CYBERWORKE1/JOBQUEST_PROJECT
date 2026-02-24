import { useNavigate } from "react-router-dom";

const SignIn = ({ setIsAuthenticated, setUserType }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userType", "jobseeker");
    setIsAuthenticated(true);
    setUserType("jobseeker");
    navigate("/jobseeker");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-xl w-96 shadow-2xl">
        <h2 className="text-2xl mb-6 text-center">Sign In</h2>
        <input className="w-full mb-4 p-3 bg-white/10 rounded-lg border border-white/10" placeholder="Email" />
        <input type="password" className="w-full mb-6 p-3 bg-white/10 rounded-lg border border-white/10" placeholder="Password" />
        <button onClick={handleLogin} className="w-full py-3 bg-blue-800 hover:bg-blue-700 rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;