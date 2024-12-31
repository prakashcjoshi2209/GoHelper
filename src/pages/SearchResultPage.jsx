// // SearchResultPage.js
// import React from "react";
// import { useParams } from "react-router-dom";

// const SearchResultPage = () => {
//   const { searchQuery } = useParams(); // Get the search query from the URL

//   // Sample data (replace this with your dynamic data source)
//   const data = [
//     { category: "painter", name: "John", image: "/images/painter1.jpg" },
//     { category: "electrician", name: "Alice", image: "/images/electrician1.jpg" },
//     { category: "painter", name: "Bob", image: "/images/painter2.jpg" },
//     { category: "plumber", name: "Charlie", image: "/images/plumber1.jpg" },
//   ];

//   // Filter data based on the search query
//   const filteredData = data.filter((item) =>
//     item.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h2 className="text-center text-3xl font-bold mb-6">Search Results for: {searchQuery}</h2>

//       {filteredData.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredData.map((item, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h5 className="text-lg font-bold">{item.name}</h5>
//                 <p className="text-gray-600">{item.category}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No results found for "{searchQuery}".</p>
//       )}
//     </div>
//   );
// };

// export default SearchResultPage;

// import React from "react";
// import { useParams } from "react-router-dom";

// const SearchResultPage = () => {
//   const { searchQuery } = useParams(); // Get the search query from the URL

//   // Sample data (replace this with your dynamic data source)
//   const data = [
//     { category: "painter", name: "John", image: "/images/painter1.jpg" },
//     { category: "electrician", name: "Alice", image: "/images/electrician1.jpg" },
//     { category: "painter", name: "Bob", image: "/images/painter2.jpg" },
//     { category: "plumber", name: "Charlie", image: "/images/plumber1.jpg" },
//   ];

//   // Filter data based on the search query
//   const filteredData = data.filter((item) =>
//     item.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h2 className="text-center text-3xl font-bold mb-6">Search Results for: {searchQuery}</h2>

//       {filteredData.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredData.map((item, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h5 className="text-lg font-bold">{item.name}</h5>
//                 <p className="text-gray-600">{item.category}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No results found for "{searchQuery}".</p>
//       )}
//     </div>
//   );
// };

// export default SearchResultPage;


// import React from "react";
// import { useParams } from "react-router-dom";

// // Sample data
// const data = {
//   painter: [
//     { id: 1, name: "Peter Paint", age: 37, experience: "15 years", rating: 4.7, image: "https://randomuser.me/api/portraits/men/16.jpg" },
//     { id: 2, name: "Susan Canvas", age: 29, experience: "5 years", rating: 4.4, image: "https://randomuser.me/api/portraits/women/17.jpg" },
//     { id: 3, name: "Ryan Roller", age: 43, experience: "20 years", rating: 4.8, image: "https://randomuser.me/api/portraits/men/18.jpg" },
//     { id: 4, name: "Laura Brush", age: 31, experience: "8 years", rating: 4.3, image: "https://randomuser.me/api/portraits/women/19.jpg" },
//     { id: 5, name: "Chris Hue", age: 50, experience: "25 years", rating: 4.9, image: "https://randomuser.me/api/portraits/men/20.jpg" }
//   ],
//   locksmiths: [
//     { id: 1, name: "Henry Key", age: 34, experience: "10 years", rating: 4.5, image: "https://randomuser.me/api/portraits/men/21.jpg" },
//     { id: 2, name: "Olivia Lock", age: 28, experience: "6 years", rating: 4.3, image: "https://randomuser.me/api/portraits/women/22.jpg" },
//     { id: 3, name: "George Bolt", age: 41, experience: "15 years", rating: 4.6, image: "https://randomuser.me/api/portraits/men/23.jpg" },
//     { id: 4, name: "Sophia Hinge", age: 35, experience: "9 years", rating: 4.4, image: "https://randomuser.me/api/portraits/women/24.jpg" },
//     { id: 5, name: "Jack Secure", age: 46, experience: "20 years", rating: 4.7, image: "https://randomuser.me/api/portraits/men/25.jpg" }
//   ]
// };

// const SearchResultPage = () => {
//   const { searchQuery } = useParams(); // Get the search query from the URL
//   const category = searchQuery.toLowerCase(); // Normalize the category name (e.g., "painter" becomes "painter")

//   // Check if the search query matches a category in our data
//   const results = data[category] || [];

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h2 className="text-center text-3xl font-bold mb-6">Search Results for: {searchQuery}</h2>

//       {results.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {results.map((item) => (
//             <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h5 className="text-lg font-bold">{item.name}</h5>
//                 <p className="text-gray-600">Age: {item.age}</p>
//                 <p className="text-gray-600">Experience: {item.experience}</p>
//                 <p className="text-gray-600">Rating: {item.rating} ⭐</p>
//                 <p className="text-gray-600">{item.isAvailable ? "Available" : "Not Available"}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No results found for "{searchQuery}".</p>
//       )}
//     </div>
//   );
// };

// export default SearchResultPage;


import React from "react";
import { useParams } from "react-router-dom";

// Sample data for all categories
const data = {
  labour: [
    { id: 1, name: "John Labour", age: 35, experience: "10 years", rating: 4.5, isAvailable: true, image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Paul Hard", age: 29, experience: "5 years", rating: 4.3, isAvailable: false, image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 3, name: "Mike Worker", age: 41, experience: "15 years", rating: 4.7, isAvailable: true, image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 4, name: "Sam Steel", age: 37, experience: "12 years", rating: 4.6, isAvailable: false, image: "https://randomuser.me/api/portraits/men/4.jpg" },
    { id: 5, name: "Alex Force", age: 39, experience: "9 years", rating: 4.4, isAvailable: true, image: "https://randomuser.me/api/portraits/men/5.jpg" }
  ],
  electrician: [
    { id: 1, name: "James Spark", age: 40, experience: "15 years", rating: 4.8, isAvailable: true, image: "https://randomuser.me/api/portraits/men/6.jpg" },
    { id: 2, name: "Linda Fuse", age: 30, experience: "7 years", rating: 4.6, isAvailable: false, image: "https://randomuser.me/api/portraits/women/7.jpg" },
    { id: 3, name: "Tom Watts", age: 45, experience: "20 years", rating: 4.9, isAvailable: true, image: "https://randomuser.me/api/portraits/men/8.jpg" },
    { id: 4, name: "Mia Voltage", age: 34, experience: "10 years", rating: 4.5, isAvailable: true, image: "https://randomuser.me/api/portraits/women/9.jpg" },
    { id: 5, name: "Chris Current", age: 33, experience: "13 years", rating: 4.7, isAvailable: false, image: "https://randomuser.me/api/portraits/men/10.jpg" }
  ],
  carpenter: [
    { id: 1, name: "Tom Carpenter", age: 50, experience: "25 years", rating: 4.8, isAvailable: true, image: "https://randomuser.me/api/portraits/men/11.jpg" },
    { id: 2, name: "Sarah Wood", age: 28, experience: "6 years", rating: 4.4, isAvailable: true, image: "https://randomuser.me/api/portraits/women/12.jpg" },
    { id: 3, name: "Dan Timber", age: 38, experience: "15 years", rating: 4.6, isAvailable: false, image: "https://randomuser.me/api/portraits/men/13.jpg" },
    { id: 4, name: "Cathy Oak", age: 42, experience: "18 years", rating: 4.5, isAvailable: true, image: "https://randomuser.me/api/portraits/women/14.jpg" },
    { id: 5, name: "Peter Saw", age: 30, experience: "9 years", rating: 4.7, isAvailable: true, image: "https://randomuser.me/api/portraits/men/15.jpg" }
  ],
  painter: [
    { id: 1, name: "Peter Paint", age: 37, experience: "15 years", rating: 4.7, isAvailable: true, image: "https://randomuser.me/api/portraits/men/16.jpg" },
    { id: 2, name: "Susan Canvas", age: 29, experience: "5 years", rating: 4.4, isAvailable: true, image: "https://randomuser.me/api/portraits/women/17.jpg" },
    { id: 3, name: "Ryan Roller", age: 43, experience: "20 years", rating: 4.8, isAvailable: false, image: "https://randomuser.me/api/portraits/men/18.jpg" },
    { id: 4, name: "Laura Brush", age: 31, experience: "8 years", rating: 4.3, isAvailable: true, image: "https://randomuser.me/api/portraits/women/19.jpg" },
    { id: 5, name: "Chris Hue", age: 50, experience: "25 years", rating: 4.9, isAvailable: false, image: "https://randomuser.me/api/portraits/men/20.jpg" }
  ],
  locksmith: [
    { id: 1, name: "Henry Key", age: 34, experience: "10 years", rating: 4.5, isAvailable: true, image: "https://randomuser.me/api/portraits/men/21.jpg" },
    { id: 2, name: "Olivia Lock", age: 28, experience: "6 years", rating: 4.3, isAvailable: true, image: "https://randomuser.me/api/portraits/women/22.jpg" },
    { id: 3, name: "George Bolt", age: 41, experience: "15 years", rating: 4.6, isAvailable: false, image: "https://randomuser.me/api/portraits/men/23.jpg" },
    { id: 4, name: "Sophia Hinge", age: 35, experience: "9 years", rating: 4.4, isAvailable: true, image: "https://randomuser.me/api/portraits/women/24.jpg" },
    { id: 5, name: "Jack Secure", age: 46, experience: "20 years", rating: 4.7, isAvailable: false, image: "https://randomuser.me/api/portraits/men/25.jpg" }
  ],
  yoga: [
    { id: 1, name: "Henry Key", age: 34, experience: "10 years", rating: 4.5, isAvailable: true, image: "https://randomuser.me/api/portraits/men/21.jpg" },
    { id: 2, name: "Olivia Lock", age: 28, experience: "6 years", rating: 4.3, isAvailable: true, image: "https://randomuser.me/api/portraits/women/22.jpg" },
    { id: 3, name: "George Bolt", age: 41, experience: "15 years", rating: 4.6, isAvailable: false, image: "https://randomuser.me/api/portraits/men/23.jpg" },
    { id: 4, name: "Sophia Hinge", age: 35, experience: "9 years", rating: 4.4, isAvailable: true, image: "https://randomuser.me/api/portraits/women/24.jpg" },
    { id: 5, name: "Jack Secure", age: 46, experience: "20 years", rating: 4.7, isAvailable: false, image: "https://randomuser.me/api/portraits/men/25.jpg" }
  ],
  dance: [
    { id: 1, name: "Henry Key", age: 34, experience: "10 years", rating: 4.5, isAvailable: true, image: "https://randomuser.me/api/portraits/men/21.jpg" },
    { id: 2, name: "Olivia Lock", age: 28, experience: "6 years", rating: 4.3, isAvailable: true, image: "https://randomuser.me/api/portraits/women/22.jpg" },
    { id: 3, name: "George Bolt", age: 41, experience: "15 years", rating: 4.6, isAvailable: false, image: "https://randomuser.me/api/portraits/men/23.jpg" },
    { id: 4, name: "Sophia Hinge", age: 35, experience: "9 years", rating: 4.4, isAvailable: true, image: "https://randomuser.me/api/portraits/women/24.jpg" },
    { id: 5, name: "Jack Secure", age: 46, experience: "20 years", rating: 4.7, isAvailable: false, image: "https://randomuser.me/api/portraits/men/25.jpg" }
  ],
  plumber: [
    { id: 1, name: "Henry Key", age: 34, experience: "10 years", rating: 4.5, isAvailable: true, image: "https://randomuser.me/api/portraits/men/21.jpg" },
    { id: 2, name: "Olivia Lock", age: 28, experience: "6 years", rating: 4.3, isAvailable: true, image: "https://randomuser.me/api/portraits/women/22.jpg" },
    { id: 3, name: "George Bolt", age: 41, experience: "15 years", rating: 4.6, isAvailable: false, image: "https://randomuser.me/api/portraits/men/23.jpg" },
    { id: 4, name: "Sophia Hinge", age: 35, experience: "9 years", rating: 4.4, isAvailable: true, image: "https://randomuser.me/api/portraits/women/24.jpg" },
    { id: 5, name: "Jack Secure", age: 46, experience: "20 years", rating: 4.7, isAvailable: false, image: "https://randomuser.me/api/portraits/men/25.jpg" }
  ],
  // Add other categories (yoga, dance, plumber, etc.) with similar data structure
  // For brevity, I won't include them all, but they would follow the same format as above.
};

const SearchResultPage = () => {
  const { searchQuery } = useParams(); // Get the search query from the URL
  const category = searchQuery.toLowerCase(); // Normalize the category name

  // Check if the search query matches a category in our data
  const results = data[category] || [];

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-center text-3xl font-bold mb-6">Search Results for: {searchQuery}</h2>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h5 className="text-lg font-bold">{item.name}</h5>
                <p className="text-gray-600">Age: {item.age}</p>
                <p className="text-gray-600">Experience: {item.experience}</p>
                <p className="text-gray-600">Rating: {item.rating} ⭐</p>
                <p className={`text-sm ${item.isAvailable ? "text-green-500" : "text-red-500"}`}>
                  {item.isAvailable ? "Available" : "Busy"}
                </p>
                {item.isAvailable ? (
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600">Book Now</button>
                ) : (
                  <button className="bg-gray-400 text-white px-4 py-2 rounded-full mt-4">Busy</button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found for "{searchQuery}".</p>
      )}
    </div>
  );
};

export default SearchResultPage;


