import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsMarquee from "@/components/SkillsMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
