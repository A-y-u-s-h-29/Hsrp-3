import React, { useState } from "react";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add API call here
  };

  return (
    <section className="bg-[#F5F7FB] py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
          
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#3B2F8F] mb-8">
            Contact Us
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B2F8F]"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B2F8F]"
                />
              </div>
            </div>

            {/* Phone & Topic */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">
                  Phone<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B2F8F]"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Topic<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="topic"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B2F8F]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold mb-2">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="5"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B2F8F]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#3B2F8F] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#2f2473] transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
