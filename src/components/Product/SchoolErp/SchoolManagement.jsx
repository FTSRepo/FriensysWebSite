import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaPlus,
  FaMinus,
  FaUserPlus,
  FaCamera,
  FaRandom,
  FaSchool,
  FaSyncAlt,
} from "react-icons/fa";
import { WebsiteImages } from "../../../common/BindImages";
import FormPage from "../../../common/FormPage";
import {
  BsMegaphone,
  BsBell,
  BsCalendarEvent,
  BsDisplay,
} from "react-icons/bs";
import WhatsAppButton from "../../../common/WhatsApp/WhatsAppButton";

const accordionData = [
  {
    title: "Admissions Management",
    content:
      "Handle enquiries, applications, document verification, and enrollment all in one interface. Auto-generate admission IDs and assign roll numbers automatically.",
  },
  {
    title: "Academic Scheduling",
    content:
      "Create subject-wise timetables, map classes with assigned staff, monitor lesson progression, and manage attendance logs easily.",
  },
  {
    title: "Fees & Finance",
    content:
      "Manage billing, concessions, late fees, online payments, ledger reports, and balance sheets from within the platform.",
  },
  {
    title: "Communication Tools",
    content:
      "Send instant updates via emails, push notifications, SMS, or dashboard notifications to all stakeholders.",
  },
  {
    title: "Online Classes Integration",
    content:
      "Direct integrations with platforms like Zoom or Google Meet for virtual classes, plus logs and attendance reports.",
  },
];

const features = [
  {
    icon: <BsMegaphone className="text-xl" />,
    text: "Admins can publish news, circulars, and event updates from a centralized dashboard.",
  },
  {
    icon: <BsBell className="text-xl" />,
    text: "Teachers stay aligned with announcements, exam schedules, and internal meetings.",
  },
  {
    icon: <BsCalendarEvent className="text-xl" />,
    text: "Parents and students are updated instantly about holidays, school functions, and competitions.",
  },
  {
    icon: <BsDisplay className="text-xl" />,
    text: "All notifications are displayed on user dashboards in real-time.",
  },
];

export default function SchoolERP() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaSchool className="text-green-600 text-6xl mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Smart School Management Platform
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline admissions, academics, communication, fees, and
              classroom management — all from one beautifully designed ERP
              dashboard.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================= ERP Intro & Accordion UI ======================= */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 py-24 px-6 md:px-12 lg:px-24">
        {/* Glow Background */}
        <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-blue-300 opacity-20 blur-[140px] rounded-full z-0"></div>
        <div className="absolute bottom-[-100px] right-[-80px] w-[300px] h-[300px] bg-sky-300 opacity-20 blur-[120px] rounded-full z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center leading-tight">
              Our <span className="text-blue-600">Core Modules</span>
            </h2>
            <p className="text-gray-700 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
              Discover powerful modules tailored for modern schools — from
              student enrollment and academic tracking to fee automation,
              parent-teacher communication, and beyond.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
              🚀 Explore the Modules
            </h3>

            <div className="space-y-6">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left"
                  >
                    <span className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </span>
                    <span className="text-blue-600 text-xl">
                      {openIndex === index ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden px-6 pb-4 text-gray-700 text-sm md:text-base"
                      >
                        <p>{item.content}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================= Student Admission Process ======================= */}
      <section className="py-24 px-6 lg:px-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Heading & Description */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Seamless Student Admission
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              The{" "}
              <span className="font-semibold text-blue-600">Add Student</span>{" "}
              feature allows for smooth, fast, and secure onboarding — giving
              full control over academic and personal data with just a few
              clicks.
            </p>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <img
                src={WebsiteImages.AddStudent}
                alt="Add Student Interface"
                className="w-full object-cover max-h-[500px]"
              />
            </div>
          </motion.div>

          {/* Right - Numbered Steps */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ol className="space-y-10">
              {[
                {
                  title: "Quick form-based entry",
                  description:
                    "Capture all essential student details like name, DOB, gender, nationality, and religion using structured form fields for speed and accuracy.",
                  color: "bg-blue-600",
                },
                {
                  title: "Upload photo & documents",
                  description:
                    "Effortlessly attach the student's profile photo and required documents such as birth certificate, Aadhar card, and previous records.",
                  color: "bg-green-500",
                },
                {
                  title: "Auto-generate numbers",
                  description:
                    "Admission and roll numbers are automatically generated to maintain a consistent student database without manual input.",
                  color: "bg-yellow-500",
                },
                {
                  title: "Instant data sync",
                  description:
                    "Student data instantly reflects in ID cards, attendance records, academic reports, and other linked modules.",
                  color: "bg-purple-600",
                },
              ].map((item, i) => (
                <li key={i} className="relative pl-16">
                  <div
                    className={`absolute left-0 top-0 w-10 h-10 rounded-full text-white flex items-center justify-center shadow-lg text-lg font-bold ${item.color}`}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* ======================= Online Class System Section ======================= */}
      <section className="pt-20 lg:pt-28 px-6 lg:px-24 bg-gradient-to-br from-green-50 via-white to-blue-50 pb-16 lg:pb-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
            School <span className="text-blue-600">Online Class System</span>
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            Empower your institution with a smart online class system that
            enables effortless scheduling, secure links, and seamless
            interaction between students and teachers.
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Online Class Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={WebsiteImages.OnlineClass}
                alt="School Online Class"
                className="rounded-xl w-full shadow-2xl border border-gray-200"
              />
            </motion.div>

            {/* Online Class Features */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {[
                {
                  title: "Smart Class Scheduling",
                  desc: "Plan and assign online classes by selecting class, section, subject, and staff with just a few clicks.",
                },
                {
                  title: "Auto-generated Meeting Links",
                  desc: "Each scheduled session comes with a secure meeting link for easy student access.",
                },
                {
                  title: "Instant Notifications",
                  desc: "Students and teachers receive instant alerts about scheduled classes, changes, or cancellations.",
                },
                {
                  title: "Session Tracking",
                  desc: "Maintain records of completed classes, attendance, and meeting details for future reference.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="h-12 w-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold text-xl shadow">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= News & Events Section ======================= */}
      <section className="py-24 px-6 lg:px-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Top Heading and Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug"
          >
            Smarter{" "}
            <span className="text-blue-600 underline underline-offset-4">
              News & Events
            </span>{" "}
            Management
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            Keep your school community informed and engaged with a centralized
            hub for announcements, achievements, and upcoming activities — all
            managed seamlessly.
          </motion.p>
        </div>

        {/* Content Row: Image & Features */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-4">
              <img
                src={WebsiteImages.EventSection}
                alt="News and Events"
                className="rounded-xl w-full object-cover max-h-[500px]"
              />
            </div>
          </motion.div>

          {/* Right Features */}
          <motion.ol
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 relative border-l-4 border-blue-200 pl-6"
          >
            {features.map((item, i) => (
              <li key={i} className="relative">
                {/* Number Badge */}
                <div className="absolute -left-[30px] top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg font-semibold text-sm">
                  {i + 1}
                </div>

                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-blue-500">{item.icon}</div>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ======================= Collection Report Section ======================= */}
      <section className="pt-20 lg:pt-20 pb-20 lg:pb-20 px-6 lg:px-24 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
            School <span className="text-blue-600">Collection Reports</span>
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            Gain complete visibility into your institution's financial
            transactions. The School ERP Collection Report module offers
            powerful tools to track, analyze, and audit fee collections
            effortlessly.
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Collection Report Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={WebsiteImages.CollectionReport}
                alt="ODSAS Collection Report"
                className="rounded-xl w-full shadow-2xl border border-gray-200"
              />
            </motion.div>

            {/* Collection Report Features */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {[
                {
                  title: "Daily Collection Overview",
                  desc: "Track all fee collections received on a daily basis, with total and breakdowns.",
                },
                {
                  title: "Date-wise Report",
                  desc: "Generate collection reports for any selected date or date range, easily filterable.",
                },
                {
                  title: "Student-wise Collection",
                  desc: "View payment history and outstanding balances per student with detailed logs.",
                },
                {
                  title: "Deleted Bills & Dues Report",
                  desc: "Audit deleted transactions and monitor unpaid dues to prevent financial discrepancies.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="h-12 w-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold text-xl shadow">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= Form Image ======================= */}
      <div>
        <FormPage />
      </div>

      <WhatsAppButton />
    </div>
  );
}
