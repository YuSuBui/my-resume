import { IUser } from "../models/user.model";

export const USER: IUser = {
  id: '36e95121-bc6f-4fca-8198-8d6a3d29d17c',
  firstname: 'Sum',
  lastname: 'Bui Cong',
  position: 'Software Engineer',
  email: ' buicongsum2001@gmail.com',
  phone: '(+84) 33 989 0128',
  dateOfBirth: '1998-01-20T00:00:00.000Z',
  location: {
    label: 'HCMC, Vietnam',
    url: 'https://maps.app.goo.gl/psv8qHKK6N7deCG27'
  },
  linkedIn: {
    label: 'linkedin.com/in/sumbui/',
    url: 'https://www.linkedin.com/in/sumbui/'
  },
  certs: ['B1 English Level Certificate', 'Level N5 of Certificate Japanese-Language Proficiency'],
  education: 'HCMC University of Technology - Software Engineering (2016 - 2020) - GPA: 3.2/4.0',
  createdAt: '2025-12-24T00:00:00.000Z',
  updatedAt: '2025-12-24T00:00:00.000Z',
  skills: {
    'Programming languages': 'C/C++/C#, Java, JavaScript/TypeScript, HTML/CSS/Bootstrap, SQL, GraphQL, Websocket, etc.',
    '3D graphics': 'WebGL, GLSL.',
    'Frameworks & Libraries': 'Angular, React.js, Next.js, Three.js, Spring Boot, Spring Security, .NET, RxJS, TailwindCSS, Shacdn, PrimeNG, PrimeFlex, PrimeIcons, etc.',
    'Tools': 'VS Code, IntelliJ, Eclipse, Git, SVN, etc.'
  },
  expertise: {
    'Web Development': 'Proficient in Angular, JavaScript, TypeScript, and RxJS for building dynamic and scalable web applications. Strong experience with PrimeNG, PrimeFlex, and Tailwind CSS for responsive UI design.',
    '3D Rendering & Visualization': 'Expert in Three.js for 3D modeling and rendering, with hands-on experience in GraphQL, WebSocket, and real-time data visualization in industries such as oil & gas (3D BHA simulations and drilling operations).',
    'Back-End Development': 'Solid knowledge of Java, Spring Boot, C# .NET, and GraphQL APIs, with expertise in JPA/Hibernate for efficient data handling and integration.',
    'UI/UX Design': 'Skilled in creating responsive, user-centric UI/UX with Angular and Blender for 3D modeling and scene visualization.',
    'Performance Optimization': 'Extensive experience optimizing memory performance, reducing rendering times, and resolving memory leaks in 3D applications.',
    'Testing & Quality Assurance': 'Proficient in writing unit and integration tests using Karma, Jasmine, and JUnit to ensure code stability and high performance.',
    'Agile Methodology': 'Strong participation in Agile teams, contributing to daily stand-ups, sprint planning, task management, and client demos.'
  }
}