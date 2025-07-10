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
    <footer className="bg-[#1e1e26] text-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Brand Name */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold">Friensys Info Labs</h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-sm text-gray-300">
          {/* Product Section */}
          <div>
            <h2 className="text-white font-semibold mb-4">Product</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/product/schoolErp">School Management Software</Link>
              </li>
              <li>
                <Link to="/product/schoolApp">School Mobile App</Link>
              </li>
              <li>
                <Link to="/product/customerLoyalty">Customer Loyalty Program</Link>
              </li>
              <li>
                <Link to="/product/ODSAS">OD-SAS</Link>
              </li>
              <li>
                <Link to="/product/escalation">Escalation Management</Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="text-white font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h2 className="text-white font-semibold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li><Link to="#">Terms of Services</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Cookies</Link></li>
              <li><Link to="#">License</Link></li>
            </ul>
          </div>

          {/* Info & Social Section (Spanning 2 Columns on Desktop) */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <FaGlobe className="text-yellow-400" />
              <span className="text-sm">English</span>
            </div>

            <hr className="border-gray-700 mb-4" />

            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Friensys is a suite of ERP solutions designed for educational institutions. 
              We offer tools for attendance, academics, online classes, exams, and more — 
              all built to be easy-to-use and fully integrated.
            </p>

            <div className="flex gap-4 mt-4 text-lg text-gray-400">
              <a href="#" className="hover:text-white"><FaFacebookF /></a>
              <a href="#" className="hover:text-white"><FaTwitter /></a>
              <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-white"><FaInstagram /></a>
              <a href="#" className="hover:text-white"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Friensys Info Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
