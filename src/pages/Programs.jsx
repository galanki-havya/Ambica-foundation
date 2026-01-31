import React from 'react';
import { Link } from 'react-router-dom';

import udyogaMelaImg from "../assets/mega-job.png"; 
import medicalImg from "../assets/medical-camp.png";
import careerImg from "../assets/womens-carrer.jpg";

export default function Programs() {
  const programList = [
    {
      title: "Mega Udyoga Mela",
      desc: "Our flagship recruitment drive connecting rural youth with global opportunities at companies like Foxconn and KIA.",
      img: udyogaMelaImg,
      color: "border-accent",
      tag: "1,300+ Hired"
    },
    {
      title: "Free Medical Camps",
      desc: "Providing essential diagnostic services and free medicine distribution to the elderly and rural poor in Anantapur.",
      img: medicalImg,
      color: "border-primary",
      tag: "Weekly Service"
    },
    {
      title: "Women's Career Initiative",
      desc: "Dedicated skill development and recruitment drives designed to ensure financial independence for women.",
      img: careerImg,
      color: "border-accent",
      tag: "500+ Empowered"
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
            Since 2009, we have implemented sustainable programs that bridge the gap between 
            industrial demand and community needs.
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
                  to="/contact" 
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