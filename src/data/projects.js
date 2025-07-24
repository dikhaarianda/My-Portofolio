export const projects = [
  {
    id: 1,
    name: "Video Learning Platform",
    description: "Interactive e-learning platform with course catalog, video player integration, and progress tracking system",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "Node.js", "REST API", "MongoDB"],
    github: "https://github.com/dikhaarianda/VideoBelajar-ReactJS",
    demo: "https://video-belajar-reactjs.vercel.app/", // Add if available
    image: "/projects/video-learning.webp",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    name: "Senandung Logistics",
    description: "Responsive logistics company website with service offerings, dynamic quote request form, and interactive FAQ section",
    techStack: ["React.js", "Tailwind CSS", "Vite", "JavaScript"],
    github: "https://github.com/dikhaarianda/senandung-logistics",
    demo: "https://senandung-logistics.vercel.app/",
    image: "/projects/senandung-logistics.webp",
    featured: false,
    category: "Frontend"
  },
  {
    id: 3,
    name: "Catty Pet Shop",
    description: "Responsive e-commerce pet shop website with product catalog, services showcase, and company information pages",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    github: "https://github.com/dikhaarianda/cattypetshop",
    demo: null,
    image: "/projects/catty-petshop.webp",
    featured: false,
    category: "Frontend"
  },
  {
    id: 4,
    name: "Theft Detection System",
    description: "AI-powered surveillance system using CNN-LSTM architecture for theft behavior identification. Patent registered: EC00202492046",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit", "CNN", "LSTM"],
    github: "https://github.com/dikhaarianda/Theft-Detection-System",
    demo: "https://www.youtube.com/watch?v=67xgDB7nue0",
    image: "/projects/theft-detection.webp",
    featured: true,
    category: "AI/ML",
    patent: "EC00202492046"
  },
  {
    id: 5,
    name: "Gender Face Classification",
    description: "Deep learning model for gender classification from facial images achieving 88% accuracy using VGG-16 architecture",
    techStack: ["Python", "TensorFlow", "OpenCV", "Jupyter Notebook", "CNN", "VGG-16"],
    github: "https://github.com/dikhaarianda/Gender-Face-Classification",
    demo: null,
    image: "/projects/gender-classification.webp",
    featured: true,
    category: "AI/ML",
    metrics: {
      accuracy: "88%",
      model: "VGG-16"
    }
  },
  {
    id: 6,
    name: "Laptop Price Predictor",
    description: "Machine learning model that predicts laptop prices based on specifications with R² Score: 0.88 and MAE: 0.16",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    github: "https://github.com/dikhaarianda/Laptop-Price-Predictor",
    demo: "https://laptop-price-predictor-streamlit.app/", // Add if available
    image: "/projects/laptop-predictor.webp",
    featured: false,
    category: "AI/ML",
    metrics: {
      r2Score: "0.88",
      mae: "0.16"
    }
  }
];

export const education = [
  {
    id: 1,
    institution: "Universitas Bunda Mulia",
    degree: "Bachelor of Informatics",
    year: "2020 - 2024",
    description: "GPA: 3.76/4.00",
    location: "Jakarta, Indonesia"
  }
];

export const achievements = [
  {
    id: 1,
    title: "Patent for System Design and Implementation in Surveillance Technology",
    issuer: "Directorate General of Intellectual Property (Indonesia)",
    date: "August 27, 2024",
    credential: "EC00202492046",
  }
];

export const certifications = [
  {
    id: 1,
    title: "Full Stack Development",
    issuer: "Harisenin",
    date: "March 2025 - Present",
    credential: "In Progress (Expected Aug 2025)"
  },
  {
    id: 2,
    title: "Certified International Specialist Data Visualization (CISDV)",
    issuer: "PASAS Institute",
    date: "January 2024 - February 2024",
    credential: "#CISDV14480"
  },
  {
    id: 3,
    title: "AI Career Bootcamp Program for Computer Vision",
    issuer: "Indonesia AI",
    date: "September 2023 - February 2024",
    credential: "#AICB2402230013"
  },
  {
    id: 4,
    title: "Deploy Machine Learning to Cloud",
    issuer: "Codepolitan",
    date: "July 2023",
    credential: "#MXCW63M"
  }
];