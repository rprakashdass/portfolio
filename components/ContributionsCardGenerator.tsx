"use client";

import { motion } from "framer-motion";
import { FaRocket, FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ContributionsCardGeneratorProps {
  title: string;
  description: string[];
  link: string;
}

const ContributionsCardGenerator: React.FC<ContributionsCardGeneratorProps> = ({
  title,
  description = [],
  link
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 group w-full md:w-1/2"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
          <FaGithub className="text-white text-xl" />
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
          {title}
        </h3>
      </div>

      <div className="space-y-3 mb-6">
        {description.map((point: string, index: number) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
            <p className="text-gray-300 leading-relaxed text-sm">{point}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-600/30"
        >
          <FaRocket className="text-lg" />
          Explore Repository
          <FaExternalLinkAlt className="text-sm" />
        </a>
      </div>
    </motion.div>
  );
};

export default ContributionsCardGenerator;
