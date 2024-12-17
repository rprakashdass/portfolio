"use client";

import React from 'react';
import { skills } from '../data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills px-5 lg:py-10 lg:mx-28">
      <h1 className="heading mb-32 lg:my-20">
        My{' '}
        <span className="text-highlight">
          Skills
        </span>
      </h1>
      <div className="skills-container mx-auto max-w-6xl">
        {Object.entries(skills).map(([category, skillsList], index) => (
          <div key={index} className="category-section mb-12">
            <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-400" />
              <h1 className="mx-4 font-semibold text-xl text-[#aa5397]">{category}</h1>
              <div className="flex-grow border-t border-gray-400" />
            </div>

            <div className="cards-wrapper grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {skillsList.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center justify-between p-4 border rounded-lg  shadow-sm relative">
                  {/* animation */}
                  <div className='absolute inset-0 animate-skill-gradient bg-gradient-to-r from-black opacity-30 to-purple'></div>
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
        ))}
      </div>
    </section>
  );
};

export default Skills;
