/**
 * Resume content — edit this file to update the CV.
 * Rendered by js/app.js. No backend / API required.
 *
 * Tuned for frontend + 3D web visualization / digital-twin simulation roles
 * (React, TypeScript, Three.js, WebGL, performance, cross-functional delivery).
 */
window.RESUME_DATA = {
  meta: {
    documentTitle: "Sum Bui — Frontend Engineer",
    pdfFilename: "Sum_Bui_Frontend_Engineer",
    /** Production site origin (no trailing slash). Update if deploy URL changes. */
    siteUrl: "https://yusubui.github.io/my-resume",
    description: "Resume of Sum Bui, Frontend Engineer with 6+ years of experience in Angular, React, TypeScript, JavaScript and interactive 3D visualization.",
    keywords: [
      "Sum Bui", 
      "Frontend Engineer", 
      "Angular", 
      "React", 
      "TypeScript", 
      "Three.js", 
      "WebGL", 
      "Ho Chi Minh City",
    ],
    ogImage: "assets/avatar.jpg", 
    locale: "en_US", 
    robots: "index, follow",
  },
  profile: {
    name: "Sum Bui", 
    title: "Frontend Engineer", 
    avatar: "assets/avatar.jpg",
    location: "Ho Chi Minh City, Vietnam", 
    email: "Buicongsum2001@gmail.com",
    phone: "+84339890128", 
    website: "https://yusubui.github.io/my-resume/",
    linkedin: "https://www.linkedin.com/in/sumbui/", 
    github: "https://github.com/YuSuBui/",
    portfolio: "https://yusubui.github.io/sum-labs"
  },
  summary: {
    title: "Professional Summary", 
    icon: "file-text",
    text: "Frontend Engineer with 6+ years of software development experience, specializing in Angular, React, TypeScript, JavaScript, and maintainable web application architecture. Experienced in interactive 3D visualization using Three.js and WebGL, real-time data integration with WebSocket and RxJS, and API-driven user interfaces. Skilled in reusable component design, responsive UI, performance optimization, and collaborating with cross-functional and international teams."
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
          "Angular",
          "React",
          "TypeScript",
          "JavaScript",
          "Redux",
          "i18n",
          "Three.js",
          "WebGL",
          "RxJS",
          "WebSocket",
          "GraphQL",
          "REST APIs",
          "PrimeNG",
          "HTML5",
          "SCSS",
          "Git"
        ],
        bullets: [
          "Developed and maintained enterprise web applications using Angular, React, TypeScript, and JavaScript.",
          "Built interactive 3D visualization features using Three.js and WebGL, integrating real-time data through WebSocket, RxJS, and GraphQL.",
          "Developed account management features for CMS, including user CRUD operations, sidebar navigation customization, and user impersonation.",
          "Built reusable UI components, implemented responsive layouts, and managed application state using Redux.",
          "Integrated backend APIs and collaborated with backend developers, QA engineers, and international teams to deliver features and resolve technical issues."
        ]
      },
      {
        company: "TMA Solutions",
        role: "Software Engineer",
        location: "Ho Chi Minh City, Vietnam",
        start: "Sep 2020",
        end: "Sep 2021",
        employmentType: "Full-time",
        technologies: [
          "Angular",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Bootstrap 4",
          "Java",
          "Spring Boot",
          "REST APIs",
          "PostgreSQL",
          "MySQL",
          "Git"
        ],
        bullets: [
          "Developed frontend modules for a hotel-chain management CMS, including data tables and room-availability interfaces.",
          "Implemented responsive Angular components and supported backend integration using REST APIs.",
          "Collaborated with engineers on feature delivery, debugging, and Agile development practices."
        ]
      },
      {
        company: "FPT Software",
        role: "Software Engineer Intern",
        location: "Ho Chi Minh City, Vietnam",
        start: "Jul 2020",
        end: "Sep 2020",
        employmentType: "Internship",
        technologies: [
          "Java",
          "Spring Boot",
          "Spring MVC",
          "JSP",
          "HTML5",
          "CSS3",
          "JavaScript",
          "Git"
        ],
        bullets: [
          "Completed Java, OOP, and Spring Framework training and contributed to an apartment-management CMS capstone project.",
          "Coordinated frontend tasks and collaborated with backend and mobile sub-teams."
        ]
      }
    ]
  },
  skills: {
    title: "Technical Skills",
    icon: "code-2",
    categories: [
      { 
        name: "Languages", 
        items: [
          "TypeScript", 
          "JavaScript (ES6+)", 
          "HTML5", 
          "CSS3", 
          "SCSS"
        ] 
      },
      { 
        name: "Frontend", 
        items: [
          "Angular", 
          "React", 
          "Next.js", 
          "RxJS", 
          "PrimeNG", 
          "Tailwind CSS", 
          "Bootstrap", 
          "Component Architecture", 
          "Responsive UI"] 
      },
      { 
        name: "3D Visualization", 
        items: [
          "Three.js", 
          "WebGL", 
          "React Three Fiber", 
          "Camera Controls", 
          "Scene Management", 
          "Object Interaction", 
          "Rendering Optimization", 
          "Matterport SDK"] 
      },
      { 
        name: "Integration", 
        items: [
          "REST APIs", 
          "GraphQL", 
          "WebSocket", 
          "Supabase", 
          "Stripe API", 
          "Java", 
          "Spring Boot"
        ] 
      },
      { 
        name: "Tools & Practices", 
        items: [
          "Git", 
          "Azure DevOps", 
          "Agile / Scrum", 
          "GitHub Copilot", 
          "Cursor", 
          "Performance Optimization"
        ] 
      }
    ]
  },
  projects: {
    title: "Selected Projects",
    icon: "folder-kanban",
    items: [
      {
        name: "Canon",
        role: "Frontend Developer | FPT Software",
        overview:
          "A web-based Content Management System (CMS) " +
          "developed for clients to manage user accounts, " +
          "streamline administrative workflows, and " +
          "support user impersonation functionality.",
        technologies: [
          "React",
          "JavaScript",
          "Redux",
          "i18n"
        ],
        bullets: [
          "Developed and maintained frontend features " +
          "using React, JavaScript, and Redux.",
          "Customized sidebar navigation and built " +
          "reusable UI components with responsive layouts.",
          "Implemented CRUD operations for user account " +
          "management and user impersonation functionality.",
          "Integrated backend APIs to support account " +
          "management and application workflows.",
          "Collaborated with backend developers and QA " +
          "engineers to deliver features and resolve issues."
        ],
        github: "",
        demo: ""
      },
      {
        name: "3D Drilling Operation Visualization",
        role: "Frontend Developer | FPT Software",
        overview: "Interactive web-based 3D visualization for drilling operations and operational data exploration.",
        technologies: ["Angular", "TypeScript", "Three.js", "WebGL", "RxJS", "WebSocket", "GraphQL", "PrimeNG"],
        bullets: [
          "Developed interactive 3D scenes, camera controls, and object interactions using Three.js.",
          "Built Angular UI components and integrated real-time operational data through WebSocket and RxJS.",
          "Integrated GraphQL APIs and optimized scene rendering and frontend responsiveness."
        ],
        github: "",
        demo: ""
      },
      {
        name: "Interactive Gaming Platform",
        role: "Frontend Developer",
        overview: "Interactive 3D web platform combining immersive navigation, user flows, and cloud services.",
        technologies: ["React", "Next.js", "TypeScript", "Three.js", "React Three Fiber", "Matterport SDK", "Tailwind CSS", "Supabase", "Stripe API"],
        bullets: [
          "Implemented interactive 3D navigation and tagged object interactions.",
          "Integrated Matterport SDK, cloud data services, and payment-related frontend flows."
        ],
        github: "",
        demo: ""
      },
      {
        name: "Hotel Chain Management CMS",
        role: "Frontend Developer | TMA Solutions",
        overview: "Management interface for hotel operations, room availability, and administration.",
        technologies: ["Angular", "TypeScript", "Bootstrap", "REST APIs", "Java", "Spring Boot"],
        bullets: [
          "Developed reusable management UI components, data tables, and availability views.",
          "Collaborated on frontend integration and feature maintenance."
        ],
        github: "",
        demo: ""
      }
    ]
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
        end: "Sep 2020"
      }
    ]
  },
  certifications: {
    title: "Certifications",
    icon: "badge-check",
    items: []
  },
  languages: {
    title: "Languages",
    icon: "languages",
    items: [
      {
        name: "Vietnamese",
        level: "Native"
      },
      {
        name: "English",
        level: "Professional Working Proficiency"
      }
    ]
  }
};
