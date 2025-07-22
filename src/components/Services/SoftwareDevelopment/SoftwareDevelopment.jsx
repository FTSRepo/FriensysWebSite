import React from "react";
import {
  FaCode,
  FaCogs,
  FaMobileAlt,
  FaChartLine,
  FaCloud,
} from "react-icons/fa";
import { motion } from "framer-motion";

const softwareServices = [
  {
    icon: <FaCode className="text-purple-600 text-4xl" />,
    title: "Custom Web & Mobile Applications",
    description:
      "We create user-centric applications tailored to your business goals using the latest tech stacks.",
  },
  {
    icon: <FaCogs className="text-purple-600 text-4xl" />,
    title: "ERP & Business Automation",
    description:
      "Boost productivity and reduce manual effort with scalable ERP solutions and automation tools.",
  },
  {
    icon: <FaChartLine className="text-purple-600 text-4xl" />,
    title: "Performance Dashboards",
    description:
      "Visualize KPIs and analytics to make smarter decisions with real-time insights.",
  },
  {
    icon: <FaCloud className="text-purple-600 text-4xl" />,
    title: "Full Product Lifecycle",
    description:
      "From concept to deployment and support—we handle the entire product development lifecycle.",
  },
  {
    icon: <FaMobileAlt className="text-purple-600 text-4xl" />,
    title: "SEO-Optimized Websites",
    description:
      "Get discovered online with fast, responsive, and SEO-friendly websites.",
  },
];

const SoftwareDevelopment = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaCode className="text-purple-600 text-6xl mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Software Development
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From web and mobile apps to enterprise-grade ERP systems, we craft
              scalable software that empowers businesses to thrive in the
              digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Features */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {softwareServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-blue-600 text-3xl mb-4">{service.icon}</div>

              {/* Title with underline */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-blue-500">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-purple-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Software Development?
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>✅ Agile and iterative development model</li>
              <li>✅ Experienced full-stack development team</li>
              <li>✅ Scalable cloud-based architecture</li>
              <li>✅ DevOps, CI/CD & automation best practices</li>
              <li>✅ Ongoing maintenance & support</li>
            </ul>
          </div>
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
            alt="Software Development Illustration"
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-600 text-white py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Next Software Product?
          </h2>
          <p className="mb-6 text-lg">
            Let’s turn your vision into a powerful digital solution. Get in
            touch with us today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
