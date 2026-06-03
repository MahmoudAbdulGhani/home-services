import React, { useState } from "react";
import logo from "../assets/Example Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#142257] z-50">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-24 py-5">

          {/* LOGO */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="HomePro"
              className="h-8 md:h-9 object-contain"
            />
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex gap-10 text-[16px] font-bold text-white">
            <a href="#" className="hover:text-[#15B2F5] transition">
              About Us
            </a>

            <a href="#" className="hover:text-[#15B2F5] transition">
              Services
            </a>

            <a href="#" className="hover:text-[#15B2F5] transition">
              Our Blog
            </a>

            <a href="#" className="hover:text-[#15B2F5] transition">
              Contact
            </a>
          </nav>

          {/* DESKTOP RIGHT STATUS */}
          <div className="hidden lg:flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-white">
            <span className="w-2.5 h-2.5 bg-rose-500 rounded-full"></span>
            <span>24 Hour Services</span>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>
        </div>
      </header>

      {/* DARK OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* RIGHT SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#142257] z-[70] transition-transform duration-300 flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* TOP */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
          <img
            src={logo}
            alt="HomePro"
            className="h-8 object-contain"
          />

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-3xl leading-none"
          >
            ×
          </button>
        </div>

        {/* CENTER MENU */}
        <div className="flex-1 flex flex-col items-center justify-center gap-10 text-white font-semibold text-lg">
          <a href="#" onClick={() => setMenuOpen(false)}>
            About Us
          </a>

          <a href="#" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#" onClick={() => setMenuOpen(false)}>
            Our Blog
          </a>

          <a href="#" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 py-6">
          <div className="flex items-center justify-center gap-2 text-white font-bold uppercase tracking-wider text-sm">
            <span className="w-2.5 h-2.5 bg-rose-500 rounded-full"></span>
            <span>24 Hour Services</span>
          </div>
        </div>
      </aside>
    </>
  );
}