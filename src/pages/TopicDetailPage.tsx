import React from "react";

const TopicDetailPage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <a href="/" className="text-xl font-bold text-gray-800 flex items-center">
            <i className="bi-back"></i>
            <span>helper.com</span>
          </a>
          <button
            className="lg:hidden text-gray-800 focus:outline-none"
            aria-label="Menu"
          >
            <i className="bi bi-list text-2xl"></i>
          </button>
          <div className="hidden lg:flex space-x-6">
            <a href="/#section_1" className="hover:text-teal-500">Home</a>
            <a href="/#section_2" className="hover:text-teal-500">Browse Topics</a>
            <a href="/#section_3" className="hover:text-teal-500">How it Works</a>
            <a href="/#section_4" className="hover:text-teal-500">FAQs</a>
            <a href="/#section_5" className="hover:text-teal-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-teal-600 py-16 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Introduction to GoHelper</h2>
          <p className="text-lg mb-8">
            Find skilled laborers for your projects with ease and efficiency.
          </p>
          <a
            href="#topics-detail"
            className="bg-white text-teal-600 px-6 py-2 rounded shadow hover:bg-gray-100"
          >
            Read More
          </a>
        </div>
      </header>

      {/* Content Section */}
      <section id="topics-detail" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Introduction to GoHelper</h3>
              <p className="text-gray-700 mb-4">
                Our platform connects you with skilled laborers across a variety
                of fields to help you accomplish your projects with ease and
                efficiency.
              </p>
              <blockquote className="italic bg-teal-100 p-4 border-l-4 border-teal-500">
                Our mission is simple: to streamline the process of hiring
                laborers by providing a user-friendly platform that connects
                clients with skilled laborers.
              </blockquote>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <img
                  src="images/businesswoman-using-tablet-analysis.jpg"
                  alt="Businesswoman Analysis"
                  className="w-full rounded shadow"
                />
                <img
                  src="images/colleagues-working-cozy-office-medium-shot.jpg"
                  alt="Colleagues Working"
                  className="w-full rounded shadow"
                />
              </div>
            </div>
            <div>
              <img
                src="images/topics/undraw_Remote_design_team_re_urdx.png"
                alt="Remote Design Team"
                className="w-full rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <img
            src="images/rear-view-young-college-student.jpg"
            alt="Newsletter"
            className="w-full rounded shadow"
          />
          <form className="bg-gray-100 p-8 rounded shadow">
            <h4 className="text-2xl font-bold mb-4">Get Newsletter</h4>
            <input
              type="email"
              name="email"
              className="w-full p-3 mb-4 border rounded"
              placeholder="Email Address"
              required
            />
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-2 rounded shadow hover:bg-teal-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h6 className="text-lg font-bold mb-4">Resources</h6>
            <ul>
              <li>
                <a href="#" className="hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">How it works</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">FAQs</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-bold mb-4">Contact</h6>
            <p>Phone: <a href="tel:305-240-9671" className="hover:text-white">305-240-9671</a></p>
            <p>Email: <a href="mailto:info@company.com" className="hover:text-white">info@company.com</a></p>
          </div>
          <div>
            <h6 className="text-lg font-bold mb-4">Language</h6>
            <select className="w-full p-3 border rounded bg-gray-700 text-gray-300">
              <option>English</option>
              <option>Thai</option>
              <option>Myanmar</option>
              <option>Arabic</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TopicDetailPage;
