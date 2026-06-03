import React from "react";
import logo from "../assets/Example Logo.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#142257] z-50 ml-1">
      
      <div className="flex items-center justify-between px-6 lg:px-24 py-4 ml-6 mr-6">
        
        {/* LOGO */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="HomePro"
            className="h-6 md:h-7 object-contain"
          />
        </div>

        {/* NAV LINKS (UPDATED) */}
        <nav className="hidden md:flex gap-10 text-[16px] font-bold text-white">
          <a href="#" className="hover:opacity-80 transition">About Us</a>
          <a href="#" className="hover:opacity-80 transition">Services</a>
          <a href="#" className="hover:opacity-80 transition">Our Blog</a>
          <a href="#" className="hover:opacity-80 transition">Contact</a>
        </nav>

        {/* RIGHT STATUS (UPDATED) */}
        <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-white">
          <span className="w-2.5 h-2.5 bg-rose-500 rounded-full"></span>
          <span>24 Hour Services</span>
        </div>

      </div>

    </header>
  );
}