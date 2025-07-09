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
import logo from "../../assets/pic.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e26] text-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Centered Name  */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold">Friensys Info Labs</h1>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-6 text-sm text-gray-300">
          {/* Left Column Sections */}
          <div>
            <h2 className="text-white font-semibold mb-4">Product</h2>
            <ul className="space-y-2">
              <li>
                <Link to="#">School Management Software </Link>
              </li>
              <li>
                <Link to="#">School Mobile App</Link>
              </li>
              <li>
                <Link to="#">Customer Loyalty Program</Link>
              </li>
              <li>
                <Link to="#">OD-SAS</Link>
              </li>
              <li>
                <Link to="#">Escalation Management</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li>
                <Link to="#">Terms of Services</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Cookies</Link>
              </li>
              <li>
                <Link to="#">License</Link>
              </li>
            </ul>
          </div>

          {/* Right Side Info Section - Spans 2 columns */}
          <div className="lg:col-span-2">
            {/* Language Selector */}
            <div className="flex items-center gap-2 mb-4">
              <FaGlobe className="text-yellow-400" />
              <span className="text-sm">English</span>
            </div>

            <hr className="border-gray-700 mb-4" />

            {/* Description */}
            <p className="text-gray-400 mb-4 leading-relaxed text-sm">
              Friensys is a suite of ERP solutions designed for educational
              institutions. We offer tools for attendance, academics, online
              classes, exams, and more. Built to be easy-to-use and fully
              integrated.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 text-lg text-gray-400 mt-4">
              <a href="#" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
         <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Friensys Info Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
