import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#324C93]">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-white font-semibold text-sm md:text-base">
          <li>
            <Link to="/faq" className="hover:underline">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/orders" className="hover:underline">
              Track Order
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms-conditions" className="hover:underline">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="/refund-cancellation" className="hover:underline">
              Refund & Cancellation Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
