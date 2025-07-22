import React from "react";
import {
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaClipboardCheck,
  FaTools,
  FaUsersCog,
  FaChartPie,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { WebsiteImages } from "../../../common/BindImages";

const consultingServices = [
  {
    icon: <FaProjectDiagram className="text-blue-600 text-4xl" />,
    title: "IT Roadmap & Strategy",
    description:
      "Define a technology vision that aligns with your long-term business goals and budgets.",
  },
  {
    icon: <FaClipboardCheck className="text-blue-600 text-4xl" />,
    title: "Governance & Compliance",
    description:
      "Ensure your IT ecosystem complies with industry regulations and best practices.",
  },
  {
    icon: <FaTools className="text-blue-600 text-4xl" />,
    title: "Tech Gap & Infra Planning",
    description:
      "Assess existing systems, identify technology gaps, and create a future-proof infrastructure plan.",
  },
  {
    icon: <FaUsersCog className="text-blue-600 text-4xl" />,
    title: "Vendor & Tool Advisory",
    description:
      "Get expert recommendations for software, platforms, and service providers tailored to your business.",
  },
  {
    icon: <FaChartPie className="text-blue-600 text-4xl" />,
    title: "Agile Transformation",
    description:
      "Implement change management and agile methodologies for better collaboration and faster delivery.",
  },
];

const ITConsulting = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaChalkboardTeacher className="text-blue-600 text-6xl mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">IT Consulting</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic IT guidance for future-proofing your digital infrastructure, enhancing productivity, and reducing costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {consultingServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-blue-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Strategic IT Approach</h2>
            <ul className="space-y-4 text-gray-700 text-base">
              <li>🔹 Understand your business model & current tech stack</li>
              <li>🔹 Identify inefficiencies, risks, and bottlenecks</li>
              <li>🔹 Create a technology roadmap aligned with growth</li>
              <li>🔹 Recommend the right tools, platforms, and partners</li>
              <li>🔹 Guide you through change with Agile transformation</li>
            </ul>
          </div>
          <img
            src={WebsiteImages.ConsultingPage}
            alt="Strategy Planning Illustration"
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Transformation & Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
            alt="Agile and DevOps"
            className="rounded-xl shadow-xl"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Unlock Transformation</h2>
            <p className="text-gray-600 mb-4">
              Whether you're digitizing legacy systems or adopting new tech, our IT consulting services empower you to innovate with confidence.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✅ Align IT with business goals</li>
              <li>✅ Enable innovation through scalable solutions</li>
              <li>✅ Reduce operational costs with better tools</li>
              <li>✅ Achieve compliance and data governance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Need Strategic IT Guidance?</h2>
          <p className="mb-6 text-lg">Let our experts help you align technology with your business strategy.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default ITConsulting;
