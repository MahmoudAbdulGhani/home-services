import React from "react";

// Asset mapping based on your layout image names
import bgImage from "../assets/Bg@2x.png";
import workerImage from "../assets/Worker.png";
import blueCheckIcon from "../assets/icons/Icon@2x.png";

export default function HowItWorks() {
  const steps = [
    {
      number: "1.",
      title: <>Call us anytime 24/7</>,
      desc: "You can contact us directly, we will quickly put you in touch with our home care professionals who are ready anytime",
    },
    {
      number: "2.",
      title: <>Schedule Service</>,
      desc: "After connecting your call, our home care experts will answer your questions and provide flexible appointment times",
    },
    {
      number: "3.",
      title: <>Your request is completed</>,
      desc: "Once your technician arrives, he will diagnose the problem and provide an estimate. If you decide to continue, the technician will get to work",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 select-none flex items-center justify-center works-responsive-section">
      
      {/* 100% Isolated Fluid Responsive Overrides (Enhanced breakpoint window up to 1285px) */}
      <style>{`
        @media (max-width: 1285px) {
          .works-responsive-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .works-grid-container {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 40px !important;
          }
          
          /* Fluid artwork layout wrapper - prevents crushing and handles scaling seamlessly */
          .works-artwork-col {
            height: auto !important;
            width: 100% !important;
            max-width: 360px !important;
            aspect-ratio: 1 / 1.1 !important;
            display: flex !important;
            justify-content: center !important;
            align-items: flex-end !important;
            position: relative !important;
            margin: 0 auto !important;
            overflow: visible !important;
          }
          
          /* Background masked frame card scales perfectly down through intermediary resolutions */
          .works-mask-frame {
            width: 88% !important;
            height: 82% !important;
            border-radius: 24px !important;
            border-top-right-radius: 96px !important;
            position: absolute !important;
            bottom: 0 !important;
            right: 0 !important;
            z-index: 1 !important;
          }
          
          /* Verified check badge stays dynamically pinned to the worker's head layer */
          .works-mask-frame .absolute {
            width: 18% !important;
            height: auto !important;
            aspect-ratio: 1 / 1 !important;
            right: 10% !important;
            top: 25% !important;
            z-index: 30 !important;
          }
          
          /* Clean organic layout breakthrough forcing the left arm/elbow out of the background container */
          .works-worker-overlay {
            width: 100% !important;
            height: auto !important;
            position: absolute !important;
            bottom: 0 !important;
            left: -8% !important; 
            z-index: 10 !important;
            object-fit: contain !important;
          }

          .works-right-col {
            align-items: flex-start !important;
            text-align: left !important;
            max-w: 100% !important;
            max-width: 620px !important;
            padding-left: 0 !important;
            margin-top: 24px !important;
            width: 100% !important;
          }
          .works-right-col h2 {
            font-size: 32px !important;
            line-height: 40px !important;
            text-align: left !important;
            margin-bottom: 32px !important;
          }
          .works-right-col h2 br {
            display: none !important;
          }
          .works-steps-stack {
            align-items: flex-start !important;
            gap: 32px !important;
          }
          .works-step-row {
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .works-step-number-box {
            width: auto !important;
          }
          .works-step-number-box span {
            font-size: 36px !important;
            color: #94A3B8 !important;
          }
          .works-text-split-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 8px !important;
            padding-top: 4px !important;
          }
          .works-text-split-grid h3 {
            font-size: 20px !important;
            line-height: 26px !important;
            color: #1E293B !important;
          }
          .works-text-split-grid h3 br {
            display: none !important;
          }
          .works-text-split-grid p {
            font-size: 15px !important;
            line-height: 1.6 !important;
            color: #64748B !important;
          }
        }
      `}</style>

      <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center works-grid-container">
        
        {/* LEFT ARTWORK COLUMN */}
        <div className="lg:col-span-5 relative w-full flex flex-col justify-center lg:justify-start items-center overflow-visible h-[480px] works-artwork-col">
          
          {/* Asymmetric Cutout Mask Container Frame for the Interior Background */}
          <div className="relative w-[490px] h-[470px] rounded-[24px] rounded-tr-[140px] overflow-hidden shadow-sm bg-slate-50 z-0 my-auto works-mask-frame">
            {/* Layer 1: Blurred Interior Background */}
            <img 
              src={bgImage} 
              alt="Background interior" 
              className="w-full h-full object-cover"
            />

            {/* Layer 2: Floating Blue Badge */}
            <div className="absolute top-[30%] right-[70px] w-[90px] h-[90px] z-20 drop-shadow-md">
              <img 
                src={blueCheckIcon} 
                alt="Verified badge" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Layer 3: Independent Worker Overlay */}
          <img 
            src={workerImage} 
            alt="HomePro Professional Worker" 
            style={{ width: "515px", height: "423px" }}
            className="absolute bottom-[15px] -left-[55px] max-w-none object-contain z-10 pointer-events-none works-worker-overlay"
          />

        </div>

        {/* RIGHT CONTENT COLUMN */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center items-center max-w-[660px] mx-auto lg:mx-0 lg:text-left lg:items-start lg:pl-6 mt-10 lg:mt-0 works-right-col">
          
          {/* Core Feature Title */}
          <h2 className="text-[36px] md:text-[42px] font-bold text-[#0F172A] leading-[42px] md:leading-[48px] tracking-tight mb-12">
            How HomePro<br />works?
          </h2>

          {/* Steps Ordered List Stack */}
          <div className="flex flex-col gap-8 w-full max-w-[620px] items-center mx-auto works-steps-stack">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 md:gap-5 w-full works-step-row">
                
                {/* Structural Gray Step Number */}
                <div className="shrink-0 w-8 works-step-number-box">
                  <span className="text-[28px] md:text-[32px] font-bold text-[#94A3B8] leading-none block pt-0.5">
                    {step.number}
                  </span>
                </div>

                {/* Structured Text Split Grid Layout */}
                <div className="grid grid-cols-12 gap-3 w-full pt-1.5 works-text-split-grid">
                  
                  {/* Step Title Header Block */}
                  <div className="col-span-5 md:col-span-4">
                    <h3 className="text-[17px] md:text-[19px] font-bold text-[#1E293B] leading-[24px] tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  {/* Step Context Paragraph Block */}
                  <div className="col-span-7 md:col-span-8">
                    <p className="text-slate-500/90 text-[14px] md:text-[15px] leading-[23px] font-normal">
                      {step.desc}
                    </p>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}