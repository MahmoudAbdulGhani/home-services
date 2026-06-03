import React from "react";

// LOGO
import logo from "../assets/Example Logo1.png";

export default function Footer() {
  return (
    <footer className="bg-[#15B2F5] text-white pt-16 pb-10 px-6 md:px-12 lg:px-20 w-full select-none font-sans">
      <div className="max-w-[1140px] w-full mx-auto flex flex-col">
        
        {/* ───── NEWSLETTER CARD ───── */}
        <div className="w-full bg-[#3CC3FF] rounded-[28px] p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 mb-16">
          <div className="text-left w-full lg:w-auto">
            <h3 className="text-[22px] md:text-[24px] font-bold tracking-tight text-white">
              Stay Connected with Our Newsletter
            </h3>
            <p className="text-white/90 text-[13.5px] md:text-[14px] font-normal mt-1.5 leading-relaxed">
              Subscribe to our newsletter to get more news, promo, or news services
            </p>
          </div>

          {/* INNER INPUT PILL FRAME CONTAINER */}
          <div className="flex bg-white rounded-full p-1.5 w-full lg:w-[460px] items-center shadow-inner shrink-0">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 bg-transparent pl-5 pr-4 py-2.5 text-slate-700 outline-none text-[14px] placeholder:text-slate-300 font-normal"
            />
            <button className="bg-[#15B2F5] hover:bg-[#119cd9] transition-colors duration-200 px-7 py-3 rounded-full text-white font-bold text-[14px] tracking-tight focus:outline-none shrink-0">
              Subscribe
            </button>
          </div>
        </div>

        {/* ───── MAIN FOOTER CONTENT ───── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-14 items-start text-left">
          
          {/* BRAND COLUMN */}
          <div className="col-span-1 md:col-span-6 flex flex-col items-start">
            <img
              src={logo}
              alt="HomePro Logo"
              className="h-9 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-white/90 text-[14px] md:text-[14.5px] leading-relaxed font-normal max-w-[340px] mb-6">
              Home Pro is your premier destination for top-notch smart home service and repair.
            </p>

            {/* SOCIAL INLINE ICON SVGS ARRAY */}
            <div className="flex items-center gap-5 text-white/90">
              <a href="#youtube" className="hover:text-sky-100 transition-colors" aria-label="Youtube Channel">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#instagram" className="hover:text-sky-100 transition-colors" aria-label="Instagram Profile">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.25" stroke="currentColor" className="w-[17px] h-[17px]">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#facebook" className="hover:text-sky-100 transition-colors" aria-label="Facebook Page">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-[17px] h-[17px]">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#twitter" className="hover:text-sky-100 transition-colors" aria-label="Twitter Feed">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-[17px] h-[17px]">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#mail" className="hover:text-sky-100 transition-colors" aria-label="Email Inbox">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.25" stroke="currentColor" className="w-[18px] h-[18px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* LINK GROUPS COLUMNS */}
          <div className="col-span-1 md:col-span-6 grid grid-cols-2 gap-4 md:justify-items-end w-full">
            
            {/* COMPANY SYSTEM LINKS */}
            <div className="flex flex-col items-start min-w-[120px]">
              <h4 className="font-bold text-[16px] md:text-[17px] mb-5 text-white tracking-tight">
                Company
              </h4>
              <ul className="flex flex-col gap-3.5 text-white/90 text-[14.5px] font-normal">
                <li><a href="#about" className="hover:underline underline-offset-4">About us</a></li>
                <li><a href="#services" className="hover:underline underline-offset-4">Services</a></li>
                <li><a href="#blog" className="hover:underline underline-offset-4">Our Blog</a></li>
                <li><a href="#contact" className="hover:underline underline-offset-4">Contact</a></li>
              </ul>
            </div>

            {/* LEGAL DATA LINKS */}
            <div className="flex flex-col items-start min-w-[120px]">
              <h4 className="font-bold text-[16px] md:text-[17px] mb-5 text-white tracking-tight">
                Legal
              </h4>
              <ul className="flex flex-col gap-3.5 text-white/90 text-[14.5px] font-normal">
                <li><a href="#terms" className="hover:underline underline-offset-4">Terms</a></li>
                <li><a href="#privacy" className="hover:underline underline-offset-4">Privacy</a></li>
                <li><a href="#cookies" className="hover:underline underline-offset-4">Cookies</a></li>
                <li><a href="#license" className="hover:underline underline-offset-4">License</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* ───── BOTTOM COPYRIGHT BAR ───── */}
        <div className="w-full h-[1px] bg-white/20 mt-4 mb-6" />
        
        <div className="text-center text-white/80 text-[13.5px] font-normal tracking-wide">
          ©2023 HomePro . All rights reserved
        </div>

      </div>
    </footer>
  );
}