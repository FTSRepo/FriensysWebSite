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
  FaChevronRight,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { WebsiteImages } from "../../common/BindImages";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const productRef = useRef(null);
  const servicesRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (productRef.current && !productRef.current.contains(event.target)) {
        setProductOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll to shrink header
  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setMobileProductOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: 8,
      scale: 0.98,
      transition: { duration: 0.15 }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.25 }
    }
  };

  const productItems = [
    {
      to: "/product/schoolErp",
      label: "School ERP",
      desc: "All-in-one school management system for admin, teachers, and parents.",
      icon: "🎓"
    },
    {
      to: "/product/schoolApp",
      label: "School App",
      desc: "Mobile-first app for seamless student-parent-teacher communication.",
      icon: "📱"
    },
    {
      to: "/product/escalation",
      label: "Escalation System",
      desc: "Automate issue tracking and resolution workflows for institutions.",
      icon: "⚡"
    },
    {
      to: "/product/ODSAS",
      label: "OD-SAS",
      desc: "Smart attendance and scheduling system powered by IoT.",
      icon: "🔐"
    },
    {
      to: "/product/customerLoyalty",
      label: "Customer Loyalty",
      desc: "Boost retention with personalized reward programs and analytics.",
      icon: "🎁"
    },
    {
      to: "/product/marketplace",
      label: "Marketplace",
      desc: "A unified digital marketplace for educational tools and services.",
      icon: "🛒"
    },
    {
      to: "/product/collegeErp",
      label: "Education CRM",
      desc: "Advanced CRM tailored for college admissions and student lifecycle.",
      icon: "🎯"
    },
  ];

  const serviceItems = [
    {
      to: "/services/softwareDevelopment",
      label: "Software Development",
      desc: "Build scalable applications tailored to your business.",
      icon: "💻"
    },
    {
      to: "/services/cloudSolutions",
      label: "Cloud Solutions",
      desc: "Manage infrastructure with AWS, Azure, or GCP.",
      icon: "☁️"
    },
    {
      to: "/services/itConsulting",
      label: "IT Consulting",
      desc: "Optimize your IT strategy with expert guidance.",
      icon: "🧭"
    },
    {
      to: "/services/softwareProduct",
      label: "Software Products",
      desc: "Explore our ready-made enterprise-grade products.",
      icon: "📦"
    },
  ];

  return (
    <>
      {/*=================== Top Contact Bar =================*/}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-blue-600 via-blue-700 to-red-600 text-white text-sm shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <a href="tel:+919971673592" className="flex items-center gap-2 hover:text-yellow-300 transition-colors group">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                  <FaPhoneAlt className="text-xs" />
                </div>
                <span className="hidden sm:inline">+91-9971673592</span>
              </a>
              
              <a href="mailto:info@friensys.com" className="flex items-center gap-2 hover:text-yellow-300 transition-colors group">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                  <FaEnvelope className="text-xs" />
                </div>
                <span className="hidden sm:inline">info@friensys.com</span>
              </a>
              
              <div className="flex items-center gap-2 text-gray-200">
                <MdLocationOn className="text-yellow-300" />
                <span className="hidden lg:inline text-xs">Greater Noida West, UP</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-300 hidden sm:inline">Follow us:</span>
              <div className="flex gap-2">
                {[
                  { href: "https://www.youtube.com/@friensysil", icon: FaYoutube, color: "hover:text-red-400" },
                  { href: "https://www.facebook.com/friensysil", icon: FaFacebookF, color: "hover:text-blue-400" },
                  { href: "https://www.linkedin.com/company/friensysil", icon: FaLinkedinIn, color: "hover:text-blue-500" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-200 ${social.color} hover:bg-white/20 hover:scale-110`}
                  >
                    <social.icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/*=================== Main Navbar =================*/}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isShrunk 
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2" 
            : "bg-white shadow-md py-3"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`relative rounded-xl overflow-hidden border-2 border-blue-100 shadow-sm ${
                isShrunk ? "w-10 h-10" : "w-12 h-12 md:w-14 md:h-14"
              }`}
            >
              <img
                src={WebsiteImages.friensysImage}
                alt="Friensys Info Labs"
                className="w-full h-full object-contain bg-white p-1"
              />
              {/* Animated corner accent */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-red-500 to-yellow-400 rounded-full opacity-80" />
            </motion.div>
            
            <div className={`font-bold text-gray-900 leading-tight transition-all ${
              isShrunk ? "text-sm" : "text-lg md:text-xl"
            }`}>
              <span className="text-blue-700">Friensys</span>
              <span className="text-gray-500 font-normal hidden sm:inline"> Info Labs</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className={`hidden md:flex items-center space-x-1 lg:space-x-2 font-medium ${
            isShrunk ? "text-sm" : "text-base"
          }`}>
            
            {/* Home */}
            <li>
              <Link
                to="/"
                className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === "/" 
                    ? "text-blue-700 bg-blue-50 font-semibold" 
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                Home
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === "/about" 
                    ? "text-blue-700 bg-blue-50 font-semibold" 
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                About
              </Link>
            </li>

            {/* Products Dropdown */}
            <li className="relative" ref={productRef}>
              <button
                onClick={() => setProductOpen(!productOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname.includes("/product")
                    ? "text-blue-700 bg-blue-50 font-semibold"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                Products
                <FaChevronDown 
                  className={`text-xs transition-transform duration-200 ${
                    productOpen ? "rotate-180 text-blue-600" : ""
                  }`} 
                />
              </button>

              <AnimatePresence>
                {productOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                  >
                    {/* Dropdown Header */}
                    <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100/50 border-b border-blue-100">
                      <h4 className="font-bold text-gray-900">Our Products</h4>
                      <p className="text-xs text-gray-600 mt-1">Comprehensive solutions for education & business</p>
                    </div>
                    
                    {/* Dropdown Items Grid */}
                    <div className="grid grid-cols-2 divide-x divide-gray-100">
                      {productItems.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setProductOpen(false)}
                          className="flex items-start gap-3 px-5 py-4 hover:bg-blue-50/80 transition-colors group"
                        >
                          <span className="text-xl mt-0.5">{item.icon}</span>
                          <div>
                            <div className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                              {item.label}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5 leading-relaxed group-hover:text-gray-700">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Dropdown Footer */}
                    <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                      <Link 
                        to="/product" 
                        onClick={() => setProductOpen(false)}
                        className="text-sm font-medium text-blue-700 hover:text-blue-800 flex items-center gap-1"
                      >
                        View All Products <FaArrowRight className="text-xs" />
                      </Link>
                      <span className="text-xs text-gray-400">7 Solutions</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Services Dropdown */}
            <li className="relative" ref={servicesRef}>
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname.includes("/services")
                    ? "text-blue-700 bg-blue-50 font-semibold"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                Services
                <FaChevronDown 
                  className={`text-xs transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180 text-blue-600" : ""
                  }`} 
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                  >
                    {/* Dropdown Header */}
                    <div className="px-6 py-4 bg-gradient-to-r from-red-50 to-red-100/50 border-b border-red-100">
                      <h4 className="font-bold text-gray-900">Our Services</h4>
                      <p className="text-xs text-gray-600 mt-1">Expert solutions to accelerate your growth</p>
                    </div>
                    
                    {/* Dropdown Items */}
                    <div className="divide-y divide-gray-100">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-start gap-4 px-6 py-4 hover:bg-red-50/60 transition-colors group"
                        >
                          <span className="text-2xl mt-0.5">{item.icon}</span>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-800 group-hover:text-red-700 transition-colors flex items-center justify-between">
                              {item.label}
                              <FaChevronRight className="text-gray-300 group-hover:text-red-400 transition-colors" />
                            </div>
                            <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Dropdown Footer */}
                    <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                      <Link 
                        to="/services/services" 
                        onClick={() => setDropdownOpen(false)}
                        className="text-sm font-medium text-red-700 hover:text-red-800 flex items-center gap-1"
                      >
                        Explore All Services <FaArrowRight className="text-xs" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Careers */}
            <li>
              <Link
                to="/careers"
                className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === "/careers" 
                    ? "text-blue-700 bg-blue-50 font-semibold" 
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                Careers
              </Link>
            </li>
          </ul>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </nav>

        {/*=================== Mobile Menu =================*/}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {/* Home */}
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    location.pathname === "/" 
                      ? "bg-blue-100 text-blue-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-lg">🏠</span>
                  Home
                </Link>

                {/* About */}
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    location.pathname === "/about" 
                      ? "bg-blue-100 text-blue-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-lg">ℹ️</span>
                  About Us
                </Link>

                {/* Products Accordion */}
                <div className="rounded-xl overflow-hidden">
                  <button
                    onClick={() => setMobileProductOpen(!mobileProductOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                      location.pathname.includes("/product")
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-lg">📦</span>
                      Products
                    </span>
                    <FaChevronDown 
                      className={`text-sm transition-transform ${
                        mobileProductOpen ? "rotate-180 text-blue-600" : ""
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {mobileProductOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 pr-4 py-2 space-y-1 bg-gray-50">
                          {productItems.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={() => {
                                setMenuOpen(false);
                                setMobileProductOpen(false);
                              }}
                              className="block py-2 text-sm text-gray-600 hover:text-blue-700 transition-colors"
                            >
                              {item.icon} {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services Accordion */}
                <div className="rounded-xl overflow-hidden">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                      location.pathname.includes("/services")
                        ? "bg-red-100 text-red-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-lg">⚙️</span>
                      Services
                    </span>
                    <FaChevronDown 
                      className={`text-sm transition-transform ${
                        mobileServicesOpen ? "rotate-180 text-red-600" : ""
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 pr-4 py-2 space-y-1 bg-gray-50">
                          {serviceItems.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={() => {
                                setMenuOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="block py-2 text-sm text-gray-600 hover:text-red-700 transition-colors"
                            >
                              {item.icon} {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Careers */}
                <Link
                  to="/careers"
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    location.pathname === "/careers" 
                      ? "bg-blue-100 text-blue-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-lg">💼</span>
                  Careers
                </Link>

                {/* Contact CTA */}
                <div className="pt-3 px-2">
                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    📞 Contact Us
                  </Link>
                </div>

                {/* Mobile Social Links */}
                <div className="pt-4 pb-2 flex justify-center gap-4">
                  {[
                    { href: "https://www.youtube.com/@friensysil", icon: FaYoutube, color: "text-red-600 hover:text-red-700" },
                    { href: "https://www.facebook.com/friensysil", icon: FaFacebookF, color: "text-blue-600 hover:text-blue-700" },
                    { href: "https://www.linkedin.com/company/friensysil", icon: FaLinkedinIn, color: "text-blue-700 hover:text-blue-800" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-colors ${social.color} hover:bg-gray-200`}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;