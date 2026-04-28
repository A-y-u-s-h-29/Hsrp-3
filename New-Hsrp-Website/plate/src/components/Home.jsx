import React from "react";
import { Link } from "react-router-dom";


const cards = [
  {
    title: "Hsrp Number Plate With Colour Sticker",
    bg: "bg-[#FFE88A]",
    text: "text-black",
  },
  {
    title: "Two-wheel Plate",
    bg: "bg-[#2F4B9A]",
    text: "text-white",
  },
  {
    title: "Four-wheel Plate",
    bg: "bg-[#FFE88A]",
    text: "text-black",
  },
  {
    title: "Colour Stickers",
    bg: "bg-[#2F4B9A]",
    text: "text-white",
  },
  {
    title: "Heavy-duty Plate",
    bg: "bg-[#FFE88A]",
    text: "text-black",
  },
  {
    title: "Tractor & Trailer Plate",
    bg: "bg-[#2F4B9A]",
    text: "text-white",
  },
  {
    title: "Electric Vehical Plate",
    bg: "bg-[#FFE88A]",
    text: "text-black",
  },
  {
    title: "Replacement Plate",
    bg: "bg-[#2F4B9A]",
    text: "text-white",
  },
  {
    title: "Order Status & Support",
    bg: "bg-[#FFE88A]",
    text: "text-black",
  },
  
];

const Home = () => {
  return (
    <div className="bg-[#F5F7FB] min-h-screen p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} ${card.text} rounded-2xl p-6 shadow-md flex flex-col justify-between min-h-[180px]`}
          >
            <h2 className=" font-bold leading-snug">
              {card.title}
            </h2>

            <Link to="/booking">
  <button className="bg-white  text-black font-bold py-2 pr-30 rounded-xl w-full hover:bg-gray-100 transition">
    Proceed
  </button>
</Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
