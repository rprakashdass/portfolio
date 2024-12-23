"use client";

import React from 'react';
import { skills } from '../data';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section className="">
      <h1 className="heading">
        My{' '}
        <span className="highlight-text">
          Skills
        </span>
      </h1>
      <div className="skills-container mx-auto max-w-6xl">
        {Object.entries(skills).map(([category, skillsList], index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, y: 75}}
            whileInView={{opacity: 1, y:0}}
            viewport={{ once: true}}
            transition={{ duration: 0.5, delay: 0.25}}
          >

          <div key={index} className="category-section mb-12">
            <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-400" />
              <h1 className="mx-4 font-semibold text-xl text-[#aa5397]">{category}</h1>
              <div className="flex-grow border-t border-gray-400" />
            </div>

            <div className="cards-wrapper grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {skillsList.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center justify-between p-4 border border-purple-400/40 rounded-lg  shadow-sm relative">
                  {/* animation */}
                  <div className='absolute inset-0 animate-skill-gradient bg-gradient-to-r from-[#a16cad] via-[#3c0153] to-[#1a1a40] opacity-40'></div>

                  {/* Skill name */}
                  <p className="skill-item text-lg font-medium">{skill.name}</p>

                  {/* Logo */}
                  <div className="skill-logo w-12 h-12 flex items-center justify-center ml-4">
                    {skill.logo ? (
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-sm text-white bg-gray-400 w-full h-full flex items-center justify-center rounded-full">
                        Logo
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
