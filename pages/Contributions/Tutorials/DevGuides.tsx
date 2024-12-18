import { tutorials } from "@/data";
import React from 'react'
import { FaRocket } from "react-icons/fa6";
import ContributionsCardGenerator from "./ContributionsCardGenerator";


export default function DevGuides() {
    return (
        <div className="p-10 bg-gray-900 text-white">
            <h1
                className="text-4xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                Dev Guides
            </h1>
            <p className="text-center text-lg text-gray-300 mb-10">
                Contribute to or explore top, concise, and resource-driven GitHub repositories for interview prep and more.
            </p>

            <div className="flex flex-wrap gap-10 justify-center items-center mx-auto">
                {tutorials.map((item) => {

                    return (

                        <ContributionsCardGenerator
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                        />

                    );
                })}
            </div>
        </div>

    );
}