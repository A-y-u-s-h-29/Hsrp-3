import React, { useState } from "react";

const Order = () => {
  const [orderId, setOrderId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderId.trim()) {
      alert("Please enter a valid Order ID");
      return;
    }
    // API call can be added here
    console.log("Tracking Order ID:", orderId);
  };

  return (
    <section className="bg-[#F5F7FB] py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
          
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#3B2F8F] mb-2">
            Track Your Order
          </h2>

          {/* Sub text */}
          <p className="text-gray-600 mb-6">
            Enter your Order ID (e.g., shown on your confirmation page).
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="text"
              placeholder="Enter Order ID (e.g., ORD12345678)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B2F8F]"
            />

            <button
              type="submit"
              className="px-8 py-3 bg-[#3B2F8F] text-white font-semibold rounded-xl hover:bg-[#2f2473] transition"
            >
              Check Status
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Order;
