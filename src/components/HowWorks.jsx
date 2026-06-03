import React from "react";

// Asset mapping based on your layout image names
import bgImage from "../assets/Bg@2x.png";
import workerImage from "../assets/Worker.png";
import blueCheckIcon from "../assets/icons/Icon@2x.png";

export default function HowItWorks() {
  const steps = [
    {
      number: "1.",
      title: <>Call us<br />anytime 24/7</>,
      desc: "You can contact us directly, we will quickly put you in touch with our home care professionals who are ready anytime",
    },
    {
      number: "2.",
      title: <>Schedule<br />Service</>,
      desc: "After connecting your call, our home care experts will answer your questions and provide flexible appointment times",
    },
    {
      number: "3.",
      title: <>Your request<br />is completed</>,
      desc: "Once your technician arrives, he will diagnose the problem and provide an estimate. If you decide to continue, the technician will get to work",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 select-none flex items-center justify-center">
      <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
        
        {/* LEFT ARTWORK COLUMN - Image increased slightly in size */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-start overflow-visible h-[480px]">
          
          {/* Asymmetric Cutout Mask Container Frame for the Interior Background */}
          <div className="relative w-[490px] h-[470px] rounded-[24px] rounded-tr-[140px] overflow-hidden shadow-sm bg-slate-50 z-0 my-auto">
            {/* Layer 1: Blurred Interior Background */}
            <img 
              src={bgImage} 
              alt="Background interior" 
              className="w-full h-full object-cover"
            />

            {/* Layer 2: Floating Blue Badge - Aligned inside over the side of the worker's head */}
            <div className="absolute top-[30%] right-[70px] w-[90px] h-[90px] z-20 drop-shadow-md">
              <img 
                src={blueCheckIcon} 
                alt="Verified badge" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Layer 3: Independent Worker Overlay */}
          {/* Maintained perfect left elbow overflow breakthrough */}
          <img 
            src={workerImage} 
            alt="HomePro Professional Worker" 
            style={{ width: "515px", height: "423px" }}
            className="absolute bottom-[15px] -left-[55px] max-w-none object-contain z-10 pointer-events-none"
          />

        </div>

        {/* RIGHT CONTENT COLUMN */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center items-center max-w-[660px] mx-auto lg:mx-0 lg:text-left lg:items-start lg:pl-6 mt-10 lg:mt-0">
          
          {/* Core Feature Title */}
          <h2 className="text-[36px] md:text-[42px] font-bold text-[#0F172A] leading-[42px] md:leading-[48px] tracking-tight mb-12">
            How HomePro<br />works?
          </h2>

          {/* Steps Ordered List Stack */}
          <div className="flex flex-col gap-8 w-full max-w-[620px] items-center mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 md:gap-5 w-full">
                
                {/* Structural Gray Step Number */}
                <div className="shrink-0 w-8">
                  <span className="text-[28px] md:text-[32px] font-bold text-[#94A3B8] leading-none block pt-0.5">
                    {step.number}
                  </span>
                </div>

                {/* Structured Text Split Grid Layout */}
                <div className="grid grid-cols-12 gap-3 w-full pt-1.5">
                  
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