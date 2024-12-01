import Hero from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/Footer"
import Skills from "@/components/SkillsShowcase";
import LinkTree from "@/components/LinkTree";
import { ProductCard } from "@/components/ProductCard";
import ResumeSection from "@/components/ResumeSection";
// import { About } from "@/components/About";

export default function Home() {
  return (
    <main className="relative bg-black flex flex-col mx-auto justify-center items-center px-5 sm:px10 overflow-clip">
      <div className="max-w-7xl w-full"> 
        <Hero />
        <FloatingNav navItems={navItems} />
        {/* <About/> */}
        <Skills />
        <ProductCard/>
        <RecentProjects />
        <ResumeSection/>
        <LinkTree />
        <Footer />
      </div>
    </main>
  );
}
