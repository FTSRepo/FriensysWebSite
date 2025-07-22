import React from "react";
import {
  FaCogs,
  FaMobileAlt,
  FaRocket,
  FaCloud,
  FaLock,
  FaSyncAlt,
  FaIndustry,
  FaCar,
  FaSchool,
  FaTruck,
  FaCode,
  FaPlane,
  FaRing,
  FaClipboardList,
  FaLaptopCode,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaQuoteLeft,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { BsClipboard2Check } from "react-icons/bs";
import {
  MdElectricalServices,
  MdOutlineRealEstateAgent,
  MdOutlineTextSnippet,
} from "react-icons/md";
import { GiSolarPower, GiTeacher } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";
import { SchoolImages, WebsiteImages } from "../../../common/BindImages";
import FormPage from "../../../common/FormPage";
import WhatsAppButton from "../../../common/WhatsApp/WhatsAppButton";

const industries = [
  "Education Technology",
  "Healthcare & Telemedicine",
  "E-commerce & Marketplaces",
  "HR Tech & Staffing",
  "Fintech & Payments",
  "SaaS Platforms",
];

const testimonials = [
  {
    text: "Friensys transformed our operations. Their solutions are reliable and their support is top-notch.",
    name: "Amit Verma",
    role: "Operations Head",
  },
  {
    text: "Great communication and delivery on time. We've seen a 30% increase in efficiency!",
    name: "Neha Sharma",
    role: "CTO",
  },
  {
    text: "Their expertise in ERP helped us simplify our workflows dramatically.",
    name: "Rahul Das",
    role: "Project Manager",
  },
];

const industriesServices = [
  {
    label: "Electronics",
    icon: <MdElectricalServices size={28} />,
    color: "text-pink-600",
  },
  {
    label: "Machine Manufacturer",
    icon: <FaIndustry size={28} />,
    color: "text-purple-600",
  },
  { label: "Solar", icon: <GiSolarPower size={28} />, color: "text-pink-500" },
  {
    label: "Gems Jewellery",
    icon: <FaRing size={28} />,
    color: "text-purple-600",
  },
  {
    label: "Travel Industry",
    icon: <FaPlane size={28} />,
    color: "text-pink-500",
  },
  {
    label: "Textile Industry",
    icon: <MdOutlineTextSnippet size={28} />,
    color: "text-orange-500",
  },
  {
    label: "Trader & distributor",
    icon: <HiUserGroup size={28} />,
    color: "text-blue-600",
  },
  {
    label: "Real Estate",
    icon: <MdOutlineRealEstateAgent size={28} />,
    color: "text-sky-500",
  },
  {
    label: "Marketing Agencies",
    icon: <BsClipboard2Check size={28} />,
    color: "text-blue-500",
  },
  {
    label: "Insurance",
    icon: <BsClipboard2Check size={28} />,
    color: "text-orange-400",
  },
  { label: "Logistics", icon: <FaTruck size={28} />, color: "text-green-500" },
  {
    label: "Automobile Industry",
    icon: <FaCar size={28} />,
    color: "text-sky-400",
  },
  { label: "Education", icon: <FaSchool size={28} />, color: "text-green-600" },
  {
    label: "Home appliance",
    icon: <BsClipboard2Check size={28} />,
    color: "text-blue-600",
  },
  {
    label: "IT Companies",
    icon: <FaCode size={28} />,
    color: "text-green-600",
  },
];

const service = [
  {
    title: "Software Development",
    icon: <FaCode className="text-purple-600 text-5xl" />,
    color: "border-purple-500",
    description:
      "From web and mobile apps to enterprise-grade ERP systems, we craft scalable software that empowers businesses to thrive in the digital age.",
    points: [
      "Custom web & mobile applications",
      "ERP & business automation",
      "Performance dashboards & analytics",
      "SEO-optimized websites",
      "Full lifecycle product development",
    ],
  },
  {
    title: "Cloud Solutions",
    icon: <FaCloud className="text-teal-600 text-5xl" />,
    color: "border-teal-500",
    description:
      "Empower your business with secure, scalable, and cost-efficient cloud infrastructure using AWS and Azure best practices.",
    points: [
      "Cloud migration & optimization (AWS, Azure)",
      "Infrastructure as Code & DevOps",
      "Scalable architecture design",
      "Disaster recovery & monitoring",
      "Cloud-native app development",
    ],
  },
  {
    title: "IT Consulting",
    icon: <FaChalkboardTeacher className="text-blue-600 text-5xl" />,
    color: "border-blue-500",
    description:
      "Strategic IT guidance for future-proofing your digital infrastructure, enhancing productivity, and reducing costs.",
    points: [
      "IT roadmap & strategy",
      "Governance & compliance planning",
      "Tech gap analysis & infrastructure planning",
      "Vendor & tool recommendations",
      "Agile transformation & change management",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-24 px-6 md:px-12 lg:px-20 text-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          {/* LEFT TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Tag */}
            <div className="inline-block bg-indigo-100 text-indigo-700 font-medium px-4 py-1 rounded-full text-sm mb-6 shadow-md">
              Scalable Software Solutions
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
              Transforming <span className="text-indigo-600">Visions</span>
              <br />
              Into{" "}
              <span className="text-indigo-600 underline underline-offset-4 decoration-4 decoration-indigo-300">
                Digital Products
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              At <strong>Friensys Info Labs</strong>, we engineer world-class
              digital platforms that scale as your vision grows. We specialize
              in building secure, future-ready solutions with speed and
              precision.
            </p>
            <p className="mt-4 text-base text-gray-600 max-w-xl mx-auto lg:mx-0">
              Whether you're launching a startup or scaling enterprise
              infrastructure, our team is your innovation partner—every step of
              the way.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-4 sm:p-6">
              <img
                src={WebsiteImages.ServicePage}
                alt="Digital Innovation"
                className="rounded-2xl object-cover w-full max-h-[450px]"
              />
            </div>

            {/* Glowing Gradient Blob */}
            <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-indigo-200 opacity-30 blur-[120px] rounded-full z-[-1]" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-b from-white via-sky-50 to-emerald-100 py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Our Core Service Offerings
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore how our specialized solutions in software development, cloud
            transformation, and IT strategy can accelerate your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {service.map((service, index) => (
            <div
              key={index}
              className={`border-t-4 ${service.color} bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6`}
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>
              <ul className="list-disc list-inside space-y-2 text-left text-gray-700">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Feature Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-snug">
              Your Ideal <span className="text-indigo-600">Tech Partner</span>
            </h2>

            <p className="text-gray-700 text-lg">
              We go beyond development. From idea to scale, our team ensures
              seamless delivery, agile execution, and ongoing growth support
              tailored to your success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
              {[
                "Dedicated Project Manager",
                "Agile Sprint Cycles",
                "Transparent Documentation",
                "Post-launch Support",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 bg-white rounded-xl shadow-lg px-5 py-4 transition-all"
                >
                  <div className="text-indigo-600 text-xl">
                    <FaCheckCircle />
                  </div>
                  <span className="text-gray-800 font-medium text-base">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <img
                src={WebsiteImages.DashboardImage}
                alt="Tech Partnership"
                className="rounded-3xl shadow-2xl border border-blue-100 w-full max-w-xl mx-auto"
              />

              {/* Optional badge/overlay */}
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs rounded-full shadow">
                24/7 Support
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Gradient Shape */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-200 rounded-full opacity-20 blur-[120px] pointer-events-none z-[-1]" />
      </section>

      {/* Industries Section */};
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
        {/* Decorative Background Shape */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-[120px] opacity-20 pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Empowering <span className="text-indigo-600">Industries</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-700 text-lg max-w-2xl mx-auto mb-10"
          >
            Our tailored software solutions accelerate digital transformation
            across a wide range of industries with agility, scalability, and
            innovation.
          </motion.p>

          {/* Industry Chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-6 py-2 bg-white border border-indigo-100 text-indigo-700 rounded-full shadow-md hover:bg-indigo-50 transition text-sm font-medium"
              >
                {/* Custom icon */}
                <svg
                  className="w-4 h-4 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {industry}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-200 opacity-20 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Hear From Our <span className="text-indigo-600">Clients</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-700 text-lg max-w-2xl mx-auto mb-14"
          >
            Unfiltered stories of success from partners who trust us with their
            vision.
          </motion.p>

          {/* Testimonials Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-white/80 backdrop-blur-md border border-indigo-100 rounded-3xl p-8 pt-12 shadow-xl hover:shadow-2xl transition-all"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute top-6 left-6 text-indigo-200 text-4xl">
                  <FaQuoteLeft />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-800 text-base leading-relaxed mb-8 relative z-10">
                  {t.text}
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-indigo-700 font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-10 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Industries <span className="text-blue-600">We Empower</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Scalable, industry‑focused tech crafted to help your business
              thrive.
            </p>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {industriesServices.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl p-5 border border-gray-200
                         shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_15px_rgba(0,0,0,0.05)]
                         transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                         flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 mb-3 flex items-center justify-center
                              bg-blue-100 text-blue-600 rounded-full shadow-inner
                              transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                >
                  {item.icon}
                </div>

                {/* Label */}
                <h4 className="text-sm font-semibold text-gray-800">
                  {item.label}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section>
        <FormPage />
      </section>

      <WhatsAppButton/>
    </div>
  );
};

export default ServicesPage;
