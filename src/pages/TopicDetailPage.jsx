

import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const services = {
  labourtype : [
    {
      id: 1,
      name: "John Doe",
      age: 35,
      experience: "10 years",
      rating: 4.5,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 29,
      experience: "5 years",
      rating: 4.0,
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Mike Johnson",
      age: 40,
      experience: "15 years",
      rating: 4.8,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 32,
      experience: "8 years",
      rating: 4.2,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Chris Wilson",
      age: 45,
      experience: "20 years",
      rating: 4.9,
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ],
  electricians: [
    {
      id: 1,
      name: "John Doe",
      age: 35,
      experience: "10 years",
      rating: 4.5,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 29,
      experience: "5 years",
      rating: 4.0,
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Mike Johnson",
      age: 40,
      experience: "15 years",
      rating: 4.8,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 32,
      experience: "8 years",
      rating: 4.2,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Chris Wilson",
      age: 45,
      experience: "20 years",
      rating: 4.9,
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ],
  carpenters: [
    {
      id: 1,
      name: "David Carpenter",
      age: 38,
      experience: "12 years",
      rating: 4.6,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      id: 2,
      name: "Linda Wood",
      age: 30,
      experience: "6 years",
      rating: 4.3,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      id: 3,
      name: "James Builder",
      age: 50,
      experience: "25 years",
      rating: 4.7,
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      id: 4,
      name: "Sarah Joiner",
      age: 28,
      experience: "4 years",
      rating: 4.1,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      id: 5,
      name: "Paul Maker",
      age: 42,
      experience: "18 years",
      rating: 4.5,
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  ],
  doorInstallation: [
    {
      id: 1,
      name: "Alice Door",
      age: 36,
      experience: "10 years",
      rating: 4.4,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      id: 2,
      name: "Robert Hinge",
      age: 45,
      experience: "20 years",
      rating: 4.8,
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 3,
      name: "Tom Frame",
      age: 39,
      experience: "12 years",
      rating: 4.3,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      id: 4,
      name: "Emma Lock",
      age: 33,
      experience: "7 years",
      rating: 4.2,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      id: 5,
      name: "Kevin Bolt",
      age: 48,
      experience: "22 years",
      rating: 4.9,
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
  ],
  painters: [
    {
      id: 1,
      name: "Peter Paint",
      age: 37,
      experience: "15 years",
      rating: 4.7,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/men/16.jpg",
    },
    {
      id: 2,
      name: "Susan Canvas",
      age: 29,
      experience: "5 years",
      rating: 4.4,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/17.jpg",
    },
    {
      id: 3,
      name: "Ryan Roller",
      age: 43,
      experience: "20 years",
      rating: 4.8,
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      id: 4,
      name: "Laura Brush",
      age: 31,
      experience: "8 years",
      rating: 4.3,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/19.jpg",
    },
    {
      id: 5,
      name: "Chris Hue",
      age: 50,
      experience: "25 years",
      rating: 4.9,
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/men/20.jpg",
    },
  ],
  locksmiths: [
    {
      id: 1,
      name: "Henry Key",
      age: 34,
      experience: "10 years",
      rating: 4.5,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      id: 2,
      name: "Olivia Lock",
      age: 28,
      experience: "6 years",
      rating: 4.3,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 3,
      name: "George Bolt",
      age: 41,
      experience: "15 years",
      rating: 4.6,
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      id: 4,
      name: "Sophia Hinge",
      age: 35,
      experience: "9 years",
      rating: 4.4,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/24.jpg",
    },
    {
      id: 5,
      name: "Jack Secure",
      age: 46,
      experience: "20 years",
      rating: 4.7,
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/men/25.jpg",
    },
  ],
  yogaTutors: [
    {
      id: 1,
      name: "Anna Peace",
      age: 30,
      experience: "8 years",
      rating: 4.8,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/26.jpg",
    },
    {
      id: 2,
      name: "David Calm",
      age: 40,
      experience: "15 years",
      rating: 4.9,
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/men/27.jpg",
    },
    {
      id: 3,
      name: "Linda Flow",
      age: 35,
      experience: "10 years",
      rating: 4.6,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
      id: 4,
      name: "Tom Balance",
      age: 29,
      experience: "6 years",
      rating: 4.4,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/men/29.jpg",
    },
    {
      id: 5,
      name: "Emma Stretch",
      age: 42,
      experience: "18 years",
      rating: 4.7,
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/women/30.jpg",
    },
  ],
  danceTutors: [
    {
      id: 1,
      name: "Sophie Grace",
      age: 27,
      experience: "5 years",
      rating: 4.5,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/31.jpg",
    },
    {
      id: 2,
      name: "Jake Rhythm",
      age: 33,
      experience: "10 years",
      rating: 4.7,
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Emily Spin",
      age: 30,
      experience: "7 years",
      rating: 4.6,
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
  ],
};

const TopicDetailPage = () => {
  const { serviceType } = useParams();
  const people = services[serviceType] || [];
  if (people.length === 0) {
    console.warn(`No data found for service type: ${serviceType}`);
  }

  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/login");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center capitalize">
        {serviceType} Directory
      </h1>
      {people.map((person) => (
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

export default TopicDetailPage;
