"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa6';

const ResumePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Resume
        </motion.h1>
        
        <motion.p 
          className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Here's a look at my professional profile. You can view it directly or download it for offline access.
        </motion.p>

        <motion.div 
          className="relative w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="aspect-[8.5/11] w-full">
            <iframe
              src="/resume/PrakashDass_Resume_2025.pdf"
              className="w-full h-full"
              title="Prakash Dass Resume"
            />
          </div>
        </motion.div>

        <motion.div 
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="/resume/PrakashDass_Resume_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <FaEye />
            View Full Size
          </a>
          
          <a
            href="/resume/PrakashDass_Resume_2025.pdf"
            download
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <FaDownload />
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;
