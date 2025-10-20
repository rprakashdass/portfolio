export interface Skill {
  name: string;
  logo: string;
}

export interface Skills {
  [category: string]: Skill[];
}

export const skills: Record<string, { name: string; logo: string }[]> = {
  'Proficient': [
    { name: 'Python', logo: '/logos/python.png' },
    { name: 'C++', logo: '/logos/cpp.svg' },
    { name: 'SQL', logo: '/logos/mysql.svg' },
    { name: 'Git', logo: '/logos/git.svg' },
    { name: 'REST APIs', logo: '/logos/rest.svg' },
    { name: 'FAST APIs', logo: '/logos/fastapi.svg' },
  ],
  'Experienced With': [
    { name: 'Generative AI (RAG, LLMs)', logo: '/logos/openai.svg' },
    { name: 'Docker', logo: '/logos/docker.svg' },
    { name: 'AWS Basics', logo: '/logos/aws.svg' },
    { name: 'MLOps', logo: '/logos/mlflow.svg' },
    { name: 'CI/CD', logo: '/logos/github.svg' },
  ],
  'Familiar With': [
    { name: 'React.js', logo: '/logos/react.svg' },
    { name: 'Express.js', logo: '/logos/express.png' },
    { name: 'Go', logo: '/logos/go.svg' },
    { name: 'MongoDB', logo: '/logos/mongodb.svg' },
  ],
  'Additional Technologies': [
    { name: 'JavaScript', logo: '/logos/js.svg' },
    { name: 'Node.js', logo: '/logos/node.png' },
    { name: 'Django', logo: '/logos/django.svg' },
    { name: 'Flask', logo: '/logos/flask.svg' },
    { name: 'Linux', logo: '/logos/linux.svg' },
  ],
};
