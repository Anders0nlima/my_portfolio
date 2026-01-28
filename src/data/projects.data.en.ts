import type { Project } from '../types/Project';

import image1 from "../assets/imagens/tccine1.png"
import image2 from "../assets/imagens/wilson2.png"
import image3 from "../assets/imagens/pexels-matreding-6672293.jpg"
import image4 from "../assets/imagens/pexels-sarah-blocksidge-69426152-13628541.jpg"

export const projectsEn: Project[] = [
  {
    id: 1,
    title: 'TCCINE',
    subtitle: 'Audiovisual website',
    description: 'Audiovisual platform.',
    image: image1,
    tags: ['React', 'JavaScript'],

    readme: {
      overview: 'TCCINE is a platform dedicated to connecting people with professionals and essential resources for audiovisual production. It is ideal for those seeking services such as video editing, sound effects, color grading, and other techniques that enhance the final work.',
      process: 'The development of TCCINE was carried out using React with Vite, focusing on performance, code organization, and a strong user experience. Initially, an analysis of similar platforms was conducted, followed by a clear definition of the project structure, including routes, reusable components, and folder organization. The layout was inspired by modern interfaces aimed at the creative industry, with an emphasis on visual clarity and responsiveness. Throughout development, concepts such as componentization, separation of concerns, and front-end best practices were applied. Responsiveness was ensured through Media Queries, allowing use on both mobile devices and desktops. For user communication, the Formspree tool was integrated, enabling form submissions to be sent directly via email without the need for a dedicated backend. Finally, the project underwent visual and functional testing before being released to production.',
      technologies: ['React', 'Vite', 'JavaScript'],
      images: ['/screens/home.png', '/screens/projects.png'],
    },

    githubUrl: 'https://github.com/Anders0nlima/TC-cine',
    liveUrl: 'https://anders0nlima.github.io/TC-cine/',
  },
  {
    id: 2,
    title: 'Wilson Hair',
    subtitle: 'Appointment scheduling system for beauty salons',
    description: 'Appointment scheduling system for beauty salons',
    image: image2,
    tags: ['React', 'TypeScript', 'JavaScript'],

    readme: {
      overview: 'Wilson Hair is a web-based appointment scheduling system developed to optimize service management in beauty salons. The platform was designed with three access levels — administrator, employee, and client — ensuring that each user can view and use only the functionalities corresponding to their profile, identified at the time of login.',
      process: 'The project development followed a layered architecture, separating responsibilities among different user roles. The focus was on creating an intuitive and efficient interface, simplifying the booking process for clients, schedule management for employees, and overall system control for administrators. Special attention was also given to usability, responsiveness, and clarity of navigation flows.',
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