import React from 'react';

export default function GetInvolved() {
  const opportunities = [
    {
      title: "Volunteer your Time",
      desc: "Be the change! Join our medical camps, job melas, tree plantations, or awareness programs. Every moment counts toward a better tomorrow.",
      icon: "🤝",
      cta: "Join as Volunteer",
      color: "border-accent"
    },
    {
      title: "Donate to the Cause",
      desc: "Support ambulance fuel, contribute to clean-water borewells, or provide empowerment kits (sewing machines) for rural women.",
      icon: "💳",
      cta: "Donate Now",
      color: "border-primary"
    },
    {
      title: "Partner with Us",
      desc: "Institutions and companies can collaborate through CSR programs, skill-training centers, or large-scale medical camps.",
      icon: "🏢",
      cta: "Collaborate",
      color: "border-emerald-500"
    }
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <section className="bg-primary py-12 md:py-16 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-black mb-3 uppercase tracking-tighter">
          Make an Impact
        </h1>
        <p className="text-accent font-bold tracking-[0.2em] mb-4 uppercase text-[10px] md:text-xs">
          "Your heart is enough. Come volunteer today!"
        </p>
        <div className="w-16 h-1.5 bg-accent mx-auto rounded-full"></div>
      </section>

      <section className="max-w-7xl mx-auto py-10 md:py-12 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-3 uppercase tracking-tight">How You Can Help</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-xs md:text-sm leading-relaxed">
            Whether it's your time, your skills, or your resources, every contribution 
            helps us build a stronger, healthier, and more harmonious society.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {opportunities.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 lg:p-8 rounded-2xl shadow-lg border-t-8 ${item.color} flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-black text-primary mb-3 uppercase tracking-tight">{item.title}</h3>
              <p className="text-gray-600 mb-6 text-xs md:text-sm leading-relaxed flex-grow">
                {item.desc}
              </p>
              <button className="bg-[#f2a33c] text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary transition-all shadow-md">
                {item.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12 px-6 border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-primary mb-4 uppercase tracking-tight">Corporate CSR & Institutions</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
            Let us combine our strengths to create lasting impact across Andhra Pradesh and beyond. 
            We welcome long-term projects in healthcare, skill-training, and environmental restoration.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-white border border-slate-200 px-6 py-4 rounded-2xl shadow-sm">
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Email Us</p>
              <span className="text-sm md:text-base font-black text-primary">ambicafoundationhdp@gmail.com</span>
            </div>
            <div className="bg-white border border-slate-200 px-6 py-4 rounded-2xl shadow-sm">
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Call Our Office</p>
              <span className="text-lg md:text-xl font-black text-primary">+91 9709709670</span>
            </div>
          </div>
          <p className="mt-8 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
            Headquarters: Panduranga Nagar, Hindupur, Sri Satya Sai (Dist), AP - 515201.
          </p>
        </div>
      </section>
    </div>
  );
}