import React from 'react';
import { Link } from "react-router-dom";
import heroBgImage from '../assets/hero-bg.png';

export default function Hero() {
  return (
    <section className="relative h-[85vh] md:h-[90vh] w-full flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBgImage} 
          alt="Ambica Foundation Impact" 
          className="w-full h-full object-cover object-center" 
        />

        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight tracking-tight uppercase">
            <span className="text-white">Ambica</span> <br />
            <span className="text-accent">Foundation</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-300 font-bold tracking-[0.3em] uppercase mb-8 border-l-4 border-accent pl-4">
            Manava Seve Madhava Seve
          </p>

          <p className="text-sm md:text-lg text-slate-200 mb-10 max-w-xl font-medium leading-relaxed">
            From emergency ambulance services to mega job melas, Ambica Foundation 
            has been a pillar of support for Anantapur since 2009.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/programs" 
              className="bg-accent hover:bg-white text-white hover:text-slate-900 px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-accent/20 no-underline uppercase tracking-wider text-xs md:text-sm"
            >
              Our Initiatives
            </Link>
            <Link 
              to="/get-involved" 
              className="border-2 border-white/80 hover:border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3.5 rounded-xl font-bold transition-all no-underline backdrop-blur-md uppercase tracking-wider text-xs md:text-sm"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}