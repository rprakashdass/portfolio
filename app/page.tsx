import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    // px - padding x (horizontal)
    // 
    <main className="relative bg-black flex flex-col mx-auto overflow-hidden justify-center items-center px-5 sm:px10">
      <div className="max-w-7xl w-full">
        <Hero/>
      </div>
    </main>
  );
}
