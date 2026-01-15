import type { Project } from '../types/Project';

import image1 from "../assets/imagens/pexels-bibekghosh-14553720.jpg";
import image2 from "../assets/imagens/pexels-markusspiske-177598.jpg";
import image3 from "../assets/imagens/pexels-matreding-6672293.jpg";
import image4 from "../assets/imagens/pexels-sarah-blocksidge-69426152-13628541.jpg";

export const projectsFr: Project[] = [
  {
    id: 1,
    type: 'data',
    title: 'Analyse de la Performance des Ventes',
    description: 'Analyse des performances de vente à l’aide de Power BI.',
    image: image1,
    tags: ['Power BI', 'Excel', 'Analyse de données'],
    problem: 'Baisse des performances de vente.',
    process: 'Création de KPI et de tableaux de bord interactifs.',
    result: 'Amélioration de la prise de décision.',
    chartImages: ['/chart-1.png', '/chart-2.png'],
  },
  {
    id: 2,
    type: 'data',
    title: 'Analyse du Comportement Client',
    description: 'Étude du comportement des clients.',
    image: image2,
    tags: ['Tableau', 'SQL'],
    problem: 'Faible rétention des clients.',
    process: 'Analyse du churn.',
    result: 'Augmentation de la fidélisation client.',
    chartImages: ['/chart-3.png', '/chart-4.png'],
  },
  {
    id: 3,
    type: 'web',
    title: 'Portfolio Personnel',
    description: 'Portfolio personnel développé avec React.',
    image: image3,
    tags: ['React', 'TypeScript'],
    readme: `
## À propos
Projet de portfolio personnel.

## Technologies
- React
- Vite
- TypeScript
    `,
    githubUrl: 'https://github.com/seuusuario/portfolio',
    liveUrl: 'https://seusite.com',
    components: [
      { name: 'Header', image: '/components/header.png' },
      { name: 'Grille de projets', image: '/components/projects.png' },
    ],
  },
  {
    id: 4,
    type: 'web',
    title: 'Application Web de Dashboard',
    description: 'Dashboard interactif.',
    image: image4,
    tags: ['React', 'Graphiques'],
    readme: `
## À propos
Application de tableau de bord en temps réel.
    `,
    githubUrl: 'https://github.com/seuusuario/dashboard',
    liveUrl: 'https://dashboard.com',
    components: [
      { name: 'Sidebar', image: '/components/sidebar.png' },
      { name: 'Graphiques', image: '/components/charts.png' },
    ],
  },
];