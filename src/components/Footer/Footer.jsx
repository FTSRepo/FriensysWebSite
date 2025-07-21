import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-rose-200 via-sky-100 to-indigo-200 text-gray-800 py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Brand Name */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Friensys Info Labs
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:text-base text-gray-700">
          {/* Product Section */}
          <div>
            <h2 className="text-gray-900 font-semibold mb-4 text-xl">
              Product
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/product/schoolErp"
                  className="hover:text-gray-900 transition"
                >
                  School ERP
                </Link>
              </li>
              <li>
                <Link
                  to="/product/schoolApp"
                  className="hover:text-gray-900 transition"
                >
                  School App
                </Link>
              </li>
              <li>
                <Link
                  to="/product/customerLoyalty"
                  className="hover:text-gray-900 transition"
                >
                  Customer Loyalty Program
                </Link>
              </li>
              <li>
                <Link
                  to="/product/ODSAS"
                  className="hover:text-gray-900 transition"
                >
                  OD-SAS
                </Link>
              </li>
              <li>
                <Link
                  to="/product/escalation"
                  className="hover:text-gray-900 transition"
                >
                  Escalation Management
                </Link>
              </li>
              <li>
                <Link
                  to="/product/collegeErp"
                  className="hover:text-gray-900 transition"
                >
                  Education CRM
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="text-gray-900 font-semibold mb-4 text-xl">
              Company
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-gray-900 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-gray-900 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-900 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/underDevelopment" className="hover:text-gray-900 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h2 className="text-gray-900 font-semibold mb-4 text-xl">Legal</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/underDevelopment" className="hover:text-gray-900 transition">
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link
                  to="/underDevelopment"
                  className="hover:text-gray-900 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cancellationPolicy"
                  className="hover:text-gray-900 transition"
                >
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to="/underDevelopment" className="hover:text-gray-900 transition">
                  License
                </Link>
              </li>
            </ul>
          </div>

          {/* Info & Social Section */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <FaGlobe className="text-blue-500 text-lg" />
              <span className="text-sm md:text-base text-gray-700">
                English
              </span>
            </div>

            <hr className="border-gray-300 mb-4" />

            <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
              Friensys offers next-gen software products, tailored IT
              development, tech consulting, and staffing solutions — empowering
              your business to grow, automate, and innovate.
            </p>

            <div className="flex gap-4 mt-4 text-xl text-gray-600">
              <a
                href="https://www.facebook.com/friensysil"
                target="_blank"
                className="hover:text-blue-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/friensysil"
                target="_blank"
                className="hover:text-sky-500 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/friensysil"
                target="_blank"
                className="hover:text-blue-700 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/friensysil/"
                target="_blank"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@friensysil"
                target="_blank"
                className="hover:text-red-500 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-600 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Friensys Info Labs. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
