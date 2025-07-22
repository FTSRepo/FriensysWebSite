import React, { useState } from "react";
import { SchoolImages, WebsiteImages } from "../../common/BindImages";
import {
  FaUsers,
  FaCubes,
  FaUserTie,
  FaLaptopCode,
  FaTools,
  FaCogs,
  FaShieldAlt,
  FaRocket,
  FaSchool,
  FaChartPie,
  FaAward,
  FaMobileAlt,
  FaExclamationCircle,
  FaDatabase,
  FaGift,
  FaStore,
  FaChalkboardTeacher,
  FaCode,
  FaCloud,
} from "react-icons/fa";
import "swiper/css";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import WhatsAppButton from "../../common/WhatsApp/WhatsAppButton";
import Swal from "sweetalert2";

const products = [
  { name: "School ERP", icon: <FaSchool />, key: "school" },
  { name: "Mobile App", icon: <FaMobileAlt />, key: "mobile" },
  {
    name: "Escalation System",
    icon: <FaExclamationCircle />,
    key: "escalation",
  },
  { name: "OD-SAS", icon: <FaDatabase />, key: "odsas" },
  { name: "Customer Loyalty", icon: <FaGift />, key: "loyalty" },
  { name: "Marketplace", icon: <FaStore />, key: "marketplace" },
  { name: "CRM - Edu Mgmt", icon: <FaChalkboardTeacher />, key: "crm" },
];

const dashboardMockData = {
  school: {
    title: "School ERP Dashboard",
    image: WebsiteImages.SchoolERp,
  },
  mobile: {
    title: "Mobile App Dashboard",
    image: WebsiteImages.AdminDashboardApp,
  },
  escalation: {
    title: "Escalation System Dashboard",
    image: WebsiteImages.EscalationDashboard,
  },
  odsas: {
    title: "OD-SAS Management Dashboard",
    image: WebsiteImages.ODSASDashboard,
  },
  loyalty: {
    title: "Customer Loyalty Dashboard",
    image: WebsiteImages.LoyaltyDashboard,
  },
  marketplace: {
    title: "Marketplace Overview",
    image: WebsiteImages.MarketplaceDashboard,
  },
  crm: {
    title: "CRM - Educational Management",
    image: WebsiteImages.EducationalCRMAdmissionCordinator,
  },
};

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
    link: "/services/softwareDevelopment",
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
    link: "/services/cloudSolutions",
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
    link: "/services/itConsulting",
  },
  {
    title: "Software Products",
    icon: <FaCubes className="text-rose-600 text-5xl" />, // You can replace FaCubes with another fitting icon
    color: "border-rose-500",
    description:
      "Scalable and secure software products crafted to deliver real-world impact for your business needs.",
    points: [
      "Product strategy & feature planning",
      "Cross-platform product development",
      "UI/UX design for product usability",
      "Robust architecture & performance",
      "Launch-ready MVP & go-to-market support",
    ],
    link: "/services/softwareProduct",
  },
];

function Home() {
  const [activeKey, setActiveKey] = useState("school");
  const activeData = dashboardMockData[activeKey];

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u807rke", //? Service Id
        "template_oo2wo5f", //? Template Id
        e.target,
        "nYysKLXX916tXkFee" //? Public Key
      )
      .then(
        (result) => {
          console.log(result.text);

          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been delivered successfully.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });

          e.target.reset();
        },
        (error) => {
          console.log(error.text);

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Please try again.",
            confirmButtonColor: "#d33",
            confirmButtonText: "Close",
          });
        }
      );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-emerald-50 py-32 px-6 md:px-12 lg:px-20 text-gray-900">
        {/* Soft Gradient Backgrounds */}
        <div className="absolute -top-48 -left-48 w-[700px] h-[700px] bg-gradient-to-br from-indigo-400 to-emerald-300 opacity-25 blur-[180px] rounded-full z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-sky-400 to-teal-300 opacity-20 blur-[150px] rounded-full z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
          {/* Tagline */}
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full text-sm font-medium tracking-wide bg-white/80 backdrop-blur-md border border-indigo-200 text-indigo-700 shadow-sm"
          >
            🌟 Software, Services & Staffing
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900"
          >
            Revolutionize Your Business with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">
              Smart Tech Solutions
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            At Friensys, we blend innovation with engineering excellence to
            deliver enterprise-grade software, strategic IT consulting, and
            top-tier talent — empowering your digital transformation journey.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-5 pt-4"
          >
            <Link
              to="/services"
              className="inline-block bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold text-base px-8 py-3 rounded-full shadow-lg transition duration-300"
            >
              🚀 Explore Services
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-white/80 backdrop-blur-md hover:bg-white text-gray-900 font-semibold text-base px-8 py-3 rounded-full border border-gray-300 shadow transition duration-300"
            >
              ✉️ Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted Schools Section */}
      <section className="bg-gradient-to-b from-white via-sky-50 to-emerald-100 py-20 px-4 md:px-10 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-700 tracking-tight mb-6">
            Our Trusted <span className="text-indigo-600">Partners</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            We proudly collaborate with industry-leading organizations and
            educational institutions to deliver seamless digital experiences
            that drive success and growth.
          </p>

          {/* Swiper Carousel */}
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
          >
            {Object.entries(SchoolImages).map(([key, imgSrc]) => (
              <SwiperSlide
                key={key}
                className="flex justify-center items-center px-4"
              >
                <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg border border-gray-200 hover:border-indigo-300 transition duration-300 ease-in-out">
                  <img
                    src={imgSrc}
                    alt={key}
                    className="w-28 h-20 object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-br from-white via-sky-50 to-emerald-100 py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Our Service Offerings
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Explore how our specialized solutions in software development, cloud
            transformation, and IT strategy can accelerate your business growth.
          </p>
        </div>

        {/* Horizontal Cards Layout */}
        <div className="max-w-6xl mx-auto space-y-8">
          {service.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-start md:items-center gap-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 border border-gray-200"
            >
              {/* Explore Button */}
              <Link
                to={service.link || "#"}
                className="absolute top-4 right-4 text-sm text-blue-600 font-semibold hover:underline"
              >
                Explore →
              </Link>

              {/* Icon */}
              <div className="flex-shrink-0">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center bg-opacity-10 ${service.color}`}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {service.description}
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Products */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-emerald-50 py-28 px-6 md:px-12">
        {/* Decorative Background Glow */}
        <div className="absolute -top-44 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-green-300 to-emerald-400 opacity-20 blur-[180px] rounded-full z-0"></div>

        {/* Section Header */}
        <div className="relative z-10 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Discover Our <span className="text-emerald-600">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful, scalable, and intuitive solutions built to streamline
            school operations and accelerate digital transformation.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="relative z-10 flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          {products.map((prod) => (
            <button
              key={prod.key}
              onClick={() => setActiveKey(prod.key)}
              className={`flex flex-col items-center text-sm font-medium px-5 py-3 rounded-2xl transition-all duration-300 border shadow hover:shadow-md hover:scale-105 ${
                activeKey === prod.key
                  ? "bg-emerald-600 text-white border-emerald-700"
                  : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <div className="text-xl md:text-2xl mb-1">{prod.icon}</div>
              <span className="tracking-wide">{prod.name}</span>
            </button>
          ))}
        </div>

        {/* Product Preview Card */}
        <div className="relative z-10 max-w-5xl mx-auto bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/60 p-10 transition-all duration-500">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8">
            {activeData.title}
          </h3>

          <div className="flex justify-center animate-fadeIn">
            <img
              src={activeData.image}
              alt={`${activeData.title} preview`}
              className="w-full max-w-4xl max-h-[460px] object-contain rounded-xl shadow-lg border border-gray-300"
            />
          </div>
        </div>
      </section>

      {/*Why Choose us */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-emerald-50 py-28 px-6 md:px-12 lg:px-24 text-gray-800">
        {/* Decorative Gradient Glow */}
        <div className="absolute -top-40 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-indigo-300 to-emerald-400 opacity-20 blur-[180px] rounded-full z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Why <span className="text-emerald-600">Choose Us</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
            Tap into deep technical expertise, reliable talent, and fast-paced
            delivery tailored for your vision.
          </p>

          {/* Feature Cards */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FaUserTie className="text-indigo-600 text-3xl" />,
                title: "Experienced Team",
                desc: "Hands-on expertise across industries, delivering consistent and innovative solutions.",
                gradient: "from-indigo-100 to-white",
              },
              {
                icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
                title: "Secure & Scalable",
                desc: "Enterprise-grade software with industry best practices for security, performance, and scale.",
                gradient: "from-blue-100 to-white",
              },
              {
                icon: <FaRocket className="text-green-600 text-3xl" />,
                title: "Faster Go-to-Market",
                desc: "Agile methods and rapid iteration cycles ensure timely, high-quality product releases.",
                gradient: "from-green-100 to-white",
              },
              {
                icon: <FaUsers className="text-pink-600 text-3xl" />,
                title: "Flexible Talent Model",
                desc: "Easily scale your team with vetted experts who match your project needs and pace.",
                gradient: "from-pink-100 to-white",
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br ${card.gradient}`}
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-white shadow-lg mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-pink-50 to-white py-16 px-4 md:px-8 lg:px-16 text-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Reusable Stat Box */}
            {[
              {
                icon: <FaSchool className="text-3xl text-indigo-700" />,
                value: "300+",
                label: "Schools",
                bg: "bg-indigo-100",
              },
              {
                icon: <FaCubes className="text-3xl text-green-700" />,
                value: "40+",
                label: "Modules",
                bg: "bg-green-100",
              },
              {
                icon: <FaChartPie className="text-3xl text-yellow-700" />,
                value: "2K+",
                label: "Reports",
                bg: "bg-yellow-100",
              },
              {
                icon: <FaAward className="text-3xl text-pink-700" />,
                value: "8+",
                label: "Year Expertise",
                bg: "bg-pink-100",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300"
              >
                <div className={`${stat.bg} p-4 rounded-full shadow-inner`}>
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section / Testimonial Sections */}
      <section className="relative bg-gradient-to-br from-[#f9f8f6] via-[#f0eee9] to-white py-28 px-6 md:px-12 lg:px-24 text-gray-800 overflow-hidden">
        {/* Soft Background Glow */}
        <div className="absolute -top-48 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-orange-300 to-pink-400 opacity-20 blur-[160px] rounded-full z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-gray-900">
            Let’s Read
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Why Should You{" "}
            <span className="text-orange-600">Choose Friensys</span>
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-md md:text-lg leading-relaxed mb-14">
            Friensys offers next-gen software products, tailored IT development,
            tech consulting, and staffing solutions — empowering your business
            to grow, automate, and innovate.
          </p>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
          >
            {[
              {
                logo: SchoolImages.GMpublic,
                title: "L.P Savani Group Of Schools, Surat",
                desc: "L P Savani Group of Schools has a proud tradition of being a supportive and caring community that delivers outstanding educational...",
              },
              {
                logo: SchoolImages.GMpublic,
                title: "National Public School, Bangalore",
                desc: "NPS has implemented Friensys ERP to improve academic tracking and parent communication with amazing outcomes...",
              },
              {
                logo: SchoolImages.GMpublic,
                title: "Bright Future Academy, Pune",
                desc: "From manual records to full automation — Friensys has changed how BFA handles exams, attendance, and reporting...",
              },
              {
                logo: SchoolImages.GMpublic,
                title: "St. Xavier’s High School, Mumbai",
                desc: "St. Xavier’s modernized their administrative workflows with Friensys, seeing rapid improvements in results tracking.",
              },
              {
                logo: SchoolImages.GMpublic,
                title: "DPS Indore",
                desc: "Digital transformation made simple — DPS integrated our modules for finance, academics, and more.",
              },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col justify-between relative">
                  {/* Decorative Quote Mark */}
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-2 rounded-bl-2xl shadow-md">
                    <span className="text-2xl font-bold leading-none">”</span>
                  </div>

                  {/* Logo */}
                  <div className="flex justify-center items-center mb-5">
                    <img
                      src={item.logo}
                      alt="School Logo"
                      className="h-14 w-auto object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* CTA */}
                  <span className="text-orange-600 font-semibold text-sm hover:underline cursor-pointer text-left">
                    Read Case Study →
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-sky-100 py-28 px-6 md:px-12 lg:px-24">
        {/* Glow Backgrounds */}
        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-indigo-300 opacity-20 blur-[160px] rounded-full z-0"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-300 opacity-20 blur-[140px] rounded-full z-0"></div>

        {/* Card Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 p-6 md:p-12 gap-12">
          {/* Left Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
              Power Your Business with <br />
              <span className="text-indigo-600">Smarter Tech Solutions</span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Friensys offers next-gen software, IT consulting, and tailored
              development — crafted to help your business grow, automate, and
              innovate.
            </p>
            <img
              src={WebsiteImages.friensysImage}
              alt="Friensys Tech"
              className="rounded-2xl shadow-lg mt-6 w-full max-w-sm"
            />
          </div>

          {/* Right Form Section */}
          <form
            onSubmit={handleSendEmail}
            className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-8 space-y-5 w-full"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              📞 Request a Call Back
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                required
                className="px-5 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-indigo-300 focus:outline-none text-gray-800"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                required
                className="px-5 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-indigo-300 focus:outline-none text-gray-800"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email ID *"
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-indigo-300 focus:outline-none text-gray-800"
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-indigo-300 focus:outline-none text-gray-800"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-indigo-300 focus:outline-none text-gray-800 resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 w-full shadow hover:shadow-lg"
            >
              📥 Request Call Back
            </button>
          </form>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}

export default Home;
