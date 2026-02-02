'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled
          ? 'bg-[#020617]/80 backdrop-blur-xl shadow-2xl shadow-black/50 py-3 border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* <a 
          href="#home" 
          onClick={(e) => handleClick(e, '#home')}
          className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform text-white group"
        >
          Ishfak<span className="text-blue-500 group-hover:animate-pulse">.</span>
        </a> */}
 <a 
  href="#home" 
  onClick={(e) => handleClick(e, '#home')}
  className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform text-white group"
>
  <span className="text-blue-500">&lt;</span>
  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
    Ishfak
  </span>
  <span className="text-blue-500">/&gt;</span>
</a>



        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-widest rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-[#020617] border-t border-white/10 p-8 md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-xl font-bold text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="w-full py-4 bg-blue-600 text-white text-center font-bold rounded-2xl"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}