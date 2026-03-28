import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus, FaMinus, FaCheckCircle } from "react-icons/fa";
import { WebsiteImages } from "../../../common/BindImages";
import FormPage from "../../../common/FormPage";
import WhatsAppButton from "../../../common/WhatsApp/WhatsAppButton";

const educationCRMModules = [
  {
    title: "Lead Integration",
    content:
      "Integrates with Just Dial, Sulekha, Shiksha.com, College Dunia, websites, and Google SEO to capture leads effectively.",
  },
  {
    title: "Lead Management",
    content:
      "Organizes leads into Hot, Warm, Cold, and Dead buckets, allowing counselors to prioritize effectively.",
  },
  {
    title: "Counselor Alerts",
    content:
      "Triggers alarms and reminders for follow-ups, ensuring no candidate is missed during the admission cycle.",
  },
  {
    title: "Reporting & Analytics",
    content:
      "Delivers powerful graphical reports to analyze enquiry sources, conversion rates, and staff performance.",
  },
  {
    title: "Department Automation",
    content:
      "Automates tasks across Enquiry, Registration, Reception, Admissions, Fees, and other school operations.",
  },
];

const skillSet = [
  "ASP.NET",
  ".NET MVC",
  "WEB API",
  "MSSQL",
  "LINQ",
  "Entity Framework",
  "JavaScript",
  "jQuery",
  "JSON",
  "HTML5",
  "CSS3",
  "React Native",
  "Cloud Server: AWS, EC2, S3",
];

export default function CollegeManagement() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/*===================== Education CRM Overview Section =================*/}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-emerald-50 py-32 px-6 md:px-12 lg:px-20 text-gray-900">
        {/* Soft Gradient Backgrounds */}
        <div className="absolute -top-48 -left-48 w-[700px] h-[700px] bg-gradient-to-br from-indigo-400 to-emerald-300 opacity-25 blur-[180px] rounded-full z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-sky-400 to-teal-300 opacity-20 blur-[150px] rounded-full z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-16">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700">
            Education CRM Management System
          </h1>

          {/* Grid of Features */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-left">
            {[
              {
                title: "Lead Management System",
                description:
                  "Capture, track, and manage leads from multiple education portals and marketing platforms in one place.",
              },
              {
                title: "Integration Channels",
                description:
                  "Integrated with Justdial, Sulekha, CollegeDunia, Shiksha, Google SEO, and Zoho for seamless lead flow.",
              },
              {
                title: "Admission Management System",
                description:
                  "Streamline the entire admission process from application to enrollment using intelligent workflows.",
              },
              {
                title: "Post Admission Service",
                description:
                  "Ensure student satisfaction through onboarding support, documentation, and post-admission services.",
              },
              {
                title: "Account Management",
                description:
                  "Manage fee structures, payment tracking, invoicing, and financial records all in one unified dashboard.",
              },
              {
                title: "Auto Follow-up on Enquiry",
                description:
                  "Automate personalized follow-up messages via email, SMS, or WhatsApp to increase enquiry conversions.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-indigo-500"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*========================= Banner Section ======================*/}
      <section className="w-full bg-gradient-to-br from-white to-blue-50 py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
              What is <span className="text-blue-600">Education CRM?</span>
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Perfectly suited for fast-growing educational organizations,
              Education CRM offers a customizable solution that scales with
              growth— revolutionizing how institutions manage and grow enquiries
              and post-enquiry services to candidates.
            </p>

            <div className="bg-white border-l-4 border-blue-500 p-4 rounded-lg shadow mb-8">
              <h4 className="text-blue-600 font-semibold mb-2">
                Core Tech Stack
              </h4>
              <p className="text-gray-700 text-sm md:text-base">
                {skillSet.join(", ")}
              </p>
            </div>

            <div className="grid gap-5">
              {educationCRMModules.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden transition hover:shadow-md"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-5 py-4 flex justify-between items-center text-left"
                  >
                    <h4 className="text-md md:text-lg font-semibold text-gray-800">
                      {item.title}
                    </h4>
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
                        className="px-5 pb-4 text-gray-600 text-sm md:text-base"
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-green-50 border-l-4 border-green-600 p-6 rounded-lg shadow">
              <h4 className="text-green-700 font-bold text-lg mb-3">
                Achievements
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Centralized dashboard with real-time institution data.</li>
                <li>Streamlined transactions and digitalized operations.</li>
              </ul>
            </div>
          </div>

          {/* RIGHT Images */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {[
              WebsiteImages.EducationalCRMCounsellor,
              WebsiteImages.EducationalCRMAdmissionCordinator,
            ].map((img, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={img}
                  alt="CRM View"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {i === 0
                      ? "Counsellor Login Interface"
                      : "Admission Dashboard View"}
                  </h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/*================== Add Student Section ======================*/}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
              <span className="text-blue-600">Effortless</span> Student
              Admission
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The{" "}
              <span className="font-semibold text-blue-600">Add Student</span>{" "}
              module simplifies onboarding by automating data entry, ensuring
              security, and syncing records institution-wide.
            </p>

            <div className="grid gap-4">
              {[
                "Quick form-based entry with essential student details.",
                "Upload student photo, documents, and assign class instantly.",
                "Auto-generate admission & roll numbers.",
                "Sync student data with reports, attendance & ID cards.",
              ].map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                >
                  <FaCheckCircle className="text-blue-600 mt-1 text-lg" />
                  <p className="text-gray-700 text-base">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
          >
            <img
              src={WebsiteImages.EducationalCRMReception}
              alt="Add Student Interface"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/*=================== Services Section =====================*/}
      <section className="mt-28 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Education <span className="text-blue-600">CRM Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A centralized CRM suite to manage student lifecycle: documents,
            exams, alerts, identity, reporting & more.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={WebsiteImages.EducationalCRMServices}
              alt="Education CRM Service Dashboard"
              className="rounded-2xl w-full shadow-2xl border border-gray-200"
            />
          </motion.div>

          {/* RIGHT Features */}
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {[
              [
                "Document Sharing",
                "Upload & share syllabus, books, certificates.",
              ],
              [
                "Exam Management",
                "Create schedules, admit cards, and mark reports.",
              ],
              [
                "Identity & Verification",
                "Auto-generate ID cards and allotment letters.",
              ],
              [
                "Student Records",
                "Maintain detailed lists, ledgers & acknowledgements.",
              ],
              ["Activity & Alerts", "Send birthday alerts & record events."],
              [
                "University Sync",
                "Manage corrections & confirmations with ease.",
              ],
            ].map(([title, desc], i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="h-10 w-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-semibold shadow">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {title}
                  </h4>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/*==================== Form =======================*/}
      <section className="mt-28">
        <FormPage />
      </section>

      <WhatsAppButton />
    </>
  );
}
