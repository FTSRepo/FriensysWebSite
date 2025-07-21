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
import { SchoolImages, WebsiteImages } from "../../common/BindImages";
import FormPage from "../../common/FormPage";

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
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-100 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
          {/* LEFT: Text */}
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Empowering Ideas,
              <br />
              <span className="text-blue-600 relative inline-block">
                Building Products
                <span className="block h-1 w-full bg-blue-300 mt-1 rounded-full opacity-50"></span>
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Friensys Info Labs turns concepts into reliable software products
              — fast, scalable, and secure.
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/"
                className="inline-block bg-blue-600 text-white text-base font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Illustration */}
          <motion.div
            className="w-full max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={WebsiteImages.ServicePage}
              alt="3D Illustration"
              className="w-full  max-h-[400px] object-cover"
            />
          </motion.div>
        </div>

        {/* Optional Decorative Blob */}
        <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
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
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-tr from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* LEFT Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-800 leading-snug">
              Why Choose{" "}
              <span className="text-blue-600">Us as Your Tech Partner</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We don’t just code — we collaborate. From ideation to post-launch,
              our team provides consistent delivery and proactive support to
              help your product grow.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[
                "Dedicated Project Manager",
                "Agile Sprint Cycles",
                "Transparent Documentation",
                "Post-launch Support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg font-bold">
                    ✓
                  </div>
                  <span className="text-gray-800 font-medium text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT Image */}
          <div className="w-full lg:w-1/2">
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
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-tr from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Industries <span className="text-blue-600">We Serve</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            We provide tailored solutions for a wide range of industries with
            the flexibility to scale and innovate.
          </p>

          {/* Industry Tags */}
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-2 bg-white border border-blue-100 text-blue-700 rounded-full shadow hover:bg-blue-50 hover:shadow-md transition text-sm font-medium"
              >
                {/* Optional check or icon */}
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-tr from-blue-50 via-white to-blue-100">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Heading */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Real feedback from real partners. Discover what makes us their
            preferred tech collaborator.
          </p>

          {/* Testimonials Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative bg-white p-6 pt-10 border border-blue-100 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 left-4 text-blue-100 text-5xl select-none">
                  “
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 relative z-10 leading-relaxed">
                  {t.text}
                </p>

                {/* Name & Role */}
                <div className="border-t pt-4 mt-4">
                  <p className="text-blue-700 font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
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

      {/* Final CTA Section */}
      {/* <section className="bg-blue-600 text-white py-20 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="mb-6 text-lg">
            Let’s talk about your vision and how Friensys Info Labs can make it
            a reality.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
            Book a Free Consultation
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default ServicesPage;
