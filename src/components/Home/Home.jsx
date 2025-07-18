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
} from "react-icons/fa";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
    image: WebsiteImages.LoginPage,
  },
  crm: {
    title: "CRM - Educational Management",
    image: WebsiteImages.EducationalCRMAdmissionCordinator,
  },
};

function Home() {
  const [activeKey, setActiveKey] = useState("school");
  const activeData = dashboardMockData[activeKey];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-tr from-white via-sky-50 to-emerald-100 py-28 px-6 md:px-12 lg:px-20 text-gray-900">
        {/* Decorative Gradient Shapes */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-emerald-400 to-teal-300 rounded-full opacity-20 blur-[150px] z-0"></div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-blue-400 to-sky-300 rounded-full opacity-30 blur-[100px] z-0"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16">
          {/* Text Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 rounded-full bg-white text-emerald-600 font-semibold shadow border border-emerald-200 w-fit text-sm">
              🔧 Software, Services & Staffing
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Transform Your Business with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">
                Smart Tech Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Friensys offers next-gen software products, tailored IT
              development, tech consulting, and staffing solutions — empowering
              your business to grow, automate, and innovate.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition">
                🚀 Explore Solutions
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-3 rounded-xl border border-gray-300 shadow transition">
                ✉️ Get in Touch
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative flex justify-center">
            <div className="p-4 bg-white rounded-3xl shadow-2xl border border-gray-200 transform hover:scale-105 transition duration-500">
              <img
                src={WebsiteImages.DashboardImage}
                alt="Dashboard"
                className="rounded-xl w-full max-w-md"
              />
            </div>
          </div>
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

      {/*What do we do */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-20 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Do</h2>
          <p className="text-gray-600 mb-14 max-w-2xl mx-auto text-base md:text-lg">
            We help businesses grow through tailored software solutions, expert
            development services, and dedicated IT talent.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 mx-auto mb-5 shadow-md group-hover:scale-110 transition">
                <FaLaptopCode className="text-purple-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Software Products
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Scalable and secure software products crafted to deliver
                real-world impact for your business needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mx-auto mb-5 shadow-md group-hover:scale-110 transition">
                <FaCogs className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Custom Development
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bespoke software solutions tailored to your unique business
                goals, built with agility and precision.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mx-auto mb-5 shadow-md group-hover:scale-110 transition">
                <FaTools className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Software Services
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Maintenance, integration, cloud migration, and more to ensure
                your systems run efficiently and effectively.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 mx-auto mb-5 shadow-md group-hover:scale-110 transition">
                <FaUsers className="text-red-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                IT Staffing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hire top-tier developers and tech talent to scale your team
                quickly and flexibly – as per your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="bg-gradient-to-br from-gray-100 to-white min-h-screen py-20 px-4 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our <span className="text-green-600">Products</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our powerful solutions tailored to streamline and automate
            your school operations.
          </p>
        </div>

        {/* Product Navigation */}
        <div className="flex flex-wrap justify-center gap-5 mb-14">
          {products.map((prod) => (
            <button
              key={prod.key}
              onClick={() => setActiveKey(prod.key)}
              className={`flex flex-col items-center text-sm font-medium px-6 py-3 rounded-xl border transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105 ${
                activeKey === prod.key
                  ? "bg-green-600 text-white border-green-700"
                  : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <div className="text-2xl mb-1">{prod.icon}</div>
              <span className="tracking-wide">{prod.name}</span>
            </button>
          ))}
        </div>

        {/* Dashboard Card */}
        <div className="max-w-6xl mx-auto bg-white bg-opacity-70 backdrop-blur-md border border-gray-200 p-10 rounded-3xl shadow-2xl">
          <h3 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            {activeData.title}
          </h3>

          {/* Image Section */}
          <div className="flex justify-center animate-fadeIn">
            <img
              src={activeData.image}
              alt={`${activeData.title} preview`}
              className="w-full max-w-4xl max-h-[450px] object-contain rounded-lg shadow-md border border-gray-200"
            />
          </div>
        </div>
      </section>

      {/*Why Choose us */}
      <section className="bg-white py-20 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mb-14 max-w-2xl mx-auto text-base md:text-lg">
            Partnering with us means tapping into years of technical expertise,
            proven delivery, and a reliable talent network tailored to your
            goals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Card Template */}
            {[
              {
                icon: <FaUserTie className="text-purple-600 text-3xl" />,
                title: "Experienced Team",
                desc: "Our team brings years of hands-on experience across various industries and technologies.",
                bg: "bg-purple-50",
              },
              {
                icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
                title: "Industry-Grade Solutions",
                desc: "We follow best practices to deliver robust, scalable, and secure software solutions.",
                bg: "bg-blue-50",
              },
              {
                icon: <FaRocket className="text-green-600 text-3xl" />,
                title: "Fast Delivery",
                desc: "Agile development processes ensure your product launches on time — without compromising quality.",
                bg: "bg-green-50",
              },
              {
                icon: <FaUsers className="text-red-600 text-3xl" />,
                title: "Scalable Talent Pool",
                desc: "Need to scale fast? We provide top-tier developers and IT staff based on your evolving needs.",
                bg: "bg-red-50",
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center ${card.bg}`}
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-white shadow-md mb-5">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
      <section className="bg-gradient-to-b from-[#f1f0e8] to-[#e5e1da] py-20 px-4 md:px-10 lg:px-20 text-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
            Let's Read
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Why Should You{" "}
            <span className="text-orange-600">Choose Friensys</span> School ERP?
          </h3>

          <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-md md:text-lg leading-relaxed">
            Friensys ERP is a centralized platform with all the necessary tools
            for measuring, accessing, connecting, and coordinating learning
            processes. It handles every aspect of school or college operations —
            from daily tasks to seamless communication.
          </p>

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
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-6 h-full flex flex-col justify-between hover:shadow-2xl transition duration-300 relative">
                  {/* Quotation Icon */}
                  <div className="absolute top-0 right-0 bg-orange-500 text-white p-2 rounded-bl-xl">
                    <span className="text-xl font-bold">”</span>
                  </div>

                  {/* Logo */}
                  <div className="flex justify-center items-center mb-4">
                    <img
                      src={item.logo}
                      alt="School Logo"
                      className="h-12 w-auto object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold mb-2 text-left text-gray-900">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-700 text-left mb-4">
                    {item.desc}
                  </p>

                  {/* CTA */}
                  <span className="text-orange-600 font-semibold text-sm text-left hover:underline cursor-pointer">
                    Read Case Studies →
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="bg-gradient-to-r from-blue-100 via-white to-blue-50 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-xl border border-gray-100">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={WebsiteImages.friensysImage}
              alt="e-Brochure"
              className="w-full max-w-sm rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 space-y-6">
            <h4 className="text-sm text-gray-500 uppercase font-semibold tracking-wide">
              e-Brochure
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              Everything You Need for
              <span className="text-indigo-600"> Smarter </span>
              School Management
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Discover our smart School Management Software. Get the full
              brochure packed with features, benefits, and a better future for
              your school.
            </p>

            {/* Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full px-5 py-3 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                className="w-full px-5 py-3 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full px-5 py-3 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800"
              />

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 w-full md:w-auto shadow-md hover:shadow-lg"
              >
                📥 Request Call Back
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
