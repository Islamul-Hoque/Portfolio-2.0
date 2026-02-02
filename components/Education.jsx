'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    title: 'Bachelor of Science in Computer Science & Engineering',
    institution: 'Kishoreganj University',
    duration: '2025 – 2029 (Expected)',
    location: 'Kishoreganj, Bangladesh',
    description: 'Focusing on advanced algorithms, software architecture, and distributed systems.',
    type: 'Formal Education'
  },
  {
    title: 'Complete Web Development Course',
    institution: 'Programming Hero',
    duration: 'Jul 2024 – Dec 2024',
    location: 'Online',
    description: 'Intensive training on the MERN stack. Developed multiple production-ready full-stack applications.',
    type: 'Professional Course'
  },
]

export default function Education() {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Milestones
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white"
          >
            Academic <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Foundation</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line with Glow */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-30 shadow-[0_0_15px_rgba(59,130,246,0.3)]" />

          <div className="space-y-24">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Anti-gravity Dot */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-[6px] border-[#020617] z-20 shadow-[0_0_20px_rgba(37,99,235,0.8)]" 
                />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} pl-12`}>
                  <motion.div 
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="p-10 rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
                      <div className="flex items-center gap-3 text-blue-400">
                        <GraduationCap size={28} />
                        <span className="font-black text-lg tracking-tight uppercase">{edu.institution}</span>
                      </div>
                      <span className={`text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full font-black border ${
                        edu.type === 'Formal Education' 
                          ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                          : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                      }`}>
                        {edu.type}
                      </span>
                    </div>

                    <h3 className="text-3xl font-black mb-6 text-white leading-tight group-hover:text-blue-400 transition-colors">{edu.title}</h3>
                    
                    <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-blue-500" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-purple-500" />
                        {edu.location}
                      </div>
                    </div>

                    <p className="text-lg text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>
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
