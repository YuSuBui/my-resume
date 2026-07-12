/**
 * Resume content — edit this file to update the CV.
 * Rendered by js/app.js. No backend / API required.
 */
window.RESUME_DATA = {
  meta: {
    documentTitle: "Sum Bui — Senior Frontend Engineer",
    pdfFilename: "Sum_Bui_Senior_Frontend_Engineer",
    /** Production site origin (no trailing slash). Update if deploy URL changes. */
    siteUrl: "https://yusubui.github.io/my-resume",
    description:
      "Resume of Sum Bui, Senior Frontend Engineer in Ho Chi Minh City, Vietnam. Experience with TypeScript, React, Angular, Three.js, and modern web performance.",
    keywords: [
      "Sum Bui",
      "Senior Frontend Engineer",
      "Frontend Developer",
      "TypeScript",
      "React",
      "Three.js",
      "Ho Chi Minh City",
    ],
    ogImage: "assets/avatar.jpg",
    locale: "en_US",
    robots: "index, follow",
  },

  profile: {
    name: "Sum Bui",
    title: "Senior Frontend Engineer",
    avatar: "assets/avatar.jpg", // Optimized 256×256 (~17KB). Original: avatar-original.png
    location: "Ho Chi Minh City, Vietnam",
    email: "Buicongsum2001@gmail.com",
    phone: "+84339890128",
    website: "https://yusubui.github.io/my-resume/",
    linkedin: "https://www.linkedin.com/in/sumbui/",
    github: "https://github.com/YuSuBui/",
    portfolio: "https://yusubui.github.io/sum-labs",
  },

  summary: {
    title: "Professional Summary",
    icon: "file-text",
    text:
      "Frontend Engineer based in Ho Chi Minh City, Vietnam, with experience building responsive web applications, interactive 3D visualizations, and reusable UI systems. Skilled in TypeScript, modern JavaScript frameworks, and Three.js, with a strong focus on performance, maintainability, and user experience. Experienced in collaborating with international stakeholders and cross-functional teams to deliver reliable, high-quality frontend solutions.",
  },

  experience: {
    title: "Professional Experience",
    icon: "briefcase",
    items: [
      {
        company: "FPT Software",
        role: "Software Developer",
        location: "Ho Chi Minh City, Vietnam",
        start: "Sep 2021",
        end: "Present",
        employmentType: "Full-time",
        technologies: [
          "TypeScript",
          "JavaScript",
          "Three.js",
          "HTML5",
          "CSS3",
          "SCSS",
          "Bootstrap 5",
          "jQuery",
          "Charts",
          "Git",
        ],
        bullets: [
          "Built and maintained frontend features for Oil & Gas applications, including dashboards, charts, user profile management, form validation, and responsive layouts based on UI/UX designs.",
          "Contributed to a Proof of Concept (POC) for a 3D drilling operation visualization using Three.js, applying 3D graphics and geometric concepts to simulate drilling workflows in an interactive environment.",
          "Researched and implemented performance optimizations for complex 3D scenes by improving rendering efficiency, data handling, and frontend interactions to enhance the user experience.",
          "Worked directly with international stakeholders, participating in technical discussions, proposing implementation approaches, and collaborating with the team to deliver project requirements.",
          "Developed responsive internal marketing websites using semantic HTML, SCSS, JavaScript, jQuery, and Bootstrap 5 while following reusable frontend development practices.",
        ],
      },
      {
        company: "TMA Solutions",
        role: "Software Engineer (Java Fresher)",
        location: "Ho Chi Minh City, Vietnam",
        start: "Sep 2020",
        end: "Sep 2021",
        employmentType: "Full-time",
        technologies: [
          "Angular 8+",
          "TypeScript",
          "HTML",
          "CSS",
          "JavaScript",
          "Java",
        ],
        bullets: [
          "Contributed to the development of a CMS platform for hotel chain management, primarily focusing on frontend implementation while supporting backend tasks when required.",
          "Developed responsive Angular 8+ user interface components using TypeScript, including data tables and interactive hotel and room availability visualizations.",
          "Collaborated with senior engineers to implement new features, troubleshoot issues, and ensure a consistent user experience across the application.",
          "Worked within an Agile development team, participating in feature implementation, integration, testing, and release activities.",
          "Built reusable frontend components while following established coding standards, version control workflows, and team development practices.",
        ],
      },
      {
        company: "FPT Software",
        role: "Frontend Intern (Web Team Lead for Internship Project)",
        location: "Ho Chi Minh City, Vietnam",
        start: "Jul 2020",
        end: "Sep 2020",
        employmentType: "Internship",
        technologies: [
          "Java",
          "Spring Framework",
          "HTML",
          "CSS",
          "JavaScript",
          "Git",
        ],
        bullets: [
          "Completed an intensive Java, Object-Oriented Programming (OOP), and Spring Framework internship program while contributing to a capstone internship project within a cross-functional team.",
          "Led the Frontend Web sub-team by breaking assigned features into manageable tasks, coordinating teammates, and tracking daily progress throughout the project.",
          "Collaborated with backend and mobile teams to develop a CMS for apartment management as the internship capstone project, including modules for calculating utility and service billing.",
          "Participated in daily stand-up meetings with trainers and cross-functional teams to report progress, discuss technical challenges, and keep project delivery aligned.",
          "Implemented frontend features using HTML, CSS, and JavaScript while following team coding standards, Git workflows, and collaborative development practices.",
        ],
      },
    ],
  },

  skills: {
    title: "Technical Skills",
    icon: "code-2",
    categories: [
      {
        name: "Frontend",
        items: [
          "HTML5",
          "CSS3",
          "SCSS",
          "Bootstrap 5",
          "Tailwind CSS",
          "JavaScript (ES6+)",
          "TypeScript",
          "jQuery",
          "Angular",
          "React",
          "Next.js",
        ],
      },
      {
        name: "3D / Web Graphics",
        items: [
          "Three.js",
          "React Three Fiber (R3F)",
          "Matterport SDK",
          "WebGL",
          "3D Mathematics",
          "Data Visualization",
        ],
      },
      {
        name: "Backend",
        items: ["Java", "Spring Framework", "REST APIs", "Supabase Integration"],
      },
      {
        name: "Tools & Workflow",
        items: [
          "Git",
          "GitHub",
          "Azure DevOps",
          "Agile / Scrum",
          "Responsive Web Design",
          "Performance Optimization",
          "Cross-browser Compatibility",
        ],
      },
    ],
  },

  projects: {
    title: "Selected Projects",
    icon: "folder-kanban",
    items: [
      {
        name: "3D Drilling Operation Visualization (POC)",
        role: "Frontend Developer (3D Web Visualization)",
        overview:
          "Browser-based Proof of Concept that visualizes Oil & Gas drilling workflows in an interactive 3D scene so stakeholders can explore operations spatially.",
        technologies: [
          "Three.js",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "WebGL",
        ],
        bullets: [
          "Built interactive Three.js visualizations that simulate drilling operations from engineering requirements.",
          "Applied 3D graphics and geometry to render drilling components and support clear spatial interaction.",
          "Optimized rendering performance for complex 3D scenes by improving rendering logic and resource management, resulting in a smoother user experience.",
          "Aligned with international stakeholders on requirements and technical approaches to deliver POC milestones.",
        ],
        github: "",
        demo: "",
      },
      {
        name: "Interactive Gaming Platform",
        role: "Frontend Developer",
        overview:
          "Freelance web app for an interactive 3D game: explore a Matterport space, interact with tagged locations, answer in-game questions via popups, and unlock trial play with payment integration.",
        technologies: [
          "Next.js",
          "React",
          "Three.js",
          "React Three Fiber (R3F)",
          "Matterport SDK",
          "Tailwind CSS",
          "Supabase",
          "Stripe API",
          "TypeScript",
          "HTML",
          "CSS",
        ],
        bullets: [
          "Built the interactive gameplay UI with Next.js, React Three Fiber, and Three.js for browser-based 3D experiences.",
          "Integrated the Matterport SDK so players can navigate immersive spaces and engage with interactive location tags.",
          "Implemented popup-driven game flows and interactive user experiences based on product requirements.",
          "Integrated Supabase APIs for user data retrieval and Stripe APIs for payment and trial access.",
          "Partnered with the Product Owner and Backend Developer over a two-month freelance engagement to refine requirements and ship features.",
        ],
        github: "",
        demo: "",
      },
      {
        name: "Internal Marketing Website",
        role: "Frontend Developer",
        overview:
          "Internal marketing site and landing pages that present products, campaigns, and corporate information through responsive, reusable frontend components.",
        technologies: [
          "HTML5",
          "SCSS",
          "CSS3",
          "JavaScript",
          "jQuery",
          "Bootstrap 5",
        ],
        bullets: [
          "Built responsive landing pages and reusable UI components from Figma/design specifications.",
          "Structured layouts with HTML, SCSS, Bootstrap 5, Flexbox, and CSS Grid for consistent cross-device presentation.",
          "Added interactive behaviors with JavaScript and jQuery to improve on-page user experience.",
          "Coordinated with designers and teammates to translate campaign requirements into shipped landing pages on schedule.",
        ],
        github: "",
        demo: "",
      },
    ],
  },

  education: {
    title: "Education",
    icon: "graduation-cap",
    items: [
      {
        school: "Ho Chi Minh City University of Technology (HUTECH)",
        degree: "Bachelor's Degree",
        major: "Information Technology",
        location: "Ho Chi Minh City, Vietnam",
        start: "Sep 2016",
        end: "Sep 2020",
      },
    ],
  },

  /* Certifications hidden in v1 (empty array). Add items to show the section. */
  certifications: {
    title: "Certifications",
    icon: "badge-check",
    items: [],
  },

  languages: {
    title: "Languages",
    icon: "languages",
    items: [
      { name: "Vietnamese", level: "Native" },
      { name: "English", level: "Professional Working Proficiency" },
    ],
  },
};