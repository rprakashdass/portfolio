"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaStar } from 'react-icons/fa';
import { education } from '@/data';

const EducationSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-green-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Academic journey and achievements in technology and artificial intelligence
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-green-800/20 to-blue-800/20 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <FaGraduationCap className="text-2xl text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <FaCalendarAlt className="text-sm" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl text-green-300 mb-2">{edu.institution}</h4>
                  
                  {edu.score && (
                    <div className="flex items-center gap-2 mb-4">
                      <FaStar className="text-yellow-400" />
                      <span className="text-yellow-300 font-semibold">{edu.score}</span>
                    </div>
                  )}
                  
                  {edu.description && (
                    <div className="text-gray-300 leading-relaxed">
                      <ul className="space-y-2">
                        {edu.description.map((desc, descIndex) => (
                          <li key={descIndex} className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-green-800/20 to-blue-800/20 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Academic Highlights</h3>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">4</div>
                <div className="text-gray-400">Years Program</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">AI/ML</div>
                <div className="text-gray-400">Specialization</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">8.5</div>
                <div className="text-gray-400">CGPA</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
