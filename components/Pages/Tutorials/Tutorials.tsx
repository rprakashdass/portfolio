import { tutorials } from "@/data";
import { FaArrowCircleUp } from "react-icons/fa";
import React from 'react'

const Tutorials = () => {
    return (
        <div>
            <div className="w-full">
                <h1 className="heading">Contributions</h1>
                <h2 className="right-0">See all</h2>
            </div>
            <div className="flex gap-10 justify-center">
                {
                    tutorials.map((item) => (
                        <div className="flex flex-col w-[30%] min-h-20 border-2 rounded-lg items-center justify-center">
                            <h1 key={item.id} className="font-bold text-white p-5">
                                {item.title}
                            </h1>
                            <hr className="bg-red-500"></hr>
                            <p className="text-start">
                                {item.description}
                            </p>
                            {/* {
                                item.contributors.map((dev) => (
                                    <h4>{dev}</h4>
                                ))
                            } */}

                                <a href={item.link} className="bg-blue-700 rounded-md p-5">Contribute {" "} <FaArrowCircleUp/>  </a>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Tutorials