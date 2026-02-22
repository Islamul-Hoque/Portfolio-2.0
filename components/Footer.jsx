'use client';

import { Github, Linkedin, MessageSquare, ArrowUp, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-white/[0.02] pt-24 pb-12 border-t border-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" onClick={(e) => handleClick(e, '#home')} className="text-2xl font-black tracking-tighter text-white group">
              {/* Ishfak<span className="text-blue-500 group-hover:animate-pulse">.</span> */}

              <span className="text-blue-500">&lt;</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Ishfak
              </span>
              <span className="text-blue-500">/&gt;</span>

            </a>
            <p className="text-gray-400 text-lg leading-relaxed md:max-w-[45rem]">
              Crafting high-performance web experiences with clean code and thoughtful design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-all font-bold text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white">Connect</h4>
            <div className="flex items-center gap-6">
              {[
                { icon: Github, url: 'https://github.com/Islamul-Hoque' },
                { icon: Linkedin, url: 'https://linkedin.com/in/islamul-hoque' },
                { icon: Mail, url: 'mailto:islamulhoque@gmail.com' },
                { icon: FaWhatsapp, url: 'https://wa.me/8801999932122' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-blue-500 hover:text-blue-400 transition-all shadow-xl backdrop-blur-sm"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-bold text-gray-500 tracking-wide">
            &copy; {new Date().getFullYear()} Islamul Hoque. Built with Next.js & Vision.
          </p>
          
          <motion.button
            whileHover={{ y: -8, scale: 1.05 }}
            whileActive={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="p-6 bg-blue-600 text-white rounded-[24px] shadow-2xl shadow-blue-600/30 flex items-center gap-3 text-xs font-black uppercase tracking-widest group"
          >
            Back to top
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}