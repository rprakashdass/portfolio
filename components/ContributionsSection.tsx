"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaUsers, FaExternalLinkAlt } from 'react-icons/fa';
import { tutorials } from '@/data';

const ContributionsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-indigo-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Open Source Contributions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge through tutorials, guides, and community-driven projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-indigo-800/20 to-purple-800/20 backdrop-blur-sm border border-indigo-500/30 rounded-3xl p-8 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaGithub className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {tutorial.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaUsers className="text-xs" />
                    <span>Contributors: {tutorial.contributors.join(', ')}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {tutorial.description.map((desc, descIndex) => (
                  <div key={descIndex} className="flex items-start gap-2">
                    <FaCode className="text-indigo-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{desc}</span>
                  </div>
                ))}
              </div>
              
              <a
                href={tutorial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 text-sm font-medium w-full justify-center"
              >
                <FaExternalLinkAlt className="text-xs" />
                Explore Repository
              </a>
            </motion.div>
          ))}
        </div>

        {/* Contribution Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-indigo-800/20 to-purple-800/20 backdrop-blur-sm border border-indigo-500/30 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contribution Impact</h3>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400">{tutorials.length}</div>
                <div className="text-gray-400">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">270+</div>
                <div className="text-gray-400">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">Open</div>
                <div className="text-gray-400">Source Community</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContributionsSection;
