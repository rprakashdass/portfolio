"use client";

import { useState } from "react";
import { FaCode, FaLocationArrow, FaRocket, FaBrain, FaGear, FaGlobe, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data";
import { FaExternalLinkAlt } from "react-icons/fa";

const projectCategories = [
  { id: "ai-ml", label: "AI/ML Engineering", icon: FaBrain },
  { id: "systems", label: "Systems Engineering", icon: FaGear },
  // { id: "fullstack", label: "Full-Stack Web", icon: FaGlobe },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("ai-ml");

  // Filter projects directly by their category field
  const filteredProjects = projects.filter(project => project.category === activeCategory);

  return (
    <div>
      <div>
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl md:text-4xl mb-4">
            Recent <span className="text-purple">Projects</span>
          </h1>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {projectCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-purple-400 hover:text-purple-400"
                  }`}
                >
                  <Icon className="text-lg" />
                  <span className="font-medium">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold mb-4 text-white">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.des[0]}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-purple-600/20 text-purple-400 rounded-full border border-purple-600/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {/* Live Demo Button - Only show if live link exists */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors font-medium text-sm"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                )}
                
                {/* Code Button - Only show if code link exists */}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors font-medium text-sm"
                  >
                    <FaGithub className="text-sm" />
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>
  );
};

export default Projects;
