import React from "react";
import {
  FaCogs,
  FaMobileAlt,
  FaRocket,
  FaCloud,
  FaLock,
  FaSyncAlt,
} from "react-icons/fa";
import { SchoolImages, WebsiteImages } from "../../common/BindImages";
import FormPage from "../../common/FormPage";

const services = [
  {
    icon: <FaRocket />,
    title: "Educational Website ",
    description:
      "From MVP to full-scale product, we build market-ready software using agile methodologies.",
  },
  {
    icon: <FaCloud />,
    title: "Educational Erp",
    description:
      "Scalable, multi-tenant SaaS platforms built on secure and cloud-native technologies.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Custom iOS, Android, and cross-platform apps with seamless user experience.",
  },
  {
    icon: <FaCogs />,
    title: "Business Model Software",
    description:
      "From CRMs to enterprise dashboards — we develop purpose-built solutions.",
  },
  {
    icon: <FaLock />,
    title: "Company Based Software ",
    description:
      "Security-first development — HIPAA, GDPR, ISO-ready practices built-in.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Loyalty Software",
    description:
      "Post-launch support, monitoring, and feature enhancements included.",
  },
];

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
    name: "Rahul Verma",
    role: "Co-Founder, LearnX",
    text: "Friensys helped us scale from prototype to 20K+ users. Their speed and quality is world-class.",
  },
  {
    name: "Samantha Iyer",
    role: "CTO, MedVault",
    text: "We needed HIPAA-compliant healthcare software — they delivered ahead of time and exceeded expectations.",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-24 px-6 md:px-12 lg:px-24 text-center">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Empowering Ideas, <span className="text-blue-600">Building Products</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Friensys Info Labs turns concepts into reliable software products — fast, scalable, and secure.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-14">Our Core Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="text-blue-600 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Feature Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src={WebsiteImages.EventSection}
            alt="Tech team working"
            className="rounded-xl shadow-xl"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Your Technology Partner</h2>
            <p className="text-gray-600 mb-6">
              We build long-term partnerships through a dedicated tech team, weekly deliveries, and full product ownership.
            </p>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>Dedicated Project Manager</li>
              <li>Agile Sprint Cycles</li>
              <li>Transparent Documentation</li>
              <li>Post-launch Support & Monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Industries We Serve</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full font-medium text-sm shadow"
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic mb-4">“{t.text}”</p>
              <p className="text-blue-700 font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="mt-28">
        <FormPage />
      </section>

      {/* Final CTA Section */}
      <section className="bg-blue-600 text-white py-20 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="mb-6 text-lg">
            Let’s talk about your vision and how Friensys Info Labs can make it a reality.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
            Book a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
