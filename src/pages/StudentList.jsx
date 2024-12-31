import React from "react";
import { useNavigate } from "react-router-dom";

const students = [
    {
      id: 1,
      name: "Emma Watson",
      class: "10th Grade",
      subject: "Science",
      schoolName: "Green Valley High School",
      number: "123-456-7890",
      parentsNumber: "098-765-4321",
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/20.jpg",
    },
    {
      id: 2,
      name: "Liam Smith",
      class: "8th Grade",
      subject: "Mathematics",
      schoolName: "Blue Ridge Academy",
      number: "234-567-8901",
      parentsNumber: "876-543-2109",
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      id: 3,
      name: "Olivia Brown",
      class: "12th Grade",
      subject: "History",
      schoolName: "Sunshine International School",
      number: "345-678-9012",
      parentsNumber: "765-432-1098",
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 4,
      name: "Noah Davis",
      class: "9th Grade",
      subject: "Geography",
      schoolName: "Pine Crest Academy",
      number: "456-789-0123",
      parentsNumber: "654-321-0987",
      isAvailable: false,
      image: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      id: 5,
      name: "Sophia Johnson",
      class: "11th Grade",
      subject: "English",
      schoolName: "Hilltop High School",
      number: "567-890-1234",
      parentsNumber: "543-210-9876",
      isAvailable: true,
      image: "https://randomuser.me/api/portraits/women/24.jpg",
    },
  ];
  



const StudentList = () => {
    const navigate = useNavigate();

    const handleBookNow = () => {
      navigate("/login");
    };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center capitalize">
        Student Directory
      </h1>
      {students.map((student) => (
        <div
          key={student.id}
          className="border rounded-lg p-4 shadow-lg flex gap-4 items-center"
        >
          <img
            src={student.image}
            alt={student.name}
            className="w-24 h-24 rounded-full"
          />
          <div className="flex-grow">
            <h2 className="text-xl font-bold">{student.name}</h2>
            <p>Class: {student.class}</p>
            <p>Subject: {student.subject}</p>
            <p>School: {student.schoolName}</p>
            <p>Contact Number: {student.number}</p>
            <p>Parents' Contact: {student.parentsNumber}</p>
          </div>
          <div>
            {student.isAvailable ? (
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
              <span className="text-red-500 font-bold">✘ Not Available</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
