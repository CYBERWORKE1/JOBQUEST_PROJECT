import React from "react";

const SignUp = ({ setCurrentView }) => {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
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
          className="w-full mb-6 p-3 rounded-lg bg-white/10 text-white border border-white/20"
        />

        <button
          onClick={() => setCurrentView("home")}
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignUp;
