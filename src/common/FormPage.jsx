import React from "react";
import emailjs from "emailjs-com";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import Swal from "sweetalert2";

const FormPage = () => {
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
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Unlock precision and reliability with <br />
            <span className="text-green-600">cutting-edge testing systems</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Experience advanced, reliable solutions to boost your quality
            assurance like never before.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Request a Quote
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Let’s talk about your testing requirements and how we can help.
          </p>

          <form className="space-y-5" onSubmit={handleSendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex items-center gap-3 border border-gray-300 rounded-md px-4 py-3">
                <FaUser className="text-green-500" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  required
                  className="w-full outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center gap-3 border border-gray-300 rounded-md px-4 py-3">
                <FaEnvelope className="text-green-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  className="w-full outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center gap-3 border border-gray-300 rounded-md px-4 py-3">
                <FaPhone className="text-green-500" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  required
                  className="w-full outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center gap-3 border border-gray-300 rounded-md px-4 py-3">
                <FaMapMarkerAlt className="text-green-500" />
                <input
                  type="text"
                  name="location"
                  placeholder="Location *"
                  required
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="border border-gray-300 rounded-md px-4 py-3">
              <textarea
                name="message"
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
    </section>
  );
};

export default FormPage;
