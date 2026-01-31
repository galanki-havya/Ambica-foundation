import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 pb-8 px-6">
      <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto mb-12">
        
        {/* Brand Section */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-extrabold tracking-tight text-white mb-4">
            AMBICA<span className="text-accent italic font-medium text-blue-400">FOUNDATION</span>
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Empowering Hindupuram through dedicated healthcare, education, and disaster relief initiatives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5 pb-2 border-b border-slate-700 inline-block">
            Organization
          </h4>
          <ul className="text-slate-400 text-sm space-y-3">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="About" className="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="Contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5 pb-2 border-b border-slate-700 inline-block">
            Contact Us
          </h4>
          <div className="text-slate-400 text-sm space-y-4">
            <p className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <Phone size={16} className="text-blue-400" /> +91 9709709670
            </p>
            <p className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <Mail size={16} className="text-blue-400" /> ambicafoundationhdp@gmail.com
            </p>
          </div>
        </div>

        {/* Location Section */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5 pb-2 border-b border-slate-700 inline-block">
            Headquarters
          </h4>
          <p className="text-slate-400 text-sm flex gap-3 leading-snug">
            <MapPin size={20} className="text-blue-400 shrink-0" />
            <span>
              Panduranganagar, Mukkidipeta<br />
              Hindupuram, AP - 515201
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Ambica Foundation. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-[10px] text-slate-500 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors underline underline-offset-4 decoration-slate-700">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors underline underline-offset-4 decoration-slate-700">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}