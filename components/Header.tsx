import { motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "How We Work", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="w-12 h-12 bg-charcoal flex items-center justify-center rounded-xl rotate-3 group-hover:rotate-0 transition-transform shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
              <span className="text-white font-display font-black text-2xl tracking-tighter relative z-10">SR</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-lg flex items-center justify-center border-2 border-white shadow-sm">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-black text-xl tracking-tight leading-none ${scrolled ? "text-charcoal" : "text-charcoal"}`}>
              SR BUILDERS
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="font-display font-light text-[10px] tracking-[0.3em] text-primary uppercase">
                & INTERIORS
              </span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="font-display font-bold text-[8px] tracking-[0.1em] text-gray-400 uppercase">
                ASSOCIATES
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-charcoal/60 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-accent transition-all shadow-xl shadow-primary/20 hover:-translate-y-0.5"
          >
            <Phone size={16} />
            +91 97465 67362
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-black text-white px-6 py-3 rounded-full text-center font-medium"
            onClick={() => setIsOpen(false)}
          >
            Talk to Us
          </a>
        </motion.div>
      )}
    </header>
  );
}
