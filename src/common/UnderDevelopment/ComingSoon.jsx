import React from "react";
import { FaTools } from "react-icons/fa";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="bg-white shadow-2xl rounded-2xl px-10 py-12 max-w-xl w-full text-center border border-blue-100">
        {/* Animated Icon */}
        <div className="inline-flex items-center justify-center mb-6 w-24 h-24 rounded-full bg-blue-100 text-blue-600 shadow-lg relative animate-bounce">
          <FaTools className="text-4xl" />
          <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Feature <span className="text-blue-600">Under Development</span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-lg text-gray-600">
          We’re working hard to bring this feature to life. Check back soon!
        </p>

        {/* Back Button */}
        <div className="mt-8">
          <button
            onClick={() => window.history.back()}
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
