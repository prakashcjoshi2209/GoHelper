

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("HOME"); // Default active link is HOME

  const links = [
    { name: "HOME", href: "#home" },
    { name: "BROWSE TOPICS", href: "#browse" },
    { name: "HOW IT WORKS", href: "#how-it-works" },
    { name: "FAQs", href: "#faqs" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="bg-customBlue shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link
          className="flex items-center text-white font-bold text-2xl tracking-wide hover:scale-105 transform transition duration-300"
          to="/"
        >
          <div className="w-6 h-6 border-2 border-white rounded-sm mr-2 bg-gray-200"></div>
          <span className="hover:text-gray-200 transition-all duration-300">
            GoHelper
          </span>
        </Link>

        {/* Toggler Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          type="button"
          aria-label="Toggle navigation"
          onClick={() =>
            document
              .getElementById("navbarNav")
              .classList.toggle("hidden")
          }
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          id="navbarNav"
          className="hidden lg:flex lg:items-center lg:space-x-8"
        >
          <ul className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-2 lg:space-y-0 text-lg">
            {links.map((link, index) => (
              <li key={index} className="group relative">
                <a
                  href={link.href}
                  className={`${
                    activeLink === link.name
                      ? "text-gray-200 underline"
                      : "text-white"
                  } hover:text-gray-200 tracking-wide transition-all duration-300`}
                  onClick={() => setActiveLink(link.name)} // Update active link
                >
                  {link.name}
                </a>
                {/* Hover Effect */}
                <span
                  className={`${
                    activeLink === link.name ? "bg-white" : "bg-gray-400"
                  } block h-[2px] group-hover:w-full w-0 transition-all duration-300 mx-auto`}
                ></span>
              </li>
            ))}

            {/* Dropdown Menu */}
            <li className="relative group">
              <button
                className="text-white hover:text-gray-200 tracking-wide transition-all duration-300"
                id="dropdownMenuButton"
              >
                PAGES
              </button>
              <ul
                id="dropdownMenu"
                className="hidden group-hover:block absolute top-10 left-0 bg-white shadow-lg rounded-md py-2 w-48 z-10 transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <li>
                  <Link
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:pl-6 transition-all duration-300"
                    to="/topiclisting"
                    onClick={() => setActiveLink("TOPICS LISTING")}
                  >
                    Topics Listing
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:pl-6 transition-all duration-300"
                    to="/contactform"
                    onClick={() => setActiveLink("CONTACT FORM")}
                  >
                    Contact Form
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Login Link */}
        <Link
          to="/login"
          className="hidden lg:block bg-white text-indigo-500 font-bold px-5 py-2 rounded-full shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
