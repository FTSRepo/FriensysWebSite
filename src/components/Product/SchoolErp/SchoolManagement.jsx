import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { WebsiteImages } from "../../../common/BindImages";
import FormPage from "../../../common/FormPage";

const accordionData = [
  {
    title: "Dashboard Overview",
    content:
      "View real-time student and employee stats, monthly revenue and expenses, and attendance analytics—all from one place.",
  },
  {
    title: "Admissions Management",
    content:
      "Capture student admission information including personal details, birth info, class-section mapping, and more.",
  },
  {
    title: "News & Events",
    content:
      "Easily create, manage, and publish school events or announcements. Includes toggles for visibility and roles.",
  },
  {
    title: "Online Class/Video Conferencing",
    content:
      "Teachers can schedule online classes with links, timings, subjects, and more. Easy access for students.",
  },
  {
    title: "Payroll Management",
    content:
      "Track current month's fee collections, dues, and SMS credit usage to stay on top of school finances.",
  },
];

export default function SchoolERP() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-start relative">
        {/* Accordion Section */}
        <div className="relative z-10">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            <span>School ERP</span>{" "}
            <span className="text-blue-600">Management System</span>
          </h2>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            A comprehensive education ERP platform that allows schools to manage
            admissions, academics, fees, communication, and online classes—all
            from a unified dashboard.
          </p>

          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Core Modules
          </h3>

          <div className="space-y-4">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm transition-all"
              >
                <button
                  className="w-full flex justify-between items-center text-left focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-base md:text-lg font-medium text-gray-800">
                    {item.title}
                  </span>
                  <span className="text-blue-600 text-xl">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden text-gray-600 mt-3 text-sm md:text-base"
                    >
                      <p>{item.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Static Image Section */}
        <motion.div
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
           {/* New Image Section */}
          <img
            src={WebsiteImages.LoginPage}
            alt="Login Page"
            className="rounded-xl w-full object-cover shadow-2xl max-h-[600px] mt-8"
          />
          <h3 className="text-2xl font-bold text-gray-800 mt-4">
            Login Page 
          </h3>  
        </motion.div>
      </div>

      <div className="mt-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl font-bold text-gray-800 mb-4">
            Seamless Student Admission
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            The <span className="font-semibold text-primary">Add Student</span>{" "}
            feature makes onboarding effortless by letting you add new students
            quickly and securely, while maintaining complete control over
            academic and personal details.
          </p>

          <ul className="space-y-4 text-gray-700 text-base pl-4 border-l-4 border-blue-500">
            <li className="relative pl-4 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
              Quick form-based entry with essential student details.
            </li>
            <li className="relative pl-4 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
              Upload student photo, documents, and assign class instantly.
            </li>
            <li className="relative pl-4 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
              Automatically generate admission number and roll number.
            </li>
            <li className="relative pl-4 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
              Sync student data with reports, attendance, and ID cards.
            </li>
          </ul>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={WebsiteImages.AddStudent}
            alt="Add Student Interface"
            className="rounded-2xl w-full object-cover shadow-2xl border border-gray-200"
          />
        </motion.div>
      </div>

      <div className="mt-28">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          School <span className="text-blue-600">Online Class System</span>
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 text-lg">
          Empower your institution with a smart online class system that enables
          effortless scheduling, secure links, and seamless interaction between
          students and teachers.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <div key={i} className="flex gap-4">
                <div className="h-12 w-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold text-xl shadow">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content: News & Event Description */}
        <div>
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">
            News & Events Management
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 leading-relaxed">
            <li>
              Admin can effortlessly publish school news, circulars, and
              upcoming events from a centralized panel.
            </li>
            <li>
              Teachers stay informed about important announcements, exam
              schedules, and staff meetings.
            </li>
            <li>
              Students and parents receive real-time updates on school
              functions, holidays, competitions, and more.
            </li>
            <li>
              All news and event updates are displayed instantly on user
              dashboards for quick access.
            </li>
          </ul>
        </div>

        {/* Right Image: News & Events Section Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={WebsiteImages.EventSection}
            alt="ODSAS News and Events"
            className="rounded-xl w-full object-cover shadow-xl"
          />
        </motion.div>
      </div>

      <div className="mt-28">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          School <span className="text-blue-600">Collection Reports</span>
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 text-lg">
          Gain complete visibility into your institution's financial
          transactions. The School ERP Collection Report module offers powerful
          tools to track, analyze, and audit fee collections effortlessly.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Collection Report Image */}
          <motion.div
            className="relative"
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
              <div key={i} className="flex gap-4">
                <div className="h-12 w-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold text-xl shadow">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-28">
        <FormPage />
      </div>
    </div>
  );
}
