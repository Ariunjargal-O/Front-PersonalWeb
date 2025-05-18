// Personal Information
export const personalInfo = {
  name: "Ariunjargal Ochirpurev",
  image: "/placeholder.svg?height=200&width=200",
  title: "Full Stack Developer",
  email: "ariunjargal.ochirpurev@gmail.com",
  phone: "+976 86981230",
  location: "Ulaanbaatar, Mongolia",
  bio: "A passionate Full Stack Developer creating modern and responsive web applications that lead to the success of the overall product.",
  longBio:
    "I am a full stack developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Node.js, Express, PostgreSQL, MongoDB, HTML, CSS, and more. My journey in web development started in 2018, and since then, I've worked on various projects that have helped me grow as a developer. I enjoy solving complex problems and learning new technologies.",
  availability: "Open to opportunities",
  resumeLink: "#",
};

// Social Media Links
export const socialLinks = {
  github: "https://github.com/Ariunjargal-O", 
  linkedin: "https://www.linkedin.com/in/ariunjargal-ochirpurev-28ba30300/",
  facebook:
    "https://www.facebook.com/profile.php?id=100010655025939&locale=ja_JP",
  instagram: "https://www.instagram.com/opti.ari/",
  
};

// Skills Configuration
export const skills = [
  {
    category: "Frontend",
    icon: "Layout",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "Python", level: 75 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "Prisma", level: 75 },
    ],
  },
];

// Technologies you work with
export const technologies = [
  { name: "HTML5", icon: "Globe" },
  { name: "CSS3", icon: "Layers" },
  { name: "JavaScript", icon: "Code" },
  { name: "Git", icon: "GitBranch" },
  { name: "Figma", icon: "Figma" },
  { name: "React Native", icon: "Smartphone" },
  { name: "Docker", icon: "Terminal" },
  { name: "AWS", icon: "Cpu" },
];

// Projects
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    longDescription:
      "This comprehensive e-commerce solution includes user authentication, product catalog with filtering and search, shopping cart, checkout process with Stripe integration, order management, and an admin dashboard. Built with a focus on performance and user experience.",
    image: "/placeholder.svg?height=600&width=800",
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "User authentication and profiles",
      "Product catalog with search and filters",
      "Shopping cart and wishlist",
      "Secure checkout with Stripe",
      "Order tracking and history",
      "Admin dashboard for inventory management",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team functionality.",
    longDescription:
      "This task management application helps teams organize their work with features like task creation, assignment, due dates, priority levels, and status tracking. It includes real-time updates using WebSockets, file attachments, comments, and team collaboration tools.",
    image: "/placeholder.svg?height=600&width=800",
    category: "frontend",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "React Query",
    ],
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Task creation and assignment",
      "Due dates and priority levels",
      "Real-time updates with WebSockets",
      "File attachments and comments",
      "Team collaboration tools",
      "Calendar and Kanban views",
    ],
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description:
      "An analytics dashboard for financial data visualization with interactive charts and reports.",
    longDescription:
      "This finance dashboard provides a comprehensive view of financial data with interactive charts, customizable reports, and data analysis tools. It includes features for tracking expenses, income, investments, and financial goals, with export capabilities and notification alerts.",
    image: "/placeholder.svg?height=600&width=800",
    category: "frontend",
    technologies: ["React", "D3.js", "Material UI", "Redux", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Interactive data visualization",
      "Expense and income tracking",
      "Investment portfolio analysis",
      "Financial goal setting",
      "Customizable reports and exports",
      "Notification alerts for financial events",
    ],
  },
  // Add more projects as needed
];

// Experience
export const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Company Name",
    location: "City, Country",
    date: "2022 - Present",
    description:
      "Led the frontend development team in building a modern SaaS platform. Implemented new features, improved performance, and mentored junior developers.",
    achievements: [
      "Reduced page load time by 40% through code optimization and lazy loading",
      "Implemented a component library that increased development speed by 30%",
      "Mentored 5 junior developers who went on to become mid-level developers",
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    type: "work",
  },
  {
    title: "Full Stack Developer",
    company: "Company Name",
    location: "City, Country",
    date: "2020 - 2022",
    description:
      "Developed and maintained multiple web applications for clients across various industries. Worked on both frontend and backend development.",
    achievements: [
      "Built a custom CRM system that increased client productivity by 25%",
      "Implemented automated testing that reduced bugs in production by 60%",
      "Designed and developed APIs used by mobile and web applications",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    type: "work",
  },
  {
    title: "Frontend Developer",
    company: "Company Name",
    location: "City, Country",
    date: "2018 - 2020",
    description:
      "Created responsive and interactive user interfaces for client websites. Collaborated with designers and backend developers to implement features.",
    achievements: [
      "Developed 15+ client websites with responsive designs",
      "Implemented accessibility improvements that increased WCAG compliance",
      "Created interactive data visualizations for financial clients",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "jQuery"],
    type: "work",
  },
  // Add education
  {
    title: "Bachelor of Science in Computer Science",
    company: "University Name",
    location: "City, Country",
    date: "2014 - 2018",
    description:
      "Graduated with honors. Focused on web development, algorithms, and data structures. Participated in coding competitions and hackathons.",
    achievements: [
      "Graduated with a 3.8 GPA",
      "Won 2nd place in the annual hackathon",
      "Published research paper on web accessibility",
    ],
    technologies: [],
    type: "education",
  },
  // Add more experiences as needed
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "Position at Company",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Working with this developer was a game-changer for our project. They not only built a robust platform but also provided valuable insights that improved our product. Their technical expertise combined with business understanding makes them stand out from other developers.",
    initials: "CN",
  },
  {
    id: 2,
    name: "Client Name",
    role: "Position at Company",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are impressive. They took our vague requirements and transformed them into an intuitive, beautiful application that exceeded our expectations.",
    initials: "CN",
  },
  {
    id: 3,
    name: "Client Name",
    role: "Position at Company",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "As a designer, I appreciate developers who can bring designs to life exactly as envisioned. This developer does this and more. Their implementation was pixel-perfect, and they even suggested improvements that enhanced the user experience while maintaining the design integrity.",
    initials: "CN",
  },
  // Add more testimonials as needed
];

// Stats
export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Happy Clients" },
  { value: "3", label: "Awards" },
];

// Contact Information
export const contactInfo = [
  {
    icon: "Mail",
    title: "Email",
    value: "ariunjargal.ochirpurev@gmail.com",
    link: "mailto:your.email@example.com",
  },
  {
    icon: "Phone",
    title: "Phone",
    value: "+976 86981230",
    link: "tel:+11234567890",
  },
  {
    icon: "MapPin",
    title: "Location",
    value: "Ulaanbaatar, Mongolia",
    link: "https://maps.google.com/?q=Ulaanbaatar,Mongolia",
  },
];

// Interests
export const interests = [
  "Hiking in the mountains",
  "Reading science fiction novels",
  "Exploring new coffee shops",
  "Playing chess and strategic board games",
  "Photography and visual arts",
];
