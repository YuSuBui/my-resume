import { IUser } from "../models/user.model";

export const USER: IUser = {
  id: '36e95121-bc6f-4fca-8198-8d6a3d29d17c',
  firstname: 'Sum',
  lastname: 'Bui Cong',
  position: 'Software Engineer',
  email: 'buicongsum2001@gmail.com',
  phone: '(+84) 33 989 0128',
  dateOfBirth: '1998-01-20T00:00:00.000Z',
  location: {
    label: 'Ho Chi Minh City, Vietnam',
    url: 'https://maps.app.goo.gl/psv8qHKK6N7deCG27'
  },
  linkedIn: {
    label: 'linkedin.com/in/sumbui',
    url: 'https://www.linkedin.com/in/sumbui/'
  },
  certs: [
    'B1 English Certificate',
    'Japanese-Language Proficiency Test (JLPT) N5'
  ],
  education:
    'Ho Chi Minh City University of Technology – Software Engineering (2016 – 2020), GPA: 3.2/4.0',
  createdAt: '2025-12-24T00:00:00.000Z',
  updatedAt: '2026-03-20T00:00:00.000Z',
  skills: {
    'Programming Languages':
      'JavaScript, TypeScript, Java, C#, C/C++, SQL',
    'Frontend & UI':
      'HTML5, CSS3, SCSS, Responsive Design, Bootstrap, Tailwind CSS, PrimeNG, Ng Zorro, PrimeFlex, PrimeIcons, Shadcn UI',
    'Frameworks & Libraries':
      'Angular (5+ years in scalable enterprise applications), React.js (2+ years), Next.js (1+ year), Three.js, RxJS, Spring Boot, Spring Security, .NET',
    'UI Libraries & Design Systems':
      'PrimeNG, Ng Zorro, Tailwind CSS, Bootstrap, Shadcn UI, reusable component patterns, design system consistency',
    'API & Real-time Communication':
      'GraphQL (Queries, Mutations, Subscriptions), RESTful APIs, WebSocket',
    '3D Graphics & Visualization':
      'Three.js, WebGL, GLSL, 3D Transformations, Geometry & Material Optimization',
    'Testing':
      'Karma, Jasmine',
    'Tools & IDEs':
      'VS Code, IntelliJ IDEA, Eclipse, Git, SVN'
  },
  expertise: {
    'Frontend Engineering':
      'Strong expertise in Angular, React.js, Next.js, TypeScript, and RxJS for building scalable, high-performance web applications. Experienced with component-driven architecture, state management, routing, and reusable frontend modules in enterprise environments.',
    'UI Libraries & Design Systems':
      'Hands-on experience with PrimeNG, Ng Zorro, Tailwind CSS, Bootstrap, PrimeFlex, and Shadcn UI to build consistent, responsive, and maintainable user interfaces. Skilled in transforming design requirements into reusable UI components and standardized design patterns.',
    '3D Rendering & Real-time Visualization':
      'Advanced experience with Three.js for real-time 3D rendering, including camera control, object lifecycle management, and memory optimization. Delivered high-fidelity 3D visualization systems for oil & gas drilling operations using live sensor data.',
    'Real-time Data & API Integration':
      'Hands-on experience designing and consuming GraphQL APIs (including subscriptions) and WebSocket-based communication to achieve low-latency (<1000ms) real-time data synchronization.',
    'Backend & System Integration':
      'Solid backend knowledge with Java (Spring Boot, Spring Security), C# .NET, and GraphQL-based data layers. Experienced in JPA/Hibernate for efficient persistence and system integration.',
    'Performance Optimization':
      'Proven ability to identify and resolve performance bottlenecks, reduce memory usage, and eliminate memory leaks in complex 3D and data-intensive applications.',
    'Testing & Code Quality':
      'Strong focus on code quality with unit and integration testing using Karma, Jasmine, and JUnit, ensuring system stability and long-term maintainability.',
    'Agile & Collaboration':
      'Active contributor in Agile/Scrum teams, participating in sprint planning, daily stand-ups, backlog refinement, and client demos. Comfortable collaborating with cross-functional teams and stakeholders.'
  }
};
