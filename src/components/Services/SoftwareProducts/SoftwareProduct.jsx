import React from "react";
import { FaCubes, FaLightbulb, FaLayerGroup, FaPalette, FaRocket, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const productFeatures = [
  {
    icon: <FaLightbulb className="text-rose-600 text-4xl" />,
    title: "Product Strategy & Planning",
    description: "We help define your product vision, roadmap, and features aligned with market demand and business goals."
  },
  {
    icon: <FaMobileAlt className="text-rose-600 text-4xl" />,
    title: "Cross-Platform Development",
    description: "Build software that runs seamlessly on web, iOS, Android, and desktop platforms."
  },
  {
    icon: <FaPalette className="text-rose-600 text-4xl" />,
    title: "UI/UX Design",
    description: "Intuitive and engaging design experiences that keep users coming back."
  },
  {
    icon: <FaLayerGroup className="text-rose-600 text-4xl" />,
    title: "Robust Architecture",
    description: "Scale your product confidently with maintainable, secure, and high-performance architecture."
  },
  {
    icon: <FaRocket className="text-rose-600 text-4xl" />,
    title: "MVP & Go-to-Market",
    description: "We deliver launch-ready MVPs quickly, helping you test, iterate, and succeed faster."
  },
];

const SoftwareProducts = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-rose-100 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaCubes className="text-rose-600 text-6xl mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Software Products</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Scalable and secure software products crafted to deliver real-world impact for your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {productFeatures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-rose-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Lifecycle */}
      <section className="bg-rose-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Software Product Lifecycle</h2>
            <ul className="space-y-4 text-gray-700 text-base">
              <li>🔹 Discovery: Market research & user personas</li>
              <li>🔹 Planning: Feature roadmap & tech selection</li>
              <li>🔹 Design: Prototyping & usability testing</li>
              <li>🔹 Development: Agile & iterative builds</li>
              <li>🔹 QA: Functional, performance & security testing</li>
              <li>🔹 Launch: MVP + go-to-market support</li>
              <li>🔹 Scale: New features, integrations & growth</li>
            </ul>
          </div>
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
            alt="Product Lifecycle Illustration"
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* UI/UX and Architecture */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="UI UX Design"
            className="rounded-xl shadow-xl"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Designed for Performance & Delight</h2>
            <p className="text-gray-600 mb-4">
              We merge beautiful design with battle-tested architecture. Every product is optimized for speed, usability, and scale.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✅ Pixel-perfect UI/UX from Figma to Frontend</li>
              <li>✅ Modular, API-first architecture</li>
              <li>✅ Secure, scalable backend infrastructure</li>
              <li>✅ CI/CD, monitoring & logging out-of-the-box</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-rose-600 text-white py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Let’s Build Your Product Together</h2>
          <p className="mb-6 text-lg">Bring your vision to life with a product team that understands business, design, and tech.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-rose-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default SoftwareProducts;
