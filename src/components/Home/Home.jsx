import React, { useState } from "react";
import logo from "../../assets/pic.jpg";
// import Images from "../../common/BindImages";
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
} from "react-icons/fa";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "MR. Mohammad Ujjainwala",
    role: "Principal - Lorem ipsum dolor sit amet",
    message:
      "Friensys Info Labs has been a game-changer. Their software streamlined our operations, empowered staff, and enhanced communication with parents.",
    img: SchoolImages.GMpublic,
  },
  {
    name: "Mr. Dharmendra Savani",
    role: "Chairman - Lorem ipsum dolor sit amet",
    message:
      "Their ERP tools and tech services have made managing day-to-day tasks effortless. Highly recommended for institutions looking to scale!",
    img: SchoolImages.adhyayanResidental,
  },
  {
    name: "Mrs. D Aparna",
    role: "Principal - Lorem ipsum dolor sit amet",
    message:
      "The support and innovation we’ve experienced with Friensys are exceptional. Their products are reliable, intuitive, and customizable.",
    img: SchoolImages.champaranInternational,
  },
  {
    name: "Mrs. S Mishra",
    role: "Vice Principal - Lorem ipsum dolor sit amet",
    message:
      "They truly understand institutional needs and provide tailored, scalable solutions. We’re glad to have partnered with them.",
    img: SchoolImages.geniusPublic,
  },
  {
    name: "Mr. K Verma",
    role: "Director - Lorem ipsum dolor sit amet",
    message:
      "Support, training, and updates have been seamless. Their ERP is a must-have tool for modern schools.",
    img: SchoolImages.chelaMary,
  },
  {
    name: "Mrs. R Ahuja",
    role: "HOD - Lorem ipsum dolor sit amet",
    message:
      "Efficient communication, strong features, and intuitive dashboards made a huge difference for our staff and students.",
    img: SchoolImages.delhiPublic,
  },
];

function Home() {
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cyan-100 py-32 px-6 md:px-12 lg:px-20 text-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={WebsiteImages.backgroundImage} // this should be your uploaded image
            alt="ERP Background"
            className="w-full h-full object-cover object-center opacity-15"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Explore Our ERP
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Friensys is a leading global information technology, consulting
              and business process services company. We harness the power of
              cognitive computing, hyper-automation, robotics, cloud, analytics
              and emerging technologies to help our clients adapt to the digital
              world and make them successful.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              A company recognized globally for its comprehensive portfolio of
              services, strong commitment to sustainability and good corporate
              citizenship. Together, we discover ideas and connect the dots to
              build a better and a bold new future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all duration-200">
                Explore Services →
              </button>
              <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-lg shadow-md transition-all duration-200">
                Contact Us
              </button>
            </div>
          </div>

          <div className="md:w-1/2 hidden md:block py-10">
            <img
              src={WebsiteImages.backgroundImage}
              alt="ERP illustration"
              className="w-full max-w-lg rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#2f4963] py-16 px-4 md:px-8 lg:px-16 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Reusable Stat Box */}
            {[
              {
                icon: <FaSchool className="text-3xl text-black" />,
                value: "300+",
                label: "Schools",
              },
              {
                icon: <FaCubes className="text-3xl text-black" />,
                value: "40+",
                label: "Modules",
              },
              {
                icon: <FaChartPie className="text-3xl text-black" />,
                value: "2K+",
                label: "Reports",
              },
              {
                icon: <FaAward className="text-3xl text-black" />,
                value: "8+",
                label: "Year Expertise",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 bg-[#3d5a78] p-5 rounded-xl shadow-md"
              >
                <div className="bg-white p-4 rounded shadow">{stat.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
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

      {/*Testimonial Sections */}
      <section className="bg-gradient-to-br from-[#E5E1DA] to-[#F1F0E8] py-20 px-6 md:px-12 lg:px-20 text-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-700 font-medium mb-2">
            Our Client Says
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-14">
            Why Institutes Love{" "}
            <span className="text-blue-900">Friensys Info Labs</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((item, index) => (
              <div
                key={index}
                className="relative bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl text-left transition hover:shadow-2xl"
              >
                {/* Quotation mark */}
                <div className="absolute top-0 right-0 bg-orange-500 text-white p-2 rounded-bl-xl">
                  <span className="text-2xl font-bold">”</span>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-full border-2 border-orange-500 shadow-sm"
                  />
                  <div>
                    <p className="font-bold text-lg">{item.name}</p>
                    <p className="text-sm text-gray-600 italic">{item.role}</p>
                  </div>
                </div>

                {/* Message */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.message}
                </p>
              </div>
            ))}
          </div>

          {/* Toggle Button */}
          <div className="mt-14">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
            >
              {showAll ? "Show Less" : "View All Testimonials"}
            </button>
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

      {/* Trusted Schools Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-orange-600 mb-10 tracking-tight">
            Trusted by Leading Schools
          </h2>

          <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
            Join a growing network of top schools that rely on our powerful
            tools for seamless digital transformation.
          </p>

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
                <div className="bg-white hover:bg-orange-50 p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                  <img
                    src={imgSrc}
                    alt={key}
                    className="w-32 h-20 object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Why Choose Section */}
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
              {
                logo: SchoolImages.GMpublic,
                title: "Modern School, Delhi",
                desc: "Modern School relies on Friensys ERP for a seamless academic and administrative experience...",
              },
              {
                logo: SchoolImages.GMpublic,
                title: "Green Valley School, Jaipur",
                desc: "Parent-teacher communication has never been this effective — thanks to the smart features of Friensys ERP...",
              },
              {
                logo: SchoolImages.GMpublic,
                title: "St. Xavier’s High School, Ranchi",
                desc: "Smooth fee management and academic reports are now just a click away for Xavier’s School...",
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

      {/*Enquiry Section */}
      <section className="bg-gradient-to-r from-green-200 via-green-100 to-green-300 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-2xl border border-gray-200">
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
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 leading-snug">
              Everything You Need for
              <span className="text-orange-500"> Smarter </span>
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
                className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
              />

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 w-full md:w-auto shadow-md hover:shadow-lg"
              >
                📥 Download Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
