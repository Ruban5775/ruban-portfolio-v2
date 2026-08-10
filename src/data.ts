/**
 * ============================================================
 *  SITE CONTENT — edit this file only to update the website.
 *  No component code needs to change.
 * ============================================================
 */

export type SkillGroup = {
  category: string;
  accent: "orange" | "lime";
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  status: "current" | "past";
  description: string;
  details?: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
};

export type Service = {
  title: string;
  description: string;
  points: string[];
};

export type Stat = { value: string; label: string };

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  status: string;
  stats: Stat[];
};

export type Contact = {
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
};

export const profile: Profile = {
  name: "RUBAN M",
  role: "Frontend Developer",
  tagline:
    "I build fast, responsive interfaces and full-stack web apps — with a serious side in AI workflow automation.",
  bio: "Frontend-focused developer working with React.js, TypeScript and Tailwind CSS, comfortable across the full stack with PHP, Spring Boot and MySQL. I care about clean interfaces, fast load times and details that make a product feel finished. Alongside product work, I design AI-powered automation workflows with n8n and Make.com.",
  status: "Freelance Frontend / Full-Stack Developer — available for new work",
  stats: [
    { value: "1.3+", label: "Years of experience" },
    { value: "10+", label: "Projects delivered" },
    { value: "5+", label: "Automations shipped" },
  ],
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    accent: "orange",
    items: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 / CSS3", "Bootstrap"],
  },
  {
    category: "Backend & APIs",
    accent: "lime",
    items: ["REST APIs", "PHP", "Java", "Spring Boot", "Hibernate"],
  },
  {
    category: "Database",
    accent: "orange",
    items: ["SQL", "MySQL", "Firebase", "MongoDB"],
  },
  {
    category: "AI & Automation",
    accent: "lime",
    items: ["n8n", "Make.com", "Workflow Automation"],
  },
  {
    category: "Tools & Cloud",
    accent: "orange",
    items: ["Git & GitHub", "Postman", "Cloudinary", "FileZilla (FTP)", "AWS / Hostinger VPS"],
  },
];

export const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Pixel-accurate, responsive interfaces in React and TypeScript that stay fast on every device.",
    points: ["React + TypeScript", "Tailwind design systems", "Performance & responsiveness"],
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "End-to-end products — REST APIs, databases, admin panels and deployment on VPS or cloud.",
    points: ["Spring Boot / PHP APIs", "MySQL & MongoDB", "Admin panels & deployment"],
  },
  {
    title: "AI & Workflow Automation",
    description:
      "n8n and Make.com workflows that remove repetitive work — lead gen, notifications, data pipelines.",
    points: ["n8n workflow design", "Make.com integrations", "Data extraction & routing"],
  },
];

export const experiences: Experience[] = [
  {
    role: "Freelance Frontend / Full-Stack Developer",
    company: "Freelance",
    period: "May 2026 – Present",
    status: "current",
    description:
      "Working independently on freelance React.js / full-stack projects, including AI-powered workflow automation builds using n8n and Make.com.",
    details: [
      "React.js frontend development",
      "Full-stack website and application development",
      "AI-powered workflow automation",
      "n8n and Make.com integrations",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Tidy Digital Solutions",
    location: "Salem, Tamil Nadu",
    period: "Feb 2025 – May 2026",
    status: "past",
    description:
      "Contributed to frontend development with React.js, JavaScript, HTML and CSS, integrating REST APIs with Spring Boot and MySQL while supporting application development, testing, debugging and deployment.",
    details: [
      "Frontend development using React.js, JavaScript, HTML and CSS",
      "REST API integration with Spring Boot",
      "MySQL database integration and data handling",
      "Application testing and debugging",
      "Deployment and production support",
    ],
  },
];
export const projects: Project[] = [
  {
    title: "Your Perfect Eventz Management",
    description:
      "Responsive event management website with Cloudinary media management and a custom admin panel.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "PHP", "MySQL", "Cloudinary"],
    liveUrl: "https://www.ypeventz.com/",
  },
  {
    title: "Krishna Academy",
    description:
      "Responsive educational website with automated contact enquiry processing and email notifications.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "PHP", "MySQL", "Automation"],
    liveUrl: "https://thekrishnaacademy.com/",
  },
  {
    title: "Persyntra Solutions",
    description:
      "Responsive AI automation and digital solutions website featuring service showcases, business solutions, session management and a modern interactive user experience.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "PHP", "MySQL", "AI Automation"],
    liveUrl: "https://persyntra.com/",
  },
  {
    title: "Timesheet — Employee Management Web App",
    description:
      "Employee timesheet and payroll app: employee management, timesheet tracking, leave management, automated payroll and PDF payslip generation.",
    stack: ["React.js", "Spring Boot", "Spring JPA", "Hibernate", "MySQL"],
  },
  {
    title: "Lead Generation Automation — n8n Workflow",
    description:
      "Cost-efficient n8n workflow for business lead generation — a low-cost alternative to paid platforms, automating collection, extraction, processing and structured output.",
    stack: ["n8n", "Automation", "APIs", "Data Processing"],
  },
  {
    title: "Resume & Job Description Analyzer — AI Workflow",
    description:
      "AI-powered workflow that analyzes resumes against job descriptions, identifies skill and keyword gaps, provides ATS-focused insights and generates tailored cover letters for job applications.",
    stack: ["n8n", "AI", "Resume Analysis", "ATS Optimization", "Automation"],
  },
];

export const contact: Contact = {
  location: "Panaiyur, Chennai – 600119 (Open to Remote)",
  phone: "+91 9080363274",
  email: "ruban5775@gmail.com",
  linkedin: "http://www.linkedin.com/in/ruban-murugan",
  github: "https://github.com/Ruban5775",
};

/** Drop your PDF at public/resume.pdf to swap the file. */
export const resumeFile = "/Ruban-CV.pdf";
