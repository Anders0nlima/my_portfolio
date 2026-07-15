import type { Project } from '../types/Project';

//import image1 from "../assets/imagens/tccine1.png"
//import image2 from "../assets/imagens/wilson2.png"
//import image3 from "../assets/imagens/imagem5.png"
//import image4 from "../assets/imagens/imagem4.png"
import image6 from "../assets/imagens/imagem6.png"
import image7 from "../assets/imagens/imagem7.png"
import image8 from "../assets/imagens/imagem8.png"
import image9 from "../assets/imagens/imagem10.png"
import image12 from "../assets/imagens/imagem12.png"
//import video1 from "../assets/imagens/video1.mp4"
//import video2 from "../assets/imagens/video2.mp4"
import video3 from "../assets/imagens/video3.mp4"
import video4 from "../assets/imagens/video4.mp4"
import video5 from "../assets/imagens/video5.mp4"
import video6 from "../assets/imagens/video6.mp4"

export const projectsFr: Project[] = [
  {
  id: 1,
  title: 'TCCINE',
  subtitle: 'TCCINE est une plateforme web institutionnelle développée pour mettre en relation les professionnels, les étudiants et les entreprises du secteur audiovisuel avec des services spécialisés de production, de post-production et de marketing audiovisuel. L\'application présente ses principaux services, notamment le montage vidéo, le design sonore, l\'étalonnage des couleurs, le motion design et les stratégies de promotion.',
  description: 'TCCINE est une plateforme web institutionnelle développée pour mettre en relation les professionnels, les étudiants et les entreprises du secteur audiovisuel avec des services spécialisés de production, de post-production et de marketing audiovisuel. L\'application présente ses principaux services, notamment le montage vidéo, le design sonore, l\'étalonnage des couleurs, le motion design et les stratégies de promotion.',
  image: image12,
  tags: ['react', 'javaScript', 'marketing', 'spa', 'cinema', 'formspree', 'audiovisual', 'hostinger', 'vite', 'vercel', 'institucional-website'],

  readme: {
    overview: `TCCINE est une plateforme web institutionnelle développée sous la forme d'une Single Page Application (SPA), destinée aux créateurs de contenu, producteurs, réalisateurs et étudiants du secteur audiovisuel. Son principal objectif est de présenter des services spécialisés de production et de post-production audiovisuelle à travers une interface moderne et intuitive.

    La plateforme est disponible en portugais et en anglais, est actuellement en ligne dans un environnement de production et est déployée avec Vercel pour le front-end et Hostinger pour le domaine personnalisé.

    Principales fonctionnalités:
    - Page d'accueil avec une section Hero animée, une vidéo d'arrière-plan et une navigation latérale par ancres (scroll dots)
    - Page Production avec un tableau de bord interactif, des onglets dynamiques, un curseur avant/après et une démonstration de design sonore
    - Page Marketing/Post-production avec des indicateurs de ROI, des stratégies marketing et du contenu à valeur ajoutée
    - Support via un formulaire de contact intégré à WhatsApp et Formspree
    - Pages informatives : À propos, Équipe, Partenaires, Professionnels, Ressources, Conditions d'utilisation, Confidentialité et Cookies
    - Internationalisation (i18n) grâce à un système personnalisé de gestion des langues et des fichiers de traduction complets
    - Animations fluides dans toute l'interface avec Framer Motion`,
    process: `1. Planification
    - Définition du périmètre du projet comme projet de fin d'études centré sur le marché audiovisuel
    - Conception de l'architecture du site et du parcours utilisateur (accueil → services → contact)
    - Création de l'identité visuelle avec une palette de couleurs inspirée du cinéma et une typographie premium

    2. Mise en place du projet
    - Initialisation avec Vite et React 19 pour des performances de développement optimales
    - Configuration de React Router DOM v7 pour une navigation SPA avec plusieurs routes
    - Organisation d'une structure modulaire des dossiers : pages/, components/, styles/, assets/, translations/ et data/

    3. Développement de l'interface
    - Création de composants réutilisables (NavbarPremium, Footer, LandingPage, Colaboradores, Metodos)
    - Utilisation de CSS Modules pour isoler les styles par composant
    - Mise en place d'une navigation fluide avec SideScrollDots
    - Développement de composants interactifs : tableaux de bord avec onglets dynamiques, curseurs avant/après et accordéons

    4. Internationalisation
    - Développement d'un système personnalisé avec LanguageContext et le hook useLanguage()
    - Création de fichiers de traduction complets en portugais et en anglais (pt.js / en.js) contenant plus de 90 Ko de contenu localisé

    5. Animations et expérience utilisateur
    - Utilisation de Framer Motion pour les transitions de pages, les animations d'entrée et les micro-interactions
    - Utilisation d'AnimatePresence pour assurer des transitions fluides entre les onglets et les sections
    - Ajout d'effets de survol et de retours visuels sur tous les éléments interactifs

    6. Intégrations externes
    - Intégration de Formspree pour l'envoi des formulaires par e-mail
    - Intégration de WhatsApp Business pour une assistance instantanée
    - Utilisation de Font Awesome, Lucide React et React Icons pour une iconographie cohérente
    - Intégration de Vercel Analytics pour le suivi du trafic en production

    7. Déploiement
    - Génération de la version de production avec vite build
    - Déploiement automatique sur Vercel via GitHub (CI/CD)
    - Configuration du DNS du domaine personnalisé avec Hostinger
    - Configuration également de GitHub Pages (gh-pages) comme solution alternative de déploiement`,
    technologies: [],
    images: [{type: 'video', src: video5}, {type: 'video', src: video6}],
  },

  githubUrl: 'https://github.com/Anders0nlima/TC-cine',
  liveUrl: 'https://anders0nlima.github.io/TC-cine/',
  },
  {
  id: 5,
  title: 'DataMind-BI',
  subtitle: 'Une plateforme de Business Intelligence sécurisée dotée de capacités autonomes, combinant analyse locale avec DuckDB, conversion Text-to-SQL via Gemini et une interface utilisateur générative dynamique, le tout reposant sur des critères statistiques rigoureux et fondés sur des bases académiques.',
  description: 'Une plateforme de Business Intelligence sécurisée dotée de capacités autonomes, combinant analyse locale avec DuckDB, conversion Text-to-SQL via Gemini et une interface utilisateur générative dynamique, le tout reposant sur des critères statistiques rigoureux et fondés sur des bases académiques.',
  image: image9,
  tags: ['react', 'docker', 'telemetry','statistical-analysis', 'business-intelligence', 'data-analytics', 'recharts', 'gemini-api','text-to-SQL', 'pydantic', 'fastapi', 'duckdb', 'langfuse', 'generative-ui', 'agentec-ai'],
  sleepingTitle: "App non hébergée",
  sleepingMessage: "Cette application n'est actuellement pas hébergée. Si vous souhaitez la tester localement, un guide étape par étape est disponible sur GitHub pour vous expliquer comment l'exécuter. Il vous suffit de cliquer sur « GitHub » sur la carte du projet. Si vous préférez simplement découvrir ses fonctionnalités et son implémentation, consultez le « README ».",

  readme: {
    overview: `DataMind BI est une plateforme moderne de Business Intelligence (BI) conversationnelle, conçue pour démocratiser l'analyse de données sans compromettre la confidentialité ni la rigueur mathématique. L'application permet à tout utilisateur, qu'il soit technique ou non, d'importer des jeux de données (CSV ou Excel) et d'interagir avec leurs informations en langage naturel.
    
    Le principal atout du projet réside dans son architecture Privacy-First (confidentialité dès la conception) : contrairement aux solutions traditionnelles qui envoient des feuilles de calcul complètes aux API d'intelligence artificielle, DataMind BI adopte un flux dans lequel l'IA (Google Gemini) ne reçoit que la structure de la table (schéma) afin de générer des instructions SQL. Ces instructions sont ensuite exécutées localement, rapidement et en toute sécurité sur la machine de l'utilisateur grâce au moteur DuckDB, garantissant qu'aucune donnée sensible n'est transmise au cloud.
    
    Au-delà de la sécurité, la plateforme se distingue par sa fiabilité académique en mettant en œuvre des algorithmes d'analyse exploratoire fondés sur les recommandations de l'IBGE et les normes ABNT (comme la règle de Sturges pour les histogrammes et un formatage tabulaire strict). Le résultat est un outil qui combine la simplicité de ChatGPT avec la puissance analytique de Power BI, le tout dans une interface utilisateur haut de gamme et hautement réactive.`,
    process: `Le Défi et l'Architecture
    Le développement a commencé avec un objectif clair : associer la simplicité des interfaces conversationnelles basées sur les LLM aux outils visuels de BI, sans compromettre la sécurité des données. J'ai opté pour une architecture en deux couches principales : un backend en Python (FastAPI), chargé d'exécuter DuckDB et d'orchestrer les appels à l'API Gemini, ainsi qu'un frontend robuste en React (Vite, TypeScript, Tailwind CSS), conçu pour offrir des performances visuelles élevées et une expérience fluide.
    
    Intelligence Artificielle et Traitement Local
    La logique principale a nécessité la création d'un traducteur Texte-vers-SQL. L'IA a été « entraînée » à l'aide de prompts système avancés afin de comprendre des questions ouvertes (« Quel est l'âge moyen ? », « Quels produits se vendent le mieux ? ») et de générer des requêtes SQL parfaitement compatibles avec le dialecte DuckDB. Le backend intercepte ensuite ce SQL, interroge la base de données conservée en mémoire, met en forme les résultats et les renvoie au frontend. Ainsi, l'IA agit comme un « traducteur », tandis que le système local devient le véritable « processeur ».
    
    Conception de l'Interface (UI/UX)
    Pour le frontend, l'objectif était de créer une expérience marquante dès le premier regard. J'ai conçu une interface premium en mode sombre, divisée en deux espaces de travail simultanés :
    - Un Canvas Génératif à gauche, où les graphiques (Recharts) et les tableaux (conformes aux standards de l'IBGE) apparaissent de manière dynamique.
    - Un Assistant Conversationnel à droite, qui conserve l'historique et le flux de l'analyse.
    
    J'ai implémenté Zustand avec une persistance dans le stockage local (Local Storage) afin de prendre en charge un système avancé de dossiers et de conversations multiples. Les utilisateurs peuvent passer instantanément d'une analyse des ressources humaines à une analyse des ventes tout en conservant le contexte, les messages et les paramètres (comme le nombre de décimales).
    
    Génération de Rapports (Exportation)
    L'une des exigences techniques les plus intéressantes a été la création de la couche d'exportation. Comme le Canvas est dynamique, j'ai développé des algorithmes utilisant des bibliothèques telles que html2canvas, jsPDF et xlsx, permettant aux utilisateurs de transformer instantanément leur session d'analyse en un classeur Excel formaté avec plusieurs feuilles, ou en un rapport PDF propre, professionnel et prêt à être imprimé.`,
    technologies: [],
    images: [{type: 'video', src: video3}, {type: 'video', src: video4}],
  },
  githubUrl: 'https://github.com/Anders0nlima/DataMind-BI',
  liveUrl: 'https://...',
  isNotHosted: true,
},
  /*{
  id: 2,
  title: 'Wilson Hair',
  subtitle: 'Système de prise de rendez-vous pour salon de beauté',
  description: 'Système de prise de rendez-vous pour salon de beauté',
  image: image2,
  tags: ['React', 'TypeScript', 'JavaScript'],
  warning1: 'Statut du projet : Hors ligne',
  warning2: 'Le site est actuellement hors ligne. N\'hésitez pas à consulter le code source sur GitHub ou le lisez-moi.',

  readme: {
    overview: 'Wilson Hair est un système web de prise de rendez-vous développé pour optimiser la gestion des services dans les salons de beauté. La plateforme a été conçue avec trois niveaux d\'accès — administrateur, employé et client — garantissant que chaque utilisateur visualise et utilise uniquement les fonctionnalités correspondant à son profil, identifiées au moment de la connexion.',
    process: 'Le développement du projet a suivi une architecture en couches, séparant les responsabilités entre les différents types \'utilisateurs. L\'accent a été mis sur la création d\'une interface intuitive et efficace, facilitant la prise de rendez-vous pour les clients, l\'organisation de l\'agenda pour les employés et le contrôle global du système par l\'administrateur. Une attention particulière a également été portée à l\'ergonomie, à la responsivité et à la clarté des flux de navigation.',
    technologies: ['React', 'Vite', 'JavaScript', 'TypeScript', 'Vite', 'Figma (UI Design)'],
    images: [{type: 'video', src: video2}, {type: 'image', src: image3}],
  },

  githubUrl: 'https://github.com/Anders0nlima/frontend-wilson',
  liveUrl: '*',
  isOffline: true,
  //offlineMessage: 'Le site web est actuellement hors ligne, vous pouvez consulter le code source sur GitHub ou dans le fichier readme.',
  },*/
  {
    id: 3,
    title: 'Analyse des salaires dans le domaine des données',
    subtitle: 'Tableau de bord interactif développé en Python avec Streamlit pour explorer et analyser les salaires dans le domaine des données. L\'application utilise un jeu de données public directement accessible sur le web et permet aux utilisateurs de filtrer, comparer et visualiser les tendances salariales selon les postes, les niveaux d\'expérience, les types de contrat et les pays.',
    description: 'Tableau de bord interactif développé en Python avec Streamlit pour explorer et analyser les salaires dans le domaine des données. L\'application utilise un jeu de données public directement accessible sur le web et permet aux utilisateurs de filtrer, comparer et visualiser les tendances salariales selon les postes, les niveaux d\'expérience, les types de contrat et les pays.',
    image: image6,
    tags: ['python', 'streamlit', 'pandas', 'plotly', 'data-analysis', 'dashboard', 'data-visualization', 'data-science', 'exploratory-data-analysis', 'interactive-dashboard'],
    sleepingTitle: "Application en veille",
    sleepingMessage: "Cette application s'est mise en veille en raison de son inactivité. Cliquez sur 'Yes, get this app back up!' pour visiter la page et la réactiver !",

    readme: {
      overview: `Le marché des données connaît une croissance rapide, et comprendre les niveaux de rémunération selon différents profils professionnels est essentiel pour les personnes souhaitant évoluer ou changer de carrière. Ce projet répond à des questions telles que:
      - Quels sont les postes les mieux rémunérés dans le domaine des données?
      - Quel est l'impact du niveau d'expérience sur le salaire?
      - Existe-t-il une différence de rémunération entre les modes de travail en présentiel, hybride et à distance?
      - Quels pays offrent les salaires les plus élevés aux Data Scientists?
      L'application présente ces informations à l'aide de KPI et de quatre visualisations interactives, avec des filtres permettant de segmenter les données selon le profil d'intérêt de l'utilisateur.`,
      process: `1. Source des données
      Les données sont chargées directement depuis un dépôt public GitHub à l'aide de pd.read_csv(), contenant des enregistrements avec l'année, le poste, le niveau d'expérience, le type de contrat, la taille de l'entreprise, le mode de travail, le salaire annuel (USD) et le pays de résidence.

      2. Filtrage interactif
      Quatre filtres dans la barre latérale permettent de segmenter les données selon:
      - Année — évolution des salaires au fil du temps
      - Niveau d'expérience — Junior, Intermédiaire, Senior, etc.
      - Type de contrat — CDI, Contrat, Freelance, etc.
      - Taille de l'entreprise — Petite, Moyenne ou Grande

      3. Calcul des KPI
      À partir des données filtrées, les indicateurs suivants sont calculés et mis en évidence:
      - Salaire annuel moyen (USD)
      - Salaire annuel maximal (USD)
      - Nombre total d'enregistrements trouvés
      - Poste le plus fréquent dans le filtre sélectionné

      4. Visualisations avec Plotly Express
      Quatre graphiques interactifs sont générés dynamiquement:
      - Graphique à barres horizontales → Top 10 des postes selon le salaire moyen
      - Histogramme → Distribution des salaires annuels
      - Diagramme en anneau → Répartition des modes de travail (présentiel / hybride / à distance)
      - Carte choroplèthe → Salaire moyen des Data Scientists par pays

      5. Tableau détaillé des données
      Enfin, le dataframe filtré complet est affiché dans un tableau interactif permettant une analyse ligne par ligne.`,
      technologies: [],
      images: [{type: 'image', src: image7}, {type: 'image', src: image8}],
    },

    githubUrl: 'https://github.com/Anders0nlima/analise-de-dashboard',
    liveUrl: 'https://dashboard-analys.streamlit.app/',
    isSleeping: true,
  },
  /*{
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
  },*/
  /*{
  id: 5,
  title: 'DataMind-BI',
  subtitle: 'Une plateforme de Business Intelligence sécurisée dotée de capacités autonomes, combinant analyse locale avec DuckDB, conversion Text-to-SQL via Gemini et une interface utilisateur générative dynamique, le tout reposant sur des critères statistiques rigoureux et fondés sur des bases académiques.',
  description: 'Une plateforme de Business Intelligence sécurisée dotée de capacités autonomes, combinant analyse locale avec DuckDB, conversion Text-to-SQL via Gemini et une interface utilisateur générative dynamique, le tout reposant sur des critères statistiques rigoureux et fondés sur des bases académiques.',
  image: image9,
tags: ['react', 'docker', 'telemetry','statistical-analysis', 'business-intelligence', 'data-analytics', 'recharts', 'gemini-api','text-to-SQL', 'pydantic', 'fastapi', 'duckdb', 'langfuse', 'generative-ui', 'agentec-ai'],
  readme: {
    overview: `DataMind BI est une plateforme moderne de Business Intelligence (BI) conversationnelle, conçue pour démocratiser l'analyse de données sans compromettre la confidentialité ni la rigueur mathématique. L'application permet à tout utilisateur, qu'il soit technique ou non, d'importer des jeux de données (CSV ou Excel) et d'interagir avec leurs informations en langage naturel.
    
    Le principal atout du projet réside dans son architecture Privacy-First (confidentialité dès la conception) : contrairement aux solutions traditionnelles qui envoient des feuilles de calcul complètes aux API d'intelligence artificielle, DataMind BI adopte un flux dans lequel l'IA (Google Gemini) ne reçoit que la structure de la table (schéma) afin de générer des instructions SQL. Ces instructions sont ensuite exécutées localement, rapidement et en toute sécurité sur la machine de l'utilisateur grâce au moteur DuckDB, garantissant qu'aucune donnée sensible n'est transmise au cloud.
    
    Au-delà de la sécurité, la plateforme se distingue par sa fiabilité académique en mettant en œuvre des algorithmes d'analyse exploratoire fondés sur les recommandations de l'IBGE et les normes ABNT (comme la règle de Sturges pour les histogrammes et un formatage tabulaire strict). Le résultat est un outil qui combine la simplicité de ChatGPT avec la puissance analytique de Power BI, le tout dans une interface utilisateur haut de gamme et hautement réactive.`,
    process: `Le Défi et l'Architecture
    Le développement a commencé avec un objectif clair : associer la simplicité des interfaces conversationnelles basées sur les LLM aux outils visuels de BI, sans compromettre la sécurité des données. J'ai opté pour une architecture en deux couches principales : un backend en Python (FastAPI), chargé d'exécuter DuckDB et d'orchestrer les appels à l'API Gemini, ainsi qu'un frontend robuste en React (Vite, TypeScript, Tailwind CSS), conçu pour offrir des performances visuelles élevées et une expérience fluide.
    
    Intelligence Artificielle et Traitement Local
    La logique principale a nécessité la création d'un traducteur Texte-vers-SQL. L'IA a été « entraînée » à l'aide de prompts système avancés afin de comprendre des questions ouvertes (« Quel est l'âge moyen ? », « Quels produits se vendent le mieux ? ») et de générer des requêtes SQL parfaitement compatibles avec le dialecte DuckDB. Le backend intercepte ensuite ce SQL, interroge la base de données conservée en mémoire, met en forme les résultats et les renvoie au frontend. Ainsi, l'IA agit comme un « traducteur », tandis que le système local devient le véritable « processeur ».
    
    Conception de l'Interface (UI/UX)
    Pour le frontend, l'objectif était de créer une expérience marquante dès le premier regard. J'ai conçu une interface premium en mode sombre, divisée en deux espaces de travail simultanés :
    - Un Canvas Génératif à gauche, où les graphiques (Recharts) et les tableaux (conformes aux standards de l'IBGE) apparaissent de manière dynamique.
    - Un Assistant Conversationnel à droite, qui conserve l'historique et le flux de l'analyse.
    
    J'ai implémenté Zustand avec une persistance dans le stockage local (Local Storage) afin de prendre en charge un système avancé de dossiers et de conversations multiples. Les utilisateurs peuvent passer instantanément d'une analyse des ressources humaines à une analyse des ventes tout en conservant le contexte, les messages et les paramètres (comme le nombre de décimales).
    
    Génération de Rapports (Exportation)
    L'une des exigences techniques les plus intéressantes a été la création de la couche d'exportation. Comme le Canvas est dynamique, j'ai développé des algorithmes utilisant des bibliothèques telles que html2canvas, jsPDF et xlsx, permettant aux utilisateurs de transformer instantanément leur session d'analyse en un classeur Excel formaté avec plusieurs feuilles, ou en un rapport PDF propre, professionnel et prêt à être imprimé.`,
    technologies: [],
    images: [{type: 'video', src: video3}, {type: 'video', src: video4}],
  },
  githubUrl: 'https://github.com/Anders0nlima/DataMind-BI',
  liveUrl: 'https://...',
}*/
];