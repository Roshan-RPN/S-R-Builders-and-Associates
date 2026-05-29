'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'motion/react';

const portfolioItems = [
  { id: 1, title: 'Modern Kerala Villa', category: 'Turnkey Civil', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },
  { id: 2, title: 'Minimalist Modular Kitchen', category: 'Interiors', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f' },
  { id: 3, title: 'Coastal Residence', category: 'Architecture', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750' },
  { id: 4, title: 'Boutique Office Space', category: 'Commercial', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c' },
  { id: 5, title: 'Premium Bungalow', category: 'Civil Construction', img: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e' },
  { id: 6, title: 'Designer Penthouse', category: 'Visual Media', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0' },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      
      {/* Short About Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12" 
                  alt="Interior Designer at work" 
                  fill 
                  className="object-cover" 
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-charcoal p-8 rounded-[32px] flex flex-col justify-center hidden lg:flex shadow-2xl border-4 border-white">
                <p className="text-4xl font-display font-black text-primary mb-1">11+</p>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] leading-tight">Years of <br /> Operational Expertise</p>
             </div>
          </div>
          <div>
            <p className="text-primary font-display font-black tracking-[0.3em] text-[10px] uppercase mb-6">Neendakara • Chavara • Kanhangad</p>
            <h2 className="text-5xl md:text-7xl font-display font-black text-charcoal mb-4 leading-[0.95] tracking-tighter">
              Simplicity <br /> <span className="text-gray-300">Transformed into</span> <br /> Beauty.
            </h2>
            <p className="text-gray-400 font-display italic text-sm mb-8 tracking-widest uppercase">&quot;Laalithyam Soundaryamaakkiya&quot;</p>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed font-light">
              SR Associates Builders & Interiors functions as an integrated contracting, architecture, and design firm. We provide a hassle-free transition from raw structural planning to customized luxury living experiences, specializing in coastal and modern architecture.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-8 border-t border-gray-200">
              <div>
                <p className="text-4xl font-display font-black text-charcoal mb-2 tracking-tighter">1.5k+</p>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Premium Builds</p>
              </div>
              <div>
                <p className="text-4xl font-display font-black text-charcoal mb-2 tracking-tighter">Kollam</p>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Primary Base</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Process />

      {/* Portfolio Grid - Dark Mode Section */}
      <section id="portfolio" className="py-24 bg-charcoal text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-5 pointer-events-none">
          <span className="text-[200px] font-display font-black">GALLERY</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <p className="text-primary font-display font-black tracking-[0.3em] text-[10px] uppercase mb-4">SHOWCASE</p>
              <h2 className="text-5xl md:text-7xl font-display font-black mb-4 tracking-tighter">Our Masterpieces</h2>
              <p className="text-gray-400 text-lg font-light">A glimpse into our diverse portfolio of stunning spaces.</p>
            </div>
            <button className="bg-white text-charcoal px-8 py-4 rounded-2xl font-bold text-sm hover:bg-primary hover:text-white transition-all flex items-center gap-2 group">
              View All Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {portfolioItems.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-8 shadow-2xl transition-all duration-700 group-hover:-translate-y-2 border-4 border-white/5 group-hover:border-primary/50">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                     <p className="text-white text-xl font-display font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</p>
                     <p className="text-primary text-[10px] font-black uppercase tracking-widest mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-black text-white p-16 rounded-[40px] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -mr-32 -mt-32" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -ml-32 -mb-32" />
             
             <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 relative z-10">
               Ready to Build Your <br /> Dream Space?
             </h2>
             <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto relative z-10 font-light">
               Join hundreds of happy homeowners and experience the magic of professional interior design. Book your free consultation today.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
               <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all">
                 Book Free Consultation
               </button>
               <button className="bg-transparent border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                 Download Brochure
               </button>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
