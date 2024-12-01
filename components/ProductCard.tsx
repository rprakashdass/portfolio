"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { products } from "@/data";
import { PinContainer } from "./ui/PinContainer";

export const ProductCard = () => {
  return (
    <div id="products" className="py-20 px-20">
      <h1 className="heading">
          My {' '}
        <span className="text-highlight"> 
          Freelance {' '}
        </span>Projects
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 md:gap-16 mt-10">
        {products.map((item, index) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl border-gray-300"
                  // style={{ backgroundColor: "#13162D" }}
                >
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
