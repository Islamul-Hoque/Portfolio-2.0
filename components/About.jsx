'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Target, Layers } from 'lucide-react';

const orbit1 = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
];

const orbit2 = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
];

const orbit3 = [
  'https://i.ibb.co.com/Xf8dLyxt/tailwind-css.png',
  // 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  // 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' ,
  'https://i.ibb.co.com/B2tH4LDf/Git-removebg-preview.png',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' ,
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' ,
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
];

export default function About() {
  const orbit1Ref = useRef(null);
  const orbit2Ref = useRef(null);
  const orbit3Ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Orbit Rotations
      gsap.to(orbit1Ref.current, { rotation: 360, duration: 25, repeat: -1, ease: 'none' });
      gsap.to(orbit2Ref.current, { rotation: -360, duration: 35, repeat: -1, ease: 'none' });
      gsap.to(orbit3Ref.current, { rotation: 360, duration: 45, repeat: -1, ease: 'none' });

      // Anti-gravity floating for icons - localized to avoid path drift
      const icons = containerRef.current.querySelectorAll('.floating-icon');
      icons.forEach((icon, i) => {
        gsap.to(icon, {
          y: 'random(-10, 10)',
          x: 'random(-5, 5)',
          duration: 'random(3, 5)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-32 overflow-hidden relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Discovery
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white"
          >
            The Architect Behind <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">The Code</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Orbit Animations - Enhanced depth */}
          <div className="relative h-[550px] md:h-[650px] flex justify-center items-center scale-90 md:scale-100 z-10">
            {/* Background Glow */}
            <div className="absolute w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -z-10 animate-pulse" />
            
            {/* Orbit 1 - Core Stack */}
            <div ref={orbit1Ref} className="absolute w-[220px] h-[220px] border border-white/20 rounded-full z-10 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              {orbit1.map((url, i) => (
                <div
                  key={i}
                  className="absolute w-12 h-12"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * (360 / orbit1.length)}deg) translate(110px) rotate(-${i * (360 / orbit1.length)}deg)`,
                  }}
                >
                  <div className="floating-icon w-full h-full p-2.5 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 flex items-center justify-center group hover:bg-white/20 transition-colors">
                    <img src={url} alt="icon" className="w-full h-full object-contain brightness-110 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* Orbit 2 - Runtime & DB */}
            <div ref={orbit2Ref} className="absolute w-[380px] h-[380px] border border-white/20 rounded-full z-10 shadow-[0_0_25px_rgba(59,130,246,0.1)]">
              {orbit2.map((url, i) => (
                <div
                  key={i}
                  className="absolute w-12 h-12"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * (360 / orbit2.length)}deg) translate(190px) rotate(-${i * (360 / orbit2.length)}deg)`,
                  }}
                >
                  <div className="floating-icon w-full h-full p-2.5 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 flex items-center justify-center group hover:bg-white/20 transition-colors">
                    <img src={url} alt="icon" className="w-full h-full object-contain brightness-110 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* Orbit 3 - Tools & Styles */}
            <div ref={orbit3Ref} className="absolute w-[540px] h-[540px] border border-white/20 rounded-full z-10 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              {orbit3.map((url, i) => (
                <div
                  key={i}
                  className="absolute w-12 h-12"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * (360 / orbit3.length)}deg) translate(270px) rotate(-${i * (360 / orbit3.length)}deg)`,
                  }}
                >
                  <div className="floating-icon w-full h-full p-2.5 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 flex items-center justify-center group hover:bg-white/20 transition-colors">
                    <img src={url} alt="icon" className="w-full h-full object-contain brightness-110 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* Center decoration */}
            <motion.div 
              animate={{ y: [-15, 15], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="relative z-10 w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.3)] border border-white/20 rotate-12"
            >
               <Layers size={48} className="text-white" />
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest"
              >
                Vision & Philosophy
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Hello there, I&apos;m a <span className="text-blue-400">MERN Stack Developer</span> based in Bangladesh.
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed font-medium">
                I approach every project with an architect&apos;s mindset—focusing on scalable structures, clean logic, and intuitive user flows. My mission is to build digital products that aren&apos;t just functional, but exceptional.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: GraduationCap, title: 'Academic Foundation', text: 'Currently pursuing BSc in CSE at Kishoreganj University (KujU). Certified MERN expert from Programming Hero.', color: 'blue' },
                { icon: Briefcase, title: 'Development Philosophy', text: 'I prioritize performance-first architecture and modular code that grows alongside your business needs.', color: 'purple' },
                { icon: Target, title: 'Future-Ready Goals', text: 'Deepening my expertise in cloud-native deployments and AI-driven web experiences to redefine digital boundaries.', color: 'pink' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex gap-6 items-center transition-all cursor-default group"
                >
                  <div className={`p-4 bg-${item.color}-500/10 rounded-2xl text-${item.color}-400 group-hover:scale-110 transition-transform`}>
                    <item.icon size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}