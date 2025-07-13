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
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">About Our School ERP</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
          Our School ERP system is a comprehensive, user-friendly solution designed to streamline the academic and administrative operations of educational institutions. Built using modern technologies, it empowers staff, teachers, students, and parents with real-time access to essential features and tools.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
            <FaReact className="text-4xl text-sky-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Modern Frontend</h3>
            <p className="text-gray-500">
              Built with React.js to ensure fast, responsive, and intuitive user experience.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
            <FaNodeJs className="text-4xl text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Robust Backend</h3>
            <p className="text-gray-500">
              Node.js powers our backend for scalable and efficient performance.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
            <FaPython className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">AI & Automation</h3>
            <p className="text-gray-500">
              Python integration for smart analytics and automation features.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
            <FaAws className="text-4xl text-orange-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Cloud Powered</h3>
            <p className="text-gray-500">
              Hosted on AWS for 99.99% uptime and secure data storage.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
            <FaMicrosoft className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Microsoft Integration</h3>
            <p className="text-gray-500">
              Seamless support with Microsoft tools like Teams and Excel.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
            <FaUserTie className="text-4xl text-gray-700 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Admin & Staff Friendly</h3>
            <p className="text-gray-500">
              Intuitive dashboards and tools to manage classes, fees, exams, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
