import React from "react";

// Standard UI Asset Imports
import logo from "../assets/Example Logo.png";
import phoneIcon from "../assets/icons/phone.svg";
import checkIcon from "../assets/icons/check.svg"; 

// 1. IMPORT YOUR HERO IMAGES HERE SO THE BUNDLER SEES THEM
import leftWorkerImage from "../assets/Image 1.png";
import rightWorkerImage from "../assets/Image 2.png";

export default function Hero() {
  return (
    <section className="bg-[#142257] text-white min-h-screen relative overflow-hidden flex flex-col justify-between">
      

      {/* 2. BODY CONTENT LAYOUT */}
      <div className="w-full grow relative z-10 pt-28 pb-6 flex flex-col justify-between">
        
        {/* LEFT WORKER IMAGE - Rounded ONLY on the bottom-right side */}
        <div className="hidden lg:block absolute top-20 bottom-10 left-1 w-[22%] z-10">
          <img 
            src={leftWorkerImage} 
            alt="Home maintenance" 
            className="w-full h-full object-cover rounded-br-2xl object-center shadow-md"
          />
        </div>

        {/* CENTER HOVERING CONTENT CONTAINER */}
        <div className="w-full lg:w-[50%] mx-auto flex flex-col justify-between grow px-4 text-center z-10">
          
          {/* Main Hero Header and CTA Button Box */}
          <div className="my-auto flex flex-col items-center">
            <p className="text-slate-400 text-xs md:text-sm tracking-widest font-normal space-x-1 uppercase opacity-80">
              <span>Maintenances</span>
              <span className="text-slate-600 px-1">•</span>
              <span>Repairs</span>
              <span className="text-slate-600 px-1">•</span>
              <span>Improvements</span>
            </p>

            <h1 className="text-[34px] md:text-[46px] lg:text-[50px] font-bold leading-[42px] md:leading-[54px] lg:leading-[60px] tracking-tight mt-6 text-white max-w-xl">
              Need improvement <br />
              or repair your home? <br />
              we can help!
            </h1>

            {/* CHECKMARKS */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-[#15B2F5] text-sm">
              <div className="flex items-center gap-2">
                <img src={checkIcon} className="w-4 h-4 object-contain" onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2315B2F5'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E" }} alt="check" />
                <span className="text-slate-300 font-medium">Free Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={checkIcon} className="w-4 h-4 object-contain" onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2315B2F5'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E" }} alt="check" />
                <span className="text-slate-300 font-medium">100% Commitment-Free</span>
              </div>
            </div>

            {/* UPGRADED BUTTON SIZE WITH PRECISE LOOK */}
            <button className="group mt-8 bg-[#15B2F5] text-white font-bold text-[16px] px-3 py-2.5 rounded-full inline-flex items-center justify-center gap-2 w-auto hover:bg-[#139ed9] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer select-none">
              <span className="tracking-wide text-[20px]">Call Us Now</span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={phoneIcon} 
                  alt="phone" 
                  className="w-4 h-4 object-contain transition-transform duration-300 group-hover:rotate-12" 
                  onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23142257'%3E%3Cpath d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/%3E%3C/svg%3E" }} 
                />
              </div>
            </button>
          </div>

          {/* 4 BOTTOM VALUE PROPS FEATURES */}
          {/* FIXED: Scaled layout container to precisely fit the inside column alignment of images 1 & 2 */}
          <div className="w-full lg:max-w-[56%] mx-auto mt-auto pb-2">
            <div className="flex justify-center items-center text-[13px] font-semibold text-slate-300 flex-wrap lg:flex-nowrap gap-y-4">
              
              {/* Feature 1: Satisfaction Guarantee */}
              <div className="flex flex-row items-center gap-3 px-4 grow justify-center lg:justify-start text-left">
                <div className="w-8 h-8 rounded-full bg-[#1b2d6e] flex items-center justify-center shrink-0">
                  <img 
                    src={new URL("../assets/icons/Guarantee.png", import.meta.url).href} 
                    alt="Guarantee" 
                    className="w-4 h-4 object-contain" 
                  />
                </div>
                <span className="leading-tight text-white font-semibold text-[14px] md:text-[15px]">Satisfaction<br />Guarantee</span>
              </div>

              {/* Raised separating lines via -mt-2 */}
              <div className="hidden lg:block w-[1px] h-8 bg-white/10 shrink-0 -mt-2"></div>

              {/* Feature 2: 24H Availability */}
              <div className="flex flex-row items-center gap-3 px-4 grow justify-center lg:justify-start text-left">
                <div className="w-8 h-8 rounded-full bg-[#1b2d6e] flex items-center justify-center shrink-0">
                  <img 
                    src={new URL("../assets/icons/Clock.png", import.meta.url).href} 
                    alt="Availability" 
                    className="w-4 h-4 object-contain" 
                  />
                </div>
                <span className="leading-tight text-white font-semibold text-[14px] md:text-[15px]">24H<br />Availability</span>
              </div>

              <div className="hidden lg:block w-[1px] h-8 bg-white/10 shrink-0 -mt-2"></div>

              {/* Feature 3: Local US Professional */}
              <div className="flex flex-row items-center gap-3 px-4 grow justify-center lg:justify-start text-left">
                <div className="w-8 h-8 rounded-full bg-[#1b2d6e] flex items-center justify-center shrink-0">
                  <img 
                    src={new URL("../assets/icons/Map.png", import.meta.url).href} 
                    alt="Local" 
                    className="w-4 h-4 object-contain" 
                  />
                </div>
                <span className="leading-tight text-white font-semibold text-[14px] md:text-[15px]">Local US<br />Professional</span>
              </div>

              <div className="hidden lg:block w-[1px] h-8 bg-white/10 shrink-0 -mt-2"></div>

              {/* Feature 4: Flexible Appointments */}
              <div className="flex flex-row items-center gap-3 px-4 grow justify-center lg:justify-start text-left">
                <div className="w-8 h-8 rounded-full bg-[#1b2d6e] flex items-center justify-center shrink-0">
                  <img 
                    src={new URL("../assets/icons/Calendar.png", import.meta.url).href} 
                    alt="Appointments" 
                    className="w-4 h-4 object-contain" 
                  />
                </div>
                <span className="leading-tight text-white font-semibold text-[14px] md:text-[15px]">Flexible<br />Appointments</span>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT WORKER IMAGE - Rounded ONLY on the bottom-left side */}
        <div className="hidden lg:block absolute top-20 bottom-10 right-1 w-[22%] z-10">
          <img 
            src={rightWorkerImage} 
            alt="Home plumbing" 
            className="w-full h-full object-cover rounded-bl-2xl object-center shadow-md"
          />
        </div>

      </div>

      {/* 3. WHITE BASELINE MASK CUTOUT */}
      <div 
        className="w-full absolute bottom-0 inset-x-0 h-8 bg-white pointer-events-none z-20 hidden lg:block"
        style={{
          clipPath: "polygon(0% 0%, 22% 0%, 24% 100%, 76% 100%, 78% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }}
      ></div>

    </section>
  );
}