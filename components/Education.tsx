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
        <div className="flex border-white/30 shadow-md p-3 border rounded-lg hover:cursor-pointer section-gradient">
            <div className="flex-1 text-left">
                <h3 className="font-bold text-purple-700 text-xl">{role}</h3>
                <h4 className="mb-2 text-gray-500 text-lg">{organization}</h4>
                <p className="mb-2 text-gray-500 text-sm italic">{year}</p>
                <p className="text-white/80">{description}</p>
            </div>
        </div>
    );
};


const EducationCard:
    React.FC<EducationCardProps> = ({ degree, institution, year, description }) => {
        return (
            <div className="flex border-white/30 shadow-md p-3 border rounded-lg hover:cursor-pointer section-gradient">
                <div className="flex-1 text-left">
                    <h3 className="flex items-center font-bold text-purple-600 text-xl">
                        {degree}
                    </h3>
                    <h4 className="mb-2 text-gray-500 text-lg">
                        {institution}
                    </h4>
                    <p className="mb-2 text-gray-500 text-sm italic">{year}</p>
                    <p className="text-white/80">{description}</p>
                </div>
            </div>

        );
    };


const EducationSection: React.FC = () => {
    return (
        <section>
            <h2 className="md:block hidden heading">Academics</h2>
            <div className="gap-3 grid grid-cols-1 md:grid-cols-2">
                <h1 className="block md:hidden heading">
                    Education
                </h1>
                <EducationCard
                    degree="Bachelor of Technology in Artificial Intelligence and Machine Learning"
                    institution="Sri Shakthi Institute of Engineering and Technology"
                    year="2022 - 2026"
                    description="Specializing in AI/ML, covering deep learning, computer vision, and data science."
                />

                <h1 className="block relative md:hidden heading">
                    Internship
                </h1>
                <EducationCard
                    degree="Artificial Intelligence Project Intern"
                    institution="Infosys Springboard 5.0 Batch 1"
                    year="OCT 2024 - DEC 2024"
                    description="Specializing in AI/ML, covering deep learning, computer vision, and data science."
                />

                <h1 className="block relative md:hidden grid-cols-1 heading">
                    Organization
                </h1>

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