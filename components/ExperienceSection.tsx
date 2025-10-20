"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendar, FaExternalLinkAlt } from "react-icons/fa";
import { experience } from "@/data";

const ExperienceSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Professional{" "}
          <span className="bg-clip-text text-transparent highlight-text">
            Experience
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Building expertise through hands-on experience in machine learning, software development, and leadership roles
        </p>
      </div>

      <div className="space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row gap-8 items-start ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Node */}
            <div className="flex-shrink-0 relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30">
                <FaBriefcase className="text-white text-xl" />
              </div>
              {index < experience.length - 1 && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-blue-600 to-transparent" />
              )}
            </div>

            {/* Experience Card */}
            <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {exp.role}
                  </h3>
                  <h4 className="text-xl text-blue-400 font-semibold mb-2">{exp.company}</h4>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-sm" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-sm" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 bg-blue-600/20 border border-blue-400/30 rounded-lg hover:bg-blue-600/30 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-blue-400" />
                  </a>
                )}
              </div>

              {/* Description */}
              <div className="space-y-3 mb-6">
                {exp.description.map((desc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div>
                <h5 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                  Technologies Used
                </h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-blue-300 hover:bg-blue-600/20 hover:border-blue-400/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
