
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
  'Databases & API': [
    { name: 'MongoDB', logo: '/logos/mongodb.svg' },
    { name: 'MySQL', logo: '/logos/mysql.svg' },
    { name: 'GraphQL', logo: '/logos/graphql.svg' },
    { name: 'Rest', logo: '/logos/rest.svg' },
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
    title: "Payment Integration at Website",
    des: "Implemented the Razorpay Payment Gateway integration at http://srishakthimangofarm.in/ Contributed to the backend support team by assisting in the integration process, ensuring secure payment transactions, and troubleshooting any issues that arose during implementation.",
    img: "/products/payment-gateway-integration.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "http://srishakthimangofarm.in/",
  },
  {
    id: 3,
    title : "Rush Hour: Treasure Hunt Platform",
    des : "Developed a serverless digital platform for a dynamic treasure hunt event conducted by the Rotaract Club of Sri Shakthi for fundraising. Implemented color-coded riddles, real-time timers using local storage and React hooks, and a custom random generator algorithm, efficiently handling 70+ simultaneous users.",
    img : "/products/rushhour.jpg",
    iconLists : ["/js.svg", "/react.svg", "/ts.svg", "/hooks.svg", "/algo.svg"],
    link : "http://rushhour.rprakashdass.in/"
  },
  {
    id: 6,
    title: "Meme royale - Share Memes, Get Votes!",
    des: "A social platform where users can share and vote on memes. Features include real-time voting, user profiles, meme categories, and a leaderboard system. Built with MERN stack and WebSocket for live updates.",
    img: "/products/meme-royale.jpg",
    iconLists: ["/mongodb.svg", "/express.svg", "/react.svg", "/nodejs.svg", "/jwt.svg"],
    link: "https://meme-royale.rprakashdass.in",
  },
  {
    id: 5,
    title: "New Year New Me - Task Tracker",
    des: "A web application designed to help participants build discipline and focus by completing daily tasks over 21 days. Features user authentication with JWT and a clean, intuitive interface for task management.",
    img: "/products/nynm.jpg",
    iconLists: ["/mongodb.svg", "/express.svg", "/react.svg", "/nodejs.svg", "/jwt.svg"],
    link: "https://resolutions.rprakashdass.in",
  },
];

export const projects = [
  {
    id: 5,
    title : "Group Links",
    des : ["Developed a platform for a groups of members to share and manage links.",
           "The platform allows users to add, edit and delete links easily."
    ],
    img : "/products/group-chat.png",
    iconLists : ["/js.svg", "/react.svg", "/ts.svg", "/hooks.svg", "/algo.svg"],
    live: "https://g.rprakashdass.in",
    code: "https://github.com/rprakashdass/group-links",
    link: "https://g.rprakashdass.in",
  },
  {
    id: 1,
    title: "Portfolio Application with React JS",
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
    title: "Client Management System",
    des: [
      "An application enabling automated task assignment and follow-ups.",
      "improves workflow efficiency and client interactions for businesses.",
    ],
    img: "/projects/cms.png",
    live: "",
    code: "https://github.com/rprakashdass/client-management-system",
    link: "",
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
    link: "",
  }
  // {
  //   id: 6,
  //   title: "TechXplorer - A Hackathon & Coding Competition Platform",
  //   des: [
  //     "Host and manage hackathons and coding competitions seamlessly.",
  //     "Track progress, evaluate submissions, and enable participants to compete effectively.",
  //   ],
  //   img: "/projects/techxplorer.jpeg",
  //   live: "",
  //   code: "https://github.com/rprakashdass/techxplorer",
  //   link: "https://github.com/rprakashdass/techxplorer",
  // },
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
      "270+ Problems",
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