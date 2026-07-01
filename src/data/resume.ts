export const personalInfo = {
  name: "Shahriyar Tarnasi",
  title: "Senior Django & Python Backend Engineer",
  email: "shahryar.tarnasi@gmail.com",
  linkedin: "https://www.linkedin.com/in/tarnasi",
  github: "https://github.com/tarnasi",
  website: "https://devdiaries.work",
  resumeUrl: "/resume.pdf",
};

export const summary =
  "Senior Python Backend Engineer with 7+ years of experience designing and delivering production-grade web applications, APIs, and distributed systems. Expert in Django, FastAPI, and Flask with deep expertise in async programming, GraphQL, message brokers, real-time systems, and multi-database architectures.";

export const experience = [
  {
    id: "saxon",
    company: "Saxon Software",
    role: "Senior Python Backend Engineer",
    subtitle: "Data Pipelines & Cloud",
    period: "June 2022 – Present",
    bullets: [
      "Engineered robust end-to-end functionalities using modern frameworks, integrating frontend and backend components to deliver seamless user experiences for diverse client applications.",
      "Developed and maintained backend systems for cybersecurity and drilling data platforms, enabling secure data processing and real-time operational insights.",
    ],
  },
  {
    id: "fibodex",
    company: "Fibodex",
    role: "Senior Python Backend Engineer",
    period: "May 2020 – Dec 2021",
    bullets: [
      "Implemented secure authentication and authorization systems using JWT, OAuth2, and Google OAuth.",
      "Developed backend web applications with Python frameworks (Django, FastAPI), focusing on scalability and performance.",
      "Built real-time communication features using WebSockets for high-concurrency applications.",
      "Processed and managed large-scale cryptocurrency data, implementing caching strategies for high-performance data retrieval.",
      "Integrated payment gateways to support secure and reliable transactions in web applications.",
    ],
  },
  {
    id: "pishkhan",
    company: "Pishkhan",
    role: "Python Backend Engineer",
    period: "Jan 2020 – May 2020",
    bullets: [
      "Developed and maintained web applications using Node.js (ExpressJS) and PHP (Laravel), ensuring scalability and reliability.",
      "Implemented responsive frontend interfaces using JavaScript, jQuery, and Angular to enhance user experience.",
      "Integrated APIs and third-party services to extend application functionality and streamline workflows.",
      "Optimized application performance through efficient algorithms and database query improvements, reducing latency and resource usage.",
      "Collaborated with cross-functional teams to gather requirements and deliver high-quality, production-ready software solutions.",
    ],
  },
  {
    id: "sofigasht",
    company: "Sofigasht",
    role: "Python Backend Developer",
    period: "Feb 2019 – Apr 2020",
    bullets: [
      "Developed a CRM system to manage customer data, track interactions, and streamline sales processes.",
      "Implemented features for customer management, including contact tracking, segmentation, and reporting.",
      "Built modules to support multi-country tour management, handling bookings, itineraries, and localization.",
    ],
  },
];

export const projects = [
  {
    id: "drilliphant",
    name: "Drilliphant",
    org: "Saxon Software",
    period: "July 2022 – Present",
    url: "https://saxonsoftware.com/",
    description:
      "Backend systems for cybersecurity and drilling data platforms, enabling secure data processing and real-time operational insights.",
    tech: ["Python", "Django", "FastAPI", "PostgreSQL", "Docker", "WebSockets"],
  },
  {
    id: "eforge",
    name: "Environment Forge",
    org: "Personal Open Source",
    period: "April 2026",
    url: "https://github.com/tarnasi/eforge",
    description:
      "Encrypted environment variable manager for Python with zero external dependencies — cross-platform, secure, and deployment-ready.",
    tech: ["Python", "Cryptography", "CLI", "Open Source"],
  },
];

export const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "TypeScript", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    skills: [
      { name: "Django", level: 95 },
      { name: "FastAPI", level: 90 },
      { name: "Flask", level: 85 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 85 },
    ],
  },
  {
    id: "data",
    label: "Data Engineering",
    skills: [
      { name: "ETL/ELT", level: 85 },
      { name: "Data Pipelines", level: 88 },
      { name: "Data Modeling", level: 82 },
      { name: "Airflow", level: 78 },
    ],
  },
  {
    id: "architecture",
    label: "Architecture",
    skills: [
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 80 },
      { name: "Microservices", level: 88 },
      { name: "WebSockets", level: 85 },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 82 },
      { name: "Kafka", level: 78 },
    ],
  },
];

export const education = {
  degree: "Bachelor's Degree in Information Technology: Web",
  institution: "Elmi Karbordi",
  location: "Tehran, Iran",
  year: "2018",
  minor: "Minor in Web Developing",
};

export const certifications = [
  {
    name: "Advanced Python Programming And Object-Oriented Thinking Course",
    issuer: "Quera",
    year: "2025",
  },
  {
    name: "TypeScript for JavaScript Developers",
    issuer: "LinkedIn",
    year: "2025",
  },
  {
    name: "Blockchain: Learning Solidity",
    issuer: "LinkedIn",
    year: "2025",
  },
  {
    name: "Blockchain Basics",
    issuer: "LinkedIn",
    year: "2025",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];
