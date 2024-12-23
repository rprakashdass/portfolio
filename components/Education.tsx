// import { FaGraduationCap } from 'react-icons/fa';

interface EducationCardProps {
    degree: string;
    institution: string;
    year: string;
    description: string;
}


interface VolunteerExperienceCardProps {
    role: string;
    organization: string;
    year: string;
    description: string;
}

const VolunteerExperienceCard: React.FC<VolunteerExperienceCardProps> = ({ role, organization, year, description }) => {
    return (
        <div className="flex border-white/30 shadow-md p-3 border rounded-lg animate-education-gradient duration-300 hover:cursor-pointer education-gradient">
            <div className="flex-1 text-left">
                <h3 className="font-bold text-white text-xl">{role}</h3>
                <h4 className="mb-2 text-black text-lg">{organization}</h4>
                <p className="mb-2 text-gray-500 text-sm italic">{year}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};


const EducationCard:
    React.FC<EducationCardProps> = ({ degree, institution, year, description }) => {
        return (
            <div className="flex border-white/30 shadow-md p-3 border rounded-lg animate-education-gradient duration-300 hover:cursor-pointer education-gradient">
                <div className="flex-1 text-left">
                    <h3 className="flex items-center font-bold text-white text-xl">
                        {degree}
                    </h3>
                    <h4 className="mb-2 text-black text-lg">
                        {institution}
                    </h4>
                    <p className="mb-2 text-gray-500 text-sm italic">{year}</p>
                    <p>{description}</p>
                </div>
            </div>

        );
    };


const EducationSection: React.FC = () => {
    return (
        <section>
            <h2 className="heading">Academics</h2>
            <div className="gap-3 grid grid-cols-1 md:grid-cols-2">
                <EducationCard
                    degree="Bachelor of Technology in Artificial Intelligence and Machine Learning"
                    institution="Sri Shakthi Institute of Engineering and Technology"
                    year="2022 - 2026"
                    description="Specializing in AI/ML, covering deep learning, computer vision, and data science."
                />
                <EducationCard
                    degree="Artificial Intelligence Project Intern"
                    institution="Infosys Springboard 5.0 Batch 1"
                    year="OCT 2024 - DEC 2024"
                    description="Specializing in AI/ML, covering deep learning, computer vision, and data science."
                />
                <VolunteerExperienceCard
                    role="Community Service Director"
                    organization="Rotaract Club of Sri Shakthi Institute"
                    year="2023 - 2024"
                    description="Led various community service projects and initiatives."
                />
                <VolunteerExperienceCard
                    role="All Avenue Chair"
                    organization="Rotaract Club of Sri Shakthi Institute"
                    year="2024 - Present"
                    description="Had an opportunity to conduct sustainable projects for the community."
                />
            </div>
        </section>
    );
};

export default EducationSection;