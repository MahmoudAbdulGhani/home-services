import React from "react";

// Asset mapping matching your exact file names verbatim
import personImg from "../assets/person.png";
import homeImg from "../assets/Home.png";
import logoHouseIcon from "../assets/LogoHouse.png";
import homeMobileImg from "../assets/HomeMobile.png"; // Rendered on mobile via CSS swap below

export default function HeroBanner() {
  return (
    <section className="bg-[#0A194E] min-h-[480px] w-full relative overflow-hidden flex items-center select-none py-12 md:py-0 hero-banner-section">
      
      {/* 100% Accurate Visual Component Overlap Styling Engine */}
      <style>{`
        /* Top white geometric decorative bar */
        .hero-banner-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 54px;
          background-color: #FFFFFF;
          clip-path: polygon(0 0, 100% 0, 100% 16px, 42% 16px, 39% 54px, 13% 54px, 10% 16px, 0 16px);
          z-index: 40;
          pointer-events: none;
        }

        @media (min-width: 768px) {
          .hero-banner-section {
            padding-top: 64px !important;
          }
        }

        /* FIRST REQUIREMENT: FIXING THE 1024px TILL MOBILE VIEWPORT BRIDGE */
        @media (max-width: 1024px) and (min-width: 768px) {
          .hero-composite-wrapper {
            max-width: 400px !important;
            margin-right: -20px !important;
          }
          
          /* Accurate Phone Mockup Placement over hand */
          .hero-phone-screen-mockup {
            left: 34% !important;        /* Shifted right to compensate for lack of translateX(-50%) */
            top: 62% !important;
            width: 58px !important;
            height: 108px !important;
            transform: translateY(-50%) !important; /* Forces uniform vertical alignment override */
          }
          
          /* House icon badge centers exactly half over the white phone frame's left edge */
          .hero-app-brand-badge {
            left: 28% !important;        /* Lower value hooks the badge anchor slightly left */
            top: 62% !important;         /* Matches phone height perfectly */
            transform: translate(-50%, -50%) !important; /* Perfect center pin 50/50 split across edge */
            width: 68px !important;
            height: 68px !important;
            border-radius: 14px !important;
            padding: 8px !important;
          }
          
          .hero-double-exposure-layer {
            right: -100px !important;
            width: 115% !important;
          }
        }

        /* SECOND REQUIREMENT: MOBILE ENGINE RENDERING HOMEMOBILE.PNG SAFELY AS A BACKGROUND */
        @media (max-width: 767px) {
          .hero-banner-section {
            padding-top: 76px !important;
            padding-bottom: 0px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .hero-banner-section::before {
            height: 44px;
            clip-path: polygon(0 0, 100% 0, 100% 12px, 78% 12px, 73% 44px, 27% 44px, 22% 12px, 0 12px);
          }
          .hero-banner-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .hero-banner-text-block {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .hero-banner-text-block h1 {
            font-size: 32px !important;
            line-height: 40px !important;
            text-align: center !important;
            margin-bottom: 18px !important;
          }
          .hero-banner-checklist {
            justify-content: center !important;
            margin-bottom: 28px !important;
            gap-x: 5px !important;
          }
          
          /* Canvas viewport setup for mobile layout background */
          .hero-image-frame-container {
            height: 440px !important;
            margin-top: 8px !important;
            width: 100% !important;
          }
          .hero-composite-wrapper {
            max-width: 340px !important;
            width: 100% !important;
            margin: 0 auto !important;
          }

          /* --- TARGETED RESPONSIVE EDITS FOR MOBILE --- */
          
          /* 1. Swap image source only, maintaining HTML node hierarchies */
          .hero-double-exposure-layer img {
            content: url(${homeMobileImg}) !important;
            object-fit: contain !important;
            object-position: bottom right !important;
          }

          .hero-double-exposure-layer {
            right: -20px !important;
            width: 110% !important;
            z-index: 5 !important;
            mix-blend-mode: normal !important;
          }

          /* 2. Worker portrait profile sizing */
          .hero-worker-portrait {
            display: block !important;
            height: 95% !important;
            z-index: 10 !important;
            top: 15% !important;
            left: 20% !important;
          }

          /* 3. Physical phone with visible white active screen viewport positioned over hand */
          .hero-phone-screen-mockup {
            display: flex !important;
            left: 28% !important; /* Position matching the worker's hand geometry */
            top: 89% !important;
            width: 43px !important;
            height: 106px !important;
            z-index: 20 !important;
            transform: translateY(-50%) !important;
          }

          /* 4. Brand icon house badge split exactly 50% / 50% over the left border edge */
          .hero-app-brand-badge {
            display: flex !important;
            left: 35% !important; /* Anchored to match the exact left coordinate of the phone mockup */
            top: 85% !important;
            /* translate(-50%, -50%) forces the center point of the badge onto the left border boundary line */
            transform: translate(-50%, -50%) !important; 
            width: 68px !important;
            height: 68px !important;
            border-radius: 14px !important;
            padding: 8px !important;
            z-index: 30 !important;
          }
          
        }
      `}</style>
      
      {/* MAIN LAYOUT WRAPPER CONTAINER */}
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10 hero-banner-grid">

        {/* LEFT SIDE: INLINE TYPOGRAPHY CONTENT */}
        <div className="md:col-span-6 text-white text-left z-10 hero-banner-text-block">
          <h1 className="text-[34px] sm:text-[40px] md:text-[44px] lg:text-[46px] font-bold leading-[42px] sm:leading-[48px] md:leading-[52px] tracking-tight mb-6 max-w-[540px]">
            Already to improve or repair your home? Let’s Talk!
          </h1>

          {/* CHECKLIST FLAGS AREA */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-[#38BDF8] text-[13.5px] sm:text-[14.5px] font-medium hero-banner-checklist">
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

        {/* RIGHT SIDE: EXPOSURE COMPOSITION GRAPHIC WRAPPER */}
        <div className="md:col-span-6 relative w-full h-[320px] sm:h-[380px] md:h-[440px] flex justify-center md:justify-end items-end mt-6 md:mt-0 overflow-visible hero-image-frame-container">
          
          {/* PARENT BOUNDS ANCHOR */}
          <div className="relative h-full w-full max-w-[460px] flex items-end justify-center md:justify-end hero-composite-wrapper">
            
            {/* 1. BASE LAYER: The Worker Graphic */}
            <img 
              src={personImg} 
              alt="Worker holding mobile display device" 
              className="h-[95%] w-auto object-contain relative z-10 select-none pointer-events-none hero-worker-portrait"
            />

            {/* 2. DOUBLE-EXPOSURE MASK LAYER */}
            <div className="absolute right-[-140px] bottom-0 top-[-2px] pt-10 w-[119%] z-20 mix-blend-screen pointer-events-none overflow-hidden hero-double-exposure-layer">   
              <img 
                src={homeImg} 
                alt="Architecture Exposure Mask Layer" 
                className="w-full h-full object-contain object-right brightness-[0.85] contrast-[175%] saturate-[110%] scale-[1.05] origin-bottom-right" 
              />
            </div>

            {/* 3. PHONE MOCKUP WITH ACTIVE WHITE DISPLAY SCREEN */}
            <div className="absolute left-[41%] sm:left-[44%] md:left-[29%] lg:left-[8.8%] top-[61%] transform -translate-y-1/2 w-[52px] h-[94px] sm:w-[60px] sm:h-[120px] bg-black p-[2.5px] rounded-[13px] z-25 flex overflow-hidden shadow-2xl hero-phone-screen-mockup">
              <div className="w-full h-full bg-white rounded-[11px]" />
            </div>

            {/* 4. BLUE APP HOUSE BADGE OVERLAY */}
            <div className="absolute left-[41%] sm:left-[44%] md:left-[29%] lg:left-[8.8%] top-[61%] transform -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] z-30 bg-[#00A3E0] rounded-[18px] flex items-center justify-center shadow-xl shadow-[#00A3E0]/40 border border-white/20 hero-app-brand-badge p-[10px]">
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