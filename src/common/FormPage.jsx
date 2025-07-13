import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const FormPage = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Text Section */}
        <div className="z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
            Unlock precision and reliability with
            <br />
            <span className="text-green-600">cutting-edge testing systems</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Experience advanced, reliable solutions to boost your quality assurance like never before.
          </p>
        </div>

        {/* Right Form Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 z-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Request a Quote</h3>
          <p className="text-gray-500 text-sm mb-6">
            Let’s talk about your testing requirements and how we can help.
          </p>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex items-center gap-3 border border-gray-300 rounded-md px-4 py-3 focus-within:ring-2 focus-within:ring-green-500">
                <FaUser className="text-green-500" />
                <input
                  type="text"
                  placeholder="Name *"
                  required
                  className="w-full outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center gap-3 border border-gray-300 rounded-md px-4 py-3 focus-within:ring-2 focus-within:ring-green-500">
                <FaEnvelope className="text-green-500" />
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  className="w-full outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center gap-3 border border-gray-300 rounded-md px-4 py-3 focus-within:ring-2 focus-within:ring-green-500">
                <FaPhone className="text-green-500" />
                <input
                  type="tel"
                  placeholder="Phone *"
                  required
                  className="w-full outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center gap-3 border border-gray-300 rounded-md px-4 py-3 focus-within:ring-2 focus-within:ring-green-500">
                <FaMapMarkerAlt className="text-green-500" />
                <input
                  type="text"
                  placeholder="Location *"
                  required
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="border border-gray-300 rounded-md px-4 py-3 focus-within:ring-2 focus-within:ring-green-500">
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full outline-none bg-transparent resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 w-full md:w-auto"
            >
              <FaPaperPlane />
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/your-background-pattern.svg')] bg-no-repeat bg-center opacity-5 z-0" />
    </section>
  );
};

export default FormPage;
