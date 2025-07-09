import React from "react";
import logo from "../../assets/pic.jpg";
import Images from "../../common/BindImages";
import {
  FaChartLine,
  FaUsers,
  FaRedo,
  FaCubes,
  FaCheckCircle,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaUserTie,
  FaLaptopCode,
  FaTools,
  FaCogs,
  FaShieldAlt,
  FaRocket,
  FaSchool,
  FaComments,
  FaHandshake,
  FaChartPie,
  FaAward,
} from "react-icons/fa";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cyan-100 py-16 px-6 md:px-12 lg:px-20 text-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Explore Our ERP
            </h1>
            <p className="text-lg md:text-xl  leading-relaxed">
              Empowering businesses with scalable software solutions and expert
              IT talent.
            </p>
            <p className="text-lg md:text-xl  leading-relaxed">
              From tailored products to reliable staffing — we build, scale, and
              support your digital journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button className="bg-teal-600 hover:bg-teal-700  font-medium px-6 py-3 rounded-lg shadow-md transition-all duration-200">
                Explore Services →
              </button>
              <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-lg shadow-md transition-all duration-200">
                Contact Us
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={logo}
              alt="ERP screen"
              className="w-full max-w-md md:max-w-lg rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Trusted Schools Section */}
      <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-orange-600 mb-8">
          Trusted by Leading Schools
        </h2>

        <div className="max-w-7xl mx-auto">
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
            {Object.entries(Images).map(([key, imgSrc]) => (
              <SwiperSlide
                key={key}
                className="flex justify-center items-center"
              >
                <img
                  src={imgSrc}
                  alt={key}
                  className="w-full h-auto max-h-32 object-contain px-4 grayscale hover:grayscale-0 transition duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/*What do we do */}
      <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Do</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We help businesses grow through tailored software solutions, expert
            development services, and dedicated IT talent.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaLaptopCode className="text-purple-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Software Products</h3>
              <p className="text-gray-600 text-sm">
                Scalable and secure software products crafted to deliver
                real-world impact for your business needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaCogs className="text-blue-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
              <p className="text-gray-600 text-sm">
                Bespoke software solutions tailored to your unique business
                goals, built with agility and precision.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaTools className="text-green-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Software Services</h3>
              <p className="text-gray-600 text-sm">
                Maintenance, integration, cloud migration, and more to ensure
                your systems run efficiently and effectively.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaUsers className="text-red-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">IT Staffing</h3>
              <p className="text-gray-600 text-sm">
                Hire top-tier developers and tech talent to scale your team
                quickly and flexibly – as per your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#2f4963] py-16 px-4 md:px-8 lg:px-16 relative text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* 1. Schools */}
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="bg-white p-4 rounded shadow-md">
                <FaSchool className="text-3xl text-black" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold">300+</h3>
                <p className="text-sm">Schools</p>
              </div>
            </div>

            {/* 2. Modules */}
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="bg-white p-4 rounded shadow-md">
                <FaCubes className="text-3xl text-black" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold">40+</h3>
                <p className="text-sm">Modules</p>
              </div>
            </div>

            {/* 3. Reports */}
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="bg-white p-4 rounded shadow-md">
                <FaChartPie className="text-3xl text-black" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold">2K+</h3>
                <p className="text-sm">Reports</p>
              </div>
            </div>

            {/* 4. Experience */}
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="bg-white p-4 rounded shadow-md">
                <FaAward className="text-3xl text-black" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold">8+</h3>
                <p className="text-sm">Year Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Testimonial Sections */}
      <section className="bg-lime-500 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-lg mb-2">Our Client Says</p>
          <h2 className="text-3xl font-bold text-orange-600 mb-10">
            Why Institutes Love{" "}
            <span className="text-blue-900">Friensys Info Labs</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "MR. Mohammad Ujjainwala",
                role: "Principle - Lorem ipsum dolor sit amet",
                message:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minima sequi quas, suscipit voluptate accusamus, id ullam facere inventore vel quia repellendus, placeat sunt et totam? Ipsam nemo non placeat.",
                img: "https://via.placeholder.com/60", // Replace with real image
              },
              {
                name: "Mr. Dharmendra Savani",
                role: "Chairman - Lorem ipsum dolor sit amet",
                message:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi impedit repellendus animi architecto quam corporis laborum hic consectetur cupiditate. Id adipisci quis repellendus odio nisi distinctio nostrum in et optio?",
                img: "https://via.placeholder.com/60",
              },
              {
                name: "Mrs. D Aparna",
                role: "Principal, Lorem ipsum dolor sit amet",
                message:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem quidem harum quae provident corrupti dolore porro tenetur accusamus. Libero praesentium nobis nam minima quasi, in fuga natus nihil error.",
                img: "https://via.placeholder.com/60",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-xl shadow-md text-left transition hover:shadow-lg"
              >
                {/* Quotation mark */}
                <div className="absolute top-0 right-0 bg-orange-500 text-white p-2 rounded-bl-xl">
                  <span className="text-xl font-bold">”</span>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-full border-2 border-orange-500"
                  />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>

                {/* Message */}
                <p className="text-gray-700 text-sm mb-4">{item.message}</p>

                {/* Read More + Play icon */}
                <div className="flex items-center justify-between text-orange-600 font-semibold">
                  <span className="cursor-pointer hover:underline">
                    Read More
                  </span>
                  <span className="text-xl">&#9654;</span>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-10">
            <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow hover:opacity-90 transition">
              View All
            </button>
          </div>
        </div>
      </section>

      {/*Why Choose us */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Partnering with us means tapping into years of technical expertise,
            proven delivery, and a reliable talent network tailored to your
            goals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* USP 1 */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaUserTie className="text-purple-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-600 text-sm">
                Our team brings years of hands-on experience across various
                industries and technologies.
              </p>
            </div>

            {/* USP 2 */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaShieldAlt className="text-blue-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">
                Industry-Grade Solutions
              </h3>
              <p className="text-gray-600 text-sm">
                We follow best practices to deliver robust, scalable, and secure
                software solutions.
              </p>
            </div>

            {/* USP 3 */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaRocket className="text-green-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Agile development processes ensure your product launches on time
                — without compromising quality.
              </p>
            </div>

            {/* USP 4 */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaUsers className="text-red-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">
                Scalable Talent Pool
              </h3>
              <p className="text-gray-600 text-sm">
                Need to scale fast? We provide top-tier developers and IT staff
                based on your evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-sky-400 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Let's Read</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Why Should You{" "}
            <span className="text-orange-600">Choose Friensys</span> School ERP?
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-md md:text-lg">
            Friensys ERP is a centralized platform with all the necessary tools
            for measuring, accessing, connecting, and coordinating learning
            processes. It is capable of handling every aspect of operating a
            school or college, including managing daily operational duties and
            fostering communication.
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
                logo: "https://via.placeholder.com/80x40", // Replace with actual logo
                title: "L.P Savani Group Of Schools, Surat",
                desc: "L P Savani Group of School has a proud tradition of being a supportive and caring community that delivers outstanding educational...",
              },
              {
                logo: "https://via.placeholder.com/80x40",
                title: "Bright International School, Gandhinagar",
                desc: "Shri late D.D. Trivedi, a visionary, began the journey in 1971 with a desire to assist society by developing a futuristic and superior education...",
              },
              {
                logo: "https://via.placeholder.com/80x40",
                title: "KSVK Group Of Schools, Bengaluru",
                desc: "The KSVK group of academic institutes is one of the most well-known in and around Whitefield, Bangalore. It was founded in the year 2000 and has...",
              },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md p-6 relative h-full flex flex-col justify-between">
                  <div className="absolute top-0 right-0 bg-orange-500 text-white p-2 rounded-bl-xl">
                    <span className="text-xl font-bold">”</span>
                  </div>
                  <img
                    src={item.logo}
                    alt="School Logo"
                    className="h-10 mb-4"
                  />
                  <h4 className="text-md md:text-lg font-semibold mb-2 text-left text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 text-left mb-4">
                    {item.desc}
                  </p>
                  <span className="text-orange-600 font-semibold cursor-pointer text-left hover:underline">
                    Read Case Studies →
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/*Enquiry Section */}
      <section className="bg-green-300 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto bg-blue-100 rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-md">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Images.champaranInternational}
              alt="e-Brochure"
              className="w-full max-w-sm rounded-xl object-cover"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 space-y-6">
            <h4 className="text-sm text-gray-600 font-medium">e-Brochure</h4>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
              It's All That You Need For{" "}
              <span className="text-orange-500">Efficient</span> School
              Management
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Want to know more about our School Management Software? Our high
              quality, informative brochures are just a click away.
            </p>

            {/* Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name *"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="tel"
                placeholder="Phone No. *"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition w-full md:w-auto"
              >
                Download Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
