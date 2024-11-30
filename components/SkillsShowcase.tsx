"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';  // Ensure this path is correct

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="skills px-5 py-10 lg:mx-35">
      <h1 className='heading mb-16 z-10'>My Skills</h1>
      <div className="skills-container mx-auto max-w-6xl">
        {Object.entries(skills).map(([category, skillsList], index) => (
          <div key={index} className="category-section mb-12">
            <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-400" />
              <h1 className="mx-4 font-semibold text-xl text-[#aa5397]">{category}</h1>
              <div className="flex-grow border-t border-gray-400" />
            </div>

            <motion.div
              className="cards-wrapper grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skillsList.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="skill-card flex items-center justify-between p-5 text-white bg-[#121213]  border border-x-gray-600 rounded-lg shadow-lg hover:bg-gray-700 transition-shadow duration-300 relative"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 0,
                    zIndex: 10,
                    transition: { type: "keyframes" }
                  }}
                >
                  {/* Skill name aligned to the left */}
                  <div className="flex items-center pr-16">
                    <p className="skill-item text-lg font-medium">{skill.name}</p>
                  </div>

                  {/* Logo aligned to the extreme right using absolute positioning */}
                  <div className="skill-logo absolute right-0 w-12 h-12 bg-grounded-full flex items-center justify-center mr-10">
                    {skill.logo ? (
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-12 h-12 object-cover"
                      />
                    ) : (
                      <span className="text-sm text-white">Logo</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
