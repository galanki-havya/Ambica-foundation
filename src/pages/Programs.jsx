import React from 'react';
import { Link } from 'react-router-dom';

import udyogaMelaImg from "../assets/mega-job-mela.jpg"; 
import medicalImg from "../assets/medical-2.jpg";
import waterImg from "../assets/safe-water.jpg";
import foodImg from "../assets/annadanam.jpg";
import educationImg from "../assets/pratibha-awards.jpg";
import natureImg from "../assets/disaster-relief.png";

export default function Programs() {
  const programList = [
    {
      title: "Mega Udyoga Mela",
      desc: "Our flagship recruitment drive connecting rural youth with global opportunities at companies like Foxconn, KIA, Amazon, and TATA.",
      img: udyogaMelaImg,
      color: "border-accent",
      tag: "8,000+ Employed" 
    },
    {
      title: "Healthcare Support",
      desc: "Regular free medical camps and medicine distribution for senior citizens and rural families across Anantapur.",
      img: medicalImg,
      color: "border-primary",
      tag: "10,000+ Served"
    },
    {
      title: "Safe Drinking Water",
      desc: "Installing borewells, RO plants, and operating summer water tankers to end water scarcity in drought-prone regions.",
      img: waterImg,
      color: "border-accent",
      tag: "Community Lifeline"
    },
    {
      title: "Social Welfare & Relief",
      desc: "Providing a lifeline through old age home support, fan distribution, and daily Annadanam to ensure dignity and comfort for all.",
      img: foodImg,
      color: "border-primary",
      tag: "Serving Humanity"
    },
    {
      title: "Pratibha Awards",
      desc: "Honoring and empowering meritorious SSC and Intermediate students with financial aid for higher education.",
      img: educationImg,
      color: "border-accent",
      tag: "Educational Aid"
    },
    {
      title: "Nurturing Nature",
      desc: "Combatting deforestation and water scarcity through regular plantation drives and environmental awareness.",
      img: natureImg,
      color: "border-primary",
      tag: "50,000+ Saplings"
    }
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <section className="bg-primary py-12 md:py-16 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32"></div>
        
        <div className="relative z-10">
          <h2 className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-2">Our Work</h2>
          <h1 className="text-3xl md:text-5xl font-black mb-3 tracking-tighter uppercase">Impact Initiatives</h1>
          <p className="text-sm md:text-base opacity-80 max-w-xl mx-auto font-light leading-relaxed">
            Since 2009, we have implemented sustainable programs that provide essential support 
            in healthcare, education, livelihood, and social welfare.
          </p>
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto py-8 md:py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programList.map((item, index) => (
            <div 
              key={index} 
              className={`group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-t-4 md:border-t-8 ${item.color} overflow-hidden`}
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={item.title} 
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full shadow-md text-primary font-black text-[9px] uppercase tracking-widest">
                  {item.tag}
                </div>
              </div>

              <div className="p-5 lg:p-6 flex flex-col flex-grow">
                <h3 className="text-lg lg:text-xl font-black text-primary mb-2 leading-tight group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed flex-grow">
                  {item.desc}
                </p>
                <Link 
                  to="/gallery" 
                  className="inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-primary group-hover:gap-3 transition-all"
                >
                  Learn More <span className="text-accent text-lg">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}