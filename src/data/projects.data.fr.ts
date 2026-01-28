import type { Project } from '../types/Project';

import image1 from "../assets/imagens/tccine1.png"
import image2 from "../assets/imagens/wilson2.png"
import image3 from "../assets/imagens/pexels-matreding-6672293.jpg"
import image4 from "../assets/imagens/pexels-sarah-blocksidge-69426152-13628541.jpg"

export const projectsFr: Project[] = [
  {
  id: 1,
  title: 'TCCINE',
  subtitle: 'Site audiovisuel',
  description: 'Plateforme audiovisuelle.',
  image: image1,
  tags: ['React', 'JavaScript'],

  readme: {
    overview: 'TCCINE est une plateforme dédiée à la mise en relation de personnes avec des professionnels et des ressources essentielles pour la production audiovisuelle. Elle est idéale pour ceux qui recherchent des services tels que le montage vidéo, les effets sonores, l\'étalonnage des couleurs et d\'autres techniques qui enrichissent le travail final.',
    process: 'Le développement de TCCINE a été réalisé en utilisant React avec Vite, en mettant l\'accent sur la performance, l\'organisation du code et une bonne expérience utilisateur. Dans un premier temps, une analyse de plateformes similaires a été effectuée ainsi qu\'une définition claire de la structure du projet, incluant les routes, les composants réutilisables et l\'organisation des dossiers. Le design s\'inspire d\'interfaces modernes orientées vers le secteur créatif, avec un focus sur la clarté visuelle et la responsivité. Au cours du développement, des concepts de componentisation, de séparation des responsabilités et de bonnes pratiques front-end ont été appliqués. La responsivité a été assurée grâce aux Media Queries, permettant une utilisation aussi bien sur mobile que sur ordinateur. Pour la communication avec les utilisateurs, l\'outil Formspree a été intégré, permettant l\'envoi de formulaires directement par e-mail sans nécessiter de backend propre. Enfin, le projet a fait l\'objet de tests visuels et fonctionnels avant sa mise en production.',
    technologies: ['React', 'Vite', 'JavaScript'],
    images: ['/screens/home.png', '/screens/projects.png'],
  },

  githubUrl: 'https://github.com/Anders0nlima/TC-cine',
  liveUrl: 'https://anders0nlima.github.io/TC-cine/',
  },
  {
  id: 2,
  title: 'Wilson Hair',
  subtitle: 'Système de prise de rendez-vous pour salon de beauté',
  description: 'Système de prise de rendez-vous pour salon de beauté',
  image: image2,
  tags: ['React', 'TypeScript', 'JavaScript'],

  readme: {
    overview: 'Wilson Hair est un système web de prise de rendez-vous développé pour optimiser la gestion des services dans les salons de beauté. La plateforme a été conçue avec trois niveaux d\'accès — administrateur, employé et client — garantissant que chaque utilisateur visualise et utilise uniquement les fonctionnalités correspondant à son profil, identifiées au moment de la connexion.',
    process: 'Le développement du projet a suivi une architecture en couches, séparant les responsabilités entre les différents types \'utilisateurs. L\'accent a été mis sur la création d\'une interface intuitive et efficace, facilitant la prise de rendez-vous pour les clients, l\'organisation de l\'agenda pour les employés et le contrôle global du système par l\'administrateur. Une attention particulière a également été portée à l\'ergonomie, à la responsivité et à la clarté des flux de navigation.',
    technologies: ['React', 'Vite', 'JavaScript', 'TypeScript', 'Vite', 'Figma (UI Design)'],
    images: ['/screens/home.png', '/screens/projects.png'],
  },

  githubUrl: 'https://github.com/Anders0nlima/frontend-wilson',
  liveUrl: '*',
  },
  {
    id: 3,
    title: '[dados]',
    subtitle: 'Site para salões',
    description: 'Plataforma de agendamentos',
    image: image3,
    tags: ['React', 'JavaScript'],

    readme: {
      overview: 'Portfólio audiovisual desenvolvido para apresentação de projetos.',
      process: 'Desenvolvimento da interface e organização do conteúdo.',
      technologies: ['React', 'Vite', 'TypeScript'],
      images: ['/screens/home.png', '/screens/projects.png'],
    },

    githubUrl: 'https://github.com/Anders0nlima/TC-cine',
    liveUrl: 'https://anders0nlima.github.io/TC-cine/',
  },
  {
    id: 4,
    title: 'Analise de Dados',
    subtitle: 'Site audiovisual',
    description: 'Plataforma audiovisual.',
    image: image4,
    tags: ['React', 'JavaScript'],

    readme: {
      overview: 'Portfólio audiovisual desenvolvido para apresentação de projetos.',
      process: 'Desenvolvimento da interface e organização do conteúdo.',
      technologies: ['React', 'Vite', 'TypeScript'],
      images: ['/screens/home.png', '/screens/projects.png'],
    },

    githubUrl: 'https://github.com/Anders0nlima/TC-cine',
    liveUrl: 'https://anders0nlima.github.io/TC-cine/',
  },
];