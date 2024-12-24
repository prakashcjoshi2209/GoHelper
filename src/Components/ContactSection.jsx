import React from "react";

const ContactSection = () => {
  const offices = [
    {
      id: "head-office",
      title: "Head Office",
      address: "Bay St & Larkin St, San Francisco, CA 94109, United States",
      phone: "305-240-9671",
      email: "info@company.com",
    },
    {
      id: "dubai-office",
      title: "Dubai Office",
      address: "Burj Park, Downtown Dubai, United Arab Emirates",
      phone: "110-220-3400",
      email: "info@company.com",
    },
  ];

  return (
    <section className="py-12 bg-gray-100" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Google Map */}
          <div className="lg:col-span-1">
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

          {/* Office Details */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {offices.map((office) => (
              <div
                key={office.id}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
              >
                <h4 className="text-xl font-semibold mb-4">{office.title}</h4>
                <p className="text-gray-600">{office.address}</p>
                <hr className="my-4" />
                <p className="text-gray-700 mb-2">
                  <strong className="font-medium">Phone:</strong>{" "}
                  <a
                    href={`tel:${office.phone}`}
                    className="text-blue-500 hover:underline"
                  >
                    {office.phone}
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong className="font-medium">Email:</strong>{" "}
                  <a
                    href={`mailto:${office.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {office.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
