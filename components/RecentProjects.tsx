"use client";

import { FaFire } from "react-icons/fa6";
import SeeMore from "./utility/SeeMore";
import { PinContainer } from "@/components/ui/PinContainer";
import { projects } from "@/data";

interface Project {
  id: string;
  title: string;
  img: string;
  link: string;
  des: string[];
}

const RecentProjects = () => {
  return (
    <div className="py-20 px-20">
      <SeeMore data={projects}>
        {({ itemsData, showLessRef }: { itemsData: Project[]; showLessRef: React.RefObject<HTMLParagraphElement> }) => {
          return (
            <div>
              <div className="text-center py-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Take a Look at{" "}
                  <span className="text-transparent bg-clip-text highlight-text">
                    My Projects
                  </span>
                </h1>
                <p 
                  ref={showLessRef}
                  className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-6"
                >
                  A collection of innovative, exciting, and creative projects showcasing my skills in design, development, and problem-solving.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center p-4 md:gap-16">
                {itemsData.map((item) => (
                  <div
                    className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                    key={item.id}
                  >
                    <PinContainer title={item.title} href={item.link}>
                      <div className="absolute inset-0 bg-gradient-to-b from-[#201717] via-[#151416] to-[#0d0d0d] opacity-30 rounded-lg"></div>
                      <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]">
                        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
                          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#2c003e] to-[#0d0d0d] opacity-80"></div>
                          <img
                            src={item.img}
                            alt="cover"
                            className="z-10 absolute bottom-0"
                          />
                        </div>
                      </div>
                      <div className="p-3">
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                          {item.title}
                        </h1>

                        <div className="lg:text-xl lg:font-normal font-light text-sm line-clamp-none" style={{ color: "#BEC1DD" }}>
                          {item.des.map((list, index) => (
                            <p key={index} className="flex justify-start items-center">
                              <FaFire size={24} className="mr-2 text-xl" />
                              {list}
                            </p>
                          ))}
                        </div>
                      </div>
                    </PinContainer>
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </SeeMore>
    </div>
  );
};

export default RecentProjects;
