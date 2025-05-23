import { FaDownload, FaEye } from "react-icons/fa6";

const resume = '/resume/PrakashDass_Resume_2025.pdf';
const viewResume = '/resume';

const ResumeSection = () => {
    return (
        <section className="text-center py-20 mb-10">
            <h2 className="text-2xl font-semibold mb-5">
                Looking to<span className="text-highlight"> Hire </span>?
            </h2>
            <p className="mb-5 text-lg text-gray-300">
                Whether you are looking for a full-time employee or a freelance expert, I’m available for opportunities.
            </p>
            <div className="inline-flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                    href={viewResume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-blue-600 text-white py-2 px-5 rounded-lg font-bold hover:bg-green-700 transition duration-300"
                >
                    <span className="me-3">View My Resume</span>
                    <FaEye size={16} />
                </a>

                <a
                    href={resume}
                    download
                    className="flex items-center bg-blue-600 text-white py-2 px-5 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
                >
                    <span className="me-3">Download My Resume</span>
                    <FaDownload size={16} />
                </a>
            </div>
        </section>
    );
};

export default ResumeSection;