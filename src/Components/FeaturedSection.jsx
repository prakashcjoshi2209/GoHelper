import React from "react";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {/* Labour Registration Card */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <Link
                to="/login"
                className="text-gray-800 hover:text-gray-900 block"
              >
                <div className="flex items-center">
                  <div>
                    <h5 className="text-lg font-semibold mb-2">
                      Labour Registration
                    </h5>
                    <p className="text-sm text-gray-600">
                      When you search for free CSS templates, you will notice
                      that TemplateMo is one of the best websites.
                    </p>
                  </div>
                  <span className="ml-auto bg-teal-500 text-white rounded-full px-3 py-1 text-sm font-medium">
                    14
                  </span>
                </div>
              </Link>
            </div>
          </div>




          

          {/* Finance Featured Card */}
          <div className="w-full lg:w-2/3 relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              {/* Image */}
              <img
                src="images/businesswoman-using-tablet-analysis.jpg"
                alt="Finance"
                className="w-full h-auto object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black bg-opacity-60 p-6 flex flex-col justify-between">
                <div>
                  <h5 className="text-white text-lg font-semibold mb-2">
                    Finance
                  </h5>
                  <p className="text-white text-sm">
                    Topic Listing Template includes homepage, listing page,
                    detail page, and contact page. You can feel free to edit and
                    adapt for your CMS requirements.
                  </p>
                  <a
                    href="topics-detail.html"
                    className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
                  >
                    Learn More
                  </a>
                </div>
                <span className="ml-auto bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-medium">
                  25
                </span>
              </div>

              {/* Social Share Section */}
              <div className="absolute bottom-0 left-0 p-6 flex items-center space-x-4">
                <p className="text-white text-sm">Share:</p>
                <ul className="flex space-x-3">
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-teal-400 text-lg"
                    >
                      <i className="bi-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-blue-500 text-lg"
                    >
                      <i className="bi-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Overlay Background */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
