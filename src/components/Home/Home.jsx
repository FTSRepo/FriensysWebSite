import React, { useState } from "react";
import { SchoolImages, WebsiteImages } from "../../common/BindImages";
import {
  FaUsers, FaCubes, FaUserTie, FaLaptopCode, FaTools, FaCogs,
  FaShieldAlt, FaRocket, FaSchool, FaChartPie, FaAward,
  FaMobileAlt, FaExclamationCircle, FaDatabase, FaGift, FaStore,
  FaChalkboardTeacher, FaCode, FaCloud, FaStar, FaCheckCircle,
  FaArrowRight, FaQuoteLeft, FaPhone, FaEnvelope, FaMapMarkerAlt
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import WhatsAppButton from "../../common/WhatsApp/WhatsAppButton";
import Swal from "sweetalert2";

const products = [
  { name: "School ERP", icon: <FaSchool />, key: "school" },
  { name: "Mobile App", icon: <FaMobileAlt />, key: "mobile" },
  { name: "Escalation System", icon: <FaExclamationCircle />, key: "escalation" },
  { name: "OD-SAS", icon: <FaDatabase />, key: "odsas" },
  { name: "Customer Loyalty", icon: <FaGift />, key: "loyalty" },
  { name: "Marketplace", icon: <FaStore />, key: "marketplace" },
  { name: "CRM - Edu Mgmt", icon: <FaChalkboardTeacher />, key: "crm" },
];

const dashboardMockData = {
  school: { title: "School ERP Dashboard", image: WebsiteImages.SchoolERp },
  mobile: { title: "Mobile App Dashboard", image: WebsiteImages.AdminDashboardApp },
  escalation: { title: "Escalation System Dashboard", image: WebsiteImages.EscalationDashboard },
  odsas: { title: "OD-SAS Management Dashboard", image: WebsiteImages.ODSASDashboard },
  loyalty: { title: "Customer Loyalty Dashboard", image: WebsiteImages.LoyaltyDashboard },
  marketplace: { title: "Marketplace Overview", image: WebsiteImages.MarketplaceDashboard },
  crm: { title: "CRM - Educational Management", image: WebsiteImages.EducationalCRMAdmissionCordinator },
};

const service = [
  {
    title: "Software Development",
    icon: <FaCode className="text-blue-600 text-4xl" />,
    bg: "bg-blue-50",
    border: "border-blue-200",
    hover: "hover:border-blue-400",
    accent: "bg-blue-600",
    description: "From web and mobile apps to enterprise-grade ERP systems, we craft scalable software that empowers businesses to thrive in the digital age.",
    points: ["Custom web & mobile applications", "ERP & business automation", "Performance dashboards & analytics", "SEO-optimized websites", "Full lifecycle product development"],
    link: "/services/softwareDevelopment",
  },
  {
    title: "Cloud Solutions",
    icon: <FaCloud className="text-red-600 text-4xl" />,
    bg: "bg-red-50",
    border: "border-red-200",
    hover: "hover:border-red-400",
    accent: "bg-red-600",
    description: "Empower your business with secure, scalable, and cost-efficient cloud infrastructure using AWS and Azure best practices.",
    points: ["Cloud migration & optimization (AWS, Azure)", "Infrastructure as Code & DevOps", "Scalable architecture design", "Disaster recovery & monitoring", "Cloud-native app development"],
    link: "/services/cloudSolutions",
  },
  {
    title: "IT Consulting",
    icon: <FaChalkboardTeacher className="text-yellow-600 text-4xl" />,
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    hover: "hover:border-yellow-400",
    accent: "bg-yellow-500",
    description: "Strategic IT guidance for future-proofing your digital infrastructure, enhancing productivity, and reducing costs.",
    points: ["IT roadmap & strategy", "Governance & compliance planning", "Tech gap analysis & infrastructure planning", "Vendor & tool recommendations", "Agile transformation & change management"],
    link: "/services/itConsulting",
  },
  {
    title: "Software Products",
    icon: <FaCubes className="text-blue-700 text-4xl" />,
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    hover: "hover:border-indigo-400",
    accent: "bg-indigo-600",
    description: "Scalable and secure software products crafted to deliver real-world impact for your business needs.",
    points: ["Product strategy & feature planning", "Cross-platform product development", "UI/UX design for product usability", "Robust architecture & performance", "Launch-ready MVP & go-to-market support"],
    link: "/services/softwareProduct",
  },
];

const whyChooseCards = [
  {
    icon: <FaUserTie className="text-blue-600 text-3xl" />,
    title: "Experienced Team",
    desc: "Hands-on expertise across industries, delivering consistent and innovative solutions.",
    bg: "bg-blue-50",
  },
  {
    icon: <FaShieldAlt className="text-red-600 text-3xl" />,
    title: "Secure & Scalable",
    desc: "Enterprise-grade software with industry best practices for security, performance, and scale.",
    bg: "bg-red-50",
  },
  {
    icon: <FaRocket className="text-yellow-600 text-3xl" />,
    title: "Faster Go-to-Market",
    desc: "Agile methods and rapid iteration cycles ensure timely, high-quality product releases.",
    bg: "bg-yellow-50",
  },
  {
    icon: <FaUsers className="text-blue-700 text-3xl" />,
    title: "Flexible Talent Model",
    desc: "Easily scale your team with vetted experts who match your project needs and pace.",
    bg: "bg-indigo-50",
  },
];

const statsData = [
  { icon: <FaSchool className="text-3xl text-blue-600" />, value: "300+", label: "Schools", bg: "bg-blue-100" },
  { icon: <FaCubes className="text-3xl text-red-600" />, value: "40+", label: "Modules", bg: "bg-red-100" },
  { icon: <FaChartPie className="text-3xl text-yellow-600" />, value: "2K+", label: "Reports", bg: "bg-yellow-100" },
  { icon: <FaAward className="text-3xl text-blue-700" />, value: "8+", label: "Year Expertise", bg: "bg-indigo-100" },
];

const testimonials = [
  {
    logo: SchoolImages.VKReta,
    title: "VK Fashion",
    desc: "VK Fashion has transformed its operational workflows using Friensys, streamlining administrative processes and improving overall institutional efficiency through smart digital tools.",
  },
  {
    logo: SchoolImages.VKlogo,
    title: "National Public School, Bangalore",
    desc: "VK Enterprise utilizes Friensys solutions to streamline operations, improve team collaboration, and enhance client communication — driving greater productivity and business efficiency.",
  },
  {
    logo: SchoolImages.uniqueLogo,
    title: "Unique Educational Institute",
    desc: "Friensys has made school management effortless, improving exams and reporting at Unique Educational Institute. We recommend Friensys for any institution looking for smooth automation and real results",
  },
];

function Home() {
  const [activeKey, setActiveKey] = useState("school");
  const activeData = dashboardMockData[activeKey];

  const handleSendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_u807rke", "template_oo2wo5f", e.target, "nYysKLXX916tXkFee")
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been delivered successfully.",
            confirmButtonColor: "#2563eb",
            confirmButtonText: "Awesome!",
          });
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Please try again.",
            confirmButtonColor: "#dc2626",
            confirmButtonText: "Try Again",
          });
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/*========================== Hero Section ==============================*/}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-20 md:py-32 px-4 md:px-8 lg:px-16">
        {/* Decorative Shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-red-200 rounded-full opacity-30 blur-2xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-30 blur-2xl" />
        <div className="absolute top-1/2 -right-10 w-48 h-48 bg-yellow-200 rounded-full opacity-25 blur-3xl" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-md border border-gray-200"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">
              💡 Software, Services & Staffing
            </span>
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-gray-900"
          >
            Revolutionize Your Business with
            <br />
            <span className="bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
              Smart Tech Solutions
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            At Friensys, we blend innovation with engineering excellence to deliver enterprise-grade software, strategic IT consulting, and top-tier talent — empowering your digital transformation journey.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
          >
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              🚀 Explore Services
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white hover:bg-gray-50 text-gray-800 font-semibold text-lg border-2 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300"
            >
              ✉️ Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 50L60 45C120 40 240 30 360 28C480 26 600 32 720 38C840 44 960 50 1080 52C1200 54 1320 52 1380 51L1440 50V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/*========================== Trusted Partners Section =========================*/}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
              Our Trusted <span className="text-blue-600">Partners</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We proudly collaborate with industry-leading organizations and educational institutions to deliver seamless digital experiences.
            </p>
          </motion.div>

          {/* Swiper Carousel */}
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
            className="pb-6"
          >
            {Object.entries(SchoolImages).map(([key, imgSrc]) => (
              <SwiperSlide key={key} className="flex justify-center items-center px-2">
                <motion.div
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-300 transition-all duration-300"
                >
                  <img
                    src={imgSrc}
                    alt={key}
                    className="w-28 h-20 object-contain hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/*======================= Services Section ============================*/}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Our Service Offerings</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore how our specialized solutions in software development, cloud transformation, and IT strategy can accelerate your business growth.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {service.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`group relative ${service.bg} rounded-3xl border-2 ${service.border} ${service.hover} overflow-hidden transition-all duration-300`}
              >
                <div className="p-8 flex flex-col h-full">
                  {/* Explore Link */}
                  <Link
                    to={service.link || "#"}
                    className="absolute top-5 right-5 text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group/link"
                  >
                    Explore <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.bg} border ${service.border} mb-6`}>
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-5 flex-grow">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.link || "#"}
                    className={`inline-flex items-center gap-2 ${service.accent} hover:opacity-90 text-white font-medium px-5 py-2.5 rounded-xl transition-opacity w-fit`}
                  >
                    Learn More <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/*========================= Our Products =======================*/}
      <section className="py-28 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
              Discover Our <span className="text-red-600">Products</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Powerful, scalable, and intuitive solutions built to streamline school operations and accelerate digital transformation.
            </p>
          </motion.div>

          {/* Navigation Tabs */}
          <div className="mb-12">
            {/* Mobile Scroll */}
            <div className="flex md:hidden overflow-x-auto gap-3 pb-4 hide-scrollbar px-2">
              {products.map((prod) => (
                <button
                  key={prod.key}
                  onClick={() => setActiveKey(prod.key)}
                  className={`flex flex-col items-center gap-2 px-5 py-3 rounded-2xl transition-all duration-300 min-w-[100px] border-2 ${
                    activeKey === prod.key
                      ? "bg-blue-600 text-white border-blue-700 shadow-lg"
                      : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  <div className="text-xl">{prod.icon}</div>
                  <span className="text-xs font-medium whitespace-nowrap">{prod.name}</span>
                </button>
              ))}
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:flex flex-wrap justify-center gap-3">
              {products.map((prod) => (
                <motion.button
                  key={prod.key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveKey(prod.key)}
                  className={`flex flex-col items-center gap-3 px-7 py-4 rounded-2xl transition-all duration-300 border-2 ${
                    activeKey === prod.key
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-700 shadow-lg ring-4 ring-blue-200"
                      : "bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                  }`}
                >
                  <div className={`text-2xl ${activeKey === prod.key ? 'text-white' : ''}`}>{prod.icon}</div>
                  <span className="font-semibold">{prod.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Product Preview Card */}
          <motion.div 
            key={activeKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-5xl mx-auto bg-white rounded-3xl border-2 border-gray-200 shadow-xl p-6 md:p-10 overflow-hidden"
          >
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-blue-500 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-red-500 rounded-br-2xl" />
            
            <h3 className="relative text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
              {activeData.title}
            </h3>
            <div className="relative flex justify-center">
              <motion.img
                key={activeData.image}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={activeData.image}
                alt={`${activeData.title} preview`}
                className="w-full max-w-4xl max-h-[460px] object-contain rounded-2xl border border-gray-200 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/*======================== Why Choose us ============================*/}
      <section className="py-28 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-blue-50 to-yellow-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
              Why <span className="text-blue-600">Choose Us</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tap into deep technical expertise, reliable talent, and fast-paced delivery tailored for your vision.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {whyChooseCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`${card.bg} p-8 rounded-3xl border-2 border-gray-100 hover:border-blue-300 transition-all duration-300`}
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-white shadow-md mb-6">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/*============================== Stats Section ==========================*/}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className={`${stat.bg} p-6 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300`}
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-white shadow-sm mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-extrabold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*========================== Testimonials Section ============================*/}
      <section className="py-28 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-gray-900">Let's Read</h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
              Why Should You <span className="text-red-600">Choose Friensys</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Friensys offers next-gen software products, tailored IT development, tech consulting, and staffing solutions — empowering your business to grow, automate, and innovate.
            </p>
          </motion.div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
            className="pb-12"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white border-2 border-gray-200 rounded-3xl p-8 h-full flex flex-col shadow-md hover:shadow-xl transition-all duration-300 relative"
                >
                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-blue-200 text-6xl absolute top-4 right-6" />
                  
                  {/* Logo */}
                  <div className="flex justify-center mb-6">
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="h-14 w-auto object-contain"
                    />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mt-4 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/*================================ Enquiry Section ================================*/}
      <section className="py-28 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left Content */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-white flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-extrabold leading-snug text-gray-900 mb-6">
                  Power Your Business with <br />
                  <span className="text-blue-600">Smarter Tech Solutions</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Friensys offers next-gen software, IT consulting, and tailored development — crafted to help your business grow, automate, and innovate.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <FaPhone />
                    </div>
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                      <FaEnvelope />
                    </div>
                    <span>hello@friensys.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                      <FaMapMarkerAlt />
                    </div>
                    <span>Bangalore, India</span>
                  </div>
                </div>
                
                <img
                  src={WebsiteImages.friensysImage}
                  alt="Friensys Tech"
                  className="rounded-2xl shadow-lg mt-4 w-full max-w-sm border border-gray-200"
                />
              </div>

              {/* Form */}
              <div className="p-8 md:p-12 bg-white">
                <form onSubmit={handleSendEmail} className="space-y-5">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">📞 Request a Call Back</h3>
                  <p className="text-gray-500 text-sm mb-6">Fill the form and our team will get back to you within 24 hours.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      required
                      className="px-5 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none text-gray-800 placeholder-gray-400 transition-all"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      required
                      className="px-5 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none text-gray-800 placeholder-gray-400 transition-all"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID *"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none text-gray-800 placeholder-gray-400 transition-all"
                  />

                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none text-gray-800 placeholder-gray-400 transition-all"
                  />

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none text-gray-800 placeholder-gray-400 resize-none transition-all"
                  ></textarea>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
                  >
                    📥 Request Call Back
                    <FaArrowRight />
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}

export default Home;