import React from 'react'
import { FaRocket } from 'react-icons/fa6'

interface TutorialsCardGeneratorProps {
    title: string;
    description: string[];
    link: string;
}

const ContributionsCardGenerator: React.FC<TutorialsCardGeneratorProps> = (
    { title, description, link }
) => {
    return (
        <div className="w-full md:w-[48%] lg:w-[30%] border-2 border-gray-600 rounded-lg bg-gray-800 transition-all duration-300">
            <div className="p-5">
                <h1 className="font-bold text-center text-xl mb-5">{title}</h1>
                <hr className="border-red-500 mb-5" />
                <ul className="list-none space-y-2 mb-5">
                    {description.map((point: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 bg-gray-700 p-2 rounded-md">
                            <span className="text-blue-400">•</span>
                            {point}
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center items-center">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-lg flex items-center gap-2 transition-all duration-300"
                    >
                        <FaRocket className="text-lg" /> Contribute
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContributionsCardGenerator