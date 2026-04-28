import React, { useState } from "react";

const faqs = [
  {
    question: "Do you claim any official status?",
    answer:
      "No. This is an independent portal. We do not claim affiliation or endorsement by any authority.",
  },
  {
    question: "What products are available?",
    answer:
      "Number plates, options for two-wheel and four-wheel plates, colour stickers, and related variants.",
  },
  {
    question: "How do I pay?",
    answer:
      "On the form page, a QR image is displayed for a simple scan-and-pay experience.",
  },
  {
    question: "Can I cancel or modify an order?",
    answer:
      "Use the Contact page with your Order ID. Our team will reach out with next steps.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F5F7FB] py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">

          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#3B2F8F] mb-8">
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#E3E7F4] rounded-xl bg-[#FBFCFF]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold"
                >
                  <span>{faq.question}</span>
                  <span className="text-lg">
                    {activeIndex === index ? "▼" : "▶"}
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="px-5 pb-5 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
