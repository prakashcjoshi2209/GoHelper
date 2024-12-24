import React from "react";

const Labourtype = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 h-32 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">Our Services</h1>
      </section>

      <hr className="my-8" />

      {/* Main Content */}
      <section className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Labors
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Choose Your Best Helper:
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
            <div className="text-center">
              <img
                src="images/Plumber2.jpg"
                alt="Plumber"
                className="h-40 w-40 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">PLUMBER</h3>
              <p className="text-gray-600 mt-3">
                We offer better plumbing solutions for your needs.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
            <div className="text-center">
              <img
                src="images/mistri.png"
                alt="Mistri"
                className="h-40 w-40 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">MISTRI</h3>
              <p className="text-gray-600 mt-3">
                Expert masonry services for your construction needs.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
            <div className="text-center">
              <img
                src="images/carpenter.jpg"
                alt="Carpenter"
                className="h-40 w-40 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">CARPENTER</h3>
              <p className="text-gray-600 mt-3">
                Skilled carpentry services to meet your requirements.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">MISTRI</h3>
              <p className="text-gray-600 mt-3">
                Expert masonry services for your construction needs.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">CHINAI</h3>
              <p className="text-gray-600 mt-3">
                Superior stonework for your decorative needs.
              </p>
            </div>
          </div>

           {/* Card 6 */}
           <div className="bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">MISTRI</h3>
              <p className="text-gray-600 mt-3">
                Expert masonry services for your construction needs.
              </p>
            </div>
          </div>

           {/* Card 7 */}
           <div className="bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">MISTRI</h3>
              <p className="text-gray-600 mt-3">
                Expert masonry services for your construction needs.
              </p>
            </div>
          </div>

           {/* Card 8 */}
           <div className="bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">MISTRI</h3>
              <p className="text-gray-600 mt-3">
                Expert masonry services for your construction needs.
              </p>
            </div>
          </div>

          {/* Card 9 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">CHEMISTRY</h3>
              <p className="text-gray-600 mt-3">
                Innovative solutions for your chemical requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Labourtype;
