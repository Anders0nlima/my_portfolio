import type { Project } from '../types/Project';

import image1 from "../assets/imagens/pexels-bibekghosh-14553720.jpg"
import image2 from "../assets/imagens/pexels-markusspiske-177598.jpg"
import image3 from "../assets/imagens/pexels-matreding-6672293.jpg"
import image4 from "../assets/imagens/pexels-sarah-blocksidge-69426152-13628541.jpg"

export const projects: Project[] = [
  {
    id: 1,
    type: 'data',
    title: 'Sales Performance Analysis',
    description: 'Análise de desempenho de vendas usando Power BI.',
    image: image1,
    tags: ['Power BI', 'Excel', 'Data Analysis'],
    problem: 'Queda no desempenho de vendas.',
    process: 'Criação de KPIs e dashboards.',
    result: 'Melhoria na tomada de decisão.',
    chartImages: ['/chart-1.png', '/chart-2.png'],
  },
  {
    id: 2,
    type: 'data',
    title: 'Customer Behavior Insights',
    description: 'Estudo de comportamento do cliente.',
    image: image2,
    tags: ['Tableau', 'SQL'],
    problem: 'Baixa retenção.',
    process: 'Análise de churn.',
    result: 'Aumento da retenção.',
    chartImages: ['/chart-3.png', '/chart-4.png'],
  },
  {
    id: 3,
    type: 'web',
    title: 'Personal Portfolio',
    description: 'Portfólio pessoal com React.',
    image: image3,
    tags: ['React', 'TypeScript'],
    readme: `
## Sobre
Portfólio pessoal.

## Tecnologias
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
    title: 'Dashboard Web App',
    description: 'Dashboard interativo.',
    image: image4,
    tags: ['React', 'Charts'],
    readme: `
## Sobre
Dashboard em tempo real.
    `,
    githubUrl: 'https://github.com/seuusuario/dashboard',
    liveUrl: 'https://dashboard.com',
    components: [
      { name: 'Sidebar', image: '/components/sidebar.png' },
      { name: 'Charts', image: '/components/charts.png' },
    ],
  },
];