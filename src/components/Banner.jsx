import React from "react";

// Asset mapping matching your exact file names verbatim
import personImg from "../assets/person.png";
import homeImg from "../assets/Home.png";
import logoHouseIcon from "../assets/LogoHouse.png";

export default function HeroBanner() {
  return (
    <section className="bg-[#0A194E] min-h-[480px] w-full relative overflow-hidden flex items-center select-none py-12 md:py-0">
      
      {/* MAIN LAYOUT WRAPPER CONTAINER */}
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">

        {/* LEFT SIDE: INLINE TYPOGRAPHY CONTENT */}
        <div className="md:col-span-6 text-white text-left z-10">
          <h1 className="text-[34px] sm:text-[40px] md:text-[44px] lg:text-[46px] font-bold leading-[42px] sm:leading-[48px] md:leading-[52px] tracking-tight mb-6 max-w-[540px]">
            Already to improve or repair your home? Let’s Talk!
          </h1>

          {/* CHECKLIST FLAGS AREA */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-[#38BDF8] text-[13.5px] sm:text-[14.5px] font-medium">
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-[14px] h-[14px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span>Free Quotes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-[14px] h-[14px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span>100% Commitment-Free</span>
            </div>
          </div>

          {/* ACTION SUBMIT BUTTON LINK */}
          <button className="bg-[#00A3E0] hover:bg-[#0089BE] transition-colors duration-200 px-6 py-3 rounded-full flex items-center gap-4 text-white font-bold text-[15px] tracking-tight shadow-md shadow-black/10 active:scale-[0.98]">
            <span>Call Us Now</span>
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#00A3E0] shadow-sm shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c1.353 2.8 3.51 4.957 6.3 6.3l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>

        {/* RIGHT SIDE: ADVANCED DOUBLE EXPOSURE IMAGE BLENDING MASK */}
        <div className="md:col-span-6 relative w-full h-[320px] sm:h-[380px] md:h-[440px] flex justify-center md:justify-end items-end mt-6 md:mt-0 overflow-visible">
          
          {/* ISOLATED COMPOSITION CONTEXT AREA */}
          <div className="relative h-full w-full max-w-[460px] flex items-end justify-center md:justify-end">
            
            {/* 1. BASE LAYER: The Worker Graphic */}
            <img 
              src={personImg} 
              alt="Worker holding mobile display device" 
              className="h-[95%] w-auto object-contain relative z-10 select-none pointer-events-none"
            />

            {/* 2. DOUBLE-EXPOSURE MASK LAYER */}
            {/* Shifted right from right-[-210px] to right-[-180px] to bring it a little bit more onto his shoulder */}
            <div className="absolute right-[-140px] bottom-0 top-[-2px] pt-10 w-[119%] z-20 mix-blend-screen pointer-events-none overflow-hidden">   
              <img 
                src={homeImg} 
                alt="Architecture Exposure Mask Layer" 
                className="w-full h-full object-contain object-right brightness-[0.85] contrast-[175%] saturate-[110%] scale-[1.05] origin-bottom-right" 
              />
            </div>

            {/* 3. OPTIMIZED PHONE SCREEN WRAPPER */}
            <div className="absolute left-[41%] sm:left-[44%] md:left-[29%] lg:left-[8.8%] top-[61%] transform -translate-y-1/2 w-[52px] h-[94px] sm:w-[60px] sm:h-[120px] bg-black p-[2.5px] rounded-[13px] z-25 flex overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-white rounded-[11px]" />
            </div>

            {/* 4. SHINY APP ICON OVERLAY */}
            <div className="absolute left-[22%] sm:left-[26%] md:left-[11%] lg:left-[-1%] top-[61%] transform -translate-y-1/2 w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] z-30 bg-[#00A3E0] rounded-[18px] flex items-center justify-center shadow-xl shadow-[#00A3E0]/40 border border-white/20">
              <img 
                src={logoHouseIcon} 
                alt="House Logo Icon" 
                className="w-full h-full object-contain" 
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}