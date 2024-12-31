import React from "react";
import { useNavigate } from "react-router-dom";

const educators = [
  {
    id: 1,
    name: "Sophia Grace",
    age: 34,
    subject: "Mathematics",
    experience: "10 years",
    rating: 4.7,
    isAvailable: true,
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    id: 2,
    name: "David Miller",
    age: 40,
    subject: "Physics",
    experience: "15 years",
    rating: 4.8,
    isAvailable: false,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emily Johnson",
    age: 29,
    subject: "Chemistry",
    experience: "7 years",
    rating: 4.6,
    isAvailable: true,
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    age: 38,
    subject: "Biology",
    experience: "12 years",
    rating: 4.9,
    isAvailable: false,
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    id: 5,
    name: "Anna Williams",
    age: 31,
    subject: "English Literature",
    experience: "8 years",
    rating: 4.5,
    isAvailable: true,
    image: "https://randomuser.me/api/portraits/women/35.jpg",
  },
];

const EducatorList = () => {
 
    const navigate = useNavigate();

    const handleBookNow = () => {
      navigate("/login");
    };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center capitalize">
        Educator Directory
      </h1>
      {educators.map((person) => (
        <div
          key={person.id}
          className="border rounded-lg p-4 shadow-lg flex gap-4 items-center"
        >
          <img
            src={person.image}
            alt={person.name}
            className="w-24 h-24 rounded-full"
          />
          <div className="flex-grow">
            <h2 className="text-xl font-bold">{person.name}</h2>
            <p>Age: {person.age}</p>
            <p>Subject: {person.subject}</p>
            <p>Experience: {person.experience}</p>
            <p>Rating: {person.rating} / 5</p>
          </div>
          <div>
            {person.isAvailable ? (
              <div className="flex flex-col items-center">
                <span className="text-green-500 font-bold">✔ Available</span>
                <button
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={handleBookNow}
                >
                  Book Now
                </button>
              </div>
            ) : (
              <span className="text-red-500 font-bold">✘ Busy</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducatorList;

