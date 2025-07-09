import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import logo from "../..//assets/pic.jpg"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="text-sm text-gray-700 shadow-sm bg-orange-300">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-green-600" />
              <span>+91 8709188968</span>
            </div>
            <div className="flex items-center gap-1">
              <FaEnvelope className="text-green-600" />
              <span>friensys@demo.com</span>
            </div>
            <div className="flex items-center gap-1">
              <MdLocationOn className="text-green-600" />
              <span>Greater Noida Uttar Pradesh</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start gap-4 mt-2 sm:mt-0 text-lg text-gray-700">
            <a href="#" className="hover:text-blue-600"><FaYoutube /></a>
            <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-emerald-300 shadow-2xl">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold flex items-center">
            <img src={logo} alt="friensys logo" className="w-8 h-8 mr-2 bg-white rounded-full" />
            Friensys Info Labs
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-20 font-medium">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
            <li><Link to="/product" className="hover:text-yellow-300">Product</Link></li>
            <li><Link to="/services" className="hover:text-yellow-300">Services</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          </ul>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-md shadow flex items-center space-x-1"
            >
              <span>Contact Us</span>
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden text-white text-2xl">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 bg-purple-700 text-white space-y-3 text-sm font-semibold">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "School ERP", path: "/erp" },
              { label: "School Mobile App", path: "/mobile-app" },
              { label: "Our Strength", path: "/strength" },
              { label: "Blog", path: "/blog" },
              { label: "Contact Us →", path: "/contact", className: "mt-2 bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-md text-center" },
            ].map(({ label, path, className = "" }) => (
              <Link
                key={label}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`block hover:text-yellow-300 ${className}`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
