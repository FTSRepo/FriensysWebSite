import React from "react";
import {
  FaMobileAlt,
  FaCogs,
  FaServer,
  FaUsersCog,
  FaNetworkWired,
  FaLaptopCode,
} from "react-icons/fa";

function Services() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of flexible software solutions and talent services that empower businesses to grow, innovate, and scale.
          </p>
        </div>

        {/* Service 1: Software Product Development */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">Software Product Development</h2>
            <p className="text-gray-600 mb-4">
              We design and build scalable SaaS platforms, internal tools, and mobile/web applications. Our in-house team ensures performance, user experience, and future readiness.
            </p>
            <ul className="list-disc list-inside text-gray-500">
              <li>Custom SaaS Platforms</li>
              <li>Cross-platform Mobile Apps</li>
              <li>Web Portals & Dashboards</li>
              <li>Product Design & MVP Launches</li>
            </ul>
          </div>
          <div className="text-center">
            <FaMobileAlt className="text-6xl text-purple-600 mx-auto" />
          </div>
        </div>

        {/* Service 2: Custom Software Development */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20 md:flex-row-reverse">
          <div className="md:order-2">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Custom Software Development</h2>
            <p className="text-gray-600 mb-4">
              We craft tailor-made digital solutions that fit your business like a glove. Whether it's streamlining operations or building core systems, we deliver robust custom applications.
            </p>
            <ul className="list-disc list-inside text-gray-500">
              <li>Healthcare Management Systems</li>
              <li>EdTech Platforms</li>
              <li>Finance & CRM Solutions</li>
              <li>ERP & Business Tools</li>
            </ul>
          </div>
          <div className="text-center md:order-1">
            <FaLaptopCode className="text-6xl text-indigo-600 mx-auto" />
          </div>
        </div>

        {/* Service 3: Software Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Software Services</h2>
            <p className="text-gray-600 mb-4">
              We provide end-to-end services from application maintenance to system migration and API integrations, ensuring your software runs smoothly and efficiently.
            </p>
            <ul className="list-disc list-inside text-gray-500">
              <li>System Integration</li>
              <li>Cloud Migration</li>
              <li>API Design & Integration</li>
              <li>Maintenance & DevOps</li>
            </ul>
          </div>
          <div className="text-center">
            <FaServer className="text-6xl text-green-600 mx-auto" />
          </div>
        </div>

        {/* Service 4: IT Staffing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="md:order-2">
            <h2 className="text-2xl font-semibold text-pink-700 mb-2">IT Staffing</h2>
            <p className="text-gray-600 mb-4">
              Quickly scale your team with vetted, experienced developers. We provide flexible hiring models tailored to your project scope, timeline, and technology stack.
            </p>
            <ul className="list-disc list-inside text-gray-500">
              <li>Frontend, Backend, Full-Stack Developers</li>
              <li>DevOps Engineers</li>
              <li>Project-Based or Long-Term Hiring</li>
              <li>Remote or On-Site Staffing</li>
            </ul>
          </div>
          <div className="text-center md:order-1">
            <FaUsersCog className="text-6xl text-pink-600 mx-auto" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;
