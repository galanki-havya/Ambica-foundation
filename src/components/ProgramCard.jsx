import React from 'react';
import { Link } from 'react-router-dom';

const ProgramCard = ({ image, title, desc, link }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
          {desc}
        </p>
        <Link 
          to={link} 
          className="text-accent font-bold text-xs uppercase tracking-widest hover:translate-x-2 transition-transform inline-flex items-center gap-2"
        >
          Learn More <span>→</span>
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;