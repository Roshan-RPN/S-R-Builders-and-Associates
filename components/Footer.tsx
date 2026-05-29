import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl rotate-3 shadow-lg">
              <span className="text-charcoal font-display font-black text-2xl tracking-tighter">SR</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-tight leading-none text-white">
                SR BUILDERS
              </span>
              <span className="font-display font-light text-[10px] tracking-[0.3em] text-primary uppercase mt-0.5">
                & INTERIORS
              </span>
            </div>
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed mb-8 font-light">
            Crafting premium residential and commercial projects in Kerala. We transform raw structural planning into extraordinary living experiences through the Umbrella Concept.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
              <span className="sr-only">Facebook</span>
              <div className="w-5 h-5 bg-white/20 rounded-sm group-hover:bg-white transition-colors" />
            </a>
            <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
              <span className="sr-only">Instagram</span>
              <div className="w-5 h-5 bg-white/20 rounded-sm group-hover:bg-white transition-colors" />
            </a>
          </div>
        </div>

        <div>
           <h4 className="font-display font-bold text-lg mb-8 text-white uppercase tracking-widest text-sm">Quick Links</h4>
           <ul className="flex flex-col gap-4 text-gray-400 font-light">
             <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
             <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
             <li><a href="#process" className="hover:text-primary transition-colors">How We Work</a></li>
             <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
           </ul>
        </div>

        <div>
           <h4 className="font-display font-black text-sm mb-8 text-white uppercase tracking-widest">Contact Us</h4>
           <div className="flex flex-col gap-6 text-gray-400 font-light">
             <p className="text-sm leading-relaxed">
               Parimanam, Neendakara,<br />
               Parimanam, Kollam,<br />
               Kerala 691582
             </p>
             <p className="text-white text-2xl font-normal tracking-tight">+91 97465 67362</p>
             <p className="text-sm text-gray-500">SR Associates Builders</p>
             
             <div className="pt-8 border-t border-white/5 flex flex-col gap-6">
                <div>
                   <p className="text-[10px] uppercase tracking-[0.3em] text-primary/80 mb-3 font-bold">Accepted Payments</p>
                   <p className="text-[10px] text-gray-500 font-medium tracking-widest">CASH • CHEQUE • DD • BANK TRANSFER</p>
                </div>
                <div>
                   <p className="text-[10px] uppercase tracking-[0.3em] text-primary/80 mb-3 font-bold">Operational Hours</p>
                   <p className="text-sm text-white/90">Mon — Sat: 8:00 AM – 6:00 PM</p>
                   <p className="text-[10px] text-gray-600 italic mt-2">Sundays Closed</p>
                </div>
             </div>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
        <p>© 2026 SR Associates Builders & Interiors.</p>
        <p className="text-primary/60">MADE BY NEXORA SYSTEMS</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
