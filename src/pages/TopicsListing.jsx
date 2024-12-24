import React from "react";

const TopicsListing = () => {
  return (
    <div className="topics-listing-page">
      {/* Navbar */}
    

      {/* Header */}
      <header className="bg-blue-500 text-white py-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold">Topics Listing</h2>
          <p className="mt-2 text-lg">Explore our popular and trending topics</p>
        </div>
      </header>

      {/* Popular Topics Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h3 className="text-center text-2xl font-bold mb-8">Popular Topics</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Topic Card */}
            <div className="bg-white shadow-lg rounded-lg p-4 flex">
              <img
                src="images/topics/undraw_Remote_design_team_re_urdx.png"
                alt="Web Design"
                className="w-1/3 rounded"
              />
              <div className="flex-1 ml-4">
                <h5 className="text-lg font-bold">Web Design</h5>
                <p className="text-gray-600 mt-2">
                  Learn the basics of creating stunning web designs.
                </p>
                <a
                  href="/topics-detail"
                  className="text-blue-500 hover:underline mt-3 block"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4 flex">
              <img
                src="images/topics/undraw_online_ad_re_ol62.png"
                alt="Advertising"
                className="w-1/3 rounded"
              />
              <div className="flex-1 ml-4">
                <h5 className="text-lg font-bold">Advertising</h5>
                <p className="text-gray-600 mt-2">
                  Master the art of reaching your audience effectively.
                </p>
                <a
                  href="/topics-detail"
                  className="text-blue-500 hover:underline mt-3 block"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Topics Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h3 className="text-center text-2xl font-bold mb-8">Trending Topics</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="images/businesswoman-using-tablet-analysis.jpg"
                alt="Finance"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h5 className="text-lg font-bold">Finance</h5>
                <p className="text-gray-600 mt-2">
                  Understand the fundamentals of financial management.
                </p>
                <a
                  href="/topics-detail"
                  className="text-blue-500 hover:underline mt-3 block"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative bg-blue-600 text-white rounded-lg overflow-hidden">
              <img
                src="images/topics/undraw_Finance_re_gnv2.png"
                alt="Business"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative p-4">
                <h5 className="text-lg font-bold">Business</h5>
                <p className="mt-2">
                  Tips and tricks to excel in the corporate world.
                </p>
                <a
                  href="/topics-detail"
                  className="text-white hover:underline mt-3 block"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-6">
        <div className="container mx-auto text-center">
          <p>
            &copy; 2048 Topic Listing Center. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TopicsListing;
