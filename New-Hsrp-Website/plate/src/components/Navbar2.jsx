import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img from "/images/final.jpg"


const navLinkClass = ({ isActive }) =>
  `block px-3 py-2.5 text-sm font-semibold rounded-md transition-colors
   ${
     isActive
       ? " text-black"
       : "text-black hover:text-[#324B96]"
   }`;

const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col py-2 space-y-2">

          {/* Title */}
          <div className="border-2 w-35 h-10  border-b-5 rounded-xl ml-3">
                 <h1
  className="
    text-[20px]
    font-semibold
    leading-normal
    tracking-tight
    text-black
    font-[system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif]
    pl-4
  "
>
  HSRP-PLATE
</h1>
          </div>
         



          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-full text-white bg-[#324B96] px-4 py-2 rounded-md "
          >
            ☰ Menu
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex  space-x-0.5 bg-white py-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            
            <NavLink to="/orders" className={navLinkClass}>Orders</NavLink>
            
            <NavLink to="/contactus" className={navLinkClass}>Contact</NavLink>
            
            <NavLink to="/installation" className={navLinkClass}>Installation</NavLink>
            
            <NavLink to="/support" className={navLinkClass}>Support</NavLink>
          </nav>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden w-full bg-[#324B96] rounded-xl p-4 space-y-2">
              <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>About</NavLink>
              <NavLink to="/orders" className={navLinkClass} onClick={() => setOpen(false)}>Orders</NavLink>
              <NavLink to="/contactus" className={navLinkClass} onClick={() => setOpen(false)}>Contact</NavLink>
              <NavLink to="/installation" className={navLinkClass} onClick={() => setOpen(false)}>Installation</NavLink>
              <NavLink to="/support" className={navLinkClass} onClick={() => setOpen(false)}>Support</NavLink>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

const Divider = () => (
  <div className="w-px h-5 bg-white/40" />
);

export default Navbar2;
