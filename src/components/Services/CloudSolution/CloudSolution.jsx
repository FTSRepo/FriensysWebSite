import React from "react";
import { FaCloud, FaServer, FaNetworkWired, FaSyncAlt, FaLock, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import WhatsAppButton from "../../../common/WhatsApp/WhatsAppButton";

const cloudFeatures = [
  {
    icon: <FaServer className="text-teal-600 text-4xl" />,
    title: "Cloud Migration & Optimization",
    description: "We migrate and optimize workloads to AWS, Azure, or hybrid environments with minimal downtime."
  },
  {
    icon: <FaTools className="text-teal-600 text-4xl" />,
    title: "Infrastructure as Code & DevOps",
    description: "Automate infrastructure using Terraform, Ansible, and CI/CD pipelines for rapid deployments."
  },
  {
    icon: <FaNetworkWired className="text-teal-600 text-4xl" />,
    title: "Scalable Architecture Design",
    description: "Design scalable, secure, and cost-effective multi-cloud architectures."
  },
  {
    icon: <FaSyncAlt className="text-teal-600 text-4xl" />,
    title: "Disaster Recovery & Monitoring",
    description: "Ensure business continuity with robust disaster recovery and real-time monitoring strategies."
  },
  {
    icon: <FaCloud className="text-teal-600 text-4xl" />,
    title: "Cloud-Native App Development",
    description: "Build modern apps with microservices, serverless functions, and containers."
  }
];

const CloudSolutions = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-teal-100 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaCloud className="text-teal-600 text-6xl mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cloud Solutions</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Empower your business with secure, scalable, and cost-efficient cloud infrastructure using AWS and Azure best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {cloudFeatures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-teal-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-teal-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Us for Cloud?</h2>
            <ul className="space-y-4 text-gray-700">
              <li>✅ Certified AWS & Azure architects</li>
              <li>✅ Cost optimization & security-first design</li>
              <li>✅ DevOps-driven delivery with full automation</li>
              <li>✅ 24/7 cloud monitoring & support</li>
              <li>✅ Flexible deployment: public, private, hybrid</li>
            </ul>
          </div>
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
            alt="Cloud infrastructure illustration"
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* DevOps & Automation */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Built with DevOps & Automation</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Speed up releases, increase reliability, and scale with confidence using our DevOps expertise. We implement CI/CD pipelines, automated testing, and infrastructure provisioning from day one.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <img src="https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" alt="Terraform" className="w-12" />
            <img src="https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg" alt="Ansible" className="w-12" />
            <img src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" alt="Jenkins" className="w-12" />
            <img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="Docker" className="w-12" />
            <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="Kubernetes" className="w-12" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-600 text-white py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Start Your Cloud Journey Today</h2>
          <p className="mb-6 text-lg">Let's transform your infrastructure with future-ready cloud solutions.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-teal-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>

      <WhatsAppButton/>
    </div>
  );
};

export default CloudSolutions;
