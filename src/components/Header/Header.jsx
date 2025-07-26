import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaArrowRight,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { WebsiteImages } from "../../common/BindImages";

import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const productRef = useRef(null);
  const servicesRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      // Close Product Dropdown
      if (productRef.current && !productRef.current.contains(event.target)) {
        setProductOpen(false);
      }

      // Close Services Dropdown
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle scroll to shrink header
  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/*===================Top Contact Bar================= */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-sm text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+91-9971673592</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>info@friensys.com</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MdLocationOn />
              <span>
                J-804, Sector -1 Techzone-IV, Greater Noida West, UP-201305,
              </span>
            </div>
          </div>

          <div className="hidden md:flex gap-4 text-lg text-white">
            <a
              href="https://www.youtube.com/@friensysil"
              target="_blank"
              className="hover:text-yellow-400 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/friensysil"
              target="_blank"
              className="hover:text-yellow-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/friensysil"
              target="_blank"
              className="hover:text-yellow-400 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/*===========Main Navbar=========== */}
      <header
        className={`bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 sticky top-0 z-50 shadow-md transition-all duration-300 ${
          isShrunk ? "py-1" : "py-3"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div
            className={`flex items-center gap-4 text-xl font-bold text-[#003545] transition-all duration-300 ${
              isShrunk ? "text-sm" : "text-lg md:text-2xl"
            }`}
          >
            <Link to="/">
              <img
                src={WebsiteImages.friensysImage}
                alt="Friensys Info Labs Logo"
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full object-contain border-2 border-white shadow bg-white ${
                  isShrunk ? "w-10 h-10 md:w-12 md:h-12" : ""
                }`}
              />
            </Link>
            <span
              className={`leading-tight font-bold ${isShrunk ? "text-sm" : ""}`}
            >
              Friensys Info Labs
            </span>
          </div>

          {/*=============Desktop Nav=========== */}
          <ul
            className={`hidden md:flex space-x-12 font-medium text-[#003545] relative ${
              isShrunk ? "text-sm space-x-8" : "space-x-20"
            }`}
          >
            {/*===================Home Page===================== */}
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>

            {/*===================About Page===================== */}
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>

            {/*===================Product Dropdown===================== */}
            <li className="relative" ref={productRef}>
              <div className="flex items-center gap-2 select-none">
                {/* Clicking on "Product" navigates directly */}
                <span
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                  onClick={() => navigate("/product")}
                >
                  Product
                </span>

                {/* Clicking on arrow toggles dropdown */}
                <FaChevronDown
                  onClick={() => setProductOpen((prev) => !prev)}
                  className={`text-xs cursor-pointer transition-transform duration-300 ${
                    productOpen ? "rotate-180 text-green-600" : ""
                  }`}
                />
              </div>

              <AnimatePresence>
                {productOpen && (
                  <motion.div
                    key="product-clean-dropdown"
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[460px] bg-white text-gray-900 rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 divide-y divide-gray-100">
                      {[
                        {
                          to: "/product/schoolErp",
                          label: "School ERP",
                          desc: "All-in-one school management system for admin, teachers, and parents.",
                        },
                        {
                          to: "/product/schoolApp",
                          label: "School App",
                          desc: "Mobile-first app for seamless student-parent-teacher communication.",
                        },
                        {
                          to: "/product/escalation",
                          label: "Escalation System",
                          desc: "Automate issue tracking and resolution workflows for institutions.",
                        },
                        {
                          to: "/product/ODSAS",
                          label: "OD-SAS",
                          desc: "Smart attendance and scheduling system powered by IoT.",
                        },
                        {
                          to: "/product/customerLoyalty",
                          label: "Customer Loyalty",
                          desc: "Boost retention with personalized reward programs and analytics.",
                        },
                        {
                          to: "/product/marketplace",
                          label: "Marketplace",
                          desc: "A unified digital marketplace for educational tools and services.",
                        },
                        {
                          to: "/product/collegeErp",
                          label: "Education CRM",
                          desc: "Advanced CRM tailored for college admissions and student lifecycle.",
                        },
                      ].map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setProductOpen(false)}
                          className="block px-6 py-4 transition-colors duration-200 group"
                        >
                          <div className="text-sm font-semibold text-gray-800 group-hover:text-green-600">
                            {item.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-1 leading-snug group-hover:text-green-500">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/*====================Service Page========================== */}
            <li className="relative" ref={servicesRef}>
              <div className="flex items-center gap-2">
                {/* Main Link */}
                <Link
                  to="/services/services"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Services
                </Link>

                {/* Arrow Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDropdownOpen((prev) => !prev);
                  }}
                  className="text-gray-400 hover:text-blue-600 transition duration-200"
                >
                  <FaArrowRight className="text-xs" />
                </button>
              </div>

              {/* Enhanced Services Dropdown */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    key="services-clean-dropdown"
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[460px] bg-white text-gray-900 rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 divide-y divide-gray-100">
                      {[
                        {
                          to: "/services/softwareDevelopment",
                          label: "Software Development",
                          desc: "Build scalable applications tailored to your business.",
                        },
                        {
                          to: "/services/cloudSolutions",
                          label: "Cloud Solutions",
                          desc: "Manage infrastructure with AWS, Azure, or GCP.",
                        },
                        {
                          to: "/services/itConsulting",
                          label: "IT Consulting",
                          desc: "Optimize your IT strategy with expert guidance.",
                        },
                        {
                          to: "/services/softwareProduct",
                          label: "Software Products",
                          desc: "Explore our ready-made enterprise-grade products.",
                        },
                      ].map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block px-6 py-4 hover:bg-blue-50 transition-colors duration-200"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <div className="text-sm font-semibold text-gray-800 hover:text-blue-700">
                            {item.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-1 leading-snug">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/*===================Careers Page===================== */}
            <li>
              <Link to="/careers" className="hover:text-blue-600">
                Careers
              </Link>
            </li>
          </ul>

          {/*==============Contact Button=============== */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className={`bg-[#ED6363] hover:bg-[#3C6562] text-white font-semibold px-4 py-1 rounded-full shadow transition-all ${
                isShrunk ? "text-sm px-3 py-0.5" : "px-5 py-2"
              }`}
            >
              Contact Us →
            </Link>
          </div>

          {/*===============Mobile Hamburger==============*/}
          <div
            className={`md:hidden text-[#003545] text-2xl ${
              isShrunk ? "text-xl" : ""
            }`}
          >
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/*=============Mobile Menu=================*/}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 bg-[#B3C8CF] text-[#003545] text-base font-semibold space-y-3">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-[#ED6363] transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-[#ED6363] transition"
            >
              About Us
            </Link>

            {/* Product Dropdown in Mobile */}
            <div className="block">
              <button
                onClick={() => setMobileProductOpen(!mobileProductOpen)}
                className="w-full text-left hover:text-[#ED6363] transition flex items-center justify-between"
              >
                <span>Product</span>
                <FaChevronDown
                  className={`text-xs ml-2 transition-transform duration-200 ${
                    mobileProductOpen ? "rotate-180 text-yellow-400" : ""
                  }`}
                />
              </button>

              {/* Dropdown Items */}
              {mobileProductOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {[
                    { to: "/product/schoolErp", label: "School ERP" },
                    { to: "/product/schoolApp", label: "School App" },
                    { to: "/product/escalation", label: "Escalation System" },
                    { to: "/product/ODSAS", label: "OD-SAS" },
                    {
                      to: "/product/customerLoyalty",
                      label: "Customer Loyalty",
                    },
                    { to: "/product/marketplace", label: "Marketplace" },
                    {
                      to: "/product/collegeErp",
                      label: "Educational CRM ",
                    },
                  ].map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileProductOpen(false);
                      }}
                      className="block text-sm hover:text-green-700 transition"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown in Mobile */}
            <div className="block">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full text-left hover:text-[#ED6363] transition flex items-center justify-between"
              >
                <span>Services</span>
                <FaChevronDown
                  className={`text-xs ml-2 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-yellow-400" : ""
                  }`}
                />
              </button>

              {/* Dropdown Items */}
              {mobileServicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {[
                    {
                      to: "/services/softwareDevelopment",
                      label: "Software Development",
                    },
                    {
                      to: "/services/cloudSolutions",
                      label: "Cloud Solutions",
                    },
                    {
                      to: "/services/itConsulting",
                      label: "IT Consulting",
                    },
                    {
                      to: "/services/softwareProduct",
                      label: "Software Products",
                    },
                  ].map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="block text-sm hover:text-green-700 transition"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/careers"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-[#ED6363] transition"
            >
              Careers
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-3 bg-[#ED6363] hover:bg-[#3C6562] text-white px-4 py-2 rounded-full text-center font-bold transition"
            >
              Contact Us →
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
