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
  FaMobileAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { WebsiteImages } from "../../../common/BindImages";
import FormPage from "../../../common/FormPage";
import { Link } from "react-router-dom";
import WhatsAppButton from "../../../common/WhatsApp/WhatsAppButton";

const features = [
  {
    icon: <FaChalkboardTeacher size={24} />,
    title: "Dashboard Overview",
    description:
      "Real-time analytics for students, staff, finances, and attendance in one central place.",
  },
  {
    icon: <FaUserPlus size={24} />,
    title: "Admission Management",
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

const timelineSteps = [
  {
    title: "Structured Subject-wise Entry",
    desc: "Map entries directly to subjects, exams, and class groups—reducing manual errors.",
  },
  {
    title: "Smart Totals & Grade Logic",
    desc: "Automatically calculate totals and grades while preventing over-entry through validation rules.",
  },
  {
    title: "Instant Dashboard Sync",
    desc: "Student portals reflect marks and analytics in real time with no refresh or delay.",
  },
  {
    title: "Editable History & Permissions",
    desc: "Authorized users can revise entries with traceable edit logs and re-evaluation flows.",
  },
];

export default function SchoolApp() {
  return (
    <div>
      {/*===================Hero Section====================== */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-blue-50 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaMobileAlt className="text-yellow-500 text-6xl mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              All-in-One School App Solution
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Empower parents, teachers, and students with real-time updates,
              attendance tracking, homework alerts, and fee management — all in
              one powerful mobile app.
            </p>
          </motion.div>
        </div>
      </section>

      {/*===================Core Service In App ====================== */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-blue-50 py-20 px-4 md:px-10">
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

          {/* Redesigned Vertical Timeline */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full border-l-4 border-blue-100" />
            <div className="space-y-16">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-center group 
              ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
            `}
                >
                  {/* Timeline marker */}
                  <div
                    className={`
                w-14 h-14 flex items-center justify-center rounded-full 
                bg-white z-10 border-4 shadow-md transition
                border-blue-500 text-3xl mb-4 md:mb-0 ${
                  index % 2 === 0 ? "md:mr-8 md:order-1" : "md:ml-8 md:order-3"
                }
              `}
                  >
                    {item.icon}
                  </div>
                  {/* Content */}
                  <div
                    className={`
              bg-blue-50 rounded-xl p-6 flex-1 shadow-md border-t-4
              transition border-blue-200 group-hover:border-blue-500
              ${index % 2 === 0 ? "md:order-2 md:ml-0" : "md:order-2 md:mr-0"}
              w-full md:w-1/2
            `}
                  >
                    <h4 className="text-xl font-semibold text-blue-600 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*===================Profile Management Section ====================== */}
      <section className="relative py-20 bg-gradient-to-tr from-blue-100 via-white to-blue-50 px-4 md:px-10 overflow-hidden">
        {/* Centered Top Content */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-4xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight"
          >
            Unified{" "}
            <span className="text-blue-700 bg-blue-100 px-2 rounded-xl">
              Profile Management
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-lg text-blue-700 leading-relaxed"
          >
            Our dynamic Profile Module centralizes every aspect of a student's
            identity—from personal information to class and transport
            assignments—fully synced with your school's academic and
            communication system.
          </motion.p>
        </div>

        {/* Main Content Panels */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 items-start">
          {/* Left Panel: Profile Illustration Card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="hidden sm:block shadow-2xl rounded-3xl border-2 border-blue-200 overflow-hidden bg-white hover:scale-[1.03] transition-transform">
              <img
                src={WebsiteImages?.SchoolAppProfile}
                alt="Profile Management Screenshot"
                className=" w-full h-[525px] object-cover"
              />
              <div className="p-6 bg-gradient-to-r from-blue-50 to-white border-t border-blue-100">
                <h3 className="text-center text-2xl font-semibold text-blue-800 mb-2">
                  Student Overview Dashboard
                </h3>
                <p className="text-center text-blue-700 text-sm">
                  Instantly view and manage all student details with one secure,
                  beautiful interface.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Feature Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: 42 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-7"
          >
            {floatingFeatures.map((feature, index) => (
              <div
                key={index}
                className={`
            flex items-start gap-5 rounded-3xl shadow-xl border-l-8 border-blue-400 hover:border-blue-600 transition
            bg-white hover:bg-blue-50 p-7
            group relative transform hover:scale-[1.02]
            ${feature.color}
          `}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-3xl shadow group-hover:bg-blue-200 transition">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-blue-800 mb-1 tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/*===================Online class and the Homework Section code====================== */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-blue-50 py-24 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Smarter <span className="text-blue-600">Homework & Class</span>{" "}
              Management
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From homework to online classes, manage everything in one place
              with ease and efficiency.
            </p>
          </div>

          {/* Timeline Section */}
          <div className="relative border-l-4 border-blue-200 pl-6 space-y-16">
            {[
              {
                title: "Smarter Homework Tracking",
                desc: "Assign, track, and review homework seamlessly with due date tracking and completion analytics.",
                icon: "📘",
              },
              {
                title: "Real-Time Class Scheduling",
                desc: "Create and manage online or in-person class schedules in just a few clicks.",
                icon: "🕒",
              },
              {
                title: "Integrated Live Classes",
                desc: "Host and join live classes directly through the platform with meeting links and attendance.",
                icon: "🎥",
              },
              {
                title: "Student-Teacher Communication",
                desc: "Enable direct interaction through chat, announcements, and discussion boards.",
                icon: "💬",
              },
              {
                title: "Assignment Submissions",
                desc: "Students can submit assignments digitally; teachers can review and provide feedback instantly.",
                icon: "📤",
              },
              {
                title: "Auto Reminders & Notifications",
                desc: "Automated reminders keep students and teachers updated on homework, classes, and deadlines.",
                icon: "🔔",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row md:items-center gap-6"
              >
                {/* Timeline Icon */}
                <div className="absolute -left-9 top-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold shadow">
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-white shadow-md border border-gray-100 p-6 rounded-xl w-full">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*===================News and Event ====================== */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-white to-blue-50 py-24 px-6 md:px-12 lg:px-24 text-gray-800">
        {/* Background glow */}
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-300 opacity-20 rounded-full blur-[120px] z-0" />
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-indigo-200 opacity-20 rounded-full blur-[100px] z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <img
              src={WebsiteImages.NewsandEvent}
              alt="School News and Events"
              className="w-full rounded-3xl shadow-2xl border border-white/60 object-cover"
            />
          </motion.div>

          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Stay Informed with Our
              <span className="text-blue-600"> News & Events</span> Hub
            </h2>

            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              Manage school-wide communication from a central place — from daily
              circulars to exciting event updates — personalized for every user
              role.
            </p>

            <div className="space-y-6">
              {[
                "Admins can create and publish real-time updates for school events, circulars, or announcements.",
                "Teachers stay informed about internal notices, exam schedules, and academic programs.",
                "Parents and students receive instant alerts about holidays, competitions, and cultural activities.",
                "All news entries are neatly categorized, time-stamped, and shown in each user's dashboard.",
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-gradient-to-tr from-blue-500 to-indigo-500 text-white w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold shadow-md">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 text-sm md:text-base">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/*===================Marks Entry ====================== */}
      <section className="relative bg-gradient-to-bl from-yellow-50 via-white to-blue-50 py-32 px-6 md:px-16">
        {/* Decorative Glow */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-yellow-200 rounded-full blur-[140px] opacity-20 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Empowered <span className="text-blue-600">Marks Entry</span>{" "}
              System
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Teachers can easily input, validate, and sync marks with academic
              dashboards using this comprehensive tool designed for speed and
              accuracy.
            </p>

            <div className="space-y-10">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white shadow-lg border-l-4 border-blue-500 pl-6 pr-4 py-4 rounded-md"
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-1 flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex justify-center"
          >
            <img
              src={WebsiteImages.MarksEntryTeacher}
              alt="Marks Entry Illustration"
              className="rounded-2xl shadow-2xl border object-contain h-[600px] w-full max-w-[500px]"
            />
          </motion.div>
        </div>
      </section>

      {/*===================Online fee Management ====================== */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-blue-50 py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Digital <span className="text-blue-600">Fee Payment</span> with
            Razorpay
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Let parents and students pay fees online securely using Razorpay.
            Automate receipts, track transactions, and improve transparency with
            real-time dashboard sync.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Features Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12 relative border-l-4 border-blue-200 pl-8"
          >
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
                className="relative pl-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
              >
                <div className="absolute left-[-32px] top-1 w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-2xl shadow-md">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={WebsiteImages.FeePayment}
              alt="Online Fee Payment Illustration"
              className="w-full max-w-md h-auto rounded-3xl border shadow-2xl object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/*===================Form Page======================= */}
      <div>
        <FormPage />
      </div>

      <WhatsAppButton />
    </div>
  );
}
