import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { WebsiteImages } from "../../common/BindImages";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="bg-white text-gray-800">
      {/* Banner Section */}
      <section className="relative w-full overflow-hidden h-[280px] md:h-[320px] lg:h-[380px] flex">
        {/* Text Side */}
        <div className="w-full md:w-[45%] flex flex-col justify-center px-6 md:px-16 z-10 bg-white">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Contact Us
          </h1>
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            &raquo; <span>Contact Us</span>
          </nav>
        </div>

        {/* Image Side with sharper diagonal cut */}
        <div
          className="hidden md:block w-[65%] h-full bg-cover bg-center relative"
          style={{
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
            backgroundImage: `url(${WebsiteImages.contactImage})`,
          }}
        ></div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Company Info */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-600">
            Unlock precision and{" "}
            <span className="text-black">reliability with</span>
          </h2>
          <p className="text-lg text-gray-700">
            Our cutting-edge testing systems are built for accuracy and
            performance.
          </p>
          <p className="text-sm text-gray-500">
            We usually respond within one working day.
          </p>

          <div className="mt-6 space-y-5 text-sm md:text-base">
            <h3 className="text-lg font-bold">Friensys Info Labs Pvt. Ltd</h3>

            <div className="flex items-start gap-3 text-gray-700">
              <FaMapMarkerAlt className="mt-1 text-green-600" />
              <span>
                Plot No. 128
                <br />
                Greater Noida, Phase 1<br />
                Samridhi Apartment, J-Block
                <br />
                Uttar Pradesh 121003
              </span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="text-green-600" />
              <span>+91 8709188968</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-green-600" />
              <span>friensys@demo.com</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-gray-200">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all"
            >
              Submit →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
