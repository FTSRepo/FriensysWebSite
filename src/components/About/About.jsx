import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaLightbulb,
  FaUsers,
  FaCogs,
  FaChartLine,
  FaHandshake,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaTrophy,
  FaRocket,
} from "react-icons/fa";
import FormPage from "../../common/FormPage";
import WhatsAppButton from "../../common/WhatsApp/WhatsAppButton";

const timelineData = [
  {
    year: "2018",
    title: "Conceptualization",
    description: "Initial idea to digitize school operations began.",
    color: "from-blue-400 to-blue-500",
  },
  {
    year: "2019",
    title: "Research Phase",
    description: "Met with institutions to understand their pain points.",
    color: "from-yellow-400 to-yellow-500",
  },
  {
    year: "2020",
    title: "Product Launch",
    description: "Launched ERP MVP with core modules.",
    color: "from-red-400 to-red-500",
  },
  {
    year: "2021",
    title: "User Adoption",
    description: "Adopted by 25+ schools across multiple states.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    year: "2023",
    title: "AI Analytics",
    description: "Introduced smart reporting and dashboards.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    year: "2024",
    title: "Refinement",
    description: "Optimized UX/UI, added parent and student apps.",
    color: "from-red-500 to-pink-500",
  },
  {
    year: "2025",
    title: "National Recognition",
    description: "Recognized among India's top ed-tech innovators.",
    color: "from-blue-600 to-purple-600",
  },
];

const statsData = [
  {
    icon: <FaUsers className="text-4xl" />,
    value: "100+",
    label: "Schools",
    desc: "Using our tools every day.",
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: <FaChartLine className="text-4xl" />,
    value: "50K+",
    label: "Students",
    desc: "Managed seamlessly via our platform.",
    gradient: "from-yellow-500 to-orange-500",
    bg: "bg-yellow-100",
  },
  {
    icon: <FaHandshake className="text-4xl" />,
    value: "500+",
    label: "Teachers",
    desc: "Benefiting from real-time analytics.",
    gradient: "from-red-500 to-red-600",
    bg: "bg-red-100",
  },
];

const differentiators = [
  {
    icon: <FaUsers className="text-4xl" />,
    title: "Student-Centric Design",
    desc: "Everything we build keeps the student experience in mind.",
    color: "blue",
    bg: "from-blue-50 to-blue-100",
  },
  {
    icon: <FaCogs className="text-4xl" />,
    title: "Smart Automation",
    desc: "Reduce workload with automated workflows and real-time updates.",
    color: "yellow",
    bg: "from-yellow-50 to-yellow-100",
  },
  {
    icon: <FaBullseye className="text-4xl" />,
    title: "Impact-Driven",
    desc: "Our goal is to create measurable outcomes—not just dashboards.",
    color: "red",
    bg: "from-red-50 to-red-100",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 via-yellow-50 to-red-50">
      
      {/*========================== Hero Section ==============================*/}
      <section className="w-full py-20 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-yellow-200 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-1/2 -right-16 w-56 h-56 bg-red-200 rounded-full opacity-30 blur-3xl" />
        
        <div className="w-full max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 shadow-sm mb-8"
          >
            <FaStar className="text-yellow-500" />
            <span className="text-sm font-semibold text-gray-700">
              About Friensys Info Labs
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 mb-6"
          >
            Meet <span className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">Friensys Info Labs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
          >
            Empowering educational institutions with a cutting-edge CRM that simplifies operations, boosts productivity, and enhances student success through intelligent automation.
          </motion.p>

          {/* Quick Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {statsData.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                <span className={`w-8 h-8 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white`}>
                  {React.cloneElement(stat.icon, { className: "text-sm" })}
                </span>
                <span className="text-sm font-semibold text-gray-800">{stat.value} {stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/*========================== Our Story Section =========================*/}
      <section className="w-full py-20 md:py-28 px-0 bg-white">
        <div className="w-full">
          <div className="w-full grid lg:grid-cols-2 gap-0">
            
            {/* Story Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full p-8 md:p-16 lg:p-24 flex flex-col justify-center space-y-6"
            >
              <motion.div variants={itemVariants}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
                  Why We <span className="text-blue-600">Started</span>
                </h2>
              </motion.div>

              <motion.p variants={itemVariants} className="text-gray-700 text-lg leading-relaxed">
                Back in 2018, we noticed schools were juggling multiple systems and paper-based processes. Communication gaps between teachers, students, and parents were slowing down progress.
              </motion.p>

              <motion.p variants={itemVariants} className="text-gray-700 text-lg leading-relaxed">
                So, we created a platform that centralizes everything—making schools smarter, faster, and better connected through intelligent automation and real-time insights.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4">
                {["🎓 Education First", "⚡ Smart Tech", "🤝 Trusted Partner"].map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 rounded-xl text-sm font-medium border border-yellow-300">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full p-8 md:p-16 lg:p-24 bg-gradient-to-br from-blue-50 via-white to-yellow-50 flex items-center justify-center relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-3xl opacity-20 blur-2xl" />
              <div className="relative bg-white rounded-3xl p-8 md:p-12 border-2 border-blue-200 shadow-2xl max-w-2xl w-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6 shadow-lg">
                  <FaLightbulb className="text-2xl" />
                </div>
                <blockquote className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
                  "Let's replace outdated tools with intelligent automation that speaks the language of educators."
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center text-white font-bold">
                    F
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Friensys Team</div>
                    <div className="text-sm text-gray-600">Founded 2018</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/*========================== Mission Section =========================*/}
      <section className="w-full py-20 md:py-28 px-0 bg-gradient-to-br from-red-50 via-yellow-50 to-blue-50">
        <div className="w-full">
          <div className="w-full grid lg:grid-cols-2 gap-0">
            
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full p-8 md:p-16 lg:p-24 bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center relative order-2 lg:order-1"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-green-400 to-emerald-400 rounded-3xl opacity-15 blur-2xl" />
              <div className="relative bg-white rounded-3xl p-8 md:p-12 border-2 border-green-200 shadow-2xl max-w-2xl w-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white mb-6 shadow-lg">
                  <FaBullseye className="text-2xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Our Core Mission</h3>
                <ul className="space-y-4">
                  {[
                    "Improve school transparency and real-time decision making",
                    "Eliminate manual errors through intelligent workflows",
                    "Deliver smooth and timely communication to parents",
                    "Support educators with smart dashboards and reports"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Mission Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full p-8 md:p-16 lg:p-24 flex flex-col justify-center space-y-6 order-1 lg:order-2"
            >
              <motion.div variants={itemVariants}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-4">
                  Our Vision
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
                  Mission & <span className="text-red-600">Goals</span>
                </h2>
              </motion.div>

              <motion.p variants={itemVariants} className="text-gray-700 text-lg leading-relaxed">
                To help our customers expand their businesses by providing creative design, development and delivering high-quality solutions that add value and offers authentic competitive advantage to customers all over the world.
              </motion.p>

              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: "Global Reach", value: "Worldwide" },
                  { label: "Quality Focus", value: "100%" },
                  { label: "Client Success", value: "Priority #1" },
                  { label: "Innovation", value: "Daily" }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-white/80 rounded-2xl border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-blue-600">{item.value}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/*========================== Journey Stats Section =========================*/}
      <section className="w-full py-24 px-0 bg-white">
        <div className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-4 md:px-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold mb-4">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Our Journey <span className="text-yellow-600">So Far</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              From a single product demo to being trusted by over 100+ institutions across India—we've been on a mission to create lasting value in the ed-tech space.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full grid md:grid-cols-3 gap-0"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative group border-t md:border-t-0 md:border-l border-gray-200 last:border-r-0"
              >
                <div className={`w-full h-full ${stat.bg} p-12 md:p-16 text-center`}>
                  {/* Icon Container */}
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  
                  {/* Value */}
                  <h4 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</p>
                  <p className="text-gray-600">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/*========================== What Makes Us Different =========================*/}
      <section className="w-full py-24 px-0 bg-gradient-to-br from-blue-100 via-yellow-50 to-red-100">
        <div className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-4 md:px-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              Our Edge
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
              What Makes Us <span className="text-blue-600">Different?</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full grid md:grid-cols-3 gap-0"
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`relative bg-gradient-to-br ${item.bg} p-12 md:p-16 border-t md:border-t-0 md:border-l border-gray-200 last:border-r-0 group`}
              >
                {/* Color accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-${item.color}-100 flex items-center justify-center text-${item.color}-600 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                
                {/* Content */}
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 text-center">{item.title}</h4>
                <p className="text-gray-700 text-center leading-relaxed">{item.desc}</p>
                
                {/* Hover arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaArrowRight className={`text-${item.color}-500 text-xl`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/*========================== Timeline Section =========================*/}
      <section className="w-full py-24 px-0 bg-white overflow-x-hidden">
        <div className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-4 md:px-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Our <span className="text-red-600">Timeline</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              A journey of innovation and growth from 2018 to 2025
            </p>
          </motion.div>

          {/* Horizontal Timeline - Full Width */}
          <div className="w-full relative px-4 md:px-8">
            {/* Center Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-yellow-300 to-red-300 rounded-full z-0 hidden md:block" />
            
            <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 px-2 relative z-10 overflow-x-auto pb-4">
              {timelineData.map((item, index) => {
                const isAbove = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex flex-col items-center flex-shrink-0 min-w-[160px] max-w-[200px]"
                  >
                    {/* Card */}
                    <div className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 text-center border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all duration-300 ${isAbove ? 'mb-12' : 'mt-12'}`}>
                      {/* Year Badge */}
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${item.color} text-white font-bold text-sm shadow-lg mb-3`}>
                        {item.year}
                      </div>
                      
                      {/* Content */}
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                      
                      {/* Decorative corner */}
                      <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br ${item.color} opacity-60`} />
                    </div>

                    {/* Connector Dot */}
                    <div className={`absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${item.color} border-4 border-white shadow-md z-10 hidden md:block`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/*========================== CTA Banner - Full Width =========================*/}
      <section className="w-full py-20 px-0">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 py-16 md:py-24 px-4 md:px-8 text-center relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <FaTrophy className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Transform Your Institution?
              </h3>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Join 100+ schools already experiencing the Friensys difference. Let's build your success story together.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Get Started Today <FaRocket className="text-red-500" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/*========================== Form Section - Full Width =========================*/}
      <section className="w-full py-20 px-0 bg-gradient-to-b from-blue-50 via-yellow-50 to-red-50">
        <div className="w-full grid lg:grid-cols-2 gap-0">
          {/* Left Content */}
          <div className="w-full p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-yellow-50">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Unlock precision and reliability with{" "}
                <span className="text-green-600">
                  cutting-edge testing systems
                </span>
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Experience advanced, reliable solutions to boost your quality assurance like never before. Our team is ready to help you find the perfect fit for your needs.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: <FaCheckCircle className="text-green-600" />, text: "Free consultation and quote" },
                  { icon: <FaCheckCircle className="text-green-600" />, text: "Customized solutions for your needs" },
                  { icon: <FaCheckCircle className="text-green-600" />, text: "24/7 support and maintenance" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <div className="w-full p-8 md:p-16 lg:p-24 bg-white flex items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-lg mx-auto"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-200">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Request a Quote
                </h4>
                <p className="text-gray-600 mb-8">
                  Let's talk about your testing requirements and how we can help.
                </p>
                
                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Name *"
                        className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        👤
                      </span>
                    </div>
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Email *"
                        className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        ✉️
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <input 
                        type="tel" 
                        placeholder="Phone *"
                        className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        📞
                      </span>
                    </div>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Location *"
                        className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        📍
                      </span>
                    </div>
                  </div>
                  <textarea 
                    placeholder="Your message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}