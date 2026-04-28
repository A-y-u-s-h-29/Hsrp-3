import React, { useState } from "react";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Choose a product on the home page, click Proceed, fill your details on the form page, and follow the payment instructions.",
  },
  {
    question: "Where do I see my order confirmation?",
    answer:
      "After completing payment, your order confirmation will be shown on the confirmation page and sent to your registered email.",
  },
  {
    question: "How can I track my order?",
    answer:
      "You can track your order by visiting the Track Order page and entering your Order ID.",
  },
  {
    question: "Is this portal affiliated with any authority?",
    answer:
      "No. This is an independent portal and is not affiliated with or endorsed by any government or public authority.",
  },
];

const Support = () => {
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
            Support
          </h2>

          {/* FAQ List */}
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

export default Support;
