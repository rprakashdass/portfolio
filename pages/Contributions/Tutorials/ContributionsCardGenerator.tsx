import { FaRocket } from "react-icons/fa6";

interface TutorialsCardGeneratorProps {
    title: string;
    description: string[];
    link: string;
}

const ContributionsCardGenerator: React.FC<TutorialsCardGeneratorProps> = (
    { title, description = [], link }
) => {
    return (
        <div className="border-gray-600/30 p-5 border rounded-lg w-full md:w-1/2 transition-all duration-300 section-gradient">
                <h1 className="mb-5 font-bold text-center text-xl">{title}</h1>
                <hr className="mb-5 border-blue-500" />
                <ul className="space-y-2 mb-5 list-none">
                    {description.map((point: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 bg-gray-600/20 p-2 rounded-md">
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
                        className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 px-5 py-2 rounded-lg font-bold text-white transition-all duration-300"
                    >
                        <FaRocket className="text-lg" /> Explore
                    </a>
                </div>
            </div>
    );
};

export default ContributionsCardGenerator;
