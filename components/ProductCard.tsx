"use client";

import { FaCode } from "react-icons/fa6";
import { products } from "@/data";
import { motion } from "framer-motion";

export const ProductCard = () => {
  return (
    <div>
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl md:text-4xl mb-4">
            My {' '}
            <span className="highlight-text"> 
              Freelance {' '}
            </span>
            Projects
          </h1>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold mb-4 text-white">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {item.des}
              </p>

              {/* Action Button */}
              <div className="flex gap-3">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors font-medium text-sm"
                >
                  <FaCode className="text-sm" />
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
</div>
  );
};

export default ProductCard