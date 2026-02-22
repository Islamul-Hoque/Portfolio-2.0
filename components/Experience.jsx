'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Code } from 'lucide-react';

const experienceData = [
  {
    title: 'MERN Stack Developer',
    company: 'Self-Directed Learning',
    duration: '2025 – Present',
    location: 'Remote',
    description: 'Building full-stack web applications using the MERN (MongoDB, Express, React, Node.js) stack. Focusing on creating responsive, user-friendly interfaces and robust backend services.',
    // type: 'Professional Experience',
    // skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript', 'REST APIs', 'Responsive Design']
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Experience
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"> Journey</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line with Dynamic Height */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-30 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            style={{ height: 'calc(100% + 100px)' }}
          />

          <div className="space-y-16">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex justify-center"
              >
                {/* Anti-gravity Dot */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-[4px] border-[#020617] z-20 shadow-[0_0_15px_rgba(37,99,235,0.8)]" 
                />

                {/* Content Card - Left-aligned */}
                <div className="w-full max- w-2xl">
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="p-8 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-2 text-blue-400">
                        <Code size={24} />
                        <span className="font-black text-base tracking-tight uppercase">{exp.company}</span>
                      </div>
                      {/* <span className={`text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-black border ${
                        exp.type === 'Professional Experience' 
                          ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                          : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                      }`}>
                        {exp.type}
                      </span> */}
                    </div>

                    <h3 className="text-2xl font-black mb-3 text-white leading-tight group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} className="text-blue-500" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} className="text-purple-500" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-base text-gray-400 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 bg-white/5 text-gray-300 border border-white/10 text-xs font-black uppercase tracking-wide rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div> */}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}