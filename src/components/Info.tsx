import { Mail, MapPin, Phone } from "lucide-react"

// Personal Information
export const personalInfo = {
  name: "Ariunjargal Ochirpurev",
  nickname: "Arii",
  title: "Full Stack Developer",
  email: "ariunjargal.ochirpurev@gmail.com",
  phone: "+976 86981230",
  location: "Ulaanbaatar, Mongolia",
  bio: "A passionate Full Stack Developer with international experience, currently enhancing my skills at Pinecone Academy.",
  longBio:
    "I am a versatile professional with experience in restaurant management, office administration, and now pursuing a career in full stack development. With a background in economic management from Nagaoka University in Japan, I bring a unique perspective to problem-solving and project development. My journey in web development started recently, and I'm excited to combine my diverse experience with new technical skills.",
  availability: "Currently studying, open to opportunities",
  resumeLink: "#",
  birthday: "December 30, 1998",
}

// Social Media Links
export const socialLinks = {
  github: "https://github.com/Ariunjargal-O",
  linkedin: "https://www.linkedin.com/in/ariunjargal-ochirpurev-28ba30300/",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://www.instagram.com/opti.ari/",
  facebook: "https://www.facebook.com/profile.php?id=100010655025939&locale=ja_JP",
  // Add more social links as needed
}

// Skills Configuration
export const skills = [
  {
    category: "Frontend",
    icon: "Layout",
    items: [
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Next.js", level: 70 },
      { name: "Tailwind CSS", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "Framer Motion", level: 65 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "Prisma", level: 65 },
      { name: "REST APIs", level: 75 },
      { name: "GraphQL", level: 60 },
    ],
  },
  {
    category: "Tools & Testing",
    icon: "Code",
    items: [
      { name: "Git/GitHub", level: 80 },
      { name: "Vercel", level: 75 },
      { name: "Postman", level: 70 },
      { name: "Render", level: 65 },
      { name: "Jest", level: 60 },
      { name: "Cypress", level: 60 },
      { name: "Figma", level: 70 },
    ],
  },
  {
    category: "Soft Skills",
    icon: "Briefcase",
    items: [
      { name: "Fast Learning", level: 95 },
      { name: "Leadership", level: 90 },
      { name: "Time Management", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "Teamwork", level: 95 },
      { name: "Responsibility", level: 90 },
    ],
  },
]

// Technologies you work with
export const technologies = [
  { name: "HTML5", icon: "Globe" },
  { name: "CSS3", icon: "Layers" },
  { name: "JavaScript", icon: "Code" },
  { name: "TypeScript", icon: "Code" },
  { name: "React", icon: "Code" },
  { name: "Next.js", icon: "Server" },
  { name: "Node.js", icon: "Server" },
  { name: "MongoDB", icon: "Database" },
  { name: "PostgreSQL", icon: "Database" },
  { name: "Tailwind CSS", icon: "Palette" },
  { name: "Prisma", icon: "Database" },
  { name: "GraphQL", icon: "Network" },
  { name: "Git", icon: "GitBranch" },
  { name: "Figma", icon: "Figma" },
  { name: "Jest", icon: "TestTube" },
  { name: "Cypress", icon: "TestTube" },
]

// Projects
export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, projects, and experience.",
    longDescription:
      "This responsive portfolio website was built using Next.js and Tailwind CSS. It features smooth animations, dark/light mode, and a contact form. The project helped me strengthen my React skills and learn about responsive design principles.",
    image: "/placeholder.svg?height=600&width=800",
    category: "frontend",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ariunjargal-O",
    features: [
      "Responsive design for all devices",
      "Dark/light mode toggle",
      "Smooth scroll animations",
      "Interactive UI components",
      "Contact form with validation",
      "Project showcase section",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A simple task management application to organize daily activities.",
    longDescription:
      "This task management application helps users organize their work with features like task creation, due dates, priority levels, and status tracking. It was built as part of my learning journey at Pinecone Academy.",
    image: "/placeholder.svg?height=600&width=800",
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ariunjargal-O",
    features: [
      "Task creation and management",
      "Due dates and priority levels",
      "Task filtering and sorting",
      "User authentication",
      "Data persistence with MongoDB",
      "Responsive UI for mobile and desktop",
    ],
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with product catalog and cart functionality.",
    longDescription:
      "This e-commerce platform allows users to browse products, add items to cart, and complete the checkout process. It includes user authentication, product filtering, and order management features.",
    image: "/placeholder.svg?height=600&width=800",
    category: "fullstack",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Prisma", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ariunjargal-O",
    features: [
      "User authentication and profiles",
      "Product catalog with search and filters",
      "Shopping cart functionality",
      "Checkout process",
      "Responsive design",
      "Admin dashboard for product management",
    ],
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application showing current conditions and forecasts.",
    longDescription:
      "This weather dashboard provides current conditions and forecasts with features like location search, hourly and daily forecasts, and weather alerts. It uses a third-party weather API to fetch real-time data.",
    image: "/placeholder.svg?height=600&width=800",
    category: "frontend",
    technologies: ["React", "JavaScript", "Weather API", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ariunjargal-O",
    features: [
      "Current weather conditions",
      "5-day forecast",
      "Location search",
      "Responsive design",
      "Weather icons and visualizations",
      "Temperature unit conversion",
    ],
  },
]

// Experience
export const experiences = [
  {
    title: "Full Stack Developer Student",
    company: "Pinecone Academy",
    location: "Ulaanbaatar, Mongolia",
    date: "November 2024 - June 2025",
    description: "Currently studying full stack development, focusing on modern web technologies and best practices.",
    achievements: [
      "Learning MERN stack (MongoDB, Express, React, Node.js)",
      "Building responsive and interactive web applications",
      "Collaborating with peers on group projects",
      "Developing full-stack applications with TypeScript and Next.js",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "TypeScript", "Next.js"],
    type: "education",
  },
  {
    title: "Office Manager",
    company: "New-line Education Center",
    location: "Ulaanbaatar, Mongolia",
    date: "September 2024 - April 2025",
    description: "Managed office operations and administrative functions for an education center.",
    achievements: [
      "Streamlined administrative processes",
      "Coordinated with teaching staff and students",
      "Maintained office records and documentation",
      "Implemented time management systems",
    ],
    technologies: ["MS Office", "Administrative Systems", "Customer Service"],
    type: "work",
  },
  {
    title: "Restaurant Manager",
    company: "Restaurant",
    location: "Tokyo, Japan",
    date: "April 2023 - June 2024",
    description:
      "Managed daily operations of a restaurant, including staff supervision, customer service, and inventory management.",
    achievements: [
      "Supervised a team of 10+ staff members",
      "Improved customer satisfaction ratings",
      "Optimized inventory management processes",
      "Implemented marketing strategies to increase customer base",
    ],
    technologies: ["POS Systems", "Inventory Management", "Team Leadership", "Marketing"],
    type: "work",
  },
  {
    title: "Bachelor's Degree in Economic Management",
    company: "Nagaoka University",
    location: "Niigata, Japan",
    date: "April 2020 - March 2023",
    description: "Studied Economic Management with a focus on business administration and international economics.",
    achievements: [
      "Completed coursework in business management, economics, and finance",
      "Participated in international student programs",
      "Developed analytical and problem-solving skills",
      "Gained cross-cultural communication experience",
    ],
    technologies: [],
    type: "education",
  },
  {
    title: "Student",
    company: "Citi University",
    location: "Mongolia",
    date: "October 2016 - March 2020",
    description: "Studied at Citi University in Mongolia.",
    achievements: ["Completed foundational coursework", "Participated in student activities"],
    technologies: [],
    type: "education",
  },
  {
    title: "High School Student",
    company: "NUM Lycee Baigali-Ekh High School",
    location: "Mongolia",
    date: "September 2013 - June 2016",
    description: "Completed high school education with a focus on general studies.",
    achievements: ["Graduated with good academic standing", "Participated in extracurricular activities"],
    technologies: [],
    type: "education",
  },
]

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Instructor Name",
    role: "Instructor at Pinecone Academy",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Ariunjargal is a dedicated student who consistently demonstrates a strong work ethic and eagerness to learn. Their attention to detail and problem-solving skills are impressive, and they're always willing to help fellow students.",
    initials: "IN",
  },
  {
    id: 2,
    name: "Former Colleague",
    role: "New-line Education Center",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Working with Arii was a pleasure. They brought organization and efficiency to our office operations and were always professional and friendly. Their ability to manage multiple tasks while maintaining quality is remarkable.",
    initials: "FC",
  },
  {
    id: 3,
    name: "Restaurant Owner",
    role: "Tokyo Restaurant",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Ariunjargal was an exceptional manager who consistently delivered high-quality service. Their leadership skills and attention to customer satisfaction helped our restaurant thrive. They have a natural talent for team management.",
    initials: "RO",
  },
]

// Stats
export const stats = [
  { value: "3+", label: "Years in Japan" },
  { value: "2", label: "Languages" },
  { value: "5+", label: "Projects" },
  { value: "3", label: "Countries Lived In" },
]

// Contact Information
export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "ariunjargal.ochirpurev@gmail.com",
    link: "mailto:ariunjargal.ochirpurev@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+976 86981230",
    link: "tel:+97686981230",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ulaanbaatar, Mongolia",
    link: "https://maps.google.com/?q=Ulaanbaatar,+Mongolia",
  },
]

// Interests
export const interests = [
  "Learning new technologies",
  "International travel",
  "Languages and cultures",
  "Photography",
  "Outdoor activities",
]
