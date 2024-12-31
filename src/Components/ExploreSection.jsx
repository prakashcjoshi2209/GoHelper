


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ExploreSection = () => {
  const location = useLocation(); // To access current URL details
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
        link: "/electricians",  // Dynamic link
      },
      {
        title: "Carpenter",
        description: "Find skilled carpenters near your location",
        image: "/images/topics/colleagues-working-cozy-office-medium-shot.png",
        badge: "100",
        link: "/carpenters",  // Dynamic link
      },
    ],
    services: [
      {
        title: "Door Installation",
        description: "Lorem Ipsum dolor sit amet consectetur",
        image: "/images/door_install.png",
        badge: "30",
        link: "/doorInstallation",  // Dynamic link
      },
      {
        title: "Painter",
        description: "Lorem Ipsum dolor sit amet consectetur",
        image: "/images/painter.jpg",
        badge: "65",
        link: "/painters",  // Dynamic link
      },
      {
        title: "Locksmith",
        description: "Lorem Ipsum dolor sit amet consectetur",
        image: "/images/lock_smith.png",
        badge: "50",
        link: "/locksmiths",  // Dynamic link
      },
    ],
    tutor: [
      {
        title: "Yoga Tutor",
        description: "Find experienced yoga teachers",
        image: "/images/yoga.jpg",
        badge: "30",
        link: "/yogaTutors",  // Dynamic link
      },
      {
        title: "Dance Tutor",
        description: "Skilled Dance Tutors Near You",
        image: "/images/yoga.jpg",
        badge: "25",
        link: "/danceTutors",  // Dynamic link
      },
    ],
    luthier: [
      {
        title: "Luthier",
        description: "A person who repair the musical instrument.",
        image: "/images/topics/undraw_Compose_music_re_wpiw.png",
        badge: "45",
        link: "/composite-songs",  // Dynamic link
      },
    ],
    education: [
      {
        title: "Student",
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


  // Load active tab from localStorage or URL on component mount
  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    const queryTab = new URLSearchParams(location.search).get("tab");

    if (queryTab && tabs.some((tab) => tab.id === queryTab)) {
      setActiveTab(queryTab); // Set tab from URL if valid
    } else if (savedTab) {
      setActiveTab(savedTab); // Set tab from localStorage
    }
  }, [location.search]);

  // Save active tab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const url = new URL(window.location);
    url.searchParams.set("tab", tabId);
    window.history.replaceState(null, "", url); // Update URL without reloading
  };

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
                  onClick={() => handleTabChange(tab.id)}
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
              <Link to={`${item.link}?tab=${activeTab}`}>
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

