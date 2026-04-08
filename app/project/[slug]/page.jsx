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
      "https://i.ibb.co.com/dJxWfhTW/gn.png",
      "https://i.ibb.co.com/dJxWfhTW/gn.png",
      "https://i.ibb.co.com/dJxWfhTW/gn.png"
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
     

      <Footer />
    </div>
    </SmoothScroll>
  );
}