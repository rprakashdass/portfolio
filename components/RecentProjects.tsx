"use client";

import { FaFire } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "@/components/ui/PinContainer";

export const RecentProjects = () => {
  return (
    <div className="py-20 px-20">

      <div className="text-center py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Some of{" "}
          <span className="text-transparent bg-clip-text highlight-text">
            My Projects
          </span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-6">
          A collection of innovative, exciting, and creative projects showcasing my skills in design, development, and problem-solving.
        </p>

        <a
          href="/projects"
          className="text-blue-400 hover:text-blue-600 font-semibold text-lg transition-colors duration-300"
        >
          See all projects
        </a>
      </div>


      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {projects.slice(0, 2).map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#201717] via-[#151416] to-[#0d0d0d] opacity-30 rounded-lg"></div>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#2c003e] to-[#0d0d0d] opacity-80"></div>

                  {/* Image */}
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <div
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-none"
                style={{
                  color: "#BEC1DD",
                }}
              >
                {item.des.map((list, index) => (
                  <p key={index} className="flex justify-start items-center">
                    <FaFire size={24} className="mr-2 text-xl" />
                    {list}
                  </p>
                ))}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects