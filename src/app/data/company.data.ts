import { ICompany, IWorkingExperience } from "../models/company.model";

export const PREVIOUS_COMPANY: ICompany[] = [{
  name: 'FPT Software HCMC',
  startDate: '2021-08-23T00:00:00.000Z',
  endDate: 'now',
  position: 'Software Engineer'
}, {
  name: 'TMA Solutions',
  startDate: '2020-10-14T00:00:00.000Z',
  endDate: '2021-09-01T00:00:00.000Z',
  position: 'Software Engineer'
}, {
  name: 'FPT Software HCMC',
  startDate: '2020-07-01T00:00:00.000Z',
  endDate: '2020-09-01T00:00:00.000Z',
  position: 'Intern Software Engineer'
}];

export const WORKING_EXPERIENCE: IWorkingExperience[] = [{
  name: 'FPT Software Corporate Landing Page',
  startDate: '2023-02-01',
  endDate: 'now',
  domain: 'Corporate Website / IT Services Marketing',
  technology: [
    'HTML5',
    'CSS3',
    'SCSS',
    'JavaScript',
    'jQuery',
    'Gulp',
    'Responsive Design',
    'Webpack',
    'SEO Optimization'
  ],
  responsibility: [
    'Analyzed UI/UX requirements and implemented responsive landing page layouts using HTML5, CSS3, and SCSS.',
    'Developed interactive UI components and animations using JavaScript and jQuery to enhance user engagement.',
    'Optimized front-end assets using Gulp for automated build processes including minification, bundling, and live reload.',
    'Implemented responsive design to ensure cross-browser compatibility and optimal performance across desktop, tablet, and mobile devices.',
    'Collaborated with designers to translate Figma/UI designs into pixel-perfect web interfaces.',
    'Improved website performance through image optimization, lazy loading, and CSS/JS bundling.',
    'Ensured SEO-friendly structure by implementing semantic HTML and performance best practices.',
    'Participated in testing and bug fixing to ensure stable UI rendering across multiple browsers.'
  ],
  achievement: [
    'Successfully delivered a high-performance corporate landing page for showcasing company services, industry solutions, and success stories.',
    'Improved page loading speed and front-end performance through asset optimization and Gulp-based build automation.',
    'Enhanced user experience with smooth UI interactions and responsive layouts across multiple devices.',
    'Delivered pixel-perfect UI implementation aligned with design specifications and corporate branding guidelines.',
    'Contributed to improving website accessibility and SEO readiness through semantic HTML structure.'
  ]
}, {
  name: 'Fast-Food Chain Management CMS',
  startDate: '2025-01-01',
  endDate: '2025-02-28',
  domain: 'Food & Beverage Management System',
  technology: [
    'Angular 21',
    'TypeScript',
    'Ng Zorro',
    'RxJS',
    'REST API',
    'HTML',
    'SCSS',
    'Jasmine',
    'Karma',
    'Design Patterns',
    'OOP'
  ],
  responsibility: [
    'Analyzed business requirements for fast-food chain management and designed scalable CMS modules using Angular 21 and Ng Zorro UI components.',
    'Developed reusable and extensible data table architecture using OOP principles and design patterns such as Strategy, Factory, and Observer.',
    'Implemented core management modules including User Management, Store Management, Menu Management, and Role-based Access Control.',
    'Built dynamic data table components supporting sorting, filtering, pagination, column configuration, and reusable CRUD workflows.',
    'Designed modular Angular services and state management using RxJS to ensure reactive and maintainable data flows.',
    'Collaborated with backend teams to integrate REST APIs for managing store information, menu items, pricing, and user roles.',
    'Applied clean architecture and component-based design to improve maintainability, scalability, and code reuse across CMS modules.',
    'Developed unit tests for Angular services and core components using Karma and Jasmine.',
    'Participated in Agile development cycles including sprint planning, code reviews, and feature demonstrations.'
  ],
  achievement: [
    'Successfully delivered a scalable CMS platform for managing multiple fast-food branches with centralized administration.',
    'Improved development efficiency by creating reusable table and form frameworks that reduced feature implementation time by over 40%.',
    'Enhanced system usability through standardized CRUD workflows and intuitive Ng Zorro-based UI design.',
    'Implemented modular architecture with design patterns, significantly improving maintainability and extensibility of the CMS system.',
    'Enabled efficient management of users, stores, and menu catalogs across multiple branches through a centralized web platform.'
  ]
}, {
  name: '3D Drilling Operation Visualization System',
  startDate: '2022-01-01',
  endDate: '2025-12-31',
  domain: 'Oil and Gas Industry',
  technology: ['Angular', 'Three.js', 'GraphQL', 'WebSocket', 'PrimeNG', 'HTML', 'CSS', 'Karma', 'Jasmine', 'etc'],
  responsibility: [
    'Analyzed feature requirements, proposed optimal solutions, and implemented scalable UI/UX using Angular, HTML, CSS, and PrimeNG.',
    'Integrated real-time sensor data into 3D scenes using Three.js, mapping geometry and material properties accurately.',
    'Explored 3D transformations and vertex manipulation to simulate drilling components with high visual fidelity.',
    'Collaborated with backend team to define data contracts and consume GraphQL/WebSocket APIs for real-time updates.',
    'Optimized performance and resolved memory leaks during dynamic 3D rendering.',
    'Developed unit tests for Angular services and 3D components using Karma and Jasmine.',
    'Participated in Agile ceremonies, client demos, and adjusted features based on feedback to meet acceptance criteria.'
  ],
  achievement: [
    'Successfully delivered high-performance 3D visualizations that accurately reflected live drilling operations, improving monitoring efficiency for engineers.',
    'Reduced memory usage by over 50% through optimization of Three.js object lifecycle and real-time rendering strategies.',
    'Enabled real-time sensor integration with < 1000ms latency via GraphQL subscriptions and WebSocket, ensuring up-to-date visual feedback.',
    'Improved code quality and maintainability by introducing modular 3D rendering services with full unit test coverage.',
    'Received positive feedback from clients during demo sessions for intuitive UI, realistic 3D interactions, and system responsiveness.'
  ]
}, {
  name: '3D BHA Insertion Simulation',
  startDate: '2024-02-01',
  endDate: '2024-05-30',
  domain: 'Oil and Gas Industry',
  technology: ['Angular', 'Three.js', 'GLTF/GLB Models', 'PrimeNG', 'HTML', 'CSS', 'Karma', 'Jasmine', 'etc'],
  responsibility: [
    'Simulated BHA (Bottom Hole Assembly) insertion process into the wellbore using Three.js and custom 3D animation logic.',
    'Dynamically loaded 3D BHA component models in .glb format, ensuring accurate scaling and positioning based on input telemetry and configuration data.',
    'Ensured scalability and adaptability of each component to match variable dimensions and sensor values in real time.',
    'Collaborated closely with the 3D design team to review and refine assets exported from Blender for optimal rendering performance.',
    'Implemented 2D markups and labels to annotate BHA component information directly within the 3D viewport.',
    'Participated in daily Agile meetings to update task progress, address blockers, and align with the broader project timeline.'
  ],
  achievement: [
    'Delivered a smooth and accurate 3D simulation of BHA insertion that improved training and operational visualization for drilling teams.',
    'Reduced loading time of 3D assets by optimizing .glb files and streamlining the rendering pipeline with efficient scene management.',
    'Achieved precise component scaling and alignment based on real-time input data, enhancing realism and system reliability.',
    'Streamlined collaboration with 3D artists by establishing a feedback loop between Blender exports and rendering constraints in the application.',
    'Successfully integrated intuitive 2D markups that improved clarity of component metadata and supported better user decision-making.'
  ]
}, {
  name: 'Birding Game',
  startDate: '2025-07-01',
  endDate: '2025-09-01',
  domain: 'Interactive 3D Game / Virtual Tour / Gamification',
  technology: ['Next.js', 'Three.js', 'Matterport SDK', 'Tailwind CSS', 'Supabase', 'HTML', 'CSS'],
  responsibility: [
    'Designed and developed an interactive 3D birding game experience using Next.js and Three.js, focusing on smooth navigation and immersive gameplay.',
    'Integrated Matterport SDK to leverage 3D spaces and camera data, enabling seamless interaction between Matterport scenes and custom Three.js rendering.',
    'Implemented real-time game logic, scoring, and user progress tracking using Supabase (authentication, database, and storage).',
    'Built responsive and modern UI using Tailwind CSS, ensuring consistent UX across desktop and tablet devices.',
    'Managed 3D assets, camera controls, animations, and object interactions within complex virtual environments.',
    'Optimized rendering performance and loading times for 3D scenes, ensuring stable FPS during gameplay.',
    'Collaborated closely with designers and stakeholders to refine gameplay mechanics, visual effects, and user flow.',
    'Applied clean architecture and modular design patterns to separate game logic, rendering logic, and UI components.',
  ],
  achievement: [
    'Successfully delivered an engaging 3D birding game that combined Matterport environments with custom Three.js interactions.',
    'Achieved smooth real-time interaction and camera transitions within Matterport spaces, enhancing immersion and user experience.',
    'Reduced initial scene loading time by optimizing asset loading and lazy-rendering strategies.',
    'Implemented a scalable backend using Supabase, enabling user authentication, score persistence, and future feature expansion.',
    'Received positive feedback for intuitive controls, visually appealing 3D interactions, and overall gameplay experience.'
  ]
}, {
  name: 'Angular Business Dashboard – Internal Management Tool',
  startDate: '2021-09-01',
  endDate: '2021-12-30',
  domain: 'Oil and Gas Industry',
  technology: ['Angular', 'RxJS', 'Lodash', 'PrimeNG', 'HTML', 'CSS', 'etc'],
  responsibility: [
    'Collaborated with team lead to analyze functional requirements and implemented features based on backend GraphQL APIs.',
    'Utilized RxJS to transform and manage data streams for rendering dynamic, paginated, and filterable data tables.',
    'Designed and developed responsive, user-friendly form components with validation, enabling data entry, update, and synchronization with the backend.',
    'Ensured data consistency and form state handling during create/edit flows with real-time feedback.',
    'Participated in daily Agile meetings to report progress, resolve issues, and align tasks with sprint goals.',
  ],
  achievement: [
    'Improved data rendering performance by over 40% through optimized RxJS stream handling and change detection strategies.',
    'Delivered a clean and intuitive form experience that reduced user input errors and enhanced workflow efficiency.',
    'Enabled seamless integration with backend via GraphQL mutations and queries, ensuring reliable data synchronization.',
    'Reduced development overhead by creating reusable UI components and form field configurations.',
    'Maintained high-quality code with full unit test coverage for critical data processing and UI logic.',
  ]
}, {
  name: 'Omena Hotels Booking Management System',
  startDate: '2020-10-01',
  endDate: '2021-09-01',
  domain: 'Hotel Booking and Reservation Management',
  technology: ['Java', 'Spring Boot', 'RESTful APIs', 'PostgreSQL', 'AngularJS/Angular', 'JPA/Hibernate', 'JWT', 'etc'],
  responsibility: [
    'Developed backend services with Spring Boot to manage hotel room reservations, guest information, and booking statuses.',
    'Designed and implemented RESTful APIs for interacting with the hotel booking system, including functionalities like room availability, booking creation, and cancellations.',
    'Integrated the system with an external payment gateway to process payments securely and manage transaction statuses.',
    'Used JPA and Hibernate for database management to handle reservations, guest profiles, and room inventory.',
    'Designed front-end components with Angular to display real-time booking data, user dashboards, and booking confirmation pages.',
    'Collaborated with the team to define and optimize database schema and API contracts for efficient data flow between frontend and backend.',
    'Participated in daily Agile stand-ups and sprint planning to discuss tasks and resolve blockers.'
  ],
  achievement: [
    'Optimized booking and payment processing by reducing transaction times by 30% using efficient database queries and service-level caching.',
    'Increased system reliability by integrating secure authentication (JWT) and authorization for user roles like guest, admin, and hotel staff.',
    'Delivered a user-friendly booking interface that improved booking completion rates by 20% through simplified workflows and responsive design.',
    'Designed a robust and scalable architecture that allowed the system to handle a growing number of bookings and guests efficiently.',
    'Implemented unit and integration tests to ensure high code quality and minimize bugs, improving overall system stability.'
  ]
}];