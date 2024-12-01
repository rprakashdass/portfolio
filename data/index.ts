export const navItems = [
    { name: "Products", link: "#products" },
    { name: "Projects", link: "#projects" },
    { name: "Social Media", link: "#social-media" },
    { name: "Contact", link: "#contact" },
  ];


export interface Skill {
  name: string;
  logo: string;
}

export interface Skills {
  [category: string]: Skill[];
}

export const skills: Skills = {
  'Programming Languages': [
    { name: 'C', logo: '/logos/c.svg' },
    { name: 'C++', logo: '/logos/cpp.svg' },
    { name: 'Python', logo: '/logos/python.png' },
  ],
  'Web Development': [
    { name: 'HTML', logo: '/logos/html.svg' },
    { name: 'CSS', logo: '/logos/css.svg' },
    { name: 'Bootstrap', logo: '/logos/bootstrap.svg' },
    { name: 'JavaScript', logo: '/logos/js.svg' },
  ],
  'Libraries & Frameworks': [
    { name: 'React', logo: '/logos/react.svg' },
    { name: 'Node.js', logo: '/logos/node.png' },
    { name: 'Express.js', logo: '/logos/express.png' },
    { name: 'Flask', logo: '/logos/flask.svg' },
    { name: 'Django', logo: '/logos/django.svg' },
    { name: 'Tensorflow', logo: '/logos/tf.svg' },
  ],
  'Databases & Tools': [
    { name: 'MongoDB', logo: '/logos/mongodb.svg' },
    { name: 'MySQL', logo: '/logos/mysql.svg' },
    { name: 'Git', logo: '/logos/git.svg' },
    { name: 'Figma', logo: '/logos/figma.svg' },
  ],
};


export const products = [
  {
    id: 2,
    title: "Client Management System",
    des:"Developed using PHP: This application enables automated task assignment and follow-ups with minimal human intervention",
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
      des: "Explore the limited functionality website and get in touch for the complete product.",
      img: "/projects/portfolio-project.png",
      iconLists: ["/logo/boostrap.svg", "/logo/javascript.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://portfolio.project.rprakashdass.in",
    },
    {
      id: 2,
      title: "Toppings - Online Cooking Forum",
      des: "Discover, share, and master delicious recipes with our vibrant cooking community! 🥘✨ From beginner tips to gourmet tricks, we've got something for every foodie. Join now and turn your kitchen into a culinary adventure! 👩‍🍳👨‍🍳",
      img: "/projects/toppings.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://toppings.project.rprakashdass.in",
    },
    {
      id: 3,
      title: "Real Time Face Recognition - Flask App",
      des: "Unlock fast, secure, and accurate identification with real-time face recognition! 🔍✨",
      img: "/projects/face_detection_project.jpg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/rprakashdass/realtime-face-recognition",
    },
    {
      id: 4,
      title: "RedConnect - Blood Donation Management",
      des: "Save lives effortlessly with RedConnect! ❤️🩸 Connect donors and recipients in real-time, making blood donation faster and easier.",
      img: "/projects/bds.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://redconnect.rprakashdass.in/",
    },
    // {
    //     id: 5,
    //     title: "Public Transport Tracker - A console Based Application",
    //     des: "Navigate your commute with ease using the Public Transport Tracker! 🚍⏱️ A console-based application for real-time tracking and smarter travel planning.",
    //     img: "/projects/public_bus_tracking.png",
    //     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    //     link: "https://github.com/rprakashdass/public-transport-tracking",
    //   },
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
      img: "/soc/logo_icon.png",
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
  