import Hero from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/Footer"
import Skills from "@/components/SkillsShowcase";
import LinkTree from "@/components/LinkTree";
import Head from 'next/head';

export default function Home() {
  return (
    <main className="relative bg-black flex flex-col mx-auto overflow-hidden justify-center items-center px-5 sm:px10">
      <div className="max-w-7xl w-full">
        <Hero />
        <FloatingNav navItems={navItems} />
        <Skills />
        <RecentProjects />
        <LinkTree />
        <Footer />
      </div>
    </main>
  );
}
