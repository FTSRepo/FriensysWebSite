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
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Brand Name */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Friensys Info Labs
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:text-base text-gray-300">
          {/* Product Section */}
          <div>
            <h2 className="text-white font-semibold mb-4 text-2xl">Product</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/product/schoolErp"
                  className="hover:text-white transition"
                >
                  School Management Software
                </Link>
              </li>
              <li>
                <Link
                  to="/product/schoolApp"
                  className="hover:text-white transition"
                >
                  School Mobile App
                </Link>
              </li>
              <li>
                <Link
                  to="/product/customerLoyalty"
                  className="hover:text-white transition"
                >
                  Customer Loyalty Program
                </Link>
              </li>
              <li>
                <Link
                  to="/product/ODSAS"
                  className="hover:text-white transition"
                >
                  OD-SAS
                </Link>
              </li>
              <li>
                <Link
                  to="/product/escalation"
                  className="hover:text-white transition"
                >
                  Escalation Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="text-white font-semibold mb-4 text-2xl">Company</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h2 className="text-white font-semibold mb-4 text-2xl">Legal</h2>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-white transition">
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">
                  License
                </Link>
              </li>
            </ul>
          </div>

          {/* Info & Social Section */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <FaGlobe className="text-yellow-400 text-lg" />
              <span className="text-sm md:text-base">English</span>
            </div>

            <hr className="border-gray-700 mb-4" />

            <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
              Friensys is a suite of ERP solutions designed for educational
              institutions. We offer tools for attendance, academics, online
              classes, exams, and more — all built to be easy-to-use and fully
              integrated.
            </p>

            <div className="flex gap-4 mt-4 text-xl text-gray-400">
              <a href="#" className="hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Friensys Info Labs. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
