import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="mb-6 lg:mb-0">
            <a
              href="index.html"
              className="text-2xl font-bold text-white flex items-center mb-4"
            >
              <i className="bi-back mr-2"></i>
              <span>GoHelper</span>
            </a>
          </div>

          {/* Resources Links */}
          <div>
            <h6 className="text-lg font-semibold text-white mb-4">
              Resources
            </h6>
            <ul className="space-y-2">
              {["Home", "How it works", "FAQs", "Contact"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-100 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h6 className="text-lg font-semibold text-white mb-4">
              Information
            </h6>
            <p className="mb-2">
              <a
                href="tel:305-240-9671"
                className="text-gray-400 hover:text-gray-100 transition"
              >
                305-240-9671
              </a>
            </p>
            <p>
              <a
                href="mailto:info@company.com"
                className="text-gray-400 hover:text-gray-100 transition"
              >
                info@company.com
              </a>
            </p>
          </div>

          {/* Language Dropdown and Copyright */}
          <div>
            <div className="relative inline-block w-full lg:w-auto mb-6 lg:mb-0">
              <button
                className="bg-gray-800 text-white py-2 px-4 rounded-md w-full lg:w-auto flex justify-between items-center"
                type="button"
              >
                English
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul className="absolute hidden mt-2 bg-gray-800 rounded-md shadow-lg w-full">
                {["Thai", "Myanmar", "Arabic"].map((language, index) => (
                  <li key={index} className="py-2 px-4 hover:bg-gray-700">
                    <button className="text-gray-400 hover:text-white w-full text-left">
                      {language}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Copyright © 2048 Topic Listing Center. All rights reserved.
              <br />
              <span className="block mt-2">
                Design:{" "}
                <a
                  rel="nofollow"
                  href="https://templatemo.com"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-500"
                >
                  TemplateMo
                </a>{" "}
                Distribution{" "}
                <a
                  href="https://themewagon.com"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-500"
                >
                  ThemeWagon
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
