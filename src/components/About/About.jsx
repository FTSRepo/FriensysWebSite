import React from 'react'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaMicrosoft,
  FaUserTie,
} from "react-icons/fa";

function About() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Our Story */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are a technology-driven company committed to delivering custom software solutions and staffing services that drive real business impact. From building products to scaling teams, we help startups, SMEs, and enterprises achieve their digital goals with confidence.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be a global leader in software innovation and IT talent solutions, empowering every business to scale with technology.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver reliable, scalable, and efficient software services and IT staffing solutions tailored to each client’s unique needs.
            </p>
          </div>
        </div>

        {/* Leadership Team (optional - placeholder example) */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Leadership Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-100 p-6 rounded-xl shadow w-64">
              <FaUserTie className="text-4xl text-purple-600 mb-4 mx-auto" />
              <h4 className="text-lg font-semibold">Nikhil Kumar</h4>
              <p className="text-gray-600 text-sm">Founder & CEO</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>

        {/* Technologies We Work With */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Technologies We Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-10 text-5xl text-gray-600">
            <FaReact title="React.js" className="hover:text-blue-500 transition" />
            <FaNodeJs title="Node.js" className="hover:text-green-600 transition" />
            <FaPython title="Python" className="hover:text-yellow-500 transition" />
            <FaAws title="AWS" className="hover:text-orange-500 transition" />
            <FaMicrosoft title="Azure" className="hover:text-blue-700 transition" />
            {/* Add more icons or logos as needed */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
