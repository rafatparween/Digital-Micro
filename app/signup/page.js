import React from "react";

const Signup = () => {
  return (
    <div className="bg-gradient-to-r from-[#2558a2] via-[#1e8cd8] to-[#00aaff] antialiased bg-grid-white/[0.02] h-screen w-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-md">
        <h1 className="text-4xl mb-4 text-[#2558a2]">Sign Up</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
        <button className="w-full p-2 bg-gradient-to-r from-[#2558a2] via-[#1e8cd8] to-[#00aaff] antialiased bg-grid-white/[0.02] text-white rounded hover:bg-pink-700">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;