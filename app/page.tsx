"use client";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import Skills from "@/components/SkillsShowcase";
import LinkTree from "@/components/LinkTree";
import { ProductCard } from "@/components/ProductCard";
import ResumeSection from "@/components/ResumeSection";
import { FaArrowRight } from "react-icons/fa6";
import DevGuidesContributions from "@/components/DevGuidesContributions";
import NeonCursor from "@/components/ui/CanvasCursor/NeonCursor";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import HackathonsSection from "@/components/HackathonsSection";
import EventsSection from "@/components/EventsSection";
import SectionWrapper from "@/components/utility/SectionWrapper";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center mx-auto overflow-clip">
      <div className="w-full">
        {/* Floating navigation */}
        <FloatingNav navItems={navItems} />
        <div className="sm:block hidden">
          <NeonCursor />
        </div>

        {/* Hero Section - Full width for design impact */}
        <SectionWrapper 
          id="about" 
          maxWidth="wide" 
          spacing="compact"
          className=""
          motionProps={{
            initial: { opacity: 0, y: -50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: false }
          }}
        >
          <Hero />
        </SectionWrapper>

        {/* Bug Report Banner - Consistent spacing */}
        <div className="py-8 px-4">
          <div className="max-w-7xl mx-auto flex justify-center">
            <a
              href="https://github.com/rprakashdass/portfolio/issues"
              className="inline-flex items-center gap-2 border-orange-400/30 p-2 border rounded-md text-center group hover:border-orange-400/60 transition-colors"
            >
              <span className="bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 text-transparent">
                Found an issue? Report it here{" "}
              </span>
              <span className="inline-flex items-center gap-2 underline text-orange-400">
                Report Bug
                <FaArrowRight className="transform transition-transform group-hover:translate-x-2 duration-300" />
              </span>
            </a>
          </div>
        </div>

        {/* Projects Section */}
        <SectionWrapper 
          id="projects"
          motionProps={{
            initial: { opacity: 0, x: -100 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.5, delay: 0.25 }
          }}
        >
          <Projects />
        </SectionWrapper>

        {/* Products Section */}
        <SectionWrapper 
          id="products"
          motionProps={{
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { duration: 0.8, delay: 0.25 },
            viewport: { once: false }
          }}
        >
          <ProductCard />
        </SectionWrapper>

        {/* Experience Section */}
        <SectionWrapper 
          id="experience"
          motionProps={{
            initial: { opacity: 0, y: 50, scale: 0.95 },
            whileInView: { opacity: 1, y: 0, scale: 1 },
            transition: { duration: 0.6, ease: "easeOut" },
            viewport: { once: false }
          }}
        >
          <ExperienceSection />
        </SectionWrapper>

        {/* Certifications Section */}
        <SectionWrapper id="certifications">
          <CertificationsSection />
        </SectionWrapper>

        {/* Hackathons Section */}
        <SectionWrapper id="hackathons">
          <HackathonsSection />
        </SectionWrapper>

        {/* Events Section */}
        <SectionWrapper id="events">
          <EventsSection />
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>

        {/* Contributions Section */}
        <SectionWrapper id="contributions">
          <DevGuidesContributions />
        </SectionWrapper>

        {/* Resume and Link Tree - Full width for design */}
        <SectionWrapper 
          id="social-media" 
          maxWidth="wide"
          className=""
        >
          <ResumeSection />
          <LinkTree />
        </SectionWrapper>

        {/* Footer - Full width with custom gradient */}
        <SectionWrapper 
          id="contact" 
          maxWidth="wide"
          className="footer-gradient"
          motionProps={{
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.5, delay: 0.25 },
            viewport: { once: false }
          }}
        >
          <Footer />
        </SectionWrapper>
      </div>
    </main>
  );
}
