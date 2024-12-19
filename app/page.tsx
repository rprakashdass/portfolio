"use client";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import Skills from "@/components/SkillsShowcase";
import LinkTree from "@/components/LinkTree";
import ProductCard from "@/components/ProductCard";
import ResumeSection from "@/components/ResumeSection";
import { FaArrowRight } from "react-icons/fa6";
import DevGuidesContributions from "@/components/DevGuidesContributions";
import CanvasCursor from "@/components/ui/CanvasCursor/CanvasCursor";

export default function Home() {
  return (
    <main className="relative flex flex-col mx-auto justify-center items-center overflow-clip">
      <CanvasCursor />
      <div className="w-full">
        {/* Floating navigation */}
        <FloatingNav navItems={navItems} />
        
        {/* Hero Section with Motion */}
        <motion.section 
          id="about" 
          className=""
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Hero />
        </motion.section>

        <div className="mb-10 flex justify-center">
          <a
            href="https://github.com/rprakashdass/portfolio"
            className="border border-white/30 p-2 rounded-md text-center inline-flex items-center gap-2 group"
          >
            <span className="text-transparent bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text">
              You are experiencing version 3.0{" "}
            </span>
            <span className="underline inline-flex items-center gap-2">
              Read More
              <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
            </span>
          </a>
        </div>

        {/* Skills Showcase */}
        <motion.section 
          id="skills" 
          className=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25}}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.section>

        {/* Product Cards */}
        <motion.section 
          id="products" 
          className=""
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProductCard />
        </motion.section>

        {/* Recent Projects */}
        <motion.section 
          id="projects" 
          className="section-gradient"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25}}
          viewport={{ once: true }}
        >
          <RecentProjects />
        </motion.section>

        {/* Contributions */}
        <motion.section 
          id="contributions" 
          className=""
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25}}
          viewport={{ once: true }}
        >
          <DevGuidesContributions />
        </motion.section>

        {/* Resume and Link Tree */}
        <motion.section 
          id="social-media" 
          className=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25}}
          viewport={{ once: true }}
        >
          <ResumeSection />
          <LinkTree />
        </motion.section>

        {/* Footer */}
        <motion.section 
          id="contact" 
          className="footer-gradient"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25}}
          viewport={{ once: true }}
        >
          <Footer />
        </motion.section>
      </div>
    </main>
  );
}
