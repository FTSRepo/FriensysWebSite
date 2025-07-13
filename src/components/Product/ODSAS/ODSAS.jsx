import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { WebsiteImages } from "../../../common/BindImages";
import FormPage from "../../../common/FormPage";

const accordionData = [
  {
    title: "Sunlight Exposure",
    content:
      "ODSAS simulates natural sunlight using xenon arc lamps to ensure accurate environmental replication and system behavior.",
  },
  {
    title: "Temperature Control",
    content:
      "ODSAS allows temperature tracking of devices ensuring safety and controlled behavior of software and hardware.",
  },
  {
    title: "Humidity Control",
    content:
      "Monitor system behavior under changing environmental or physical conditions using smart triggers.",
  },
];

export default function ODSAS() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      {/* Top Monitoring Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-start relative">
        {/* Decorative Dots */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[length:12px_12px] opacity-20 z-0" />

        {/* Accordion Content */}
        <div className="relative z-10">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            <span>ODSAS</span>{" "}
            <span className="text-blue-600">Monitoring System</span>
          </h2>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            <strong className="text-blue-700">ODSAS</strong> is a real-time
            activity monitoring system built for modern hybrid and remote work
            environments. It captures screen activity, tracks app usage, and
            triggers alerts for suspicious behavior—ensuring data security and
            compliance.
          </p>

          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Key Specifications & Features
          </h3>

          <div className="space-y-4">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-3 transition-all"
              >
                <button
                  className="w-full flex justify-between items-center text-left focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-medium text-gray-800">
                    {item.title}
                  </span>
                  <span className="text-blue-600">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden text-gray-600 mt-2 pr-6"
                    >
                      <p className="pt-2 text-sm">{item.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Monitoring Image */}
        <motion.div
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={WebsiteImages.ODSASOrganization}
            alt="ODSAS System"
            className="rounded-xl w-full object-cover shadow-2xl max-h-[600px]"
          />
          <h3 className="text-2xl font-bold text-gray-800 mt-4">
            ODSAS Monitoring View
          </h3>
        </motion.div>
      </div>

      {/* Organization Hierarchy Section */}
      <div className="mt-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">
            Organization Hierarchy
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 leading-relaxed">
            <li>
              Admin can configure organization-level settings and policies.
            </li>
            <li>Managers can assign access and configure staff permissions.</li>
            <li>
              All users operate on systems with the ODSAS client installed.
            </li>
            <li>
              On suspicious activity, immediate alerts are sent to admins and
              managers.
            </li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={WebsiteImages.ODSASOrganization}
            alt="ODSAS Hierarchy"
            className="rounded-xl w-full object-cover shadow-xl"
          />
        </motion.div>
      </div>

      {/* ODSAS Dashboard Section */}
      <div className="mt-28">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          ODSAS <span className="text-blue-600">Dashboard</span>
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 text-lg">
          The ODSAS Dashboard offers an intuitive, centralized interface to
          manage users, track device behavior, and respond to threats in
          real-time.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={WebsiteImages.ODSASDashboard}
              alt="ODSAS Dashboard"
              className="rounded-xl w-full shadow-2xl border border-gray-200"
            />
          </motion.div>

          {/* Dashboard Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                title: "Real-time User Insights",
                desc: "View user counts, activity trends, and flag anomalies quickly.",
              },
              {
                title: "System Health Monitoring",
                desc: "Track machine registration, renewal timelines, and usage metrics.",
              },
              {
                title: "Threat Analytics",
                desc: "Visualize user status (Online, Away, Offline) and threat prevention stats.",
              },
              {
                title: "Action-Driven Controls",
                desc: "Generate reports and respond to alerts from the dashboard directly.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-12 w-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold text-xl shadow">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="mt-28">
        <FormPage />
      </div>
    </div>
  );
}
