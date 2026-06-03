import React, { useState } from "react";

// Asset mapping matching your exact file names verbatim
import trustpilotLogo from "../assets/Logo.png";
import profileImage from "../assets/imageProfile.png";

export default function TrustReviews() {
  const reviews = [
    {
      text: "Roof repairs can be a real headache, but HomePro makes it easy! Their roofing team turned my leaky roof into a stockade. With their craftsmanship and the best materials, my house is now ready to weather any storm.",
      author: "Kende Attila",
      rating: 4, // 4 out of 5 stars based on the image layout
    },
    {
      text: "Outstanding service from start to finish. The team arrived right on schedule, diagnosed our plumbing issues efficiently, and provided a transparent quote. Highly recommended for any home services!",
      author: "Alex Johnson",
      rating: 5,
    },
    {
      text: "Very professional and courteous technicians. They cleaned up perfectly after completing the electrical installation. Great communication throughout the process.",
      author: "Sarah Miller",
      rating: 4,
    },
    {
      text: "Excellent support and quick turnaround time. They handled our HVAC maintenance with complete expertise. Will definitely be utilizing their home services package again.",
      author: "Marcus Vance",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 select-none w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-[1050px] w-full mx-auto flex flex-col items-center text-center">
        
        {/* SECTION HEADER TITLE */}
        <h2 className="text-[36px] md:text-[42px] lg:text-[46px] font-bold text-[#1E293B] leading-[44px] md:leading-[52px] tracking-tight max-w-[700px] mb-8">
          Here our original reviews from trusted platform
        </h2>

        {/* TRUSTPILOT LOGO ATTACHMENT */}
        <div className="h-[38px] flex items-center justify-center mb-6">
          <img 
            src={trustpilotLogo} 
            alt="Trustpilot" 
            className="h-full object-contain"
          />
        </div>

        {/* FADING HORIZONTAL DIVIDER LINE */}
        {/* Appears solid in the center and smoothly disappears on the sides */}
        <div className="w-full max-w-[780px] h-[1px] bg-gradient-to-r from-transparent via-slate-200/80 to-transparent mb-8" />

        {/* CAROUSEL WRAPPER WITH NAVIGATION BUTTONS - Decreased margins */}
        <div className="relative w-full flex items-center justify-between gap-4 md:gap-8 min-h-[140px] mb-6">
          
          {/* Left Arrow Button */}
          <button 
            onClick={handlePrev}
            className="shrink-0 w-11 h-11 rounded-full bg-[#E2E8F0] hover:bg-[#CBD5E1] transition-colors flex items-center justify-center text-slate-500 group active:scale-95"
            aria-label="Previous review"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2.5" 
              stroke="currentColor" 
              className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>

          {/* Core Content Box Viewport */}
          <div className="max-w-[680px] mx-auto px-2 transition-all duration-300 ease-in-out">
            <p className="text-slate-500/90 text-[14.5px] md:text-[15.5px] leading-[24px] md:leading-[26px] font-normal tracking-normal text-center">
              {reviews[activeIndex].text}
            </p>
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={handleNext}
            className="shrink-0 w-11 h-11 rounded-full bg-[#00A3E0] hover:bg-[#0089BE] transition-colors flex items-center justify-center text-white group active:scale-95 shadow-sm"
            aria-label="Next review"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2.5" 
              stroke="currentColor" 
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>

        </div>

        {/* REVIEWER CREDENTIALS & STARS META - Tight margins */}
        <div className="flex items-center gap-3.5 text-left justify-center mb-10">
          {/* Profile Image Avatar */}
          <div className="w-14 h-14 rounded-full overflow-hidden border border-slate-100 shadow-sm shrink-0">
            <img 
              src={profileImage} 
              alt={reviews[activeIndex].author} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Author Name and Fixed Width Star Component */}
          <div className="flex flex-col gap-0.5">
            <h4 className="text-[16px] font-bold text-[#0F172A] leading-tight tracking-tight">
              {reviews[activeIndex].author}
            </h4>
            
            {/* Star Framework Matrix Generation */}
            <div className="flex items-center gap-0.5 mt-0.5">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-[19px] h-[19px] ${
                    index < reviews[activeIndex].rating 
                      ? "text-[#FFB500]" 
                      : "text-[#E2E8F0]"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* CAROUSEL SLIDER DOT TRACKER */}
        <div className="flex items-center gap-2 justify-center">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${
                idx === activeIndex 
                  ? "w-7 bg-[#00A3E0]" 
                  : "w-2 bg-[#E2E8F0] hover:bg-[#CBD5E1]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}