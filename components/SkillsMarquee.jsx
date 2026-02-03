'use client';

import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind CSS', icon: 
// 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
'https://i.ibb.co.com/Xf8dLyxt/tailwind-css.png' },
{ name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'JWT', icon: 'https://i.ibb.co.com/S4TjwXWK/jwt.png' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

export default function SkillsMarquee() {
  return (
    <section className="py-20 bg-white/[0.02] border-y border-white/5 backdrop-blur-sm overflow-hidden">
      <Marquee
        gradient={true}
        gradientColor={[2, 6, 23]} 
        gradientWidth={200}
        speed={60}
        pauseOnHover={true}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-4 mx-12 px-8 py-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 group transition-all shadow-2xl"
          >
            <div className="relative">
               <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
               <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain relative z-10" />
            </div>
            <span className="font-black text-xl tracking-tight text-gray-300 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </Marquee>
    </section>
  );
}
