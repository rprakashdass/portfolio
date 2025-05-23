import React from 'react';
import { FaDownload } from 'react-icons/fa6';

const ResumePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-12 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-highlight">My Resume</h1>
        <p className="text-center text-lg text-gray-300 mb-8">
          Here's a look at my professional profile. You can view it directly or download it.
        </p>

        {/* Embedded PDF */}
        <div className="relative w-full h-[70vh] shadow-lg border border-gray-700 rounded-lg overflow-hidden">
          <iframe
            src="/resume/PrakashDass_Resume_2025.pdf"
            className="w-full h-full"
            title="Prakash Dass Resume"
          />
        </div>

        {/* Download Button */}
        <div className="mt-6 flex justify-center">
          <a
            href="/resume/PrakashDass_Resume_2025.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;