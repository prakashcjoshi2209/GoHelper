import React from "react";

const TimelineSection = () => {
  const steps = [
    {
      title: "Step-1: Set your location",
      description:
        "For best results, clients need to set their location according to their city.",
      icon: "search",
    },
    {
      title: "Step-2: Find a suitable helper for your choice.",
      description:
        "You can reach out to multiple services and helpers. Choose the best suitable and pocket-friendly helper at your doorstep.",
      icon: "bookmark",
    },
    {
      title: "Step-3: Read & Enjoy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vero quisquam, rem assumenda similique voluptas distinctio, iste est hic eveniet debitis ut ducimus beatae id? Quam culpa deleniti officiis autem?",
      icon: "book-open",
    },
  ];

  return (
    <section className="relative bg-gray-900 py-12" id="how-it-works">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">How does it work?</h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-teal-500">
            {steps.map((step, index) => (
              <div
                key={index}
                className="mb-10 ml-6 flex items-start space-x-6"
              >
                {/* Icon */}
                <div className="flex-shrink-0 bg-teal-500 text-white rounded-full p-4">
                  <i className={`fas fa-${step.icon} text-xl`}></i>
                </div>

                {/* Step Content */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600"
          >
            Check out YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
