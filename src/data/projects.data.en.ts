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

export const projectsEn: Project[] = [
  {
    id: 1,
    title: 'TCCINE',
    subtitle: 'TCCINE is an institutional web platform developed to connect professionals, students, and companies in the audiovisual industry with specialized production, post-production, and audiovisual marketing services. The application showcases its main services, including video editing, sound design, color grading, motion graphics, and promotional strategies.',
    description: 'TCCINE is an institutional web platform developed to connect professionals, students, and companies in the audiovisual industry with specialized production, post-production, and audiovisual marketing services. The application showcases its main services, including video editing, sound design, color grading, motion graphics, and promotional strategies.',
    image: image12,
    tags: ['react', 'javaScript', 'marketing', 'spa', 'cinema', 'formspree', 'audiovisual', 'hostinger', 'vite', 'vercel', 'institucional-website'],

    readme: {
      overview: `TCCINE is an institutional web platform developed as a Single Page Application (SPA), designed for content creators, producers, filmmakers, and students in the audiovisual industry. Its main goal is to showcase specialized production and post-production services through a modern and intuitive interface.

      The platform is available in both Portuguese and English, is currently online in a production environment, and is deployed using Vercel for the front-end and Hostinger for the custom domain.

      Main features:
      - Landing page with an animated hero section, background video, and side anchor navigation (scroll dots)
      - Production page featuring an interactive dashboard with dynamic tabs, before/after slider, and sound design showcase
      - Marketing/Post-Production page with ROI metrics, marketing strategies, and educational content
      - Support page with a contact form integrated with WhatsApp and Formspree
      - Informational pages including About, Team, Partners, Professionals, Resources, Terms, Privacy, and Cookies
      - Internationalization (i18n) through a custom language context and complete translation files
      - Smooth animations throughout the interface powered by Framer Motion`,
      process: `1. Planning
      - Defined the project scope as an undergraduate capstone project focused on the audiovisual market
      - Designed the site architecture and user journey (home → services → contact)
      - Created the visual identity, including a cinematic color palette and premium typography

      2. Project Setup
      - Initialized the project with Vite and React 19 for high-performance development
      - Configured React Router DOM v7 for SPA navigation with multiple routes
      - Organized a modular folder structure: pages/, components/, styles/, assets/, translations/, and data/

      3. Interface Development
      - Built reusable components (NavbarPremium, Footer, LandingPage, Colaboradores, Metodos)
      - Implemented CSS Modules for component-scoped styling
      - Developed smooth internal navigation using SideScrollDots
      - Created interactive components including dashboards with dynamic tabs, before/after sliders, and accordions

      4. Internationalization
      - Implemented a custom LanguageContext with the useLanguage() hook
      - Created complete Portuguese and English translation files (pt.js / en.js) with over 90 KB of localized content

      5. Animations and User Experience
      - Used Framer Motion for page transitions, entrance animations, and micro-interactions
      - Applied AnimatePresence for seamless transitions between tabs and sections
      - Added hover effects and visual feedback across interactive elements

      6. External Integrations
      - Integrated Formspree for email form submissions
      - Connected WhatsApp Business for instant customer support
      - Used Font Awesome, Lucide React, and React Icons for consistent iconography
      - Integrated Vercel Analytics for production traffic monitoring

      7. Deployment
      - Generated production builds using vite build
      - Configured automatic deployment on Vercel through GitHub (CI/CD)
      - Configured custom domain DNS through Hostinger
      - Also configured GitHub Pages (gh-pages) as an alternative deployment option`,
      technologies: [],
      images: [{type: 'video', src: video5}, {type: 'video', src: video6}],
    },

    githubUrl: 'https://github.com/Anders0nlima/TC-cine',
    liveUrl: 'https://anders0nlima.github.io/TC-cine/',
  },
  {
  id: 5,
  title: 'DataMind-BI',
  subtitle: 'A secure Business Intelligence platform with autonomous capabilities, combining local analysis using DuckDB, Text-to-SQL conversion via Gemini, and a dynamic generative user interface—all underpinned by rigorous, academically grounded statistical criteria.',
  description: 'A secure Business Intelligence platform with autonomous capabilities, combining local analysis using DuckDB, Text-to-SQL conversion via Gemini, and a dynamic generative user interface, all underpinned by rigorous academically grounded statistical criteria.',
  image: image9,
  tags: ['react', 'docker', 'telemetry','statistical-analysis', 'business-intelligence', 'data-analytics', 'recharts', 'gemini-api','text-to-SQL', 'pydantic', 'fastapi', 'duckdb', 'langfuse', 'generative-ui', 'agentec-ai'],
  sleepingTitle: "App Not Hosted",
  sleepingMessage: "This application is not currently hosted. If you'd like to test it locally, you'll find a step-by-step guide on GitHub explaining how to run it. Simply click 'GitHub' on the project card. If you'd rather explore its features and implementation, check out the 'README'.",

  readme: {
    overview: `DataMind BI is a modern Conversational Business Intelligence (BI) platform designed to democratize data analysis without compromising privacy or mathematical rigor. The application allows any user, whether technical or non-technical, to upload datasets (CSV or Excel) and interact with their data using natural language.
    
    The project's greatest differentiator is its Privacy-First architecture: unlike conventional solutions that send entire spreadsheets to Artificial Intelligence APIs, DataMind BI follows a workflow in which the AI (Google Gemini) receives only the table structure (schema) to generate SQL instructions. These instructions are then executed locally, quickly, and securely on the user's machine through the DuckDB engine, ensuring that no sensitive data is ever exposed to the cloud.
    
    Beyond security, the platform stands out for its academic reliability by implementing exploratory data analysis algorithms based on IBGE guidelines and ABNT standards (such as Sturges' Rule for histograms and strict tabular formatting). The result is a tool that combines the ease of ChatGPT with the analytical power of Power BI, wrapped in a premium, highly responsive user interface.`,
    process: `The Challenge and the Architecture
    Development began with a clear challenge: combining the simplicity of chat-based interfaces (LLMs) with visual BI tools without compromising data security. I chose a two-layer architecture: a Python backend (FastAPI) responsible for running DuckDB and orchestrating calls to the Gemini API, and a robust React frontend (Vite, TypeScript, Tailwind CSS) focused on visual performance and seamless user experience.
    
    Artificial Intelligence and Local Processing
    The core logic required building a Text-to-SQL translator. The AI was "trained" through advanced system prompts to understand open-ended questions ("What is the average age?", "Which products sell the most?") and generate SQL queries perfectly compatible with the DuckDB dialect. The backend intercepts this SQL, queries the in-memory database, formats the results, and returns them to the frontend. This transforms the AI into a "translator" while the local system becomes the actual "processor."
    
    User Interface Design (UI/UX)
    For the frontend, the goal was to create an experience that makes a strong first impression. I designed a premium dark-mode interface divided into two simultaneous workspaces:
    - A Generative Canvas on the left, where charts (Recharts) and tables (following IBGE standards) are generated dynamically.
    - A Conversational Assistant on the right, preserving the conversation history and the analytical workflow.
    
    I implemented Zustand with Local Storage persistence to support a sophisticated system of folders and multiple chat sessions. Users can seamlessly switch between, for example, an HR analysis and a Sales analysis while preserving context, conversation history, and settings (such as decimal precision).
    
    Report Generation (Export)
    One of the most interesting technical requirements was building the export layer. Since the Canvas is dynamic, I developed algorithms using libraries such as html2canvas, jsPDF, and xlsx, allowing users to instantly transform an analysis session into a multi-sheet formatted Excel workbook or a clean, professional PDF report ready for printing.`,
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
    subtitle: 'Appointment scheduling system for beauty salons',
    description: 'Appointment scheduling system for beauty salons',
    image: image2,
    tags: ['React', 'TypeScript', 'JavaScript'],
    warning1: 'Project Status: Offline',
    warning2: 'The website is currently offline. Feel free to view the source code on GitHub or the readme.',

    readme: {
      overview: 'Wilson Hair is a web-based appointment scheduling system developed to optimize service management in beauty salons. The platform was designed with three access levels — administrator, employee, and client — ensuring that each user can view and use only the functionalities corresponding to their profile, identified at the time of login.',
      process: 'The project development followed a layered architecture, separating responsibilities among different user roles. The focus was on creating an intuitive and efficient interface, simplifying the booking process for clients, schedule management for employees, and overall system control for administrators. Special attention was also given to usability, responsiveness, and clarity of navigation flows.',
      technologies: ['React', 'Vite', 'JavaScript', 'TypeScript', 'Vite', 'Figma (UI Design)'],
      images: [{type: 'video', src: video2}, {type: 'image', src: image3}],
    },

    githubUrl: 'https://github.com/Anders0nlima/frontend-wilson',
    liveUrl: '*',
    isOffline: true,
    //offlineMessage: 'The website is currently offline, feel free to view the source code on GitHub or in the readme.',
  },*/
  {
    id: 3,
    title: 'Salary Analysis in the Data Area',
    subtitle: 'Interactive dashboard developed in Python with Streamlit for exploring and analyzing salaries in the data field. The application retrieves a public dataset directly from the web and allows users to filter, compare, and visualize salary trends across different job titles, seniority levels, employment types, and countries.',
    description: 'Interactive dashboard developed in Python with Streamlit for exploring and analyzing salaries in the data field. The application retrieves a public dataset directly from the web and allows users to filter, compare, and visualize salary trends across different job titles, seniority levels, employment types, and countries.',
    image: image6,
    tags: ['python', 'streamlit', 'pandas', 'plotly', 'data-analysis', 'dashboard', 'data-visualization', 'data-science', 'exploratory-data-analysis', 'interactive-dashboard'],
    sleepingTitle: "App is sleeping",
    sleepingMessage: "This app has gone to sleep due to inactivity. Click 'Yes, get this app back up!' to visit the page and wake it back up!",

    readme: {
      overview: `The data market is growing rapidly, and understanding compensation across different professional profiles is essential for those seeking career growth or a career change. This project answers questions such as:

      - Which positions are the highest-paying in the data field?
      - How does seniority impact salary?
      - Are there salary differences between on-site, hybrid, and remote work models?
      - Which countries offer the highest salaries for Data Scientists?

      The application presents these insights through KPIs and four interactive visualizations, with filters that allow users to segment the data according to their profile of interest.`,
      process: `1. Data Source
      The data is loaded directly from a public GitHub repository using pd.read_csv(), containing records with year, job title, seniority, employment type, company size, work arrangement, annual salary (USD), and country of residence.

      2. Interactive Filtering
      Four sidebar filters allow users to segment the data by:
      - Year — salary trends over time
      - Seniority — Junior, Mid-level, Senior, etc.
      - Employment Type — Full-time, Contract, Freelance, etc.
      - Company Size — Small, Medium, or Large

      3. KPI Calculation
      Based on the filtered data, the following key metrics are calculated and highlighted:
      - Average annual salary (USD)
      - Maximum annual salary (USD)
      - Total number of records found
      - Most frequent job title in the selected filter

      4. Visualizations with Plotly Express
      Four interactive charts are dynamically generated:
      - Horizontal bar chart → Top 10 job titles by average salary
      - Histogram → Annual salary distribution
      - Donut chart → Proportion of work arrangements (on-site / hybrid / remote)
      - Choropleth map → Average salary of Data Scientists by country

      5. Detailed Data Table
      Finally, the complete filtered dataframe is displayed in an interactive table for row-by-row analysis.`,
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
  subtitle: 'A secure Business Intelligence platform with autonomous capabilities, combining local analysis using DuckDB, Text-to-SQL conversion via Gemini, and a dynamic generative user interface—all underpinned by rigorous, academically grounded statistical criteria.',
  description: 'A secure Business Intelligence platform with autonomous capabilities, combining local analysis using DuckDB, Text-to-SQL conversion via Gemini, and a dynamic generative user interface, all underpinned by rigorous academically grounded statistical criteria.',
  image: image9,
  tags: ['react', 'docker', 'telemetry','statistical-analysis', 'business-intelligence', 'data-analytics', 'recharts', 'gemini-api','text-to-SQL', 'pydantic', 'fastapi', 'duckdb', 'langfuse', 'generative-ui', 'agentec-ai'],
  readme: {
    overview: `DataMind BI is a modern Conversational Business Intelligence (BI) platform designed to democratize data analysis without compromising privacy or mathematical rigor. The application allows any user, whether technical or non-technical, to upload datasets (CSV or Excel) and interact with their data using natural language.
    
    The project's greatest differentiator is its Privacy-First architecture: unlike conventional solutions that send entire spreadsheets to Artificial Intelligence APIs, DataMind BI follows a workflow in which the AI (Google Gemini) receives only the table structure (schema) to generate SQL instructions. These instructions are then executed locally, quickly, and securely on the user's machine through the DuckDB engine, ensuring that no sensitive data is ever exposed to the cloud.
    
    Beyond security, the platform stands out for its academic reliability by implementing exploratory data analysis algorithms based on IBGE guidelines and ABNT standards (such as Sturges' Rule for histograms and strict tabular formatting). The result is a tool that combines the ease of ChatGPT with the analytical power of Power BI, wrapped in a premium, highly responsive user interface.`,
    process: `The Challenge and the Architecture
    Development began with a clear challenge: combining the simplicity of chat-based interfaces (LLMs) with visual BI tools without compromising data security. I chose a two-layer architecture: a Python backend (FastAPI) responsible for running DuckDB and orchestrating calls to the Gemini API, and a robust React frontend (Vite, TypeScript, Tailwind CSS) focused on visual performance and seamless user experience.
    
    Artificial Intelligence and Local Processing
    The core logic required building a Text-to-SQL translator. The AI was "trained" through advanced system prompts to understand open-ended questions ("What is the average age?", "Which products sell the most?") and generate SQL queries perfectly compatible with the DuckDB dialect. The backend intercepts this SQL, queries the in-memory database, formats the results, and returns them to the frontend. This transforms the AI into a "translator" while the local system becomes the actual "processor."
    
    User Interface Design (UI/UX)
    For the frontend, the goal was to create an experience that makes a strong first impression. I designed a premium dark-mode interface divided into two simultaneous workspaces:
    - A Generative Canvas on the left, where charts (Recharts) and tables (following IBGE standards) are generated dynamically.
    - A Conversational Assistant on the right, preserving the conversation history and the analytical workflow.
    
    I implemented Zustand with Local Storage persistence to support a sophisticated system of folders and multiple chat sessions. Users can seamlessly switch between, for example, an HR analysis and a Sales analysis while preserving context, conversation history, and settings (such as decimal precision).
    
    Report Generation (Export)
    One of the most interesting technical requirements was building the export layer. Since the Canvas is dynamic, I developed algorithms using libraries such as html2canvas, jsPDF, and xlsx, allowing users to instantly transform an analysis session into a multi-sheet formatted Excel workbook or a clean, professional PDF report ready for printing.`,
    technologies: [],
    images: [{type: 'video', src: video3}, {type: 'video', src: video4}],
  },
  githubUrl: 'https://github.com/Anders0nlima/DataMind-BI',
  liveUrl: 'https://...',
}*/
];