import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      id: "faq1",
      heading: "What is Topic Listing?",
      body: (
        <>
          Topic Listing is a free template.{" "}
          <strong>You are not allowed to redistribute this template</strong> on
          any other template collection website without our permission. Please
          contact us for more details. Thank you.
        </>
      ),
    },
    {
      id: "faq2",
      heading: "How to find a topic?",
      body: (
        <>
          You can search on Google with <strong>keywords</strong> such as
          portfolio templates, one-page layouts, photography, digital
          marketing, etc.
        </>
      ),
    },
    {
      id: "faq3",
      heading: "Does it need to be paid?",
      body: (
        <>
          You can modify any of this with custom CSS or by overriding default
          variables. It's also worth noting that any HTML content can go within
          the FAQ, and you can extend it as needed.
        </>
      ),
    },
  ];

  return (
    <section className="py-12 bg-gray-100" id="faqs">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Section Title */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-700">
              Have a question? Find the answers to some common queries below.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="images/faq_graphic.jpg"
              alt="FAQs"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border border-gray-300 rounded-lg shadow-sm"
              >
                <button
                  className="w-full text-left px-6 py-4 bg-white text-gray-800 font-medium flex justify-between items-center"
                  onClick={() => {
                    const panel = document.getElementById(faq.id);
                    const isOpen = panel.classList.contains("hidden");
                    panel.classList.toggle("hidden", !isOpen);
                  }}
                >
                  {faq.heading}
                  <svg
                    className="w-5 h-5 transition-transform transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={faq.id}
                  className={`px-6 py-4 hidden bg-gray-50 text-gray-700`}
                >
                  {faq.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
