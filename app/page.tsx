import Hero from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import Skills from "@/components/SkillsShowcase";
import LinkTree from "@/components/LinkTree";
import { ProductCard } from "@/components/ProductCard";
import ResumeSection from "@/components/ResumeSection";
import { FaArrowRight } from "react-icons/fa6";
import { DevGuidesContributions } from "@/components/DevGuidesContributions";
import CanvasCursor from "@/components/ui/CanvasCursor/CanvasCursor";

export default function Home() {
  return (
    <main className="relative flex flex-col mx-auto justify-center items-center overflow-clip">
      <CanvasCursor />
      <div className="w-full">
        {/* Floating navigation */}
        <FloatingNav navItems={navItems} />
        {/* Hero section */}
        <section id="about" className="">
          <Hero />
        </section>

        <div className="mb-10 flex justify-center">
          <a
            href="https://github.com/rprakashdass/portfolio"
            className="border border-white/30 p-2 rounded-md text-center"
          >
            <span className="text-transparent bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text ">You are experiencing version 3.0 {" "}</span>
            <span className="underline inline-flex items-center gap-2">Read More <FaArrowRight /> </span>
          </a>
        </div>


        {/* Skills Showcase */}
        <section id="skills" className="">
          <Skills />
        </section>

        {/* Product Cards */}
        <section id="products" className="">
          <ProductCard />
        </section>

        {/* Recent Projects */}
        <section id='projects' className="section-gradient">
          <RecentProjects />
        </section>

        <section id="contributions" className="">
          <DevGuidesContributions />
        </section>

        {/* Resume and Link Tree */}
        <section id="social-media" className="">
          <ResumeSection />
          <LinkTree />
        </section>

        {/* Footer */}
        <section id="contact" className="footer-gradient">
          <Footer />
        </section>
      </div>
    </main>
  );
}
