import React, { useState } from "react";

import AmbulanceService from "../assets/ambulance.jpg";
import AmbulanceService1 from "../assets/ambulance-1.png";

import BookDistribution from "../assets/notebooks.png";
import Education from "../assets/methodology.png";

import WaterSupply from "../assets/watersupply.png";
import Annadanam from "../assets/annadanam.jpg";
import Fans from "../assets/community.jpg";
import Borewells from "../assets/borewells.jpg";
import PepperSpray from "../assets/pepperspray.png";
import Financial from "../assets/financial.jpg";

import SportsTournament from "../assets/gallery-1.jpg";
import SportsTournament1 from "../assets/vollyball.jpg";
import SportsTournament2 from "../assets/cricket-2.jpg";
import SportsTournament3 from "../assets/cricket.jpg";
import SportsTournament4 from "../assets/cricket-3.jpg";
import SportsTournament5 from "../assets/cricket-4.jpg";


import BloodDonation from "../assets/blood-donation.jpg";
import BloodDonation1 from "../assets/blood-donation-1.jpg";
import BloodDonation2 from "../assets/blood-donation-2.jpg";
import BloodDonation3 from "../assets/blood-donation-3.jpg";
import BloodDonation4 from "../assets/blood-donation-4.jpg";
import BloodDonation5 from "../assets/blood-donation-5.jpg";

import AwardCeremony from "../assets/about-foundation.png";
import AwardCeremony1 from "../assets/about.jpg";
import AwardCeremony2 from "../assets/ambica.jpg";

import MegaJobMela from "../assets/mega-job.png";
import JobMela from "../assets/megajobmela.png";
import JobMela1 from "../assets/megajobmela-1.png";
import JobMela2 from "../assets/megajobmela-2.jpg";
import JobMela3 from "../assets/megajobmela-3.jpg";
import JobMela4 from "../assets/megajobmela-4.png";

import MedicalCamp from "../assets/medical-1.jpg";
import MedicalCamp2 from "../assets/medical-2.jpg";
import MedicalCamp3 from "../assets/medical-3.jpg";
import MedicalCamp4 from "../assets/medical4.jpg";
import MedicalCamp5 from "../assets/medical-5.jpg";
import MedicalCamp6 from "../assets/medical-6.jpg";

import OldAge from "../assets/old-age.jpg";
import OldAge2 from "../assets/old-age-2.jpg";

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [activeAlbum, setActiveAlbum] = useState(null);

  const photos = [
    {
      id: 1, category: "Recognition", url: AwardCeremony, title: "Ambica Achievements",
      desc: "Celebrating the achievements of Ambica Foundation and its impact on rural communities.",
      album: [{url: AwardCeremony}, {url: AwardCeremony1}]
    },
    { 
      id: 2, category: "Healthcare", url: AmbulanceService, title: "Emergency Ambulance Service",
      desc: "Launched in 2009 to provide affordable medical transport to Bangalore & Puttaparthi.",
      album: [{url: AmbulanceService}, {url: AmbulanceService1}]
    },
    {
      id: 3, category: "Job Mela", url: MegaJobMela, title: "Job Mela Events",
      desc: "Connecting rural youth with employment opportunities through job fairs.",
      album: [{url: MegaJobMela}, {url: JobMela}, {url: JobMela1}, {url: JobMela2}, {url: JobMela3}, {url: JobMela4}]
    },
    
    { 
      id: 4, category: "Community", url: WaterSupply, title: "Community Care",
      desc: "Mobile units providing clean drinking water to drought-hit rural areas.",
      album: [{url: WaterSupply}, {url: Annadanam}, {url: Fans}, {url: Borewells}, {url: PepperSpray}, {url: Financial}]
    },
    { 
      id: 5, category: "Sports", url: SportsTournament, title: "Tournaments",
      desc: "Promoting rural youth through district-level Cricket and Volleyball tournaments.",
      album: [{url: SportsTournament}, {url: SportsTournament3}, {url: SportsTournament1}, {url: SportsTournament2}, {url: SportsTournament5}, {url: SportsTournament4}]
    },
    { 
      id: 6, category: "Healthcare", url: BloodDonation, title: "Mega Blood Donation Camps",
      desc: "Over 250 pledges for organ donation and regular blood donation drives.",
      album: [{url: BloodDonation4}, {url: BloodDonation}, {url: BloodDonation2}, {url: BloodDonation3}, {url: BloodDonation1}, {url: BloodDonation5}]
    },
    { 
      id: 7, category: "Education", url: BookDistribution, title: "Rural School Support",
      desc: "Distribution of notebooks and stationery to students in Bisalamanepalli and Obulapuram.",
      album: [{url: BookDistribution}, {url: Education}]
    },
    {
      id: 8, category: "Healthcare", url: MedicalCamp, title: "Medical Camps",
      desc: "Organizing medical camps to provide free health check-ups and medicines.",
      album: [{url: MedicalCamp}, {url: MedicalCamp2}, {url: MedicalCamp3}, {url: MedicalCamp4}, {url: MedicalCamp5}, {url: MedicalCamp6}]   
    },
    {
      id: 9, category: "Community", url: OldAge, title: "Old Age Home",
      desc: "Supporting elderly care through regular visits and essential supplies.",
      album: [{url: OldAge}, {url: OldAge2}]
    },
    
    
  ];

  const categories = ["All", "Recognition", "Healthcare", "Education", "Job Mela", "Community", "Sports"];
  const filteredPhotos = filter === "All" ? photos : photos.filter(p => p.category === filter);

  if (activeAlbum) {
    return (
      <div className="bg-white min-h-screen">
        <section className="bg-primary py-12 text-center text-white px-6">
          <button 
            onClick={() => setActiveAlbum(null)} 
            className="text-accent font-black text-xs uppercase tracking-widest mb-4 hover:underline"
          >
            ← Back to Main Gallery
          </button>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            {activeAlbum.title}
          </h1>
          <div className="w-12 h-1 bg-accent mx-auto mt-4"></div>
        </section>

        <section className="max-w-7xl mx-auto py-10 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeAlbum.album.map((item, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg h-72 bg-slate-100 border border-slate-200">
                <img src={item.url} alt="Impact" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-primary py-12 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Impact Gallery</h1>
        <p className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mt-2">Ambica Foundation in Action</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-300
                ${filter === cat ? "bg-primary text-accent shadow-md scale-105" : "bg-slate-50 text-slate-400 hover:bg-slate-100"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map(photo => (
            <div 
              key={photo.id} 
              onClick={() => setActiveAlbum(photo)}
              className="group relative rounded-3xl overflow-hidden shadow-xl h-80 cursor-pointer bg-slate-100 border-b-8 border-accent"
            >
              <img src={photo.url} alt={photo.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/100 via-primary/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-accent font-black text-[10px] uppercase tracking-widest mb-1">
                  {photo.category}
                </span>
                <h4 className="text-white font-black text-xl uppercase leading-tight tracking-tight">
                  {photo.title}
                </h4>
                <div className="h-1 w-0 group-hover:w-12 bg-accent transition-all duration-500 mt-2"></div>
                <p className="text-white/60 text-[9px] mt-4 font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300">
                  View Full Album +
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery; 