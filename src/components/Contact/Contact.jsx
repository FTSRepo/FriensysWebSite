import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-lg">
            Have a question or want to work with us? Fill out the form or reach out directly.
          </p>
        </div>

        {/* Form & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* Contact Form */}
          <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Service Interested In"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-6 text-gray-700">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl text-purple-600" />
              <span className="text-lg">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-purple-600" />
              <span className="text-lg">contact@yourcompany.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-purple-600" />
              <span className="text-lg">123, Tech Street, Bangalore, India</span>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-2xl text-purple-600" />
              <a
                href="https://linkedin.com/company/yourcompany"
                className="text-lg text-blue-700 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>

            {/* Embedded Map */}
            <div className="mt-8">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.287051153463!2d77.5946!3d12.9716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjYiTiA3N8KwMzUnNDQuNiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                className="w-full h-64 rounded-lg border shadow-md"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
