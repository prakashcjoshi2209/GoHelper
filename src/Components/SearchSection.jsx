import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      // Navigate to search results page with search query
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <section className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-600 to-indigo-500">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
            Find. Hire. Thank.
          </h1>
          {/* Subheading */}
          <p className="text-white/80 mt-4 text-lg md:text-xl">
            A platform to connect you with skilled helpers around the world.
          </p>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <div className="relative w-full md:w-2/3 lg:w-1/2">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="search"
                id="keyword"
                className="w-full py-3 pl-12 pr-4 rounded-full shadow-md border-2 border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                placeholder="Enter profession like painter, locksmith..."
                aria-label="Search"
              />
            </div>
            <button type="submit" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-md hover:bg-yellow-500">
              Search
            </button>
          </form>
          
          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-white text-indigo-500 px-6 py-3 rounded-full shadow-md font-semibold hover:bg-gray-100 transition-all duration-300">
                <a href="https://gamma.app/docs/GoHelper-2he7grt10vv36vr?mode=doc" target="_blank" rel="noopener noreferrer">Learn More</a>
              
            </button>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;


