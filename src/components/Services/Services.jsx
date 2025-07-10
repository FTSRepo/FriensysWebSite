import React from "react";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaServer,
  FaUsersCog,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt className="text-white text-4xl" />,
    title: "Software Product Development",
    description:
      "Scalable SaaS platforms, web portals, and mobile apps with great UX and performance.",
    points: [
      "Custom SaaS Solutions",
      "Mobile & Web Applications",
      "Admin Panels & Dashboards",
      "Product MVPs",
    ],
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: <FaLaptopCode className="text-white text-4xl" />,
    title: "Custom Software Development",
    description:
      "Tailor-made applications built to streamline operations and power business logic.",
    points: [
      "Healthcare & EdTech",
      "Finance & CRM Systems",
      "ERP Integrations",
      "Custom APIs",
    ],
    gradient: "from-indigo-500 to-sky-600",
  },
  {
    icon: <FaServer className="text-white text-4xl" />,
    title: "Software Services",
    description:
      "End-to-end maintenance, migration, integration, and scaling support for your stack.",
    points: [
      "System Integration",
      "Cloud Migration",
      "DevOps & Maintenance",
      "API Services",
    ],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: <FaUsersCog className="text-white text-4xl" />,
    title: "IT Staffing",
    description:
      "Hire remote or onsite professionals, individually or as a dedicated team.",
    points: [
      "Frontend & Backend Engineers",
      "DevOps Experts",
      "Flexible Hiring Models",
      "Short-term & Long-term",
    ],
    gradient: "from-pink-500 to-rose-600",
  },
];

function Services() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-3">What We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our versatile suite of software development and IT staffing services tailored to your success.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl p-6"
            >
              {/* Icon with gradient background */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${service.gradient} mb-4`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-3">{service.description}</p>

              {/* Bullet Points */}
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
