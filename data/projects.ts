export interface Project {
  id: number;
  title: string;
  des: string[];
  img: string;
  iconLists: string[];
  live: string;
  code: string;
  link: string;
  category: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AgriAssist",
    des: [
      "Developed a cross-platform mobile app for sustainable agriculture with a CNN model for plant disease detection achieving 95% accuracy",
      "Built a RAG system for pesticide recommendation using Gemini 2.0 and ChromaDB for intelligent agricultural guidance",
      "Hosted real-time inference with FastAPI during the Horizon '25 hackathon, demonstrating production-ready deployment capabilities"
    ],
    img: "/projects/agriassist.jpg",
    iconLists: ["/logos/python.png", "/logos/tensorflow.svg", "/logos/fastapi.svg", "/logos/gemini.svg"],
    live: "",
    code: "https://github.com/rprakashdass/agriassist-frontend",
    link: "https://github.com/rprakashdass/agriassist-frontend",
    category: "ai-ml",
    skills: ["CNN", "Computer Vision", "RAG Systems", "FastAPI", "Gemini AI"]
  },
  {
    id: 2,
    title: "AI Tool for P&ID Digitization",
    des: [
      "Built an AI tool to digitize Piping and Instrumentation Diagrams by detecting symbols, text and understanding their connections",
      "Developed computer vision models for industrial diagram analysis and automated digitization workflows",
      "Created as part of ABB EngineeredX hackathon, deep-diving into industrial AI applications for engineering automation"
    ],
    img: "/projects/pid-digitization.jpg",
    iconLists: ["/logos/python.png", "/logos/opencv.svg", "/logos/tensorflow.svg"],
    live: "",
    code: "https://github.com/rprakashdass/digital-intelligence-to-pid",
    link: "https://github.com/rprakashdass/digital-intelligence-to-pid",
    category: "ai-ml",
    skills: ["Computer Vision", "OpenCV", "Industrial AI", "Symbol Detection", "Python"]
  },
  {
    id: 3,
    title: "NLP Model for Text Analytics and Classification",
    des: [
      "Led development of advanced NLP models using LSTM, Logistic Regression, XGBoost, and Random Forest for text classification",
      "Implemented comprehensive text analytics pipeline for cybersecurity threat detection and classification",
      "Developed during IndiaAI CyberGuard AI Hackathon 2024, focusing on AI-driven security solutions"
    ],
    img: "/projects/nlp-text-analytics.jpg",
    iconLists: ["/logos/python.png", "/logos/tensorflow.svg", "/logos/scikit-learn.svg"],
    live: "",
    code: "https://github.com/rprakashdass/ncrp-nlp-model",
    link: "https://github.com/rprakashdass/ncrp-nlp-model",
    category: "ai-ml",
    skills: ["NLP", "LSTM", "XGBoost", "Text Classification", "Cybersecurity"]
  },
  {
    id: 4,
    title: "Multiformat AI Intake System",
    des: [
      "Designed an intelligent pipeline using a custom LLM orchestrator to process and classify unstructured data",
      "Implemented a chain of AI agents for intent classification and automated information extraction",
      "Containerized the full pipeline with Docker and deployed on AWS, ensuring scalability and smooth operationalization"
    ],
    img: "/projects/ai-intake-system.jpg",
    iconLists: ["/logos/python.png", "/logos/aws.svg", "/logos/docker.svg"],
    live: "",
    code: "https://github.com/rprakashdass/multiformat-ai-intake-system",
    link: "https://github.com/rprakashdass/multiformat-ai-intake-system",
    category: "ai-ml",
    skills: ["LLM", "AI Agents", "Docker", "AWS", "Data Processing"]
  },
  {
    id: 5,
    title: "NanoHost - Lightweight C++ Web Server",
    des: [
      "Built a lightweight web server from scratch in C++ with a hybrid routing engine for high-performance web applications",
      "Implemented efficient request handling, HTTP parsing, and routing mechanisms using modern C++ features",
      "Designed for minimal resource usage while maintaining excellent performance and scalability"
    ],
    img: "/projects/nanohost.jpg",
    iconLists: ["/logos/cpp.svg"],
    live: "",
    code: "https://github.com/rprakashdass/nanohost",
    link: "https://github.com/rprakashdass/nanohost",
    category: "systems",
    skills: ["C++", "Web Server", "HTTP", "Routing Engine", "Performance Optimization"]
  },
  {
    id: 6,
    title: "Fault-Tolerant Distributed Key-Value Store",
    des: [
      "Implemented the Raft consensus algorithm from scratch in Go to build a fault-tolerant, distributed system capable of maintaining state consistency across a cluster",
      "Engineered core Raft mechanics including leader election, log replication, and automatic failover, ensuring system availability even with node failures",
      "Designed a secure, concurrent network architecture using goroutines and channels to handle client requests and internal cluster communication efficiently"
    ],
    img: "/projects/distributed-kvstore.jpg",
    iconLists: ["/logos/go.svg"],
    live: "",
    code: "https://github.com/rprakashdass/key-value-store",
    link: "https://github.com/rprakashdass/key-value-store",
    category: "systems",
    skills: ["Go", "Raft Algorithm", "Distributed Systems", "Consensus", "Goroutines"]
  },
  {
    id: 7,
    title: "Real Time Face Recognition System",
    des: [
      "Experience fast, secure, and accurate identification with advanced facial recognition technology",
      "Built with Flask and advanced real-time facial recognition for security applications",
      "Optimized for performance with efficient resource management"
    ],
    img: "/projects/face_detection_project.jpg",
    iconLists: ["/logos/python.png", "/logos/opencv.svg", "/logos/flask.svg"],
    live: "",
    code: "https://github.com/rprakashdass/realtime-face-recognition",
    link: "https://github.com/rprakashdass/realtime-face-recognition",
    category: "ai-ml",
    skills: ["Face Recognition", "OpenCV", "Flask", "Computer Vision", "Security"]
  }
];
