'use client';

import { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const techIcons = [
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  // { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
];

export default function Hero() {
  const containerRef = useRef(null);
  const iconsRef = useRef([]);
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "MERN Stack Developer",
    "Full Stack Web Developer",
    "JavaScript Enthusiast",
    "React & Next.js Developer"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

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
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.9]"
            >
              Islamul <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Hoque
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl font-medium text-gray-400 h-12 flex items-center gap-2"
            >
              <span className="text-white/60">I am a</span>
              <span className="text-blue-400 font-bold border-r-2 border-blue-500 pr-1 animate-pulse">
                {displayText}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-sm md:text-base text-gray-500 max-w-md leading-relaxed"
            >
              I design and build scalable, high-performance web applications  
              with a strong focus on clean UI and smooth user experience.
            </motion.p>

            {/* Quick Stats Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-8 md:gap-12 pt-4"
            >
              {[
                { label: 'Years Experience', value: '1+' },
                { label: 'Projects Completed', value: '10+' },
                { label: 'Technologies', value: '15+' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-3xl md:text-4xl font-black text-blue-400  tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            {/* Rotating Dotted Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-5%] border-2 border-dashed border-blue-500/30 rounded-full z-0"
            />
            
            {/* Circular Profile Image with Glowing Border */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-full rounded-full border-2 border-white/20 shadow-[0_0_50px_rgba(37,99,235,0.2)] overflow-hidden z-10 transition-all duration-500"
            >
              <img
                src="/ISHFAK.png"
                // src="/ISHFAK.jpeg"
                alt="Islamul Hoque"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </motion.div>

            {/* Orbit rings for icons */}
            <div className="absolute inset-[-15%] border border-white/5 rounded-full pointer-events-none" />

            {/* Tech Icons - Hovering near the border (Anti-gravity) */}
            <div className="absolute inset-[-15%] z-20 pointer-events-none">
              {techIcons.map((icon, index) => {
                const angle = (index / techIcons.length) * (Math.PI * 2);
                const radius = 220; 
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={icon.name}
                    ref={(el) => (iconsRef.current[index] = el)}
                    className="absolute pointer-events-auto"
                    style={{ 
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` 
                    }}
                  >
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.2 }}
                      className="icon-inner p-3 bg-white/5 backdrop-blur-md rounded-full shadow-xl border border-white/10 cursor-pointer hover:bg-white/10 transition-colors duration-500"
                    >
                      <img 
                        src={icon.url} 
                        alt={icon.name} 
                        className="w-8 h-8 md:w-10 md:h-10 object-contain" 
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Glowing background circles */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[80px] -z-10" />
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