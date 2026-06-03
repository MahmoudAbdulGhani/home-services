import React from "react";

// Importing the card images exactly as requested verbatim
import Thumbnail from "../assets/Thumbnail.png";
import Thumbnail1 from "../assets/Thumbnail1.png";
import Thumbnail2 from "../assets/Thumbnail2.png";

export default function BlogInsights() {
  const blogPosts = [
    {
      image: Thumbnail,
      date: "19 Jan 2023",
      title: "Understanding Smart Home Systems & Maintenance",
      description: "Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions...",
      tags: ["Plumbing", "Architecture", "Maintenance"]
    },
    {
      image: Thumbnail1,
      date: "19 Jan 2023",
      title: "The Ultimate Guide to Home Repairs and Renovations",
      description: "Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions...",
      tags: ["Plumbing", "Architecture", "Maintenance"]
    },
    {
      image: Thumbnail2,
      date: "19 Jan 2023",
      title: "Painting Techniques for a Kitchen Refresh",
      description: "Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions...",
      tags: ["Plumbing", "Architecture", "Maintenance"]
    }
  ];

  return (
    <section className="bg-white text-[#F8FAFC] py-24 px-6 md:px-12 lg:px-20 select-none w-full flex flex-col items-center justify-center">
      <div className="max-w-[1240px] w-full mx-auto flex flex-col items-center">
        
        {/* HEADER BLOCK */}
        <div className="text-center max-w-[650px] mb-16 flex flex-col items-center">
          <h2 className="text-[#1E293B] font-bold text-[36px] md:text-[44px] tracking-tight mb-4">
            Explore Insights in Our Blog
          </h2>
          <p className="text-slate-500 text-[15px] md:text-[16px] leading-relaxed font-normal max-w-[530px]">
            Find lots of insights and information on our blog. Explore, learn, and get inspired today.
          </p>
        </div>

        {/* INSIGHT CARDS GRID COMPONENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-14">
          {blogPosts.map((post, idx) => (
            <article key={idx} className="flex flex-col group cursor-pointer text-left">
              
              {/* Card Aspect Ratio Wrapper Frame */}
              <div className="w-full aspect-[16/10] rounded-[24px] overflow-hidden mb-3 bg-zinc-900 border border-zinc-800/40">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Card Meta Content Block */}
              <div className="flex flex-col px-1">
                {/* Date stamp notation */}
                <span className="text-slate-600 font-medium text-[13px] mb-3.5 block tracking-normal">
                  {post.date}
                </span>

                {/* Main Article Header Title Link */}
                <h3 className="text-[#1E293B] font-bold text-[20px] md:text-[22px] leading-[28px] tracking-tight mb-3 group-hover:text-sky-400 transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Short Paragraph Description Segment */}
                <p className="text-slate-700/80 text-[13.5px] md:text-[14px] leading-relaxed font-normal mb-5 line-clamp-3">
                  {post.description}
                </p>

                {/* Horizontal Taxonomy Badges Layout Grid */}
                <div className="flex flex-wrap items-center gap-2 mt-auto">
                  {post.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-[14px] py-1.5 rounded-full bg-white text-[#0F172A] font-medium text-[12px] leading-none tracking-normal border border-slate-100 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* BOTTOM ACTION CTA BLUE INTERACTION OVERLAY */}
        <button className="flex items-center gap-1.5 text-[#00A3E0] hover:text-[#0089BE] font-bold text-[20px] tracking-tight transition-colors duration-200  group py-2 px-4 rounded-lg focus:outline-none">
          <span>View More</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="3" 
            stroke="currentColor" 
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>

      </div>
    </section>
  );
}