import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb, FaUsers, FaCogs } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-blue-600">Our Friensys</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We built this platform with a vision to help educational institutions
          transform the way they manage student engagement, operations, and
          growth through intelligent automation and powerful insights.
        </motion.p>
      </div>

      {/* Why We Started */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-24">
        <motion.div
          className="bg-blue-50 p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <FaLightbulb className="text-3xl text-blue-600" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Why We Started
            </h3>
          </div>
          <p className="text-gray-700 text-base leading-relaxed">
            Education systems were struggling with disconnected tools,
            inefficient paperwork, and missed student follow-ups. We envisioned
            a single platform that brings everything—admissions, academics,
            communication—under one smart, scalable CRM solution. We wanted to
            make institutions more agile, accountable, and future-ready.
          </p>
        </motion.div>

        {/* Our Goals */}
        <motion.div
          className="bg-green-50 p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <FaBullseye className="text-3xl text-green-600" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Mission & Goals
            </h3>
          </div>
          <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
            <li>Empower institutions with real-time visibility and control</li>
            <li>Automate manual processes like lead handling and fee tracking</li>
            <li>Enhance student experience through timely updates</li>
            <li>Ensure data-driven decisions via intelligent reporting</li>
            <li>Bridge gaps between parents, teachers, and administration</li>
          </ul>
        </motion.div>
      </div>

      {/* Bonus Values Section (Optional) */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            icon: <FaUsers className="text-blue-600 text-3xl mx-auto mb-2" />,
            title: "Student-Centric",
            desc: "We put learners at the heart of everything we build.",
          },
          {
            icon: <FaCogs className="text-green-600 text-3xl mx-auto mb-2" />,
            title: "Process Automation",
            desc: "Cut down human error with automated workflows.",
          },
          {
            icon: <FaBullseye className="text-red-600 text-3xl mx-auto mb-2" />,
            title: "Results-Oriented",
            desc: "Drive results through measurable KPIs and analytics.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {item.icon}
            <h4 className="text-xl font-semibold text-gray-800 mb-1">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
