import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaUserPlus,
  FaCalendarAlt,
  FaBullhorn,
  FaMoneyBillWave,
  FaBusAlt,
  FaUserAlt,
  FaFileSignature,
  FaSchool,
  FaAddressCard,
} from "react-icons/fa";
import { WebsiteImages } from "../../../common/BindImages";
import FormPage from "../../../common/FormPage";

const features = [
  {
    icon: <FaChalkboardTeacher size={24} />,
    title: "Dashboard Overview",
    description:
      "Real-time analytics for students, staff, finances, and attendance in one central place.",
  },
  {
    icon: <FaUserPlus size={24} />,
    title: "Add Student Module",
    description:
      "Add new students with detailed info like personal details, DOB, and class mapping.",
  },
  {
    icon: <FaBullhorn size={24} />,
    title: "News & Events",
    description:
      "Manage and broadcast announcements or events to staff and parents with visibility control.",
  },
  {
    icon: <FaCalendarAlt size={24} />,
    title: "Online Class Scheduling",
    description:
      "Schedule online sessions with subject, time, link, and instant access for students.",
  },
  {
    icon: <FaMoneyBillWave size={24} />,
    title: "Fee Collection Report",
    description:
      "Track fees, dues, and SMS credits to keep school finance transparent and updated.",
  },
];

const floatingFeatures = [
  {
    icon: <FaUserAlt />,
    title: "Student Identity",
    description: "Store complete personal & guardian details.",
    color: "bg-blue-100 text-blue-800",
  },
  {
    icon: <FaFileSignature />,
    title: "Academic Mapping",
    description: "Assign class, section, and admission numbers.",
    color: "bg-green-100 text-green-800",
  },
  {
    icon: <FaAddressCard />,
    title: "ID Card Generator",
    description: "Auto-generate ID cards linked to student data.",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    icon: <FaBusAlt />,
    title: "Transport Allocation",
    description: "Assign routes, vehicles, and pickup points.",
    color: "bg-purple-100 text-purple-800",
  },
  {
    icon: <FaSchool />,
    title: "Report Integration",
    description: "Sync with marksheets, attendance, and exams.",
    color: "bg-red-100 text-red-800",
  },
];
export default function SchoolApp() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <section className="bg-white py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              School App <span className="text-blue-600">Core Modules</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From admission to attendance, fees to virtual classes — all
              features in one powerful mobile app.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative border-l-4 border-blue-500 pl-6 space-y-12">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative bg-blue-50 rounded-xl p-6 shadow-md ${
                  index % 2 === 0 ? "ml-0 md:ml-10" : "ml-0 md:ml-20"
                }`}
              >
                <div className="absolute -left-8 top-6 w-12 h-12 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center text-blue-600">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Image Section */}
          <div className="grid lg:grid-cols-2 gap-12 mt-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <img
                src={WebsiteImages.AdminDashboardApp}
                alt="Admin Dashboard"
                className="rounded-xl shadow-2xl max-h-[500px] mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Admin Dashboard
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <img
                src={WebsiteImages.ParentDashboard}
                alt="Parent Dashboard"
                className="rounded-xl shadow-2xl max-h-[500px] mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Parent Dashboard
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start relative">
          {/* Left Content */}
          <div className="z-10">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              Unified <span className="text-blue-600">Profile Management</span>
            </motion.h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our dynamic Profile Module centralizes every aspect of a student's
              identity — from personal information to class and transport
              assignments — all synced with your school's academic and
              communication system.
            </p>

            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
              Explore Full Profile Flow
            </button>

            <motion.img
              src={WebsiteImages?.SchoolAppProfile}
              alt="Profile Management Screenshot"
              className="mt-10 rounded-xl border shadow-lg max-w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Floating Cards - Desktop Layout (absolute) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full hidden lg:block"
            style={{ height: `${floatingFeatures.length * 130}px` }}
          >
            {floatingFeatures.map((feature, index) => {
              const offsetY = index * 130;
              const offsetX = index % 2 === 0 ? 0 : 180;

              return (
                <motion.div
                  key={index}
                  className={`absolute w-[320px] p-6 rounded-2xl shadow-xl ${feature.color}`}
                  style={{
                    top: `${offsetY}px`,
                    left: `${offsetX}px`,
                    zIndex: 10 - index,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-2xl">{feature.icon}</div>
                    <h4 className="text-lg font-semibold">{feature.title}</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stacked Cards - Mobile/Tablet Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 lg:hidden"
          >
            {floatingFeatures.map((feature, index) => (
              <div
                key={index}
                className={`w-full p-6 rounded-2xl shadow-xl ${feature.color}`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-2xl">{feature.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-gray-50 py-24 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              All-in-One{" "}
              <span className="text-blue-600">Homework & Class Tool</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Schedule classes, assign homework, manage submissions, and
              integrate live sessions — all from a single place.
            </p>
          </div>

          {/* Dual Images */}
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {[WebsiteImages.HomeworkStudent, WebsiteImages.HomeworkStudent].map(
              (src, i) => (
                <motion.div
                  key={i}
                  className="w-full text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * i }}
                  viewport={{ once: true }}
                >
                  <img
                    src={src}
                    alt="Homework Illustration"
                    className="w-full max-w-xl mx-auto rounded-xl border shadow-lg"
                  />
                </motion.div>
              )
            )}
          </div>

          {/* Timeline Section with Motion */}
          <div className="relative border-l-4 border-blue-100 pl-6 space-y-14 mt-20">
            {[
              {
                title: "Assign Homework Easily",
                desc: "Add homework with class, section, subject, due dates, and attachments.",
                icon: "📝",
              },
              {
                title: "Track Submissions",
                desc: "Monitor who submitted and who missed. Auto-reminders for defaulters.",
                icon: "📬",
              },
              {
                title: "Schedule Online Classes",
                desc: "Attach meeting links and subjects, set times, and notify all students.",
                icon: "📅",
              },
              {
                title: "Sync Reports",
                desc: "Homework and classes automatically reflect in student reports and dashboards.",
                icon: "📊",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="relative flex flex-col md:flex-row md:items-center md:gap-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Icon Circle */}
                <div className="absolute -left-9 top-1">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold shadow">
                    {item.icon}
                  </div>
                </div>

                {/* Content Box */}
                <div className="bg-white shadow-md border border-gray-100 p-6 rounded-xl w-full">
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-gray-50 py-24 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={WebsiteImages.NewsandEvent}
              alt="School News and Events"
              className="rounded-2xl w-full object-cover shadow-xl border border-gray-200"
            />
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Centralized <span className="text-blue-600">News & Events</span>{" "}
              Portal
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Keep your school community informed and engaged with a dedicated
              platform to manage and broadcast all news, circulars, and upcoming
              events—seamlessly integrated with every stakeholder’s dashboard.
            </p>

            <div className="space-y-5">
              {[
                "Admins can create and publish real-time updates for school events, circulars, or announcements.",
                "Teachers stay informed about internal notices, exam schedules, and academic programs.",
                "Parents and students receive instant alerts about holidays, competitions, and cultural activities.",
                "All news entries are neatly categorized, time-stamped, and shown in each user's dashboard.",
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                >
                  <div className="h-8 w-8 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold shadow">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 text-sm">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Content Column */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
                Empowered <span className="text-blue-600">Marks Entry</span>{" "}
                System
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl">
                Teachers can easily input, validate, and sync marks with
                academic dashboards using this comprehensive tool designed for
                speed and accuracy.
              </p>

              <div className="space-y-8">
                {[
                  {
                    title: "1. Structured Subject-wise Entry",
                    desc: "Map entries directly to subjects, exams, and class groups—reducing manual errors.",
                  },
                  {
                    title: "2. Smart Totals & Grade Logic",
                    desc: "Automatically calculate totals and grades while preventing over-entry through validation rules.",
                  },
                  {
                    title: "3. Instant Dashboard Sync",
                    desc: "Student portals reflect marks and analytics in real time with no refresh or delay.",
                  },
                  {
                    title: "4. Editable History & Permissions",
                    desc: "Authorized users can revise entries with traceable edit logs and re-evaluation flows.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg shadow">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Illustration */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={WebsiteImages.MarksEntryTeacher}
                alt="Marks Entry"
                className="h-[500px] w-auto max-w-full object-contain rounded-xl border shadow-xl mt-10 lg:mt-0"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-white py-24 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
              Digital <span className="text-blue-600">Fee Payment</span> with
              Razorpay
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl">
              Let parents and students pay fees online securely using Razorpay.
              Automate receipts, track transactions, and improve transparency
              with real-time dashboard sync.
            </p>

            {/* Features Timeline Style */}
            <div className="space-y-8 relative pl-6 border-l-4 border-blue-100">
              {[
                {
                  title: "Quick Payment Options",
                  desc: "Pay using UPI, net banking, credit/debit cards, and mobile wallets — all in one place.",
                  icon: "💳",
                },
                {
                  title: "Real-Time Dashboard Sync",
                  desc: "Payment data reflects instantly in the student and admin fee reports.",
                  icon: "📊",
                },
                {
                  title: "Instant SMS & Email Receipts",
                  desc: "Auto-generated digital receipts with transaction reference numbers.",
                  icon: "📩",
                },
                {
                  title: "Secure & Compliant",
                  desc: "Fully PCI-DSS compliant integration ensuring data security and protection.",
                  icon: "🔒",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="relative pl-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                >
                  <div className="absolute left-[-29px] top-1 w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-xl shadow">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={WebsiteImages.FeePayment}
              alt="Online Fee Payment Illustration"
              className="w-full max-w-md rounded-2xl border shadow-xl object-contain"
            />
          </motion.div>
        </div>
      </section>

      <div className="mt-28">
        <FormPage />
      </div>
    </div>
  );
}
