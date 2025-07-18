import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaLightbulb,
  FaUsers,
  FaCogs,
  FaChartLine,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";
import FormPage from "../../common/FormPage";

const timelineData = [
  {
    year: "2018",
    title: "Conceptualization",
    description: "Initial idea to digitize school operations began.",
  },
  {
    year: "2019",
    title: "Research Phase",
    description: "Met with institutions to understand their pain points.",
  },
  {
    year: "2020",
    title: "Product Launch",
    description: "Launched ERP MVP with core modules.",
  },
  {
    year: "2021",
    title: "User Adoption",
    description: "Adopted by 25+ schools across multiple states.",
  },
  {
    year: "2023",
    title: "AI Analytics",
    description: "Introduced smart reporting and dashboards.",
  },
  {
    year: "2024",
    title: "Refinement",
    description: "Optimized UX/UI, added parent and student apps.",
  },
  {
    year: "2025",
    title: "National Recognition",
    description: "Recognized among India's top ed-tech innovators.",
  },
];

export default function About() {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-10">
      {/* ----------- Intro Section ----------- */}
      <section className="max-w-7xl mx-auto text-center mb-24">
        <motion.h2
          className="text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet <span className="text-blue-600">Friensys Info Labs</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Empowering educational institutions with a cutting-edge CRM that
          simplifies operations, boosts productivity, and enhances student
          success.
        </motion.p>
      </section>

      {/* ----------- Our Story Section ----------- */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Why We Started
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Back in 2018, we noticed schools were juggling multiple systems and
            paper-based processes. Communication gaps between teachers,
            students, and parents were slowing down progress. So, we created a
            platform that centralizes everything—making schools smarter, faster,
            and better connected.
          </p>
        </motion.div>

        <motion.div
          className="bg-blue-100 rounded-2xl p-10 order-1 md:order-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaLightbulb className="text-5xl text-blue-600 mb-4" />
          <p className="text-lg text-blue-900 font-medium">
            “Let’s replace outdated tools with intelligent automation that
            speaks the language of educators.”
          </p>
        </motion.div>
      </section>

      {/* ----------- Mission Section ----------- */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          className="bg-green-100 rounded-2xl p-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaBullseye className="text-5xl text-green-700 mb-4" />
          <ul className="list-disc list-inside text-gray-800 space-y-3">
            <li>Improve school transparency and real-time decision making</li>
            <li>Eliminate manual errors through intelligent workflows</li>
            <li>Deliver smooth and timely communication to parents</li>
            <li>Support educators with smart dashboards and reports</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission & Goals
          </h3>
          <p className="text-gray-700 leading-relaxed text-base">
            To help our customers expand their businesses by providing creative
            design, development and delivering high-quality solutions that add
            value and offers authentic competitive advantage to customers all
            over the world
          </p>
        </motion.div>
      </section>

      {/* ----------- Journey Stats Section ----------- */}
      <section className="bg-white py-16 mb-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            className="text-3xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Journey So Far
          </motion.h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            From a single product demo to being trusted by over 100+
            institutions across India—we’ve been on a mission to create lasting
            value in the ed-tech space.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaUsers />,
                title: "100+ Schools",
                desc: "Using our tools every day.",
              },
              {
                icon: <FaChartLine />,
                title: "50K+ Students",
                desc: "Managed seamlessly via our platform.",
              },
              {
                icon: <FaHandshake />,
                title: "500+ Teachers",
                desc: "Benefiting from real-time analytics.",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="bg-gray-100 rounded-xl p-6 text-center shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-4xl text-blue-600 mb-3 mx-auto">
                  {stat.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800">
                  {stat.title}
                </h4>
                <p className="text-gray-600 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------- What Makes Us Different Section ----------- */}
      <section className="max-w-7xl mx-auto mb-24 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 mb-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Makes Us Different?
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUsers className="text-blue-600 text-3xl mb-3 mx-auto" />,
              title: "Student-Centric Design",
              desc: "Everything we build keeps the student experience in mind.",
            },
            {
              icon: <FaCogs className="text-green-600 text-3xl mb-3 mx-auto" />,
              title: "Smart Automation",
              desc: "Reduce workload with automated workflows and real-time updates.",
            },
            {
              icon: (
                <FaBullseye className="text-red-600 text-3xl mb-3 mx-auto" />
              ),
              title: "Impact-Driven",
              desc: "Our goal is to create measurable outcomes—not just dashboards.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white border p-6 rounded-xl shadow hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
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

      {/* ----------- Horizontal Timeline Section ----------- */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Timeline
          </h2>
          <p className="text-gray-600">
            A journey of innovation and growth from 2018 to 2025
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 z-0" />

          <div className="flex flex-wrap justify-between items-center gap-y-16 px-2 relative z-10">
            {timelineData.map((item, index) => {
              const isAbove = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center flex-1 min-w-[120px] max-w-[140px] mx-2"
                >
                  {/* Vertical connector */}
                  <div
                    className={`w-1 h-6 bg-blue-500 ${
                      isAbove ? "mb-2 order-last" : "mt-2"
                    }`}
                  ></div>

                  {/* Card */}
                  <div
                    className={`bg-white border border-gray-200 shadow-md rounded-md p-3 text-center text-xs ${
                      isAbove ? "mb-8" : "mt-8"
                    }`}
                  >
                    <h4 className="text-blue-600 font-semibold">{item.year}</h4>
                    <h5 className="text-gray-800 font-bold mt-1 text-sm">
                      {item.title}
                    </h5>
                    <p className="text-gray-600 mt-1 text-xs">
                      {item.description}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mt-28">
        <FormPage />
      </section>
    </section>
  );
}
