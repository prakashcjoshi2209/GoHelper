import React, { useState } from "react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState(""); 

 
  const handleSearch = (e) => {
    e.preventDefault(); 
   
  };

  return (
    <section
      id="home"
      className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-600 to-indigo-500"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
            Find. Hire. <span className="text-yellow-400">Thank.</span>
          </h1>

          {/* Subheading */}
          <p className="text-white/80 mt-4 text-lg md:text-xl">
            A platform to connect you with skilled helpers around the world.
          </p>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="mt-8 flex flex-wrap justify-center items-center gap-4"
          >
            {/* Search Input */}
            <div className="relative w-full md:w-2/3 lg:w-1/2">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16l-4-4m0 0l4-4m-4 4h16"
                  />
                </svg>
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                name="keyword"
                type="search"
                id="keyword"
                className="w-full py-3 pl-12 pr-4 rounded-full shadow-md border-2 border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all duration-300"
                placeholder="Helper, Maid, Chef, Labour ..."
                aria-label="Search"
              />
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-300 transition-all duration-300"
            >
              Search
            </button>
          </form>

          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-white text-indigo-500 px-6 py-3 rounded-full shadow-md font-semibold hover:bg-gray-100 transition-all duration-300">
              Learn More
            </button>
            <button className="bg-indigo-700 text-white px-6 py-3 rounded-full shadow-md font-semibold hover:bg-indigo-800 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

