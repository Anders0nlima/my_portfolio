import type { Project } from '../types/Project';

import image1 from "../assets/imagens/pexels-bibekghosh-14553720.jpg";
import image2 from "../assets/imagens/pexels-markusspiske-177598.jpg";
import image3 from "../assets/imagens/pexels-matreding-6672293.jpg";
import image4 from "../assets/imagens/pexels-sarah-blocksidge-69426152-13628541.jpg";

export const projectsEn: Project[] = [
  {
    id: 1,
    type: 'data',
    title: 'Sales Performance Analysis',
    description: 'Sales performance analysis using Power BI.',
    image: image1,
    tags: ['Power BI', 'Excel', 'Data Analysis'],
    problem: 'Decline in sales performance.',
    process: 'Creation of KPIs and interactive dashboards.',
    result: 'Improved decision-making.',
    chartImages: ['/chart-1.png', '/chart-2.png'],
  },
  {
    id: 2,
    type: 'data',
    title: 'Customer Behavior Insights',
    description: 'Customer behavior analysis.',
    image: image2,
    tags: ['Tableau', 'SQL'],
    problem: 'Low customer retention.',
    process: 'Churn analysis.',
    result: 'Increased customer retention.',
    chartImages: ['/chart-3.png', '/chart-4.png'],
  },
  {
    id: 3,
    type: 'web',
    title: 'Personal Portfolio',
    description: 'Personal portfolio built with React.',
    image: image3,
    tags: ['React', 'TypeScript'],
    readme: `
## About
Personal portfolio project.

## Technologies
- React
- Vite
- TypeScript
    `,
    githubUrl: 'https://github.com/seuusuario/portfolio',
    liveUrl: 'https://seusite.com',
    components: [
      { name: 'Header', image: '/components/header.png' },
      { name: 'Projects Grid', image: '/components/projects.png' },
    ],
  },
  {
    id: 4,
    type: 'web',
    title: 'Web Dashboard App',
    description: 'Interactive web dashboard.',
    image: image4,
    tags: ['React', 'Charts'],
    readme: `
## About
Real-time dashboard application.
    `,
    githubUrl: 'https://github.com/seuusuario/dashboard',
    liveUrl: 'https://dashboard.com',
    components: [
      { name: 'Sidebar', image: '/components/sidebar.png' },
      { name: 'Charts', image: '/components/charts.png' },
    ],
  },
];