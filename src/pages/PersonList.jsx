import React from "react";
import { useParams } from "react-router-dom";

const services = {
  "composite-songs": [
    {
      id: 1,
      name: "John Legend",
      song: "All of Me",
      songRating: 4.8,
      releaseYear: 2013,
      genre: "Pop",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
    },
    {
      id: 2,
      name: "Adele",
      song: "Hello",
      songRating: 4.9,
      releaseYear: 2015,
      genre: "Soul",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
  ],
  "online-songs": [
    {
      id: 1,
      name: "Ed Sheeran",
      song: "Shape of You",
      songRating: 4.7,
      releaseYear: 2017,
      genre: "Pop",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 2,
      name: "Taylor Swift",
      song: "Blank Space",
      songRating: 4.8,
      releaseYear: 2014,
      genre: "Pop",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
    },
  ],
  podcasts: [
    {
      id: 1,
      name: "Joe Rogan Experience",
      song: "Episode #1780",
      songRating: 4.5,
      releaseYear: 2021,
      genre: "Talk",
      image: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    {
      id: 2,
      name: "Serial",
      song: "The Alibi",
      songRating: 4.6,
      releaseYear: 2014,
      genre: "True Crime",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
    },
  ],
};

const PersonList = () => {
  const { serviceType , id } = useParams();

  console.log("Service Type:", serviceType);
  console.log("Available Services:", Object.keys(services));

  const people = services[serviceType] || [];

  if (!people.length) {
    return <p>No data available for the service type: {serviceType}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center capitalize">{serviceType} Directory</h1>
      {people.map((person) => (
        <div key={person.id} className="border rounded-lg p-4 shadow-lg flex gap-4 items-center">
          <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full" />
          <div className="flex-grow">
            <h2 className="text-xl font-bold">{person.name}</h2>
            <p>Song: {person.song}</p>
            <p>Rating: {person.songRating} / 5</p>
            <p>Genre: {person.genre}</p>
            <p>Release Year: {person.releaseYear}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonList;
