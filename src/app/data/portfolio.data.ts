import { IPortfolio } from "../models/portfolio.model";

export const PORTFOLIO: IPortfolio[] = [{
  name: 'Train3D – Interactive 3D Train Visualization',
  description: 'Train3D is an interactive web project that simulates a 3D train model, designed to showcase real-time 3D rendering capabilities in the browser. It combines modern front-end technologies with Three.js to deliver an engaging and visually dynamic experience.',
  technology: [
    'Three.js – for 3D rendering, lighting, camera control, and animations.',
    'Angular – for application structure, component lifecycle, and routing.',
    'GLTF Loader – to load and render .gltf/.glb 3D models efficiently.',
    'SCSS – for writing modular and maintainable styling with custom design.'
  ],
  highlight: [
    'Renders a realistic 3D train model with interactive camera controls.',
    'Efficient asset management and rendering using GLTF format.',
    'Modular Angular architecture for easy maintenance and scalability.'
  ],
  demo: {
    label: 'yusubui.github.io/train3D',
    url: 'https://yusubui.github.io/train3D/'
  }
}, {
  name: 'Budget Builder – Interactive Monthly Financial Planning Tool',
  description: 'Budget Builder is a web-based application that allows users to create and manage monthly budgets with a spreadsheet-like interface. Designed with a focus on user experience and performance, the tool supports dynamic income and expense tracking across a range of months, with Excel-like navigation and category grouping.',
  technology: [
    'Angular 17+ – for building a scalable and modular front-end application.',
    'TypeScript & RxJS Signals – for reactive state management and performance optimization.',
    'Tailwind CSS – for responsive, modern UI styling.',
    'Context Menus & Keyboard Navigation – for fast and accessible data entry.',
    'Dynamic Structure – for generating columns and categories based on a customizable date range.'
  ],
  highlight: [
    'Spreadsheet-style UI with support for keyboard shortcuts, tabbing, and real-time input.',
    'Auto-calculated totals and real-time profit/loss summaries per category.',
    'Category grouping for better financial organization.',
    'Context menu support for enhanced UX (e.g. add/remove row, edit group, etc.)',
    'Reactive rendering with Angular Signals to minimize unnecessary re-renders.'
  ],
  demo: {
    label: 'yusubui.github.io/budget-builder-example/',
    url: 'https://yusubui.github.io/budget-builder-example/'
  }
}];
