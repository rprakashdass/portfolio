"use client";

import { FaBolt, FaCode, FaFire, FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "@/components/ui/PinContainer";

export const Projects = () => {
  return (
    <div id="projects" className="py-20 px-20">
      <h1 className="heading">
        <span className="highlight-text">My projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">

        {projects.map((item) => (


          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >

            <PinContainer
              title={item.title}
              href={item.link}
            >
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
                    className="z-10 absolute bottom-0" />
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
                    <FaFire className="mr-2 text-xl" />
                    {list}
                  </p>
                ))}


              </div>

              <div className="flex flex-col sm:flex-row items-center justify-around mt-7 mb-3 gap-5">
                {item.live &&
                  <div className="flex justify-center w-full items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 hover:translate-x-2 hover:translate-y-4 transition-all duration-300 ease-in-out">
                    <a href={item.live} className="flex lg:text-xl md:text-xs text-sm z-10 text-white hover:text-yellow-400">
                      Live Site
                    </a>
                    <FaLocationArrow className="ms-3 text-white hover:text-yellow-400 transition-colors duration-300" />
                  </div>
                }

                {item.code &&
                  <div className="flex justify-center w-full items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:translate-x-2 hover:translate-y-4 transition-all duration-300 ease-in-out">
                    <a href={item.code} className="flex lg:text-xl md:text-xs text-sm z-10 text-white hover:text-pink-400">
                      Code
                    </a>
                    <FaCode className="ms-3 text-white hover:text-pink-400 transition-colors duration-300" />
                  </div>
                }
              </div>

            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};