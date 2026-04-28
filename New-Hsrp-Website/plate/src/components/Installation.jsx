import React from "react";

const Installation = () => {
  const tips = [
    {
      title: "Clean Surface",
      text: "Wipe the mounting area to remove dust, oil, or residue.",
    },
    {
      title: "Align Properly",
      text: "Use a level or the existing bracket holes for alignment.",
    },
    {
      title: "Secure Fit",
      text: "Tighten screws evenly; avoid over-tightening to prevent damage.",
    },
    {
      title: "Sticker Application",
      text: "Apply slowly from one edge, removing air bubbles with a soft card.",
    },
    {
      title: "Aftercare",
      text: "Avoid high-pressure washes on stickers for 48 hours after application.",
    },
  ];

  return (
    <section className="bg-[#F5F7FB] py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">

          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#3B2F8F] mb-8">
            Installation & Care
          </h2>

          {/* Tips */}
          <div className="space-y-4">
            {tips.map((item, index) => (
              <div
                key={index}
                className="border border-[#E3E7F4] rounded-xl p-4 md:p-5 bg-[#FBFCFF]"
              >
                <p className="text-gray-800">
                  <span className="font-semibold">{item.title}:</span>{" "}
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-gray-600 mt-6">
            These are general tips. For any specific instructions, check your
            product package.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Installation;
