"use client";

import { FaCode, FaFire, FaLocationArrow } from "react-icons/fa6";
import SeeMore from "./utility/SeeMore";
import { PinContainer } from "@/components/ui/PinContainer";
import { projects } from "@/data";

interface Project {
  id: string;
  title: string;
  img: string;
  link: string;
  code: string;
  live: string;
  des: string[];
}

const RecentProjects = () => {
  return (
    <div className="">
      <SeeMore data={projects}>
        {({ itemsData, showLessRef }: { itemsData: Project[]; showLessRef: React.RefObject<HTMLParagraphElement> }) => {
          return (
            <div>
              <div className="text-center">
                <h1 className="font-bold text-4xl md:text-5xl">
                  Take a Look at{" "}
                  <span className="bg-clip-text text-transparent highlight-text">
                    My Projects
                  </span>
                </h1>
                <p
                  ref={showLessRef}
                  className="mx-auto mb-6 max-w-2xl text-gray-500 text-lg leading-relaxed"
                >
                  A collection of innovative, exciting, and creative projects showcasing my skills in design, development, and problem-solving.
                </p>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-16 mt-10 p-4">

                {itemsData.map((item) => (


                  <div
                    className="flex justify-center items-center w-[80vw] sm:w-96 h-[25rem] lg:min-h-[32.5rem]"
                    key={item.id}
                  >

                    <PinContainer
                      title={item.title}
                      href={item.title}
                    >
                      {/* Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#201717] via-[#151416] to-[#0d0d0d] opacity-30 rounded-lg"></div>
                      <div className="relative flex justify-center items-center mb-10 w-[80vw] sm:w-96 h-[20vh] lg:h-[30vh] overflow-hidden">

                        <div className="relative shadow-lg rounded-lg w-full h-full overflow-hidden">
                          {/* Gradient Background */}
                          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#2c003e] to-[#0d0d0d] opacity-80"></div>

                          {/* Image */}
                          <img
                            src={item.img}
                            alt="cover"
                            className="bottom-0 z-10 absolute" />
                        </div>

                      </div>

                      <h1 className="line-clamp-1 font-bold text-base md:text-xl lg:text-2xl">
                        {item.title}
                      </h1>

                      <div
                        className="line-clamp-none font-light lg:font-normal text-sm lg:text-xl"
                        style={{
                          color: "#BEC1DD",
                        }}
                      >

                        {item.des.map((list, index) => (
                          <p key={index} className="flex justify-start items-center">
                            <FaFire className="mr-2 text-xl" />
                            {list}
                          </p>
                        ))}


                      </div>

                      <div className="flex sm:flex-row flex-col justify-around items-center gap-5 mt-7 mb-10">
                        {item.live &&
                          <div className="flex justify-center items-center bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg w-full text-white transition-all hover:translate-x-2 hover:translate-y-4 duration-300 ease-in-out">
                            <a href={item.live} className="z-10 flex text-sm text-white md:text-xs lg:text-xl hover:text-yellow-400">
                              Live Site
                            </a>
                            <FaLocationArrow className="text-white hover:text-yellow-400 transition-colors duration-300 ms-3" />
                          </div>
                        }

                        {item.code &&
                          <div className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg w-full text-white transition-all hover:translate-x-2 hover:translate-y-4 duration-300 ease-in-out">
                            <a href={item.code} className="z-10 flex text-sm text-white md:text-xs lg:text-xl hover:text-pink-400">
                              Code
                            </a>
                            <FaCode className="text-white hover:text-pink-400 transition-colors duration-300 ms-3" />
                          </div>
                        }
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
