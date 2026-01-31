import React from 'react';

export default function GalleryGrid({ images }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-xl bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={img}
                alt={`Ambica Foundation Impact ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-accent font-black text-[10px] uppercase tracking-widest mb-1">
                Impact Moment
              </span>
              <p className="text-white text-xs font-bold uppercase tracking-tight">
                View Full Image
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}