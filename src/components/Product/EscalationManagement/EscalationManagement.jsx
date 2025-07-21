import React from "react";
import {
  FaTicketAlt,
  FaExclamationTriangle,
  FaClipboardCheck,
  FaStopwatch,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { WebsiteImages } from "../../../common/BindImages";
import FormPage from "../../../common/FormPage";
import { Link } from "react-router-dom";

function EscalationManagement() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-white py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Smarter{" "}
              <span className="text-blue-600">Escalation Management</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Revolutionizing the way businesses handle customer escalation
              across service and post-service delivery stages. The system
              auto-generates tickets by priority and assigns them to authorized
              representatives — simplifying resolution.
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              Request Demo
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={WebsiteImages.EscalationDashboardImage}
              alt="Escalation system dashboard"
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-blue-100 to-white py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Key <span className="text-blue-600">Benefits</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: <FaTicketAlt className="text-white text-2xl" />,
                title: "Ticketing Management",
                desc: "Automatically generates and organizes support tickets by customer priority.",
              },
              {
                icon: <FaExclamationTriangle className="text-white text-2xl" />,
                title: "Escalation Control",
                desc: "Manage escalations at multiple levels with rule-based routing and priority.",
              },
              {
                icon: <FaClipboardCheck className="text-white text-2xl" />,
                title: "Ticket Auditing",
                desc: "Track and audit tickets for accountability and resolution history.",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-lg text-blue-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-700 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Platform <span className="text-blue-600">Achievements</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                icon: <FaClipboardCheck className="text-white text-xl" />,
                title: "Smooth Escalation Flow",
                desc: "Ensured reliable escalation paths without bottlenecks or delays.",
              },
              {
                icon: <FaStopwatch className="text-white text-xl" />,
                title: "Response Time Tracing",
                desc: "Track representative response time on each ticket for better SLA monitoring.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start bg-white border border-gray-200 p-6 rounded-xl shadow"
              >
                <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-full mr-4 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-blue-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section>
        <FormPage />
      </section>
    </main>
  );
}

export default EscalationManagement;
