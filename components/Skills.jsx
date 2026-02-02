'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiVercel, SiNetlify, 
  SiNextdotjs, SiVite, SiDaisyui, SiFigma, SiReactrouter
} from 'react-icons/si';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact />, color: "#61DAFB", percent: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF", percent: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", percent: 95 },
      { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E", percent: 92 },
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", percent: 98 },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", percent: 95 },
      { name: "DaisyUI", icon: <SiDaisyui />, color: "#1AD1A5", percent: 88 },
      { name: "React Router", icon: <SiReactrouter />, color: "#CA4245", percent: 90 },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933", percent: 85 },
      { name: "Express.js", icon: <SiExpress />, color: "#828282", percent: 82 },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", percent: 80 },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", percent: 85 },
    ]
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF", percent: 95 },
      { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF", percent: 90 },
      { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7", percent: 85 },
      { name: "Vite", icon: <SiVite />, color: "#646CFF", percent: 92 },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E", percent: 80 },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Unified Heading System */}
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white"
          >
            Technical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mastery</span>
          </motion.h2>
        </div>

        <div className="space-y-32">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="relative">
              {/* Category Title - Fix: Bold, White, Accented */}
              <div className="flex items-center gap-6 mb-16">
                <h3 className="text-white font-black text-2xl md:text-3xl tracking-tight">
                  {category.title}
                </h3>
                <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-500/50 to-transparent" />
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    variants={cardVariants}
                    className="relative group bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] flex flex-col gap-8 transition-all duration-500 shadow-2xl hover:bg-white/[0.08] hover:border-white/20"
                  >
                    {/* Top Row: Icon and Percentage */}
                    <div className="flex items-center justify-between">
                      {/* Controlled Anti-gravity Icon (±6px) */}
                      <motion.div 
                        animate={{ y: [0, -6, 0] }}
                        transition={{ 
                          duration: 5 + (sIdx % 2), 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: sIdx * 0.1
                        }}
                        className="text-5xl transition-all duration-500 group-hover:scale-110 group-hover:brightness-125"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </motion.div>
                      
                      <div className="flex flex-col items-end">
                        <span className="text-xl font-black text-white tracking-tighter">
                          {skill.percent}%
                        </span>
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest opacity-60">Level</span>
                      </div>
                    </div>

                    {/* Skill Info & Progress Bar */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-black text-white tracking-tight uppercase group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h4>

                      {/* Progress Bar Container */}
                      <div className="relative h-2.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[2px]">
                        {/* Fill - Animated on Scroll */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percent}%` }}
                          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                          viewport={{ once: true }}
                          className="absolute h-full rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                          style={{ 
                            backgroundColor: skill.color,
                            boxShadow: `0 0 20px ${skill.color}40`
                          }}
                        />
                      </div>
                    </div>

                    {/* Subtle glow on hover */}
                    <div 
                      className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none blur-3xl"
                      style={{ backgroundColor: skill.color }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;