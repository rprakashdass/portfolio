export const navItems = [
    { name: "About", link: "#hero" },
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
    { name: 'JavaScript', logo: '/logos/java.png' },
  ],
  'Web Development': [
    { name: 'HTML', logo: '/logos/html.svg' },
    { name: 'CSS', logo: '/logos/css.svg' },
    { name: 'Bootstrap', logo: '/logos/bootstrap.svg' },
    { name: 'JavaScript', logo: '/logos/js.png' },
  ],
  'Libraries & Frameworks': [
    { name: 'React', logo: '/logos/react.svg' },
    { name: 'Node.js', logo: '/logos/node.png' },
    { name: 'Express.js', logo: '/logos/express.png' },
    { name: 'Flask', logo: '/logos/flask-100.svg' },
    { name: 'Django', logo: '/logos/django.svg' },
    { name: 'Tensorflow', logo: '' },
  ],
  'Databases': [
    { name: 'MongoDB', logo: '' },
    { name: 'MySQL', logo: '' },
    { name: 'SQLite', logo: '' },
  ],
  'Tools': [
    { name: 'Git', logo: '' },
    { name: 'Figma', logo: '' },
  ],
};

  
  export const projects = [
    {
      id: 1,
      title: "Toppings - Online Cooking Forum",
      des: "Discover, share, and master delicious recipes with our vibrant cooking community! 🥘✨ From beginner tips to gourmet tricks, we've got something for every foodie. Join now and turn your kitchen into a culinary adventure! 👩‍🍳👨‍🍳",
      img: "/toppings.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://toppings.rprakashdass.in",
    },
    {
      id: 2,
      title: "CMS - Client Management for administrations",
      des: "Stay organized and build stronger relationships with our Client Management System! 📋🤝 Manage contacts, track interactions, and boost efficiency—all in one user-friendly platform. Simplify your workflow and focus on what matters most: your clients.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "http://cms-phpapp.kesug.com/",
    },
    {
      id: 3,
      title: "Real Time Face Recognition - Flask App",
      des: "Unlock fast, secure, and accurate identification with real-time face recognition! 🔍✨",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/rprakashdass/realtime-face-recognition",
    },
    {
      id: 4,
      title: "RedConnect - Blood Donation Management",
      des: "Save lives effortlessly with RedConnect! ❤️🩸 Connect donors and recipients in real-time, making blood donation faster and easier.",
      img: "/bds.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://redconnect.vercel.app/",
    },
    {
        id: 5,
        title: "Public Transport Tracker - A console Based Application",
        des: "Navigate your commute with ease using the Public Transport Tracker! 🚍⏱️ A console-based application for real-time tracking and smarter travel planning.",
        img: "/public_bus_tracking.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://github.com/rprakashdass/public-transport-tracking",
      },
  ];



  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
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
  