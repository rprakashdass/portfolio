"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCalendar, FaUsers, FaAward, FaChartLine, FaCertificate } from "react-icons/fa6";
import { hackathons } from "@/data";

const HackathonsSection = () => {
  return (
    <div>
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Hackathons & Competitions
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Competition achievements and recognition from national-level hackathons and innovation challenges
          </p>
        </div>

        {/* Hackathons Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          layout
        >
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 group"
            >
              {/* Trophy Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-600/20 border border-yellow-400/30 rounded-full mb-4">
                <FaTrophy className="text-yellow-400 text-xl" />
              </div>

              <h3 className="text-xl font-bold mb-2 text-white">
                {hackathon.name}
              </h3>
              
              <div className="flex items-center gap-2 mb-4 text-gray-400">
                <span>📅 {hackathon.date} • {hackathon.organizer}</span>
              </div>

              {/* Achievement Badge */}
              <div className="mb-4">
                <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-400/30 rounded-full text-xs font-semibold text-yellow-300">
                  {hackathon.achievement}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {hackathon.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {hackathon.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-xs text-yellow-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* View Achievement Button - Only show if link exists */}
              {hackathon.link && (
                <a
                  href={hackathon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg transition-colors font-medium text-sm"
                >
                  <FaTrophy className="text-sm" />
                  View Achievement
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="flex justify-center items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <FaTrophy className="text-black text-sm" />
            </div>
            <span className="text-white font-bold text-lg">{hackathons.length}+ Competitions</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <FaAward className="text-white text-sm" />
            </div>
            <span className="text-white font-bold text-lg">{hackathons.filter(h => h.achievement === "Finalist").length}+ Finalist Selections</span>
          </div>
        </div>
    </div>
  );
};

export default HackathonsSection;
