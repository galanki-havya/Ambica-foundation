import React from 'react';
import aboutImpactImg from "../assets/about.jpg"; 

const SectionDivider = () => (
  <div className="w-full bg-white">
    <div className="h-1.5 w-full bg-slate-100">
      <div className="h-full w-full bg-accent opacity-40 shadow-sm"></div>
    </div>
  </div>
);

export default function About() {
  return (
    <div className="bg-white overflow-x-hidden">
      
      <section className="bg-primary py-16 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-black mb-3 uppercase tracking-tighter">
          Our Story & Vision
        </h1>
        <p className="text-accent font-bold tracking-[0.3em] uppercase text-xs">
          "Manava Seve Madhava Seve"
        </p>
      </section>

      
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 border-l-8 border-accent pl-6 leading-tight">
              Service to Humanity is <br /> Service to God
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                Established with the core principle of <strong>"Manava Seve Madhava Seve"</strong>, 
                Ambica Foundation has been a beacon of hope in the Anantapur district for over a decade. 
              </p>
              <p>
                Under the visionary leadership of <strong>Founder Chairman Ambica Lakshminarayana</strong>, 
                we act as a vital bridge between industrial demand and local human resources.
              </p>
            </div>
            <div className="mt-6 bg-gray-50 p-5 rounded-xl italic text-primary border-r-4 border-primary shadow-sm text-sm md:text-base">
              "Our mission is to serve the common man by providing the two most essential pillars of life: Health and Opportunity."
            </div>
          </div>

          <div className="relative">
            <img 
              src={aboutImpactImg} 
              alt="Ambica Foundation Impact" 
              className="rounded-3xl shadow-xl relative z-10 w-full h-[350px] lg:h-[400px] object-cover border-4 border-white"
            />
            <div className="absolute -bottom-3 -right-3 w-full h-full border-4 border-accent rounded-3xl z-0 hidden md:block"></div>
          </div>
        </div>
      </section>

      <SectionDivider />

      
      <section className="bg-slate-50 py-12 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
             <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight">Key Milestones</h2>
             <div className="w-16 h-1.5 bg-accent mx-auto mt-3 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-accent hover:-translate-y-1 transition-transform duration-300">
              <span className="text-accent font-black text-xl block mb-1">2009</span>
              <h4 className="font-bold text-primary mb-2 text-lg">Ambulance Launch</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Launched dedicated emergency services on Gandhi Jayanthi to provide affordable medical transport.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-primary hover:-translate-y-1 transition-transform duration-300">
              <span className="text-primary font-black text-xl block mb-1">Ongoing</span>
              <h4 className="font-bold text-primary mb-2 text-lg">Healthcare Camps</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Distribution of over ₹1 Lakh worth of medicines and conducting mega blood donation camps for those in need.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-accent hover:-translate-y-1 transition-transform duration-300">
              <span className="text-accent font-black text-xl block mb-1">Current</span>
              <h4 className="font-bold text-primary mb-3 text-lg">Mega Job Melas</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Connecting 1,300+ unemployed youth with 25+ major companies through massive recruitment drives.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}