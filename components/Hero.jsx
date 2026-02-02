'use client';

import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const techIcons = [
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
];

export default function Hero() {
  const containerRef = useRef(null);
  const iconsRef = useRef([]);

  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Controlled Anti-gravity floating for background blobs (±15px)
      gsap.to(".bg-blob", {
        y: 'random(-15, 15)',
        x: 'random(-10, 10)',
        duration: 'random(6, 8)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Controlled Floating effect for tech icons (±6px)
      iconsRef.current.forEach((icon, index) => {
        if (icon) {
          const inner = icon.querySelector('.icon-inner');
          if (inner) {
            gsap.to(inner, {
              y: 'random(-6, 6)',
              x: 'random(-4, 4)',
              duration: 'random(4, 6)',
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              delay: index * 0.5,
            });
          }
        }
      });

      // Hero text parallax
      gsap.to(".hero-content", {
        scrollTrigger: {
          trigger: ".hero-content",
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 80,
        opacity: 0
      });
    }, containerRef);

    return () => ctx.kill();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs for depth */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10 bg-blob" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 bg-blob" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full z-10 hero-content" ref={containerRef}>
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-wider uppercase"
            >
              Available for hire
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9]"
            >
              Islamul <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Hoque
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-medium text-gray-400 max-w-xl"
            >
              Building next-gen digital experiences with the MERN stack.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <button className="relative group bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 transition-all hover:scale-[1.05] active:scale-[0.95] shadow-2xl shadow-blue-600/40">
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Download size={22} className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </button>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Islamul-Hoque"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-blue-500 hover:text-blue-400 transition-all shadow-xl backdrop-blur-sm group"
              >
                <Github size={28} className="group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/islamul-hoque"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-blue-500 hover:text-blue-400 transition-all shadow-xl backdrop-blur-sm group"
              >
                <Linkedin size={28} className="group-hover:-rotate-12 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
            {/* Standardized Profile Card with Glassmorphism */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative aspect-square rounded-[40px] border border-white/10 shadow-2xl overflow-hidden z-10 backdrop-blur-xl bg-white/5 transition-all duration-500"
            >
              <img
                src="/ISHFAK.jpeg"
                alt="Islamul Hoque"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </motion.div>

            {/* Floating Tech Icons - Standardized Orbit */}
            <div className="absolute inset-[-20%] z-20 pointer-events-none">
              {techIcons.map((icon, index) => {
                const angle = (index / techIcons.length) * (Math.PI * 2);
                const radius = 260; 
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={icon.name}
                    ref={(el) => (iconsRef.current[index] = el)}
                    className="absolute pointer-events-auto"
                    style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                  >
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.2, type: "spring", stiffness: 100 }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      className="icon-inner p-4 bg-white/5 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/10 cursor-pointer group hover:bg-white/10 transition-all duration-500"
                    >
                      <img 
                        src={icon.url} 
                        alt={icon.name} 
                        className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:brightness-125 transition-all" 
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Glowing background circles */}
            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-[100px] -z-10 animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
}
