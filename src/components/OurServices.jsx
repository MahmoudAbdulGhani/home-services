import React from "react";

// Asset path placeholders - swap names if your filesystem structure differs
import plumbingIcon from "../assets/icons/Plumbing-Filled.png";
import roofingIcon from "../assets/icons/Roof_Filled.png";
import moldIcon from "../assets/icons/Wall-Filled.png";
import treeIcon from "../assets/icons/Wood-Tree-Filled.png";
import applianceIcon from "../assets/icons/Repair_Filled.png";
import bathroomIcon from "../assets/icons/Bathroom-Filled.png";
import locksmithIcon from "../assets/icons/Door-Filled.png";

export default function OurServices() {
  const servicesList = [
    {
      icon: plumbingIcon,
      title: "Plumbing services",
      desc: "Drain pipe leaking, pipe clogged, replace the pipe line",
    },
    {
      icon: roofingIcon,
      title: "Roofing repair",
      desc: "Roof leaks, tile replacement, roof cleaning and maintenance",
    },
    {
      icon: moldIcon,
      title: "Mold Removal",
      desc: "Removing and cleaning mildew, Restoration and Prevention",
    },
    {
      icon: treeIcon,
      title: "Tree Trimming",
      desc: "Trimming and cleaning, Deadwood removal, Tree shaping",
    },
    {
      icon: applianceIcon,
      title: "Appliance Repair",
      desc: "repair of washing machines, refrigerators, Air conditioner, etc",
    },
    {
      icon: bathroomIcon,
      title: "Bathroom Remodeling",
      desc: "Design and Consulting, installation, Repairing, tile repair",
    },
    {
      icon: locksmithIcon,
      title: "Locksmith",
      desc: "Lock Installation and Repair, Duplication, Lock Rekeying",
    },
  ];

  return (
    /* Reduced vertical padding (py-10 lg:py-14) so the entire block fits cleanly in the viewport */
    <section className="bg-white text-[#142257] py-10 lg:py-14 px-6 md:px-12 lg:px-20 select-none min-h-screen flex items-center services-responsive-section">
      
      {/* 100% Isolated Responsive Scoped Styles Overrides */}
      <style>{`
        @media (max-width: 1023px) {
          .services-responsive-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .services-responsive-header {
            margin-bottom: 40px !important;
          }
          .services-responsive-header h2 {
            font-size: 32px !important;
          }
          .services-responsive-header br {
            display: none !important;
          }
          .services-responsive-grid {
            gap-x: 24px !important;
            gap-y: 36px !important;
          }
        }

        @media (max-width: 639px) {
          .services-responsive-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap-y: 44px !important;
          }
          .services-card-item {
            align-items: center !important;
            text-align: center !important;
            max-w: 280px !important;
          }
          .services-card-item h3 {
            font-size: 20px !important;
            margin-bottom: 8px !important;
          }
          .services-card-item p {
            font-size: 14.5px !important;
            line-height: 1.5 !important;
          }
          .services-blue-cta-card {
            max-width: 100% !important;
            width: 100% !important;
            min-height: auto !important;
            padding: 32px 24px !important;
            border-radius: 20px !important;
            margin-top: 12px !important;
          }
          .services-blue-cta-card h3 {
            font-size: 22px !important;
            margin-bottom: 6px !important;
          }
          .services-blue-cta-card p {
            font-size: 14px !important;
            max-width: 240px !important;
            margin-bottom: 24px !important;
          }
          .services-blue-cta-card a {
            max-width: 100% !important;
            padding-top: 14px !important;
            padding-bottom: 14px !important;
          }
        }
      `}</style>

      <div className="w-full max-w-7xl mx-auto">
        
        {/* HEADER SECTION - Compact margins to save vertical viewport space */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12 services-responsive-header">
          <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight text-[#1C2036] leading-tight">
            Our Services
          </h2>
          <p className="mt-3 text-slate-500 text-[14px] md:text-[15px] leading-relaxed font-normal">
            You have problems with leaking pipes, broken tiles, lost keys or<br className="hidden md:inline" />
            want to tidy up the trees around you, of course you need our help!
          </p>
        </div>

        {/* WIDER, LOWERED, AND PERFECTLY CENTRALIZED GRID CONTAINER */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 items-stretch justify-center services-responsive-grid">
          
          {servicesList.map((service, index) => (
            <div key={index} className="flex flex-col items-start text-left w-full max-w-[240px] justify-self-center services-card-item">
              
              {/* DARK NAVY SQUARE ICON BACKGROUND BOX */}
              <div className="w-[52px] h-[52px] bg-[#142257] rounded-[14px] flex items-center justify-center mb-4 shadow-sm">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-6 h-6 object-contain brightness-0 invert"
                />
              </div>

              {/* SERVICE TYPOGRAPHY */}
              <h3 className="text-[18px] font-bold text-[#1C2036] mb-1.5 tracking-tight leading-snug">
                {service.title}
              </h3>
              <p className="text-slate-400 text-[13.5px] leading-relaxed font-normal">
                {service.desc}
              </p>
            </div>
          ))}

          {/* BRIGHT BLUE CTA CARD - Formatted with wider horizontal scale layout */}
          <div
            className="
              bg-[#15B2F5]
              rounded-[24px]
              p-6
              flex
              flex-col
              items-center
              justify-center
              text-center
              h-full
              min-h-[210px]
              w-full
              max-w-[265px]
              shadow-sm
              justify-self-center
              services-blue-cta-card
            "
          >
            <h3 className="text-white text-[20px] font-bold tracking-tight mb-1.5">
              More service?
            </h3>

            <p className="text-white/90 text-[13px] leading-snug mb-5 max-w-[200px] font-normal">
              You can tell us what you need and we can help!
            </p>

            <a
              href="tel:8886175894"
              className="
                bg-white
                text-[#15B2F5]
                font-bold
                text-[14px]
                py-3
                w-full
                max-w-[215px]
                text-center
                rounded-full
                hover:bg-slate-50
                transition-colors
                shadow-sm
                inline-block
              "
            >
              Call Us Now
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}