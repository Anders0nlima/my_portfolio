import { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'en' | 'pt' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

const translations = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      downloadCV: 'Download CV'
    },
    hero: {
      badge: '-------',
      headline1: 'Web Development &',
      headline2: 'Data Analysis Student',
      subheadline: 'Information Systems student focused on web development and data analysis. I build interactive web applications and data dashboards using React, Vite, JavaScript, TypeScript, Power BI, and Excel, transforming raw data into clear insights and practical solutions.',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
      stats: {
        projects: 'Projects Completed',
        dataPoints: 'Data Points Analyzed',
        techTools: 'Tech Tools Mastered'
      }
    },
    about: {
      title: 'About Me',
      bio: {
        p1: "I am an Information Systems student at UFPA with a strong interest in technology and problem-solving. I have been studying web development since high school, which gave me a solid foundation in building applications and understanding how systems work end to end.",
        p2: "My main stack includes JavaScript and TypeScript for modern web development, and I am also expanding my skills in Java and Python. This journey naturally led me to explore the data field, where I combine programming logic with data analysis and visualization.",
        p3: "In addition to programming, I study English and French, which helps me access international content, collaborate in diverse environments, and prepare for global opportunities. I am constantly learning and improving, seeking to build solutions that are both technically solid and meaningful in real-world scenarios.",
        available: 'Open to Opportunities',
        experience: 'Student & Continuous Learner'
      },
      experience: {
        title: 'Experience & Background',
        professional: 'Professional',
        academic: 'Academic',
        volunteer: 'Volunteer',
        professionalExp: [
          {
              title: 'TCCine Project',
              company: 'Development for an audiovisual company',
              period: '2025',
              description: 'Development of an institutional website for production use, being my first project published in a real-world environment.'
            },
            {
              title: 'Mental Calculation Project',
              company: 'System developed for a mathematics teacher',
              period: '2025',
              description: 'First freelance project, developed to support educational activities, with a focus on logic and usability.'
            },
            {
              title: 'Beauty Salon Project',
              company: 'System under development for a company in the beauty sector',
              period: '2026 - Present',
              description: 'Project developed as part of the integrative project of the Bolsa Futuro Digital program, applying full-stack development concepts.'
            }
        ],
        academicExp: [
          {
            title: 'Undergraduate student in Information Systems',
            company: 'Federal University of Pará',
            period: '2025 - Present',
            description: 'Academic training focused on software development, programming logic, databases, and fundamentals of information systems.'
          },
          {
            title: 'Former scholarship holder of the Bolsa Futuro Digital program',
            company: 'Apoti Academy',
            period: '2025 - 2026',
            description: 'Training program focused on backend development using Python, including programming practices, problem solving, and the development of collaboration and networking skills.'
          },
          {
            title: 'Final Data Analysis Project',
            company: 'Alura',
            period: '2026',
            description: 'Development of a final project in the Data Analysis Immersion course, deepening knowledge in data analysis, processing, and visualization with certification.'
          }
        ],
        volunteerExp: [
          {
            title: 'Educational repositories',
            company: 'Community and open learning',
            period: '2024 - Present',
            description: 'Creation of GitHub repositories focused on teaching practical web development concepts, such as website deployment, full-stack fundamentals, and good coding practices.'
          },
          {
            title: 'Open Source project contributions',
            company: 'Collaboration with the tech community',
            period: '2026 - Present',
            description: 'Contribution to open source projects, working on code improvements, bug fixes, and the evolution of community-oriented features.'
          },
          {
            title: 'Open Source Contributor',
            company: 'Various Projects',
            period: '2020 - Present',
            description: 'Contributing to open-source data science and web development projects. Maintaining documentation and fixing bugs for community-driven initiatives.'
          }
        ]
      },
      techStack: 'Stacks'
    },
projects: {
  title: 'Featured Projects',
  subtitle: 'Explore case studies showcasing data-driven solutions and their measurable impact',

  // 🔧 BOTÕES / AÇÕES
  viewCaseStudy: 'View Case Study',
  viewReadme: 'View README',
  viewLive: 'Live Demo',

  projects: [
    {
      title: 'E-Commerce Sales Analytics Dashboard',
      description:
        'Built an interactive Power BI dashboard tracking 50K+ transactions, revealing seasonal trends and customer segments.',
      tags: ['Python', 'Power BI', 'SQL'],
      problem:
        'The company had fragmented sales data across multiple systems, making it impossible to identify key performance drivers and seasonal patterns.',
      process:
        'Cleaned and normalized 50K+ transaction records using Python/Pandas, designed a star schema database in SQL, and created an ETL pipeline. Built interactive visualizations in Power BI with drill-down capabilities.',
      result:
        'Identified 3 high-value customer segments accounting for 65% of revenue, discovered a 40% sales spike during Q4, and enabled data-driven inventory planning that reduced stockouts by 28%.',
    },
    {
      title: 'Customer Churn Prediction Model',
      description:
        'Developed a machine learning model to predict customer churn with 87% accuracy, enabling proactive retention strategies.',
      tags: ['Python', 'Scikit-learn', 'Pandas'],
      problem:
        'High customer churn rates were impacting revenue, but the company had no way to identify at-risk customers before they left.',
      process:
        'Performed exploratory data analysis on 10K+ customer records, engineered 15 behavioral features, and trained multiple models (Logistic Regression, Random Forest, XGBoost). Fine-tuned hyperparameters using cross-validation.',
      result:
        'Achieved 87% prediction accuracy with Random Forest. The model identified top churn drivers: low engagement and lack of recent purchases. Implementation led to a 15% reduction in churn within 3 months.',
    },
    {
      title: 'Real-Time Analytics Web App',
      description:
        'Created a full-stack React dashboard with live data streaming, allowing teams to monitor KPIs in real-time.',
      tags: ['React', 'Node.js', 'Recharts'],
      problem:
        'Teams were making decisions based on outdated reports that were generated weekly, missing critical real-time opportunities.',
      process:
        'Built a React frontend with Recharts for dynamic visualizations, developed a Node.js backend API, and implemented WebSocket connections for live data streaming. Optimized database queries for sub-second response times.',
      result:
        'Reduced decision-making lag from 7 days to real-time. Teams could instantly spot anomalies and trends, leading to 23% faster response to market changes and improved operational efficiency.',
    },
    {
      title: 'Supply Chain Optimization Analysis',
      description:
        'Analyzed logistics data to optimize delivery routes and reduce operational costs by 18% using data-driven insights.',
      tags: ['Python', 'SQL', 'Tableau'],
      problem:
        'Inefficient delivery routes and warehouse placement were causing high operational costs and delayed deliveries.',
      process:
        'Extracted and cleaned 6 months of logistics data using SQL, performed geospatial analysis in Python, and created route optimization models. Built Tableau dashboards to visualize inefficiencies and recommendations.',
      result:
        'Identified 12 suboptimal routes and recommended 3 new warehouse locations. Implementation reduced delivery times by 22% and cut operational costs by 18%, saving $450K annually.',
    },
  ],
},
    caseStudy: {
      overview: 'Overview',
      process: 'Process',
      technologies: 'Technologies',
      close: 'Close Case Study'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "Have a project in mind or want to collaborate? Let's turn your data into actionable insights.",
      form: {
        name: 'Your Name',
        namePlaceholder: 'John Doe',
        email: 'Email Address',
        emailPlaceholder: 'john@example.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project or how we can collaborate...',
        send: 'Send Message',
        sent: 'Message Sent!'
      },
      connect: 'Connect With Me',
      connectDesc: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your data-driven initiatives. Feel free to reach out through any of these channels.",
      social: {
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub'
      },
      quickResponse: {
        title: 'Quick Response',
        desc: 'I typically respond within 24 hours during business days. For urgent inquiries, please mention "Urgent" in your message subject.'
      }
    },
    footer: {
      rights: 'Data Portfolio. All rights reserved.'
    }
  },
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
      downloadCV: 'Baixar CV'
    },
    hero: {
      badge: '-------',
      headline1: 'Desenvolvedor Web e',
      headline2: 'Estudante de Análise de Dados.',
      subheadline: 'Estudante de Sistemas de Informação com foco em desenvolvimento web e análise de dados. Crio aplicações web interativas e dashboards de dados usando React, Vite, JavaScript, TypeScript, Power BI e Excel, transformando dados brutos em insights claros e soluções práticas.',
      viewProjects: 'Ver Projetos',
      getInTouch: 'Entre em Contato',
      stats: {
        projects: 'Projetos Concluídos',
        dataPoints: 'Pontos de Dados Analisados',
        techTools: 'Ferramentas Dominadas'
      }
    },
    about: {
      title: 'Sobre Mim',
      bio: {
        p1: 'Sou estudante de Sistemas de Informação pela UFPA, com grande interesse em tecnologia e resolução de problemas. Estudo desenvolvimento web desde o ensino médio, o que me proporcionou uma base sólida na criação de aplicações e na compreensão de sistemas de ponta a ponta.',
        p2: 'Meu principal conjunto de tecnologias envolve JavaScript e TypeScript para o desenvolvimento web moderno, além de estar expandindo meus conhecimentos em Java e Python. Esse percurso me levou naturalmente a me aprofundar na área de dados, unindo lógica de programação com análise e visualização de informações.',
        p3: 'Além da programação, estudo inglês e francês, o que me permite acessar conteúdos internacionais, colaborar em ambientes diversos e me preparar para oportunidades globais. Estou em constante aprendizado, buscando desenvolver soluções tecnicamente sólidas e relevantes para problemas do mundo real.',
        available: 'Aberto a Oportunidades',
        experience: 'Estudante & Aprendizado Contínuo'
      },
      experience: {
        title: 'Experiência e Formação',
        professional: 'Profissional',
        academic: 'Acadêmica',
        volunteer: 'Voluntariado',
        professionalExp: [
          {
            title: 'Projeto TCCine',
            company: 'Desenvolvimento para empresa de audiovisual',
            period: '2025',
            description: 'Desenvolvimento de website institucional destinado à produção, sendo meu primeiro projeto publicado em ambiente real.'
          },
          {
            title: 'Projeto Mental Calculation',
            company: 'Sistema desenvolvido para um professor de matemática',
            period: '2025',
            description: 'Primeiro projeto freelancer, desenvolvido para apoiar atividades educacionais, com foco em lógica e usabilidade.'
          },
          {
            title: 'Projeto Salão de Beleza',
            company: 'Sistema em desenvolvimento para empresa do setor de beleza',
            period: '2026 - presente',
            description: 'Projeto desenvolvido como parte do projeto integrador do programa Bolsa Futuro Digital, aplicando conceitos de desenvolvimento full stack.'
          }
        ],
        academicExp: [
          {
            title: 'Graduando em Sistemas de Informação',
            company: 'Universidade Federal do Pará',
            period: '2025 - Presente',
            description: 'Formação acadêmica com foco em desenvolvimento de software, lógica de programação, banco de dados e fundamentos de sistemas de informação.'
          },
          {
            title: 'Ex-bolsista do programa Bolsa Futuro Digital',
            company: 'Apoti Academy',
            period: '2025 - 2026',
            description: 'Programa de formação com foco em desenvolvimento backend utilizando Python, incluindo práticas de programação, resolução de problemas e desenvolvimento de habilidades de colaboração e networking.'
          },
          {
            title: 'Projeto final de Análise de Dados',
            company: 'Alura',
            period: '2026',
            description: 'Desenvolvimento de projeto final no curso de Imersão em Análise de Dados, aprofundando conhecimentos em análise, tratamento e visualização de dados com certificação.'
          }
        ],
        volunteerExp: [
          {
            title: 'Repositórios educacionais',
            company: 'Comunidade e aprendizado aberto',
            period: '2024 - Presente',
            description: 'Criação de repositórios no GitHub voltados ao ensino de conceitos práticos de desenvolvimento web, como publicação de sites, fundamentos de full stack e boas práticas de código.'
          },
          {
            title: 'Contribuições em projetos Open Source',
            company: 'Colaboração com a comunidade tech',
            period: '2026 - Presente',
            description: 'Contribuição em projetos open source, atuando na melhoria de código, correção de problemas e evolução de funcionalidades voltadas à comunidade.'
          },
          {
            title: 'Contribuidor Open Source',
            company: 'Vários Projetos',
            period: '2020 - Presente',
            description: 'Contribuindo para projetos open source de ciência de dados e desenvolvimento web. Mantendo documentação e corrigindo bugs para iniciativas comunitárias.'
          }
        ]
      },
      techStack: 'Stacks'
    },
    projects: {
      title: 'Projetos em Destaque',
      subtitle: 'Explore estudos de caso mostrando soluções orientadas por dados e seu impacto mensurável',
      viewCaseStudy: 'Ver Estudo de Caso',
      projects: [
        {
          title: 'Dashboard de Análise de Vendas E-Commerce',
          description: 'Construí um dashboard interativo em Power BI rastreando mais de 50 mil transações, revelando tendências sazonais e segmentos de clientes.',
          tags: ['Python', 'Power BI', 'SQL'],
          problem: 'A empresa tinha dados de vendas fragmentados em múltiplos sistemas, tornando impossível identificar os principais impulsionadores de desempenho e padrões sazonais.',
          process: 'Limpei e normalizei mais de 50 mil registros de transações usando Python/Pandas, projetei um banco de dados star schema em SQL e criei um pipeline ETL. Construí visualizações interativas no Power BI com capacidades de drill-down.',
          result: 'Identifiquei 3 segmentos de clientes de alto valor responsáveis por 65% da receita, descobri um aumento de 40% nas vendas durante o Q4 e habilitei planejamento de inventário orientado por dados que reduziu faltas de estoque em 28%.'
        },
        {
          title: 'Modelo de Previsão de Churn de Clientes',
          description: 'Desenvolvi um modelo de aprendizado de máquina para prever churn de clientes com 87% de precisão, permitindo estratégias proativas de retenção.',
          tags: ['Python', 'Scikit-learn', 'Pandas'],
          problem: 'Altas taxas de churn de clientes estavam impactando a receita, mas a empresa não tinha como identificar clientes em risco antes de perderem.',
          process: 'Realizei análise exploratória de dados em mais de 10 mil registros de clientes, criei 15 features comportamentais e treinei múltiplos modelos (Regressão Logística, Random Forest, XGBoost). Ajustei hiperparâmetros usando validação cruzada.',
          result: 'Alcancei 87% de precisão de previsão com Random Forest. O modelo identificou os principais impulsionadores de churn: baixo engajamento e falta de compras recentes. A implementação levou a uma redução de 15% no churn em 3 meses.'
        },
        {
          title: 'Aplicação Web de Análise em Tempo Real',
          description: 'Criei um dashboard React full-stack com streaming de dados ao vivo, permitindo que equipes monitorem KPIs em tempo real.',
          tags: ['React', 'Node.js', 'Recharts'],
          problem: 'As equipes estavam tomando decisões baseadas em relatórios desatualizados gerados semanalmente, perdendo oportunidades críticas em tempo real.',
          process: 'Construí um frontend React com Recharts para visualizações dinâmicas, desenvolvi uma API backend Node.js e implementei conexões WebSocket para streaming de dados ao vivo. Otimizei consultas de banco de dados para tempos de resposta subsegundo.',
          result: 'Reduzi o atraso na tomada de decisões de 7 dias para tempo real. As equipes puderam instantaneamente detectar anomalias e tendências, levando a uma resposta 23% mais rápida às mudanças de mercado e melhor eficiência operacional.'
        },
        {
          title: 'Análise de Otimização de Cadeia de Suprimentos',
          description: 'Analisei dados logísticos para otimizar rotas de entrega e reduzir custos operacionais em 18% usando insights orientados por dados.',
          tags: ['Python', 'SQL', 'Tableau'],
          problem: 'Rotas de entrega ineficientes e posicionamento de armazéns estavam causando altos custos operacionais e atrasos nas entregas.',
          process: 'Extraí e limpei 6 meses de dados logísticos usando SQL, realizei análise geoespacial em Python e criei modelos de otimização de rotas. Construí dashboards no Tableau para visualizar ineficiências e recomendações.',
          result: 'Identifiquei 12 rotas subótimas e recomendei 3 novas localizações de armazéns. A implementação reduziu tempos de entrega em 22% e cortou custos operacionais em 18%, economizando $450 mil anualmente.'
        }
      ]
    },
    caseStudy: {
      overview: 'Visão Geral',
      process: 'Processo',
      technologies: 'Technologies',
      close: 'Fechar Estudo de Caso'
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Tem um projeto em mente ou quer colaborar? Vamos transformar seus dados em insights acionáveis.',
      form: {
        name: 'Seu Nome',
        namePlaceholder: 'João Silva',
        email: 'Endereço de Email',
        emailPlaceholder: 'joao@exemplo.com',
        message: 'Mensagem',
        messagePlaceholder: 'Conte-me sobre seu projeto ou como podemos colaborar...',
        send: 'Enviar Mensagem',
        sent: 'Mensagem Enviada!'
      },
      connect: 'Conecte-se Comigo',
      connectDesc: 'Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte de suas iniciativas orientadas por dados. Sinta-se à vontade para entrar em contato através de qualquer um desses canais.',
      social: {
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub'
      },
      quickResponse: {
        title: 'Resposta Rápida',
        desc: 'Normalmente respondo dentro de 24 horas durante dias úteis. Para consultas urgentes, por favor mencione "Urgente" no assunto da mensagem.'
      }
    },
    footer: {
      rights: 'Data Portfolio. Todos os direitos reservados.'
    }
  },
  fr: {
    nav: {
      about: 'À Propos',
      projects: 'Projets',
      contact: 'Contact',
      downloadCV: 'Télécharger CV'
    },
    hero: {
      badge: '-------',
      headline1: 'Développeur Web et',
      headline2: 'Étudiant en Analyse de Données',
      subheadline: 'Étudiant en systèmes d\'information, spécialisé en développement web et analyse de données. Je crée des applications web interactives et des tableaux de bord de données à l\'aide de React, Vite, JavaScript, TypeScript, Power BI et Excel, transformant ainsi les données brutes en informations claires et en solutions concrètes.',
      viewProjects: 'Voir les Projets',
      getInTouch: 'Me Contacter',
      stats: {
        projects: 'Projets Réalisés',
        dataPoints: 'Points de Données Analysés',
        techTools: 'Outils Tech Maîtrisés'
      }
    },
    about: {
      title: 'À Propos de Moi',
      bio: {
        p1: 'Je suis étudiant en Systèmes d\'Information à l\'UFPA, avec un fort intérêt pour la technologie et la résolution de problèmes. J\'étudie le développement web depuis le lycée, ce qui m\'a permis d\'acquérir une base solide dans la création d\'applications et la compréhension des systèmes de bout en bout.',
        p2: 'Mon stack principal comprend JavaScript et TypeScript pour le développement web moderne, et j\'élargis également mes compétences en Java et Python. Ce parcours m\'a naturellement conduit à m\'intéresser au domaine des données, en combinant la logique de programmation avec l\'analyse et la visualisation des données.',
        p3: 'En plus de la programmation, j\'étudie l\'anglais et le français, ce qui me permet d\'accéder à des contenus internationaux, de collaborer dans des environnements variés et de me préparer à des opportunités globales. Je suis en apprentissage constant, avec pour objectif de créer des solutions techniquement solides et utiles dans des contextes réels.',
        available: 'Ouvert aux Opportunités',
        experience: 'Étudiant & Apprentissage Continu'
      },
      experience: {
        title: 'Expérience et Formation',
        professional: 'Professionnelle',
        academic: 'Académique',
        volunteer: 'Bénévolat',
        professionalExp: [
          {
            title: 'Projet TCCine',
            company: 'Développement pour une entreprise audiovisuelle',
            period: '2025',
            description: 'Développement d’un site institutionnel destiné à la production, constituant mon premier projet publié dans un environnement réel.'
          },
          {
            title: 'Projet Mental Calculation',
            company: 'Système développé pour un professeur de mathématiques',
            period: '2025',
            description: 'Premier projet freelance, développé pour soutenir des activités éducatives, avec un accent sur la logique et l’ergonomie.'
          },
          {
            title: 'Projet Salon de Beauté',
            company: 'Système en cours de développement pour une entreprise du secteur de la beauté',
            period: '2026 - Présent',
            description: 'Projet développé dans le cadre du projet intégrateur du programme Bolsa Futuro Digital, en appliquant des concepts de développement full stack.'
          }
        ],
        academicExp: [
          {
            title: 'Étudiant en systèmes d\'information',
            company: 'Université Fédérale du Pará',
            period: '2025 - Présent',
            description: 'Formation académique axée sur le développement logiciel, la logique de programmation, les bases de données et les fondements des systèmes d\'information.'
          },
          {
            title: 'Ancien boursier du programme Bolsa Futuro Digital',
            company: 'Apoti Academy',
            period: '2025 - 2026',
            description: 'Programme de formation axé sur le développement backend en Python, incluant des pratiques de programmation, la résolution de problèmes et le développement de compétences en collaboration et en réseautage.'
          },
          {
            title: 'Projet final en analyse de données',
            company: 'Alura',
            period: '2026',
            description: 'Réalisation d\'un projet final dans le cadre du cours d\'Immersion en Analyse de Données, approfondissant les connaissances en analyse, traitement et visualisation des données, avec certification.'
          }
        ],
        volunteerExp: [
          {
            title: 'Dépôts éducatifs',
            company: 'Communauté et apprentissage ouvert',
            period: '2024 - Présent',
            description: 'Création de dépôts GitHub axés sur l\'enseignement de concepts pratiques du développement web, tels que la mise en ligne de sites, les bases du full stack et les bonnes pratiques de code.'
          },
          {
            title: 'Contributions à des projets Open Source',
            company: 'Collaboration avec la communauté tech',
            period: '2026 - Présent',
            description: 'Contribution à des projets open source, en travaillant sur l\'amélioration du code, la correction de problèmes et l\'évolution de fonctionnalités orientées vers la communauté.'
          },
          {
            title: 'Contributeur Open Source',
            company: 'Divers Projets',
            period: '2020 - Présent',
            description: 'Contribution à des projets open source de science des données et développement web. Maintenance de documentation et correction de bugs pour des initiatives communautaires.'
          }
        ]
      },
      techStack: 'Stacks'
    },
    projects: {
      title: 'Projets Phares',
      subtitle: 'Explorez des études de cas présentant des solutions basées sur les données et leur impact mesurable',
      viewCaseStudy: 'Voir l\'Étude de Cas',
      projects: [
        {
          title: 'Tableau de Bord Analytique E-Commerce',
          description: 'Construction d\'un tableau de bord Power BI interactif suivant plus de 50 000 transactions, révélant les tendances saisonnières et les segments de clients.',
          tags: ['Python', 'Power BI', 'SQL'],
          problem: 'L\'entreprise avait des données de ventes fragmentées sur plusieurs systèmes, rendant impossible l\'identification des principaux moteurs de performance et des tendances saisonnières.',
          process: 'Nettoyage et normalisation de plus de 50 000 enregistrements de transactions en utilisant Python/Pandas, conception d\'une base de données en schéma étoile en SQL et création d\'un pipeline ETL. Construction de visualisations interactives dans Power BI avec des capacités de drill-down.',
          result: 'Identification de 3 segments de clients de grande valeur représentant 65% du chiffre d\'affaires, découverte d\'une hausse de 40% des ventes au Q4 et activation de la planification des stocks basée sur les données qui a réduit les ruptures de stock de 28%.'
        },
        {
          title: 'Modèle de Prédiction de Churn Client',
          description: 'Développement d\'un modèle d\'apprentissage automatique pour prédire le churn des clients avec 87% de précision, permettant des stratégies de rétention proactives.',
          tags: ['Python', 'Scikit-learn', 'Pandas'],
          problem: 'Des taux de churn clients élevés impactaient les revenus, mais l\'entreprise n\'avait aucun moyen d\'identifier les clients à risque avant leur départ.',
          process: 'Analyse exploratoire de données sur plus de 10 000 dossiers clients, ingénierie de 15 caractéristiques comportementales et entraînement de plusieurs modèles (Régression Logistique, Random Forest, XGBoost). Ajustement des hyperparamètres en utilisant la validation croisée.',
          result: 'Atteinte de 87% de précision de prédiction avec Random Forest. Le modèle a identifié les principaux moteurs de churn: faible engagement et absence d\'achats récents. La mise en œuvre a conduit à une réduction de 15% du churn en 3 mois.'
        },
        {
          title: 'Application Web d\'Analyse en Temps Réel',
          description: 'Création d\'un tableau de bord React full-stack avec diffusion de données en direct, permettant aux équipes de surveiller les KPI en temps réel.',
          tags: ['React', 'Node.js', 'Recharts'],
          problem: 'Les équipes prenaient des décisions basées sur des rapports obsolètes générés hebdomadairement, manquant des opportunités critiques en temps réel.',
          process: 'Construction d\'un frontend React avec Recharts pour des visualisations dynamiques, développement d\'une API backend Node.js et implémentation de connexions WebSocket pour la diffusion de données en direct. Optimisation des requêtes de base de données pour des temps de réponse inférieurs à la seconde.',
          result: 'Réduction du délai de prise de décision de 7 jours au temps réel. Les équipes peuvent instantanément repérer les anomalies et tendances, conduisant à une réponse 23% plus rapide aux changements du marché et une meilleure efficacité opérationnelle.'
        },
        {
          title: 'Analyse d\'Optimisation de Chaîne d\'Approvisionnement',
          description: 'Analyse de données logistiques pour optimiser les itinéraires de livraison et réduire les coûts opérationnels de 18% en utilisant des informations basées sur les données.',
          tags: ['Python', 'SQL', 'Tableau'],
          problem: 'Des itinéraires de livraison inefficaces et un mauvais placement des entrepôts causaient des coûts opérationnels élevés et des retards de livraison.',
          process: 'Extraction et nettoyage de 6 mois de données logistiques en utilisant SQL, analyse géospatiale en Python et création de modèles d\'optimisation d\'itinéraires. Construction de tableaux de bord Tableau pour visualiser les inefficacités et recommandations.',
          result: 'Identification de 12 itinéraires sous-optimaux et recommandation de 3 nouveaux emplacements d\'entrepôts. La mise en œuvre a réduit les délais de livraison de 22% et réduit les coûts opérationnels de 18%, économisant 450 000$ annuellement.'
        }
      ]
    },
    caseStudy: {
      overview: 'Vue d’ensemble',
      process: 'Processus',
      technologies: 'Technologies',
      close: 'Fermer l\'Étude de Cas'
    },
    contact: {
      title: 'Me Contacter',
      subtitle: 'Vous avez un projet en tête ou souhaitez collaborer? Transformons vos données en informations exploitables.',
      form: {
        name: 'Votre Nom',
        namePlaceholder: 'Jean Dupont',
        email: 'Adresse Email',
        emailPlaceholder: 'jean@exemple.com',
        message: 'Message',
        messagePlaceholder: 'Parlez-moi de votre projet ou comment nous pouvons collaborer...',
        send: 'Envoyer le Message',
        sent: 'Message Envoyé!'
      },
      connect: 'Connectez-vous avec Moi',
      connectDesc: 'Je suis toujours ouvert à discuter de nouveaux projets, d\'idées créatives ou d\'opportunités de faire partie de vos initiatives axées sur les données. N\'hésitez pas à me contacter via l\'un de ces canaux.',
      social: {
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub'
      },
      quickResponse: {
        title: 'Réponse Rapide',
        desc: 'Je réponds généralement dans les 24 heures pendant les jours ouvrables. Pour les demandes urgentes, veuillez mentionner "Urgent" dans l\'objet de votre message.'
      }
    },
    footer: {
      rights: 'Data Portfolio. Tous droits réservés.'
    }
  }
};
