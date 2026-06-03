import React, { useState } from "react";

export default function FAQ() {
  // FAQ Data matching the exact copy from FAQ.png
  const faqData = [
    {
      question: "What is HomePro?",
      answer: "HomePro is a home care platform that connects homeowners with professional service providers offering a wide range of home services, including repairs, maintenance, cleaning, and more.",
    },
    {
      question: "Are the service providers on HomePro reliable and qualified?",
      answer: "Yes, all service providers on HomePro undergo a strict background check, credential verification, and vetting process to ensure they meet our high quality and safety standards.",
    },
    {
      question: "What if I have an issue or complaint about a service provider?",
      answer: "Our customer support team is available 24/7 to resolve any disputes. If a service provider does not fulfill your request satisfactorily, we offer support guarantees to rectify the job.",
    },
    {
      question: "How are payments handled on HomePro?",
      answer: "Payments are processed securely through our platform. You can pay via credit/debit cards or linked accounts only after the technician completes the requested service to your satisfaction.",
    },
    {
      question: "How do I leave a review for a service provider?",
      answer: "Once your service request is closed, you will receive an automated prompt in your client portal and via email to rate your professional and leave a detailed public review.",
    },
  ];

  // Set the first item open by default to perfectly match the layout in FAQ.png
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24 select-none w-full flex items-center justify-center">
      <div className="max-w-[1240px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT SIDE: Heading Content Area */}
        <div className="lg:col-span-5 sticky top-10 text-left">
          <h2 className="text-[38px] md:text-[44px] lg:text-[48px] font-bold text-[#0F172A] leading-[44px] md:leading-[50px] lg:leading-[54px] tracking-tight mb-5">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-[15px] md:text-[16px] font-normal leading-none">
            Still need help?{" "}
            <a 
              href="#contact" 
              className="text-[#00A3E0] hover:text-[#0089BE] font-bold underline transition-colors underline-offset-2 inline-block ml-0.5"
            >
              Get Help Now
            </a>
          </p>
        </div>

        {/* RIGHT SIDE: Interactive Accordion Rows */}
        <div className="lg:col-span-7 w-full flex flex-col gap-3">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`w-full transition-all duration-300 rounded-[16px] ${
                  isOpen 
                    ? "bg-[#F1F5F9]/60 px-6 py-6 border border-transparent" 
                    : "bg-white px-6 py-5 border-b border-slate-100"
                }`}
              >
                {/* Accordion Trigger Header Row */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                >
                  <span className="text-[16px] md:text-[17.5px] font-bold text-[#1E293B] tracking-tight group-hover:text-[#00A3E0] transition-colors duration-200">
                    {faq.question}
                  </span>
                  
                  {/* Dynamic Accordion Arrow Element */}
                  <span className={`shrink-0 transition-transform duration-300 ${isOpen ? "text-[#1D4ED8]" : "text-[#1E293B]"}`}>
                    {isOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-[18px] h-[18px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-[18px] h-[18px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Collapsible Answer Block */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out text-left overflow-hidden ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-3.5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-slate-500 text-[13.5px] md:text-[14.5px] leading-[22px] md:leading-[24px] font-normal tracking-normal max-w-[640px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}