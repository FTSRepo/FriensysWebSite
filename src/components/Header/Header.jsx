import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { WebsiteImages } from "../../common/BindImages";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const productRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (productRef.current && !productRef.current.contains(event.target)) {
        setProductOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-sm text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+91-9971673592</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>info@friensys.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MdLocationOn />
              <span>J-804, Sector -1  Techzone-IV, Greater Noida West, UP-201305,</span>
            </div>
          </div>

          <div className="flex gap-4 text-lg text-white">
            <a href="#" className="hover:text-yellow-400 transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sticky top-0 z-50 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-4 text-xl font-bold text-[#003545]">
            <img
              src={WebsiteImages.friensysImage}
              alt="Friensys Info Labs Logo"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-contain border-2 border-white shadow bg-white"
            />
            <span className="text-lg md:text-2xl leading-tight font-bold">
              Friensys Info Labs
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-20 font-medium text-[#003545] relative">
            <li>
              <Link to="/" className="hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300">
                About
              </Link>
            </li>

            {/* Product Dropdown */}
            <li className="relative flex items-center gap-1" ref={productRef}>
              <span
                onClick={() => navigate("/product")}
                className="hover:text-yellow-400 cursor-pointer transition-colors duration-200 font-medium"
              >
                Product
              </span>
              <FaChevronDown
                onClick={(e) => {
                  e.stopPropagation();
                  setProductOpen((prev) => !prev);
                }}
                className={`text-xs cursor-pointer mt-1 hover:text-yellow-400 transition-transform duration-200 ${
                  productOpen ? "rotate-180" : ""
                }`}
              />

              {productOpen && (
                <ul className="absolute top-full left-0 mt-3 w-72 bg-white text-gray-900 rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden">
                  {[
                    { to: "/product/schoolErp", label: "School ERP" },
                    { to: "/product/schoolApp", label: "School Mobile App" },
                    { to: "/product/escalation", label: "Escalation System" },
                    { to: "/product/ODSAS", label: "OD-SAS" },
                    {
                      to: "/product/customerLoyalty",
                      label: "Customer Loyalty",
                    },
                    { to: "/product/marketplace", label: "Marketplace" },
                    {
                      to: "/product/collegeErp",
                      label: "College Management System",
                    },
                  ].map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="
              block px-5 py-2 
              hover:bg-gray-100 hover:text-green-600 
              transition-colors duration-200 ease-in-out
              text-sm
            "
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link to="/services" className="hover:text-yellow-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-yellow-300">
                Careers
              </Link>
            </li>
          </ul>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-[#ED6363] hover:bg-[#3C6562] text-white font-semibold px-5 py-2 rounded-full shadow transition-all"
            >
              Contact Us →
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden text-[#003545] text-2xl">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 bg-[#B3C8CF] text-[#003545] text-base font-semibold space-y-3">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "School ERP", path: "/erp" },
              { label: "School Mobile App", path: "/mobile-app" },
              { label: "Our Strength", path: "/strength" },
              { label: "Blog", path: "/blog" },
            ].map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-[#ED6363] transition"
              >
                {label}
              </Link>
            ))}

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
