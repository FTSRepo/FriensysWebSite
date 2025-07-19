import React from "react";
import {
  FaBell,
  FaComments,
  FaIndustry,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";
import { WebsiteImages } from "../../../common/BindImages";
import { motion } from "framer-motion";
import FormPage from "../../../common/FormPage";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: <FaUsers className="text-white text-xl" />,
    title: "Multi-Party Access",
    description:
      "Buyers and suppliers register and collaborate on a single platform.",
  },
  {
    icon: <FaIndustry className="text-white text-xl" />,
    title: "Manufacturer–Vendor Hub",
    description:
      "Acts as a digital marketplace for manufacturers and vendors alike.",
  },
  {
    icon: <FaBell className="text-white text-xl" />,
    title: "Real-Time Alerts",
    description: "Get notified instantly via in-app and email notifications.",
  },
  {
    icon: <FaComments className="text-white text-xl" />,
    title: "Integrated Chat & Docs",
    description: "Communicate via chat and share documents for development.",
  },
];

const achievements = [
  "Responded to the challenges of an unorganised and fragmented sourcing industry.",
  "Enabled manufacturers to streamline procurement of bought-out parts efficiently.",
];

function Marketplace() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text Section with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
              Marketplace for the{" "}
              <span className="text-blue-600">Automobile Industry</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              A centralized platform where buyers and suppliers connect for
              procurement, development, and communication. Streamline your
              entire sourcing and supply chain process—post detailed RFQs
              (Request for Quotations), receive competitive bids from verified
              suppliers, and finalize deals seamlessly. Collaborate in real-time
              with your partners to manage product specifications, revisions,
              and timelines. From initial inquiry to final delivery, manage your
              product lifecycle efficiently with built-in tools for tracking,
              documentation, and feedback. Whether you're launching a new
              product or scaling operations, our platform provides the
              infrastructure for transparent, efficient, and strategic
              procurement.
            </p>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>

          {/* Image Section with Animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-80 md:h-[420px] rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src={WebsiteImages.friensysImage}
                alt="Marketplace Overview"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800">
              Key <span className="text-blue-600">Benefits</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Explore how our marketplace enhances collaboration and efficiency.
            </p>
          </div>

          <div className="relative border-l-4 border-blue-200 pl-8 space-y-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Dot and connector line */}
                <div className="absolute -left-[30px] top-1.5 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
                  {benefit.icon}
                </div>

                {/* Card content */}
                <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold text-xl text-blue-800 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-700 text-base">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800">
              Marketplace <span className="text-blue-600">Business Model</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>

          {/* Grid Content */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 w-full max-w-[600px]">
                <img
                  src={WebsiteImages.MarketplaceBusinessModel} // Replace with your actual image path
                  alt="Marketplace Business Model"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Our <strong>Marketplace Business Model</strong> is built to
                seamlessly connect manufacturers and suppliers across the
                automobile industry. From onboarding and quotation management to
                bidding, deal execution, and production coordination —
                everything happens in one streamlined flow.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                Features like centralized user management, real-time alerts, and
                collaborative documentation empower businesses to operate with
                maximum transparency, speed, and control — all within a single
                digital ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-gray-800 mb-12"
          >
            Our <span className="text-blue-600">Achievements</span>
          </motion.h2>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <FaCheckCircle className="text-blue-600 text-2xl mt-1 mr-4" />
                <p className="text-gray-800 text-lg">{item}</p>
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

export default Marketplace;
