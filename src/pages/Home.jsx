import React from 'react';
import Hero from "../components/Hero";
import ProgramCard from "../components/ProgramCard";
import { Link } from "react-router-dom";

import aboutImg from "../assets/about-foundation.png"; 
import methodologyImg from "../assets/methodology.png"; 

import ambulanceImg from "../assets/emergency.png";
import jobMelaImg from "../assets/megajobmela.png";
import educationImg from "../assets/notebooks.png";
import disasterImg from "../assets/disaster-relief.png";

import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";


const SectionDivider = () => (
  <div className="w-full bg-white py-4">
    <div className="h-2 w-full bg-slate-100">
      <div className="h-full w-full bg-accent opacity-50 shadow-sm"></div>
    </div>
  </div>
);


const SectionDividerFinal = () => (
  <div className="w-full flex items-center justify-center py-12 bg-slate-50">
    <div className="flex items-center w-full max-w-4xl px-4">
      <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-slate-400"></div>
      <div className="flex items-center mx-6 gap-1.5">
        <div className="w-2.5 h-2.5 rotate-45 border border-accent bg-accent"></div>
        <div className="w-4 h-4 rotate-45 border-2 border-accent flex items-center justify-center">
             <div className="w-1.5 h-1.5 bg-accent"></div>
        </div>
        <div className="w-2.5 h-2.5 rotate-45 border border-accent bg-accent"></div>
      </div>
      <div className="flex-grow h-[1px] bg-gradient-to-l from-transparent via-slate-300 to-slate-400"></div>
    </div>
  </div>
);

export default function Home() {
  const displayPrograms = [
    { title: "Ambulance Services", image: ambulanceImg, desc: "Providing 24/7 free emergency medical transport to ensure timely healthcare for the rural poor in Anantapur.", link: "/programs" },
    { title: "Mega Udyoga Mela", image: jobMelaImg, desc: "Our flagship recruitment drive connecting rural youth with global opportunities at companies like Foxconn and KIA.", link: "/programs" },
    { title: "Education Support", image: educationImg, desc: "Distributing notebooks and essential stationery to underprivileged students to empower their academic journey.", link: "/programs" },
    { title: "Disaster Relief", image: disasterImg, desc: "Responding swiftly to floods and emergencies with food, medical aid, and essential supplies for those in need.", link: "/programs" }
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      <Hero />
      
      <section className="pt-8 pb-4 bg-white px-6"> 
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 border border-slate-100">
            {[
              { label: "Years of Impact", val: "15+" },
              { label: "Mega Udyoga Melas", val: "12+" },
              { label: "Ambulance Calls", val: "240+" },
              { label: "Lives Changed", val: "1000+" }
            ].map((stat, i) => (
              <div key={i} className="py-6 text-center hover:bg-slate-50 transition-all group">
                <h3 className="text-3xl font-black text-accent">{stat.val}</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-8 px-6 bg-white"> 
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-left">
            <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-3">About Ambica Foundation</h4>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Serving Anantapur <br /> Since 2009.
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              We are dedicated to providing emergency ambulance services, organizing mega job melas, supporting education, and empowering women.
            </p>
            <Link to="/about" className="bg-[#f2a33c] hover:bg-[#e0922b] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg inline-block text-sm">
              Read Full Story
            </Link>
          </div>
          <div className="md:w-1/2">
            <img src={aboutImg} alt="Impact" className="rounded-3xl shadow-2xl w-full h-[350px] object-cover border-8 border-white" />
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-12 px-6 bg-slate-50 border-y border-slate-200"> {/* Reduced py-20 to py-12 */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-accent/10 rounded-full">
              <p className="text-accent font-bold uppercase tracking-widest text-[10px]">How We Work</p>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Our Proven Process for <br /> <span className="text-accent">Lasting Change.</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {["Identifying Talent", "Skill Training", "Job Placement", "Mentorship"].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm font-bold">0{idx + 1}</div>
                  <p className="text-sm font-bold text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={methodologyImg} alt="Methodology" className="rounded-3xl shadow-xl w-full h-[350px] object-cover border-4 border-white" />
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-accent font-bold uppercase tracking-widest text-[11px] mb-2">Impact Initiatives</h2>
            <h3 className="text-4xl font-black text-slate-900 mt-1">Our Focus Areas</h3>
            <div className="w-20 h-2 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayPrograms.map((p, i) => (
              <ProgramCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-3 uppercase tracking-tight">Our Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[gallery1, gallery2, gallery3].map((img, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl shadow-lg h-64 border-4 border-white">
                <img src={img} className="w-full h-full object-cover" alt={`Gallery ${i}`} />
              </div>
            ))}
          </div>
          <Link to="/gallery" className="inline-block border-2 border-slate-900 text-slate-900 px-10 py-3 rounded-full font-bold hover:bg-slate-900 hover:text-white text-xs tracking-widest uppercase shadow-md">
            Explore Full Gallery
          </Link>
        </div>
      </section>

      <SectionDividerFinal />
    </main>
  );
}