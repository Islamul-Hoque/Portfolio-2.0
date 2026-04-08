'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, ArrowLeft, CheckCircle } from 'lucide-react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';


const allProjects = [
  {
    name: "EduConnect",
    slug: "educonnect",
    tag: "MERN",
    image: "https://i.ibb.co.com/Fb1b7nhs/e-Tuition-BD2.png",
    images: [
      "/Admin_Dashboard_Overview.png",
      "/Tuition_Management.png",
      "/User_Management.png",
      "/Student-Profile.png"
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
    image: "/travelEade-home.png",
    images: [
      "/travelEade-home.png",
      "/all-vehicles.png",
      "/booking.png",
      "/vehiclesDashboard.png"
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
    image: "/NovaCart-home.png",
    images: [
      "/NovaCart-home.png",
      "/NovaCart-Product.png",
      "/manageProducts.png",
      "/customersSay.png"
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
    image: "/greenNest.png",
    images: [
      "/greenNest.png",
      "https://i.ibb.co.com/TqYVjL2N/image.png",
      "https://i.ibb.co.com/q3VKmW78/image.png",
      "https://i.ibb.co.com/CTjQVS7/image.png",
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

export default function ProjectDetails() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);

  // Find project based on slug
  const project = allProjects.find(p => p.slug === params?.slug) || null;

  if (!project) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-white text-xl font-bold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#020617]">
        <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              router.push('/#projects');
            }}
            className="flex items-center gap-3 text-gray-400 hover:text-white transition-all mb-8 group cursor-pointer"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-sm uppercase tracking-widest">Back to Projects</span>
          </motion.button>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-1.5 bg-blue-600/20 backdrop-blur-xl border border-blue-500/30 rounded-full text-sm font-black text-blue-400 uppercase tracking-widest">
                {project.tag}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              {project.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl">
              {project.description}
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Image Gallery */}
            <div className="space-y-6">
              {/* Large Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src={project.images[selectedImage]}
                  alt={`${project.name} screenshot ${selectedImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-4">
                {project.images.map((img, idx) => (
                  <motion.button
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? 'border-blue-500 shadow-lg shadow-blue-500/30'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right: Project Info */}
            <div className="space-y-8">
              {/* Long Description */}
              <div>
                <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
                  Overview
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.longDescription}
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-green-600 rounded-full"></span>
                  Quick Links
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-blue-600/30 flex items-center justify-center gap-3"
                  >
                    <ExternalLink size={22} />
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-8 py-5 bg-white hover:bg-gray-100 text-[#020617] rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-3"
                  >
                    <Github size={22} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-10 bg-purple-600 rounded-full"></span>
              Technologies Used
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {project.technologies.map((tech, idx) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-2 group hover:border-blue-500/50 hover:bg-blue-600/10 transition-all"
                >
                  <Layers size={24} className="text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-gray-300 group-hover:text-white text-center">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-10 bg-pink-600 rounded-full"></span>
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                    <CheckCircle size={20} className="text-blue-400" />
                  </div>
                  <p className="text-gray-300 leading-relaxed pt-2">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
    </SmoothScroll>
  );
}