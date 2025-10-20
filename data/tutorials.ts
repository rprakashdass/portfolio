export interface Tutorial {
  id: number;
  title: string;
  description: string[];
  link: string;
  contributors: string[];
}

export const tutorials: Tutorial[] = [
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
  }
];
