import React from "react";

const About = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2F3A8F] mb-4">
          About This Portal
        </h2>

        {/* Intro Text */}
        <p className="text-gray-700 max-w-3xl mb-10 leading-relaxed">
          This independent portal provides a simple way to order plates and
          stickers, receive updates, and access general support. We focus on
          clarity, responsible wording, and user-friendly design.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="border border-[#E3E7F4] rounded-2xl p-6 bg-[#FBFCFF]">
            <h3 className="text-xl font-semibold mb-3">What We Do</h3>
            <p className="text-gray-700 leading-relaxed">
              Offer a streamlined ordering experience with transparent steps:
              choose a product, enter details, review payment, and receive a
              confirmation summary.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-[#E3E7F4] rounded-2xl p-6 bg-[#FBFCFF]">
            <h3 className="text-xl font-semibold mb-3">
              How We Communicate
            </h3>
            <p className="text-gray-700 leading-relaxed">
              All content is neutral and does not imply affiliation,
              endorsement, or approval by any public authority. We avoid
              official claims and keep descriptions generic.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-[#E3E7F4] rounded-2xl p-6 bg-[#FBFCFF]">
            <h3 className="text-xl font-semibold mb-3">Privacy</h3>
            <p className="text-gray-700 leading-relaxed">
              Your inputs are used only to generate your order summary in your
              browser for this demo. No files are uploaded server-side in this
              example.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border border-[#E3E7F4] rounded-2xl p-6 bg-[#FBFCFF]">
            <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
            <p className="text-gray-700 leading-relaxed">
              Pages are responsive, keyboard-friendly, and use clear contrast
              for comfortable reading on any device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
