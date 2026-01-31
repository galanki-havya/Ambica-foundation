import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState("Send Message");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    const SERVICE_ID = "service_ifdsywb"; 
    const TEMPLATE_ID = "template_rm3gc8d";
    const PUBLIC_KEY = "zTy7GD0-yYKLZNcro";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setFormStatus("Sent Successfully! ✓");
          setIsSent(true);
          formRef.current.reset();
          setTimeout(() => {
            setFormStatus("Send Message");
            setIsSent(false);
          }, 4000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please check your connection.");
          setFormStatus("Send Message");
        }
      );
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-primary py-8 md:py-10 text-center text-white px-6">
        <span className="text-accent uppercase tracking-[0.3em] font-black text-xs mb-1 block">
          Join us in serving humanity
        </span>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
          Get In Touch
        </h1>
        <div className="w-16 h-1 bg-accent mx-auto mt-3 rounded-full"></div>
      </section>

      <section className="max-w-7xl mx-auto pt-8 md:pt-12 pb-0 px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start pb-12">
          
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-3xl font-black text-primary uppercase leading-tight mb-3">
                Ambica Foundation <br /> Office
              </h2>
              <p className="text-slate-600 leading-relaxed border-l-4 border-accent pl-5">
                Whether you want to volunteer, request assistance, or donate, we are here to listen.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="bg-slate-50 p-3 rounded-xl text-xl group-hover:bg-accent group-hover:text-white transition-all shadow-sm">📍</div>
                <div>
                  <h4 className="font-black text-primary uppercase text-[10px] tracking-widest mb-1">Location</h4>
                  <p className="text-slate-600 text-sm font-medium">
                    Panduranga Nagar, Mukkidipeta, Hindupuram, Andhra Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-slate-50 p-3 rounded-xl text-xl group-hover:bg-accent group-hover:text-white transition-all shadow-sm">📞</div>
                <div>
                  <h4 className="font-black text-primary uppercase text-[10px] tracking-widest mb-1">Phone & Helpline</h4>
                  <p className="text-slate-600 font-bold">+91 9709709670</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-slate-50 p-3 rounded-xl text-xl group-hover:bg-accent group-hover:text-white transition-all shadow-sm">✉️</div>
                <div>
                  <h4 className="font-black text-primary uppercase text-[10px] tracking-widest mb-1">Email</h4>
                  <p className="text-slate-600 font-bold hover:text-accent transition-colors">ambicafoundationhdp@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-5 md:p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1.5 transition-colors duration-500 ${isSent ? 'bg-green-500' : 'bg-accent'}`}></div>
              
              <h3 className="text-lg font-black text-primary uppercase tracking-tight mb-4">
                Send us a Message
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <input required name="from_name" className="w-full bg-slate-50 p-3 rounded-xl focus:ring-2 focus:ring-accent outline-none transition text-sm font-medium" placeholder="Your Name" />
                  <input required name="user_phone" className="w-full bg-slate-50 p-3 rounded-xl focus:ring-2 focus:ring-accent outline-none transition text-sm font-medium" placeholder="Phone Number" />
                </div>
                <input required name="user_email" type="email" className="w-full bg-slate-50 p-3 rounded-xl focus:ring-2 focus:ring-accent outline-none transition text-sm font-medium" placeholder="Email Address" />
                <select required name="inquiry_type" defaultValue="" className="w-full bg-slate-50 p-3 rounded-xl focus:ring-2 focus:ring-accent outline-none transition text-slate-500 text-sm font-medium">
                  <option value="" disabled>Purpose of Contact</option>
                  <option value="Volunteer">Volunteer Inquiry</option>
                  <option value="Medical Help">Request Medical Help</option>
                  <option value="Job Mela">Job Mela Information</option>
                  <option value="Donation">Donation Query</option>
                </select>
                <textarea required name="message" className="w-full bg-slate-50 p-3 rounded-xl focus:ring-2 focus:ring-accent outline-none transition h-20 text-sm font-medium" placeholder="How can we help you?" />
                <button 
                  type="submit"
                  disabled={formStatus === "Sending..."}
                  className={`w-full font-black uppercase tracking-widest py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 text-white ${
                    isSent ? 'bg-green-500' : 'bg-primary hover:bg-accent hover:text-primary'
                  }`}
                >
                  {formStatus}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="h-[450px] w-full bg-slate-200 grayscale hover:grayscale-0 transition-all duration-700 mt-0">
        <iframe 
          title="Ambica Foundation office location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.2292733915297!2d77.49493199999999!3d13.8252668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1a3c8dd814839%3A0xfff5f8b3a7072bd0!2sAmbica%20Nilayam!5e0!3m2!1sen!2sin!4v1769836957840!5m2!1sen!2sin"   
          className="w-full h-full border-none"          
          allowFullScreen="" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}