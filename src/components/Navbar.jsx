import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-3 no-underline group">
          <div className="h-12 w-auto overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <img 
              src={Logo} 
              alt="Ambica Foundation Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          <div className="hidden sm:flex flex-col border-l border-slate-200 pl-3">
            <span className="text-lg font-black text-slate-900 leading-none tracking-tight">
              AMBICA
            </span>
            <span className="text-[9px] font-bold text-accent tracking-[0.3em] uppercase">
              Foundation
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[12px] font-extrabold uppercase tracking-[0.1em] no-underline transition-all duration-200 relative group ${
                  isActive(link.path) ? "text-accent" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300 ${
                  isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </div>

        </div>

        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={`h-0.5 bg-slate-900 transition-all ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
            <span className={`h-0.5 bg-slate-900 transition-all ${isOpen ? "opacity-0" : "w-4"}`}></span>
            <span className={`h-0.5 bg-slate-900 transition-all ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-2"}`}></span>
          </div>
        </button>
      </div>

      <div className={`md:hidden absolute w-full bg-white border-b shadow-2xl transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <div className="flex flex-col p-8 gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-black uppercase tracking-widest no-underline ${
                isActive(link.path) ? "text-accent" : "text-slate-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full bg-slate-900 text-white text-center py-4 rounded-xl font-black uppercase text-xs tracking-widest"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </nav>
  );
}