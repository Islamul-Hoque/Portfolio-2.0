'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Info, Layers } from 'lucide-react';

const allProjects = [
  {
    name: "EduConnect",
    slug: "educonnect",
    tag: "MERN",
    image: "/Admin_Dashboard_Overview.png",
    images: [
      "/Admin_Dashboard_Overview.png",
    ],
    description: "MERN-based tuition system with role-based access, secure auth, Stripe payments, and sleek dashboards.",
    longDescription: "EduConnect is a comprehensive tuition management platform built with the MERN stack. It features role-based access control for admins, tutors, and students, secure authentication with JWT, integrated Stripe payment gateway, and interactive dashboards with real-time analytics. The platform streamlines the process of finding and managing tuition sessions with advanced search, filtering, and scheduling capabilities.",
    live: "https://edu-connect-e1d7e.web.app",
    code: "https://github.com/Islamul-Hoque/Edu-Connect-client",
    features: [
      "Process tuition payments and track transactions via Stripe integration",
      "Users can find relevant tuition listings quickly by searching, filtering, sorting, and navigating pages",
      "Light/dark theme toggle for a comfortable viewing experience",
      "Analytics dashboards with Recharts visualization",
      "Real‑time feedback system using SweetAlert2 & Toast"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "Recharts"],
  },
  {
    name: "TravelEase",
    slug: "travelease",
    tag: "MERN",
    image: "https://i.ibb.co.com/67jtFWPM/travel-Ease-updated.png",
    images: [
      "https://i.ibb.co.com/67jtFWPM/travel-Ease-updated.png",
    ],
    description: "Responsive MERN car rental app enabling users to explore vehicles, manage bookings, and customize themes.",
    longDescription: "TravelEase is a modern car rental platform that provides a seamless booking experience. Built with the MERN stack, it offers a comprehensive fleet management system, real-time availability checking, and a user-friendly booking engine. The application features responsive design, dark/light theme support, and secure user authentication.",
    live: "https://travelease-4bacc.web.app",
    code: "https://github.com/Islamul-Hoque/Travel-Ease-Client",
    features: [
      "Explore vehicles using advanced search, filtering, and sorting features",
      "Booking management system powered by MongoDB backend",
      "Dark/Light theme toggle",
      "User authentication and profile management",
      "Real-time booking confirmation"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
  },
  {
    name: "NovaCart",
    slug: "novacart",
    tag: "Next.js",
    image: "https://i.ibb.co.com/cSwsNGNs/Nova-Cart.png",
    images: [
      "https://i.ibb.co.com/cSwsNGNs/Nova-Cart.png",
    ],
    description: "Full-stack e-commerce platform for dynamic product browsing and secure seller management.",
    longDescription: "NovaCart is a full-featured e-commerce platform built with Next.js for optimal performance and SEO. It includes product management, category filtering, advanced search, secure authentication with Google OAuth, and a complete shopping cart system. The platform supports multiple vendors and provides an intuitive admin dashboard.",
    live: "https://nova-cart-five.vercel.app",
    code: "https://github.com/Islamul-Hoque/NovaCart",
    features: [
      "Browse products easily with dynamic listings, category, and search filters",
      "Secure Google/Email login with product management through protected routes",
      "Experience a responsive, modern UI with smooth animations",
      "Shopping cart and wishlist functionality",
      "Order tracking and history"
    ],
    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "NextAuth", "Stripe"],
  },
  {
    name: "GreenNest",
    slug: "greennest",
    tag: "React",
    image: "https://i.ibb.co.com/dJxWfhTW/gn.png",
    images: [
      "https://i.ibb.co.com/dJxWfhTW/gn.png",
    ],
    description:"Single-page MERN app for plant lovers to explore, buy, and care for indoor plants with secure auth.",
    longDescription: "GreenNest is a specialized e-commerce platform for indoor plant enthusiasts. It offers a curated catalog of plants with detailed care guides, expert consultation booking, and secure checkout. The application features Firebase authentication, intuitive search and filtering, and educational resources for plant care.",
    live: "https://green-nest-83896.web.app",
    code: "https://github.com/Islamul-Hoque/GreenNest",
    features: [
      "Plant catalog exploration through search, filters, and sorting",
      "Firebase Authentication with Email/Password & Google Sign‑In",
      "Book expert consultations",
      "Detailed plant care guides and tips",
      "Secure payment integration"
    ],
    technologies: ["React", "Tailwind CSS", "Firebase", "Stripe", "Redux"],
  }
];

const categories = ['All', 'MERN', 'React', 'Next.js'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const router = useRouter();

  const openDetails = (project) => {
    router.push(`/project/${project.slug}`);
  };

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
            Projects
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white"
          >Selected 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"> Projects</span>
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
                  <img   src={project.image}    alt={project.name}    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1 group -hover:brightness-150" />
                {/* Project Tag Badge - Improved visibility */}
                  <div className="absolute top-4 right-4 px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-xs font-black text-blue-400 uppercase tracking-widest">
                    {project.tag}
                  </div>
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-[#020617]/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
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


                    {/* Details icon */}
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      onClick={() => openDetails(project)}
                      className="p-5 bg-purple-600 text-white rounded-2xl shadow-xl shadow-purple-600/40"
                    >
                      <Info size={28} />
                    </motion.button>
                  </div>


                </div>

                {/* Content */}
                <div className="p-5 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-black mt-2 text-white group-hover:text-blue-400 transition-colors">{project.name}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Action Buttons - Always Visible */}
                  <div className="grid grid-cols-2 sm:hidden gap-3 pt-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>

                    <button
                      onClick={() => openDetails(project)}
                      className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
                    >
                      <Info size={16} />
                      View Details
                    </button>
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
