
export const navItems = [
  { name: "Products", link: "#products" },
  { name: "Projects", link: '#projects' },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export interface Skill {
  name: string;
  logo: string;
}

export interface Skills {
  [category: string]: Skill[];
}

export const skills: Record<string, { name: string; logo: string }[]> = {
  'Programming Languages': [
    { name: 'C', logo: '/logos/c.svg' },
    { name: 'C++', logo: '/logos/cpp.svg' },
    { name: 'Python', logo: '/logos/python.png' },
    { name: 'JavaScript', logo: '/logos/js.svg' },
  ],
  'Frameworks & Libraries': [
    { name: 'React', logo: '/logos/react.svg' },
    { name: 'Node.js', logo: '/logos/node.png' },
    { name: 'Express.js', logo: '/logos/express.png' },
    { name: 'Django', logo: '/logos/django.svg' },
    { name: 'Bootstrap', logo: '/logos/bootstrap.svg' },
    { name: 'Tailwind CSS', logo: '/logos/tailwind.svg' },
    { name: 'Pandas', logo: '/logos/pandas.svg' },
    { name: 'Numpy', logo: '/logos/numpy.svg' },
  ],
  'Databases': [
    { name: 'MongoDB', logo: '/logos/mongodb.svg' },
    { name: 'MySQL', logo: '/logos/mysql.svg' },
  ],
  'Tools & Platforms': [
    { name: 'Git', logo: '/logos/git.svg' },
    { name: 'Figma', logo: '/logos/figma.svg' },
    { name: 'Linux', logo: '/logos/linux.svg' },
  ],
};


export const products = [
  {
    id: 2,
    title: "Client Management System",
    des: "Developed using PHP: This application enables automated task assignment and follow-ups with minimal human intervention",
    img: "/products/cms.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "http://cms-phpapp.kesug.com/",
  },
  {
    id: 3,
    title: "Payment Integration at Website",
    des: "Implemented the Razorpay Payment Gateway integration at http://srishakthimangofarm.in/ Contributed to the backend support team by assisting in the integration process, ensuring secure payment transactions, and troubleshooting any issues that arose during implementation.",
    img: "/products/payment-gateway-integration.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "http://srishakthimangofarm.in/",
  },
];


export const projects = [
  {
    id: 1,
    title: "Portfolio Application - Developed with React.js and Bootstrap",
    des: [
      "Explore this functional website showcasing modern portfolio designs.",
      "Contact us for the complete product experience.",
    ],
    img: "/projects/portfolio-project.png",
    live: "https://portfolio.project.rprakashdass.in",
    code: "https://github.com/rprakashdass/portfolio",
    link: "https://portfolio.project.rprakashdass.in",
  },
  {
    id: 2,
    title: "Toppings - Online Cooking Forum",
    des: [
      "Discover and share delicious recipes with a vibrant cooking community.",
      "Join now and turn your kitchen into a culinary adventure!",
    ],
    img: "/projects/toppings.jpg",
    live: "https://toppings.project.rprakashdass.in",
    code: "https://github.com/rprakashdass/toppings",
    link: "https://toppings.project.rprakashdass.in",
  },
  {
    id: 3,
    title: "Blood Management System",
    des: [
      "Connect blood donors and recipients effortlessly with RedConnect.",
      "Save lives faster and easier with real-time blood donation.",
    ],
    img: "/projects/blood-bank-management-system.jpg",
    live: "https://redconnect.project.rprakashdass.in",
    code: "https://github.com/rprakashdass/blood-management-system",
    link: "https://redconnect.project.rprakashdass.in",
  },
  {
    id: 4,
    title: "Real Time Face Recognition - Flask App",
    des: [
      "Experience fast, secure, and accurate identification.",
      "Built with Flask and advanced real-time facial recognition technology.",
    ],
    img: "/projects/face_detection_project.jpg",
    live: "",
    code: "https://github.com/rprakashdass/realtime-face-recognition",
    link: "https://github.com/rprakashdass/realtime-face-recognition",
  },
  {
    id: 5,
    title: "TechXplorer - A Hackathon & Coding Competition Platform",
    des: [
      "Host and manage hackathons and coding competitions seamlessly.",
      "Track progress, evaluate submissions, and enable participants to compete effectively.",
    ],
    img: "/projects/techxplorer.jpeg",
    live: "",
    code: "https://github.com/rprakashdass/techxplorer",
    link: "https://github.com/rprakashdass/techxplorer",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/soc/github.png",
    link: "https://github.com/rprakashdass",
  },
  {
    id: 2,
    img: "/soc/kaggle.png",
    link: "https://kaggle.com/rprakashdass",
  },
  {
    id: 3,
    img: "/soc/grey.png",
    link: "https://linkedin.com/in/rprakashdass",
  },
  {
    id: 4,
    img: "/soc/whatsapp.png",
    link: "https://wa.me/+917010047730",
  },
  {
    id: 5,
    img: "/soc/insta.png",
    link: "https://instagram.com/rprakashdass",
  },
];

export const tutorials = [
  {
    id: 1,
    title: "Leetcode Mania",
    description: [
      "120+ Problems",
      "Optimized Solutions",
      "Community Contributions"
    ],
    link: "https://github.com/rprakashdass/leetcode-problems",
    contributors: ["rprakash dass"]
  },
  {
    id: 3,
    title: "C & C++ Guides",
    description: [
      "Beginner to Advanced",
      "Memory Management",
      "Pointers & Data Structures"
    ],
    link: "https://github.com/rprakashdass/c-cpp-tutorial",
    contributors: ["rprakash dass"]
  },
  {
    id: 2,
    title: "NLP Easy Guides & Projects",
    description: [
      "Text Processing",
      "Sentiment Analysis",
      "Real-World Applications"
    ],
    link: "https://github.com/rprakashdass/nlp-tutorial",
    contributors: ["rprakash dass"]
  },
  {
    id: 4,
    title: "Mastering OOPs",
    description: [
      "OOP Principles",
      "Real-World Examples",
      "Scalable Systems"
    ],
    link: "https://github.com/rprakashdass/OOP-Essentials",
    contributors: ["rprakash dass"]
  },
];