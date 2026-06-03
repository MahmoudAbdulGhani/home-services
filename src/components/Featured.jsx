import React from "react";

// Accurate asset mapping based on your custom file names list
import guaranteeIcon from "../assets/icons/Guarantee-Filled.png";
import quotesIcon from "../assets/icons/Quotes-Filled.png";
import localIcon from "../assets/icons/Local-Filled.png";
import fast24hIcon from "../assets/icons/24H-Filled.png";
import calendarIcon from "../assets/icons/Calendar-Filled.png";
import commitmentIcon from "../assets/icons/Commitment-Filled.png";

export default function FeaturedBenefits() {
  const features = [
    {
      icon: guaranteeIcon,
      title: "Satisfaction Guarantee",
      desc: "you don't need to worry about scams or our performance results. our company has been verified and strives for optimal results",
    },
    {
      icon: quotesIcon,
      title: "Free Quotes",
      desc: "Get personalized cost estimates without any obligation. Experience transparency and peace of mind as you explore our service.",
    },
    {
      icon: localIcon,
      title: "Local Professionals",
      desc: "Our services cover the Nationwide, US area, including urban, suburban, and rural locations for both long and short term maintenance",
    },
    {
      icon: fast24hIcon,
      title: "Fast 24-Hour Service",
      desc: "need fast handling for repairs to drains, leaks or something else? Our experts are available anytime to help you solve the problem",
    },
    {
      icon: calendarIcon,
      title: "Flexible Appointments",
      desc: "We offer convenient appointment times that can accommodate your busy schedule, day or night, 7 days a week.",
    },
    {
      icon: commitmentIcon,
      title: "Expertise and Experience",
      desc: "You are free to ask us about the problems you are facing. We offer a no-commitment approach to put your mind at ease",
    },
  ];

  return (
    <section className="bg-white py-20 px-10 md:px-12 lg:px-17 select-none benefits-responsive-section">
      
      {/* 100% Isolated Mobile-Only CSS Overrides */}
      <style>{`
        @media (max-width: 1023px) {
          .benefits-responsive-section {
            padding-top: 32px !important;
            padding-bottom: 32px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .benefits-core-wrapper {
            clip-path: none !important;
            border-radius: 24px !important;
            padding-top: 48px !important;
            padding-bottom: 48px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .benefits-header-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 16px !important;
            border-bottom: none !important;
            pb: 0 !important;
            margin-bottom: 48px !important;
          }
          .benefits-header-grid h2 {
            font-size: 26px !important;
            line-height: 34px !important;
          }
          .benefits-header-right-col {
            padding-top: 0 !important;
          }
          .benefits-header-right-col p {
            font-size: 14px !important;
            line-height: 1.6 !important;
            color: rgba(255, 255, 255, 0.7) !important;
          }
          .benefits-features-display-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 40px !important;
          }
          .benefits-feature-card {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 12px !important;
            max-w: 320px !important;
          }
          .benefits-feature-text-block {
            text-align: center !important;
            padding-top: 0 !important;
          }
          .benefits-feature-text-block h3 {
            font-size: 18px !important;
            margin-bottom: 10px !important;
          }
          .benefits-feature-text-block p {
            font-size: 14px !important;
            line-height: 1.6 !important;
            color: rgba(255, 255, 255, 0.65) !important;
          }
        }
      `}</style>

      {/* PERFECT PIXEL CLIPPATH DEF FOR SIDE ANGULAR CHAMFERS */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <clipPath id="accurateChamferMask" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 
                     L 1,0 
                     L 1,0.14 
                     L 0.982,0.18 
                     L 0.982,0.82 
                     L 1,0.86 
                     L 1,1 
                     L 0,1 
                     L 0,0.86 
                     L 0.018,0.82 
                     L 0.018,0.18 
                     L 0,0.14 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* CORE WRAPPER FRAME BOX */}
      <div 
        className="max-w-[1500px] w-full mx-auto bg-[#142257] text-white py-24 px-12 md:px-20 lg:px-28 benefits-core-wrapper"
        style={{ clipPath: "url(#accurateChamferMask)" }}
      >
        
        {/* TOP INTRO DUAL GRID HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start border-b border-white/10 pb-12 mb-12 benefits-header-grid">
          
          {/* Main Title Heading Layout */}
          <div className="lg:col-span-7">
            <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold leading-[38px] md:leading-[46px] lg:leading-[50px] tracking-tight text-white max-w-xl">
              Fast, Friendly, and<br />Satisfaction Guarantee
            </h2>
          </div>

          {/* Sub-paragraph info block side - shifted slightly down from the baseline */}
          <div className="lg:col-span-5 pt-10 lg:pt-10 benefits-header-right-col">
            <p className="text-slate-300/80 text-[14.5px] md:text-[15px] leading-relaxed font-normal max-w-xl">
              No matter how big or small your work is, whether it's for the interior or 
              exterior of your home, we are ready to serve and help you solve your 
              home problems.
            </p>
          </div>

        </div>

        {/* 2-COLUMN SYMMETRICAL FEATURES DISPLAY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-start benefits-features-display-grid">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-start gap-5 benefits-feature-card">
              
              {/* STATIONARY FLUSH IMAGE HOLDER BOX CONTAINER - Made bigger */}
              <div className="shrink-0 w-20 h-20 flex items-center justify-center">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="w-20 h-20 object-contain filter brightness-100"
                />
              </div>

              {/* RE-ALIGNED TEXT BLOCK ELEMENTS */}
              <div className="flex flex-col text-left pt-1.5 benefits-feature-text-block">
                <h3 className="text-[19px] md:text-[20px] font-bold text-white tracking-tight mb-2">
                  {item.title}
                </h3>
                {/* Clean, completely unweighted font-normal description context */}
                <p className="text-slate-300/70 text-[13.5px] md:text-[14px] leading-relaxed font-normal max-w-xl">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}