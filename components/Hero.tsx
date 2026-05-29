import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-[10px] font-bold mb-8 uppercase tracking-[0.2em] border border-primary/5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Top Rated Integrated Design & Civil Firm in Kerala
          </div>
          <h1 className="text-6xl lg:text-8xl font-display font-black leading-[0.95] text-charcoal mb-8 tracking-tighter">
            Elevating <br /> <span className="text-primary">Modern</span> <br /> Living.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-light">
            Award-winning interior transformations that blend architectural precision with soulful design. Premium projects starting from ₹5 Lakhs.
          </p>
          <div className="flex flex-wrap gap-5">
            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-2 hover:bg-accent transition-all group shadow-2xl shadow-primary/30 hover:-translate-y-1">
              Start Your Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#portfolio"
              className="bg-white border-2 border-gray-100 text-charcoal px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all hover:border-gray-200 flex items-center justify-center"
            >
              Our Portfolio
            </a>
          </div>
          
          <div className="mt-16 flex items-center gap-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-2xl border-4 border-white bg-gray-200 overflow-hidden relative shadow-lg">
                  <Image 
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="Customer" 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-2xl border-4 border-white bg-charcoal flex items-center justify-center text-[10px] text-white font-black shadow-lg">
                500+
              </div>
            </div>
            <div className="text-sm">
              <div className="flex text-primary gap-0.5 mb-1.5">
                {[1, 2, 3, 4, 5].map((i) => <ArrowRight key={i} size={14} className="fill-current -rotate-45" />)}
              </div>
              <p className="text-charcoal font-black uppercase tracking-widest text-[10px]">Trusted by 500+ Happy Families</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative h-[700px] rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-8 border-white group"
        >
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Modern Residence at Dusk"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-12 left-12 right-12">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[32px] flex items-center justify-between">
              <div>
                <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Signature Project</p>
                <p className="text-white text-2xl font-display font-bold">The Twilight Estate</p>
              </div>
              <div className="bg-primary text-white px-5 py-2.5 rounded-xl text-[10px] font-black tracking-widest">
                FEATURED
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gray-200/50 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gray-200/50 blur-3xl rounded-full" />
    </section>
  );
}
