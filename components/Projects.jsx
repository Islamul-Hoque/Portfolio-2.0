'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const allProjects = [
  {
    name: "EduConnect",
    tag: "MERN",
    image: "https://i.ibb.co.com/Fb1b7nhs/e-Tuition-BD2.png",
    description: "Advanced tuition management system with real-time tracking, secure payments, and interactive dashboards.",
    live: "#",
    code: "https://github.com/Islamul-Hoque/Edu-Connect-client",
    stack: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    name: "TravelEase",
    tag: "MERN",
    image: "https://i.ibb.co.com/67jtFWPM/travel-Ease-updated.png",
    description: "Premium car rental platform featuring dynamic fleet management, sleek UI, and integrated booking engine.",
    live: "https://travelease-4bacc.web.app",
    code: "https://github.com/Islamul-Hoque/Travel-Ease-Client",
    stack: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    name: "GreenNest",
    tag: "React",
    image: "https://i.ibb.co.com/dJxWfhTW/gn.png",
    description: "Eco-friendly marketplace for indoor plants with automated care guides and seamless checkout.",
    live: "https://green-nest-83896.web.app",
    code: "https://github.com/Islamul-Hoque/GreenNest",
    stack: ["React", "Tailwind CSS", "Firebase"]
  },
];

const categories = ['All', 'MERN', 'React', 'Next.js'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.tag === filter);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Showcase
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white"
          >
            Digital <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Masterpieces</span>
          </motion.h2>
          
          {/* Enhanced Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-blue-600 text-white shadow-2xl shadow-blue-600/40 scale-105' 
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:border-blue-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-[40px] overflow-hidden border border-white/10 shadow-2xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500"
              >
                {/* Advanced Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-[#020617]/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
                    <motion.a 
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-5 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-600/40"
                    >
                      <ExternalLink size={28} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      href={project.code} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-5 bg-white text-[#020617] rounded-2xl shadow-xl"
                    >
                      <Github size={28} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-black text-blue-400 uppercase tracking-widest">{project.tag}</span>
                      <h3 className="text-3xl font-black mt-2 text-white group-hover:text-blue-400 transition-colors">{project.name}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-4 py-1.5 bg-white/5 text-gray-300 border border-white/10 text-[10px] font-black uppercase tracking-widest rounded-lg flex items-center gap-2 group-hover:border-blue-500/50 transition-all"
                      >
                        <Layers size={12} className="text-blue-500" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
