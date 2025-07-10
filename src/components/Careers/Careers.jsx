import React from "react";
import { Link } from "react-router-dom";

function Careers() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg md:text-xl">
            Be part of something amazing. Grow your career with Friensys Info Labs.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600">Current Openings</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Frontend Developer",
              location: "Remote",
              type: "Full Time",
              description: "Work with React, Tailwind, and modern JS to build user-facing features.",
            },
            {
              title: "Backend Developer",
              location: "Bangalore, India",
              type: "Full Time",
              description: "Design scalable APIs and integrate data sources using Node.js & MongoDB.",
            },
            {
              title: "UI/UX Designer",
              location: "Remote",
              type: "Contract",
              description: "Design clean, modern, and intuitive interfaces for our ERP solutions.",
            },
            {
              title: "Sales Executive",
              location: "Delhi NCR",
              type: "Full Time",
              description: "Engage with schools and educational institutions to offer our solutions.",
            },
          ].map((job, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-1">
                📍 {job.location} | 🕒 {job.type}
              </p>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <Link
                to="/contact"
                className="inline-block text-indigo-600 hover:underline font-medium"
              >
                Apply Now →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Flexible Work Environment</h3>
              <p className="text-gray-600">Remote options & flexible hours.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Learning & Growth</h3>
              <p className="text-gray-600">Upskilling, mentorship & conferences.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Innovative Culture</h3>
              <p className="text-gray-600">Collaborate on meaningful projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-500 via-emerald-600 to-teal-500 text-white text-center py-12">
        <h2 className="text-3xl font-semibold mb-2">We're always looking for talented people</h2>
        <p className="mb-6">Didn’t find a suitable role? Reach out anyway!</p>
        <Link
          to="/contact"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
}

export default Careers;
