import React from "react";

const ContactForm = () => {
  return (
    <section className="container mx-auto px-4 py-12 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6">We'd love to hear from you</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border rounded-lg"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border rounded-lg"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full p-3 border rounded-lg"
              placeholder="Subject"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              className="w-full p-3 border rounded-lg"
              placeholder="Your message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600"
          >
            Submit
          </button>
        </form>
        <div className="space-y-6">
          <iframe
            className="w-full rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?... (your map embed URL)"
            title="Map"
            height="250"
          ></iframe>
          <div>
            <h5 className="text-lg font-bold">Topic Listing Center</h5>
            <p>Bay St & Larkin St, San Francisco, CA 94109, United States</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
