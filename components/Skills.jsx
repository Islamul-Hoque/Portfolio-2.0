'use client';

import { motion } from 'framer-motion';

const skillsData = {
  Frontend: [
    { name: 'React.js', percent: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', percent: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'JavaScript', percent: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind CSS', percent: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
    { name: 'CSS3', percent: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'HTML5', percent: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  ],
  Backend: [
    { name: 'Node.js', percent: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', percent: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'REST API', percent: 90, icon: 'https://www.svgrepo.com/show/354262/rest-api.svg' },
    { name: 'Firebase Auth', percent: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'JWT', percent: 80, icon: 'https://jwt.io/img/pic_logo.svg' },
  ],
  Tools: [
    { name: 'Git', percent: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', percent: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VS Code', percent: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Figma', percent: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ],
};

function SkillBar({ name, percent, icon }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={icon} alt={name} className="w-6 h-6 object-contain" />
          <span className="font-bold text-gray-200">{name}</span>
        </div>
        <span className="text-sm font-black text-blue-500">{percent}%</span>
      </div>
      <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/10 p-1">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 rounded-full relative group"
        >
          <div className="absolute inset-0 bg-white/30 animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
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
            className="text-5xl md:text-7xl font-black tracking-tighter text-white"
          >
            Technical <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mastery</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(skillsData).map(([category, skills], catIndex) => (
            <motion.div 
              key={category} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.8 }}
              className="space-y-10 p-10 rounded-[40px] bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:bg-white/[0.08] transition-all group"
            >
              <h3 className="text-2xl font-black flex items-center gap-3 text-white">
                <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.5)]"></span>
                {category}
              </h3>
              <div className="space-y-8">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
