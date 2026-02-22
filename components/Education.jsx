'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    title: 'Bachelor of Science in Computer Science & Engineering',
    institution: 'Kishoreganj University',
    duration: '2025 – 2029 (Expected)',
    location: 'Kishoreganj, Bangladesh',
    description: 'Deep dive into advanced algorithms, software architecture, and distributed systems. Gained strong problem-solving skills, hands-on experience with data structures, and a solid foundation in building scalable software solutions.'
    // description: 'Focusing on advanced algorithms, software architecture, and distributed systems.',
    // type: 'Formal Education'
  }
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
            Education
            {/* Education & Certification */}
            {/* Learning */}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white"
          >Academic
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"> Background
              {/* My academic background and professional training */}
              </span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line with Dynamic Height */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-30 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            style={{ height: 'calc(100% + 100px)' }}
          />

          <div className="space-y-16">
            {educationData.map((edu, index) => (
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
                <div className="w-full max -w-2xl">
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="p-8 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-2 text-blue-400">
                        <GraduationCap size={24} />
                        <span className="font-black text-base tracking-tight uppercase">{edu.institution}</span>
                      </div>
                      {/* <span className={`text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-black border ${
                        edu.type === 'Formal Education' 
                          ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                          : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                      }`}>
                        {edu.type}
                      </span> */}
                    </div>

                    <h3 className="text-2xl font-black mb-3 text-white leading-tight group-hover:text-blue-400 transition-colors">{edu.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} className="text-blue-500" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} className="text-purple-500" />
                        {edu.location}
                      </div>
                    </div>

                    <p className="text-base text-gray-400 leading-relaxed mb-4">
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
