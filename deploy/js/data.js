/**
 * Resume content — edit this file to update the CV.
 * Rendered by js/app.js. No backend / API required.
 *
 * Tuned for frontend + 3D web visualization / digital-twin simulation roles
 * (React, TypeScript, Three.js, WebGL, performance, cross-functional delivery).
 */
window.RESUME_DATA = {
  meta: {
    documentTitle: "Sum Bui — Senior Frontend Engineer",
    pdfFilename: "Sum_Bui_Senior_Frontend_Engineer",
    /** Production site origin (no trailing slash). Update if deploy URL changes. */
    siteUrl: "https://yusubui.github.io/my-resume",
    description:
      "Resume of Sum Bui, Senior Frontend Engineer specializing in React, TypeScript, Three.js, and WebGL 3D web visualization for interactive simulation and digital twin-style applications.",
    keywords: [
      "Sum Bui",
      "Senior Frontend Engineer",
      "React",
      "TypeScript",
      "Three.js",
      "WebGL",
      "3D Visualization",
      "Digital Twin",
      "Simulation Visualization",
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
      "Senior Frontend Engineer focused on interactive 3D web applications, simulation-style visualization, and high-performance UI systems. Strong in TypeScript, React, Three.js, and WebGL—building browser-based tools for spatial exploration, scene interaction, and real-time visual feedback. Experienced optimizing complex 3D rendering and frontend performance, integrating visualization clients with APIs and data services, and collaborating with international stakeholders to turn complex operational requirements into intuitive user-facing experiences. Comfortable using AI-assisted development tools (Cursor, GitHub Copilot) to accelerate delivery while maintaining code quality.",
  },

  experience: {
    title: "Professional Experience",
    icon: "briefcase",
    items: [
      {
        company: "FPT Software",
        role: "Software Engineer",
        location: "Ho Chi Minh City, Vietnam",
        start: "Sep 2021",
        end: "Present",
        employmentType: "Full-time",
        technologies: [
          "TypeScript",
          "JavaScript",
          "Three.js",
          "WebGL",
          "HTML5",
          "CSS3",
          "SCSS",
          "Bootstrap 5",
          "jQuery",
          "Charts",
          "REST APIs",
          "Git",
        ],
        bullets: [
          "Built and maintained frontend features for Oil & Gas applications—dashboards, charts, profile flows, form validation, and responsive layouts—aligned with UI/UX designs and operational workflows.",
          "Delivered a Three.js / WebGL Proof of Concept for 3D drilling-operation visualization, enabling stakeholders to explore simulated workflows through interactive scene navigation and spatial object interaction.",
          "Improved complex 3D scene performance by optimizing rendering paths, data handling, and interaction logic for smoother experiences across browsers and hardware profiles.",
          "Partnered with international stakeholders in technical discussions, proposed implementation approaches and trade-offs, and translated domain requirements into clear frontend deliverables.",
          "Shipped responsive internal marketing sites with semantic HTML, SCSS, JavaScript, jQuery, and Bootstrap 5, emphasizing reusable components and maintainable frontend architecture.",
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
          "JavaScript",
          "HTML",
          "CSS",
          "Java",
          "REST APIs",
        ],
        bullets: [
          "Contributed to a CMS platform for hotel chain management, focusing on frontend delivery while supporting backend tasks when needed to keep features unblocked.",
          "Developed responsive Angular + TypeScript UI components, including data tables and interactive hotel/room availability visualizations for operations users.",
          "Collaborated with senior engineers to implement features, diagnose defects, and keep interaction patterns consistent across the application.",
          "Worked in an Agile team across implementation, integration, testing, and release of frontend changes.",
          "Built reusable frontend components following coding standards, Git workflows, and shared maintainability practices.",
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
          "Completed an intensive Java, OOP, and Spring Framework internship while contributing to a capstone project in a cross-functional team.",
          "Led the Frontend Web sub-team by decomposing features, coordinating ownership, and tracking progress—early experience mentoring and aligning teammates.",
          "Collaborated with backend and mobile teams on an apartment-management CMS, including utility and service billing modules.",
          "Participated in daily stand-ups with trainers and cross-functional teams to surface blockers and keep delivery aligned.",
          "Implemented frontend features with HTML, CSS, and JavaScript while following team standards and collaborative Git practices.",
        ],
      },
    ],
  },

  skills: {
    title: "Technical Skills",
    icon: "code-2",
    categories: [
      {
        name: "Languages",
        items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "SCSS"],
      },
      {
        name: "Frontend",
        items: [
          "React",
          "Next.js",
          "React Three Fiber (R3F)",
          "Angular",
          "Tailwind CSS",
          "Bootstrap 5",
          "Responsive UI",
          "Component Architecture",
        ],
      },
      {
        name: "3D / Simulation Visualization",
        items: [
          "Three.js",
          "WebGL",
          "Scene Management",
          "Camera Controls",
          "Object Interaction",
          "Animation & Lighting",
          "Materials & Textures",
          "3D Mathematics",
          "Rendering Performance",
          "Matterport SDK",
          "Data Visualization",
          "WebGPU (foundations)",
        ],
      },
      {
        name: "Integration & Platforms",
        items: [
          "REST APIs",
          "Cloud API Integration",
          "Supabase",
          "Telemetry-style Dashboards",
          "Java",
          "Spring Framework",
        ],
      },
      {
        name: "AI Tools",
        items: [
          "Cursor",
          "GitHub Copilot",
          "ChatGPT",
          "Prompt Engineering",
          "AI-assisted Code Review",
          "AI-assisted Debugging",
        ],
      },
      {
        name: "Engineering Practices",
        items: [
          "Performance Optimization",
          "Maintainability",
          "Cross-browser Compatibility",
          "Agile / Scrum",
          "Technical Documentation",
          "Git",
          "GitHub",
          "Azure DevOps",
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
          "Browser-based digital twin–style POC that visualizes Oil & Gas drilling workflows in an interactive Three.js / WebGL scene so engineering stakeholders can analyze and explore operations spatially.",
        technologies: [
          "Three.js",
          "WebGL",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Scene Optimization",
        ],
        bullets: [
          "Built interactive Three.js visualizations that simulate drilling operations from engineering requirements—scene setup, spatial layout, and user-driven exploration.",
          "Applied 3D graphics and geometry for component rendering, camera/navigation controls, and clear object-level interaction in-browser.",
          "Optimized rendering performance for complex 3D scenes (draw paths, resource management, interaction responsiveness) for smoother cross-device UX.",
          "Aligned with international stakeholders on requirements, technical approaches, and delivery risks to ship POC milestones.",
        ],
        github: "",
        demo: "",
      },
      {
        name: "Interactive Gaming Platform",
        role: "Frontend Developer (React + 3D)",
        overview:
          "Cloud-connected React / Next.js application delivering an interactive 3D experience: immersive space navigation, tagged object interaction, guided flows, and API-backed user/payment integration.",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Three.js",
          "React Three Fiber (R3F)",
          "Matterport SDK",
          "WebGL",
          "Tailwind CSS",
          "Supabase",
          "Stripe API",
        ],
        bullets: [
          "Built the interactive 3D gameplay UI with React, Next.js, React Three Fiber, and Three.js for real-time browser visualization.",
          "Integrated Matterport SDK for immersive space navigation, location tags, and object interaction patterns similar to digital-twin walkthroughs.",
          "Implemented frontend flows that connect visualization UX with product requirements (popups, guided interactions, state-driven UI).",
          "Integrated cloud APIs (Supabase for user data; Stripe for payment/trial access) to connect the 3D client with backend services.",
          "Partnered with the Product Owner and Backend Developer over a two-month engagement to refine requirements and ship features.",
        ],
        github: "",
        demo: "",
      },
      {
        name: "Internal Marketing Website",
        role: "Frontend Developer",
        overview:
          "Internal marketing site and landing pages presenting products and campaigns through responsive, reusable frontend components—supporting clear stakeholder communication.",
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
          "Coordinated with designers and teammates to translate campaign requirements into shipped pages on schedule.",
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
