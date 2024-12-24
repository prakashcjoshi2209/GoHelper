import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ExploreSection = () => {
  const [activeTab, setActiveTab] = useState("worker");

  const tabs = [
    { id: "worker", label: "Worker" },
    { id: "services", label: "Services" },
    { id: "tutor", label: "Tutor" },
    { id: "luthier", label: "Luthier" },
    { id: "education", label: "Education" },
  ];

  const content = {
    worker: [
      {
        title: "Labour",
        description: "Find manual labour near your location",
        image: "/images/topics/undraw_Remote_design_team_re_urdx.png",
        badge: "14",
        link: "/labourtype",  // Dynamic link based on item
      },
      {
        title: "Electrician",
        description: "Find trained electricians nearby",
        image: "/images/topics/undraw_Redesign_feedback_re_jvm0.png",
        badge: "75",
        link: "/electrician",  // Dynamic link
      },
      {
        title: "Carpenter",
        description: "Find skilled carpenters near your location",
        image: "/images/topics/colleagues-working-cozy-office-medium-shot.png",
        badge: "100",
        link: "/carpenter",  // Dynamic link
      },
    ],
    services: [
      {
        title: "Door Installation",
        description: "Lorem Ipsum dolor sit amet consectetur",
        image: "/images/door_install.png",
        badge: "30",
        link: "/door-installation",  // Dynamic link
      },
      {
        title: "Painter",
        description: "Lorem Ipsum dolor sit amet consectetur",
        image: "/images/painter.jpg",
        badge: "65",
        link: "/painter",  // Dynamic link
      },
      {
        title: "Locksmith",
        description: "Lorem Ipsum dolor sit amet consectetur",
        image: "/images/lock_smith.png",
        badge: "50",
        link: "/locksmith",  // Dynamic link
      },
    ],
    tutor: [
      {
        title: "Yoga Tutor",
        description: "Find experienced yoga teachers",
        image: "/images/yoga.jpg",
        badge: "30",
        link: "/yoga-tutor",  // Dynamic link
      },
      {
        title: "Dance Tutor",
        description: "Skilled Dance Tutors Near You",
        image: "/images/yoga.jpg",
        badge: "25",
        link: "/dance-tutor",  // Dynamic link
      },
    ],
    luthier: [
      {
        title: "Composing Song",
        description: "Lorem Ipsum dolor sit amet consectetur",
        image: "/images/topics/undraw_Compose_music_re_wpiw.png",
        badge: "45",
        link: "/compose-song",  // Dynamic link
      },
      {
        title: "Online Music",
        description: "Lorem Ipsum dolor sit amet consectetur",
        image: "/images/topics/undraw_happy_music_g6wc.png",
        badge: "45",
        link: "/online-music",  // Dynamic link
      },
      {
        title: "Podcast",
        description: "Lorem Ipsum dolor sit amet consectetur",
        image: "/images/topics/undraw_Podcast_audience_re_4i5q.png",
        badge: "20",
        link: "/podcast",  // Dynamic link
      },
    ],
    education: [
      {
        title: "Graduation",
        description: "Lorem Ipsum dolor sit amet consectetur",
        image: "/images/topics/undraw_Graduation_re_gthn.png",
        badge: "80",
        link: "/graduation",  // Dynamic link
      },
      {
        title: "Educator",
        description: "Lorem Ipsum dolor sit amet consectetur",
        image: "/images/topics/undraw_Educator_re_ju47.png",
        badge: "75",
        link: "/educator",  // Dynamic link
      },
    ],
  };

  // Load active tab from localStorage on component mount
  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(savedTab);  // Set the active tab from localStorage if it exists
    }
  }, []);

  // Save active tab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <section className="py-10 bg-gray-100" id="browse">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Find Your Helper</h2>
        </div>
        <div className="flex justify-center mb-8">
          <ul className="flex space-x-4 border-b">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={`px-4 py-2 ${
                    activeTab === tab.id
                      ? "border-b-2 border-teal-500 text-teal-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content[activeTab]?.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Link to={item.link}>
                <div className="p-4">
                  <h5 className="text-lg font-bold mb-2">{item.title}</h5>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.badge}
                  </span>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
