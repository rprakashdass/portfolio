import { FaDownload } from "react-icons/fa6";

const resume = '/resume/PrakashDass_Resume_2025.pdf';

const ResumeSection = () => {
    return (
        <section className="text-center py-20 mb-10">
            <h2 className="text-2xl font-semibold mb-5">Looking to<span className="text-highlight"> Hire </span> ?</h2>
            <p className="mb-5 text-lg text-gray-300">
                Whether you are looking for a full-time employee or a freelance expert, I’m available for opportunities.
            </p>
            <div className="inline-flex justify-center items-center bg-blue-600 text-white py-2 px-5 rounded-lg font-bold hover:bg-blue-700 transition duration-300 cursor-pointer">
                <a
                    href={resume}
                    download
                    className="ml-3 flex items-center"
                    >
                    <span className="me-3">Download My Resume</span>
                    <FaDownload size={16} />
                </a>
            </div>
        </section>
    );
};
export default ResumeSection;