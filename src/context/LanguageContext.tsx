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
      badge: 'Data Analyst & Web Developer',
      headline1: 'Turning Data into',
      headline2: 'Decisions',
      subheadline: 'Information Systems specialist transforming complex datasets into actionable insights through advanced analytics, machine learning, and interactive web applications.',
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
        p1: "I'm a data-driven professional with a passion for uncovering insights hidden within complex datasets. With a background in Information Systems, I bridge the gap between raw data and strategic business decisions.",
        p2: "My expertise spans across data analysis, statistical modeling, machine learning, and full-stack web development. I specialize in building end-to-end solutions—from data extraction and cleaning to creating interactive dashboards and predictive models.",
        p3: "Whether it's identifying customer behavior patterns, optimizing business processes, or developing real-time analytics platforms, I transform data into actionable intelligence that drives measurable results.",
        available: 'Available for Projects',
        experience: '5+ Years Experience'
      },
      experience: {
        title: 'Experience & Background',
        professional: 'Professional',
        academic: 'Academic',
        volunteer: 'Volunteer',
        professionalExp: [
          {
            title: 'Senior Data Analyst',
            company: 'TechCorp Solutions',
            period: '2022 - Present',
            description: 'Leading data analytics initiatives, building ML models for customer segmentation, and developing automated reporting dashboards using Power BI and Python.'
          },
          {
            title: 'Full-Stack Developer',
            company: 'Digital Innovations Inc.',
            period: '2020 - 2022',
            description: 'Developed responsive web applications using React and Node.js. Created real-time analytics platforms and integrated data visualization libraries for business intelligence.'
          },
          {
            title: 'Junior Data Analyst',
            company: 'Analytics Hub',
            period: '2019 - 2020',
            description: 'Performed data cleaning, exploratory analysis, and statistical modeling. Assisted in building SQL databases and creating automated ETL pipelines.'
          }
        ],
        academicExp: [
          {
            title: 'Master\'s Thesis: Predictive Analytics',
            company: 'University of Technology',
            period: '2023',
            description: 'Developed a machine learning framework for predicting market trends using ensemble methods. Published findings in an academic journal with 87% accuracy rate.'
          },
          {
            title: 'Research Assistant - Data Science Lab',
            company: 'University of Technology',
            period: '2021 - 2022',
            description: 'Conducted research on neural network optimization techniques. Collaborated on 3 published papers and presented findings at international conferences.'
          },
          {
            title: 'Bachelor\'s in Information Systems',
            company: 'University of Technology',
            period: '2016 - 2020',
            description: 'Specialized in database management, software engineering, and business analytics. Graduated with honors, GPA 3.8/4.0.'
          }
        ],
        volunteerExp: [
          {
            title: 'Data Analytics Mentor',
            company: 'Code for Good',
            period: '2022 - Present',
            description: 'Mentoring aspiring data analysts from underrepresented communities. Teaching Python, SQL, and data visualization best practices to 50+ students.'
          },
          {
            title: 'Web Development Trainer',
            company: 'Tech4All Foundation',
            period: '2021 - Present',
            description: 'Conducting free web development workshops for non-profit organizations. Helped 10+ NGOs build their online presence and digital tools.'
          },
          {
            title: 'Open Source Contributor',
            company: 'Various Projects',
            period: '2020 - Present',
            description: 'Contributing to open-source data science and web development projects. Maintaining documentation and fixing bugs for community-driven initiatives.'
          }
        ]
      },
      techStack: 'Tech Stack'
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Explore case studies showcasing data-driven solutions and their measurable impact',
      viewCaseStudy: 'View Case Study',
      projects: [
        {
          title: 'E-Commerce Sales Analytics Dashboard',
          description: 'Built an interactive Power BI dashboard tracking 50K+ transactions, revealing seasonal trends and customer segments.',
          tags: ['Python', 'Power BI', 'SQL'],
          problem: 'The company had fragmented sales data across multiple systems, making it impossible to identify key performance drivers and seasonal patterns.',
          process: 'Cleaned and normalized 50K+ transaction records using Python/Pandas, designed a star schema database in SQL, and created an ETL pipeline. Built interactive visualizations in Power BI with drill-down capabilities.',
          result: 'Identified 3 high-value customer segments accounting for 65% of revenue, discovered a 40% sales spike during Q4, and enabled data-driven inventory planning that reduced stockouts by 28%.'
        },
        {
          title: 'Customer Churn Prediction Model',
          description: 'Developed a machine learning model to predict customer churn with 87% accuracy, enabling proactive retention strategies.',
          tags: ['Python', 'Scikit-learn', 'Pandas'],
          problem: 'High customer churn rates were impacting revenue, but the company had no way to identify at-risk customers before they left.',
          process: 'Performed exploratory data analysis on 10K+ customer records, engineered 15 behavioral features, and trained multiple models (Logistic Regression, Random Forest, XGBoost). Fine-tuned hyperparameters using cross-validation.',
          result: 'Achieved 87% prediction accuracy with Random Forest. The model identified top churn drivers: low engagement and lack of recent purchases. Implementation led to a 15% reduction in churn within 3 months.'
        },
        {
          title: 'Real-Time Analytics Web App',
          description: 'Created a full-stack React dashboard with live data streaming, allowing teams to monitor KPIs in real-time.',
          tags: ['React', 'Node.js', 'Recharts'],
          problem: 'Teams were making decisions based on outdated reports that were generated weekly, missing critical real-time opportunities.',
          process: 'Built a React frontend with Recharts for dynamic visualizations, developed a Node.js backend API, and implemented WebSocket connections for live data streaming. Optimized database queries for sub-second response times.',
          result: 'Reduced decision-making lag from 7 days to real-time. Teams could instantly spot anomalies and trends, leading to 23% faster response to market changes and improved operational efficiency.'
        },
        {
          title: 'Supply Chain Optimization Analysis',
          description: 'Analyzed logistics data to optimize delivery routes and reduce operational costs by 18% using data-driven insights.',
          tags: ['Python', 'SQL', 'Tableau'],
          problem: 'Inefficient delivery routes and warehouse placement were causing high operational costs and delayed deliveries.',
          process: 'Extracted and cleaned 6 months of logistics data using SQL, performed geospatial analysis in Python, and created route optimization models. Built Tableau dashboards to visualize inefficiencies and recommendations.',
          result: 'Identified 12 suboptimal routes and recommended 3 new warehouse locations. Implementation reduced delivery times by 22% and cut operational costs by 18%, saving $450K annually.'
        }
      ]
    },
    caseStudy: {
      problem: 'The Problem',
      process: 'The Data Process',
      result: 'The Insight & Result',
      impact: 'Impact: This project demonstrates the power of data-driven decision making in solving real-world business challenges and delivering measurable outcomes.',
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
      badge: 'Analista de Dados & Desenvolvedor Web',
      headline1: 'Transformando Dados em',
      headline2: 'Decisões',
      subheadline: 'Especialista em Sistemas de Informação transformando conjuntos de dados complexos em insights acionáveis por meio de análise avançada, aprendizado de máquina e aplicações web interativas.',
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
        p1: 'Sou um profissional orientado por dados com paixão por descobrir insights ocultos em conjuntos de dados complexos. Com formação em Sistemas de Informação, faço a ponte entre dados brutos e decisões estratégicas de negócios.',
        p2: 'Minha experiência abrange análise de dados, modelagem estatística, aprendizado de máquina e desenvolvimento web full-stack. Especializo-me em construir soluções completas—desde extração e limpeza de dados até criação de dashboards interativos e modelos preditivos.',
        p3: 'Seja identificando padrões de comportamento do cliente, otimizando processos de negócios ou desenvolvendo plataformas de análise em tempo real, transformo dados em inteligência acionável que gera resultados mensuráveis.',
        available: 'Disponível para Projetos',
        experience: '5+ Anos de Experiência'
      },
      experience: {
        title: 'Experiência e Formação',
        professional: 'Profissional',
        academic: 'Acadêmica',
        volunteer: 'Voluntariado',
        professionalExp: [
          {
            title: 'Analista de Dados Sênior',
            company: 'TechCorp Solutions',
            period: '2022 - Presente',
            description: 'Liderando iniciativas de análise de dados, construindo modelos de ML para segmentação de clientes e desenvolvendo dashboards de relatórios automatizados usando Power BI e Python.'
          },
          {
            title: 'Desenvolvedor Full-Stack',
            company: 'Digital Innovations Inc.',
            period: '2020 - 2022',
            description: 'Desenvolvi aplicações web responsivas usando React e Node.js. Criei plataformas de análise em tempo real e integrei bibliotecas de visualização de dados para business intelligence.'
          },
          {
            title: 'Analista de Dados Júnior',
            company: 'Analytics Hub',
            period: '2019 - 2020',
            description: 'Realizei limpeza de dados, análise exploratória e modelagem estatística. Auxiliei na construção de bancos de dados SQL e criação de pipelines ETL automatizados.'
          }
        ],
        academicExp: [
          {
            title: 'Tese de Mestrado: Análise Preditiva',
            company: 'Universidade de Tecnologia',
            period: '2023',
            description: 'Desenvolvi um framework de aprendizado de máquina para prever tendências de mercado usando métodos ensemble. Publiquei descobertas em revista acadêmica com taxa de precisão de 87%.'
          },
          {
            title: 'Assistente de Pesquisa - Lab de Ciência de Dados',
            company: 'Universidade de Tecnologia',
            period: '2021 - 2022',
            description: 'Conduzi pesquisas sobre técnicas de otimização de redes neurais. Colaborei em 3 artigos publicados e apresentei descobertas em conferências internacionais.'
          },
          {
            title: 'Bacharelado em Sistemas de Informação',
            company: 'Universidade de Tecnologia',
            period: '2016 - 2020',
            description: 'Especialização em gerenciamento de banco de dados, engenharia de software e análise de negócios. Formado com honras, média 3.8/4.0.'
          }
        ],
        volunteerExp: [
          {
            title: 'Mentor de Análise de Dados',
            company: 'Code for Good',
            period: '2022 - Presente',
            description: 'Mentoria de aspirantes a analistas de dados de comunidades sub-representadas. Ensinando Python, SQL e melhores práticas de visualização de dados para mais de 50 alunos.'
          },
          {
            title: 'Instrutor de Desenvolvimento Web',
            company: 'Tech4All Foundation',
            period: '2021 - Presente',
            description: 'Conduzindo workshops gratuitos de desenvolvimento web para organizações sem fins lucrativos. Ajudei mais de 10 ONGs a construir sua presença online e ferramentas digitais.'
          },
          {
            title: 'Contribuidor Open Source',
            company: 'Vários Projetos',
            period: '2020 - Presente',
            description: 'Contribuindo para projetos open source de ciência de dados e desenvolvimento web. Mantendo documentação e corrigindo bugs para iniciativas comunitárias.'
          }
        ]
      },
      techStack: 'Stack Tecnológico'
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
      problem: 'O Problema',
      process: 'O Processo de Dados',
      result: 'O Insight e Resultado',
      impact: 'Impacto: Este projeto demonstra o poder da tomada de decisão orientada por dados na resolução de desafios empresariais reais e entrega de resultados mensuráveis.',
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
      badge: 'Analyste de Données & Développeur Web',
      headline1: 'Transformer les Données en',
      headline2: 'Décisions',
      subheadline: 'Spécialiste des systèmes d\'information transformant des ensembles de données complexes en informations exploitables grâce à l\'analyse avancée, l\'apprentissage automatique et les applications web interactives.',
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
        p1: 'Je suis un professionnel axé sur les données avec une passion pour découvrir les informations cachées dans les ensembles de données complexes. Avec une formation en systèmes d\'information, je fais le lien entre les données brutes et les décisions stratégiques d\'entreprise.',
        p2: 'Mon expertise couvre l\'analyse de données, la modélisation statistique, l\'apprentissage automatique et le développement web full-stack. Je me spécialise dans la construction de solutions de bout en bout—de l\'extraction et du nettoyage de données à la création de tableaux de bord interactifs et de modèles prédictifs.',
        p3: 'Qu\'il s\'agisse d\'identifier les modèles de comportement des clients, d\'optimiser les processus métier ou de développer des plateformes d\'analyse en temps réel, je transforme les données en intelligence exploitable qui génère des résultats mesurables.',
        available: 'Disponible pour Projets',
        experience: '5+ Ans d\'Expérience'
      },
      experience: {
        title: 'Expérience et Formation',
        professional: 'Professionnelle',
        academic: 'Académique',
        volunteer: 'Bénévolat',
        professionalExp: [
          {
            title: 'Analyste de Données Senior',
            company: 'TechCorp Solutions',
            period: '2022 - Présent',
            description: 'Direction des initiatives d\'analyse de données, construction de modèles ML pour la segmentation des clients et développement de tableaux de bord de reporting automatisés utilisant Power BI et Python.'
          },
          {
            title: 'Développeur Full-Stack',
            company: 'Digital Innovations Inc.',
            period: '2020 - 2022',
            description: 'Développement d\'applications web responsives utilisant React et Node.js. Création de plateformes d\'analyse en temps réel et intégration de bibliothèques de visualisation de données pour l\'intelligence d\'affaires.'
          },
          {
            title: 'Analyste de Données Junior',
            company: 'Analytics Hub',
            period: '2019 - 2020',
            description: 'Nettoyage de données, analyse exploratoire et modélisation statistique. Assistance dans la construction de bases de données SQL et création de pipelines ETL automatisés.'
          }
        ],
        academicExp: [
          {
            title: 'Thèse de Master: Analyse Prédictive',
            company: 'Université de Technologie',
            period: '2023',
            description: 'Développement d\'un cadre d\'apprentissage automatique pour prédire les tendances du marché en utilisant des méthodes d\'ensemble. Publication des résultats dans une revue académique avec un taux de précision de 87%.'
          },
          {
            title: 'Assistant de Recherche - Lab de Science des Données',
            company: 'Université de Technologie',
            period: '2021 - 2022',
            description: 'Recherche sur les techniques d\'optimisation des réseaux neuronaux. Collaboration sur 3 articles publiés et présentation des résultats lors de conférences internationales.'
          },
          {
            title: 'Licence en Systèmes d\'Information',
            company: 'Université de Technologie',
            period: '2016 - 2020',
            description: 'Spécialisation en gestion de bases de données, ingénierie logicielle et analyse d\'affaires. Diplômé avec mention, moyenne 3.8/4.0.'
          }
        ],
        volunteerExp: [
          {
            title: 'Mentor en Analyse de Données',
            company: 'Code for Good',
            period: '2022 - Présent',
            description: 'Mentorat d\'aspirants analystes de données de communautés sous-représentées. Enseignement de Python, SQL et meilleures pratiques de visualisation de données à plus de 50 étudiants.'
          },
          {
            title: 'Formateur en Développement Web',
            company: 'Tech4All Foundation',
            period: '2021 - Présent',
            description: 'Animation d\'ateliers gratuits de développement web pour organisations à but non lucratif. Aide à plus de 10 ONG pour construire leur présence en ligne et outils numériques.'
          },
          {
            title: 'Contributeur Open Source',
            company: 'Divers Projets',
            period: '2020 - Présent',
            description: 'Contribution à des projets open source de science des données et développement web. Maintenance de documentation et correction de bugs pour des initiatives communautaires.'
          }
        ]
      },
      techStack: 'Stack Technologique'
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
      problem: 'Le Problème',
      process: 'Le Processus de Données',
      result: 'L\'Insight et le Résultat',
      impact: 'Impact: Ce projet démontre le pouvoir de la prise de décision basée sur les données dans la résolution de défis commerciaux réels et la livraison de résultats mesurables.',
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
