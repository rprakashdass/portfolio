"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendar, FaUsers, FaAward, FaStar, FaCertificate } from "react-icons/fa6";
import { events, projects } from "@/data";

const EventsSection = () => {
  return (
    <div>
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Events & Workshops
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Workshop facilitation, community involvement, and event organization experiences in technology and education
          </p>
        </div>

        {/* Events Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          layout
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 group"
            >
              {/* Star Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 border border-purple-400/30 rounded-full mb-4">
                <FaStar className="text-purple-400 text-xl" />
              </div>

              <h3 className="text-xl font-bold mb-2 text-white">
                {event.name}
              </h3>
              
              <div className="flex items-center gap-2 mb-4 text-gray-400">
                <span>📅 {event.date} • {event.organizer}</span>
              </div>

              {/* Role Badge */}
              <div className="mb-4">
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-xs font-semibold text-purple-300">
                  {event.role}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {event.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {event.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* View Event Button - Only show if link exists */}
              {event.link && (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors font-medium text-sm"
                >
                  <FaStar className="text-sm" />
                  View Event
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="flex justify-center items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <FaStar className="text-white text-sm" />
            </div>
            <span className="text-white font-bold text-lg">{events.length}+ Leadership Roles</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
              <FaUsers className="text-white text-sm" />
            </div>
            <span className="text-white font-bold text-lg">{projects.length}+ Projects</span>
          </div>
        </div>
    </div>
  );
};

export default EventsSection;
