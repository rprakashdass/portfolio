"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaAward, FaCertificate, FaTrophy } from "react-icons/fa6";
import { certifications, certificationCategories } from "@/data";

const CertificationsSection = () => {
  const [activeCategory, setActiveCategory] = useState("ai-ml");

  const filteredCertifications = certifications.filter(cert => cert.category === activeCategory);

  return (
    <div>
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications & Credentials
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Professional certifications and credentials that validate my expertise in AI/ML, cloud computing, and software engineering
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {certificationCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-blue-400 hover:text-blue-400"
                }`}
              >
                <span className="font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          layout
        >
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 group"
            >
              {/* Certificate Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 border border-blue-400/30 rounded-full mb-4">
                <FaCertificate className="text-blue-400 text-xl" />
              </div>

              <h3 className="text-xl font-bold mb-2 text-white">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-2 text-gray-400">
                <span>📅 {cert.date} • {cert.issuer}</span>
              </div>

              <div className="mb-4 text-gray-500">
                <span className="text-sm">ID: {cert.certId}</span>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-xs text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* View Credential Button */}
              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors font-medium text-sm">
                <FaCertificate className="text-sm" />
                View Credential
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="flex justify-center items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <FaTrophy className="text-black text-sm" />
            </div>
            <span className="text-white font-bold text-lg">{certifications.length}+ Certifications</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <FaCertificate className="text-white text-sm" />
            </div>
            <span className="text-white font-bold text-lg">{certificationCategories.length} Categories</span>
          </div>
        </div>
    </div>
  );
};

export default CertificationsSection;