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
import video3 from "../assets/imagens/video3.mp4"
import video4 from "../assets/imagens/video4.mp4"
import video5 from "../assets/imagens/video5.mp4"
import video6 from "../assets/imagens/video6.mp4"

export const projects: Project[] = [
  {
    id: 1,
    title: 'TCCINE',
    subtitle: 'O TCCINE é uma plataforma web institucional desenvolvida para conectar profissionais, estudantes e empresas do mercado audiovisual a serviços especializados de produção, pós-produção e marketing audiovisual. A aplicação apresenta os principais serviços oferecidos, incluindo edição de vídeo, design sonoro, correção de cor, motion graphics e estratégias de divulgação.',
    description: 'O TCCINE é uma plataforma web institucional desenvolvida para conectar profissionais, estudantes e empresas do mercado audiovisual a serviços especializados de produção, pós-produção e marketing audiovisual. A aplicação apresenta os principais serviços oferecidos, incluindo edição de vídeo, design sonoro, correção de cor, motion graphics e estratégias de divulgação.',
    image: image12,
    tags: ['react', 'javaScript', 'marketing', 'spa', 'cinema', 'formspree', 'audiovisual', 'hostinger', 'vite', 'vercel', 'institucional-website'],

    readme: {
      overview: `O TCCINE é uma plataforma web institucional desenvolvida como uma Single Page Application (SPA), voltada para criadores de conteúdo, produtores, cineastas e estudantes do mercado audiovisual. Seu principal objetivo é apresentar serviços especializados de produção e pós-produção audiovisual por meio de uma interface moderna e intuitiva. A plataforma está disponível em português e inglês, encontra-se online em ambiente de produção e foi implantada utilizando Vercel para o front-end e Hostinger para o domínio personalizado.
      Principais funcionalidades:
      - Landing page com hero animado, vídeo de fundo e navegação lateral por âncoras (scroll dots)
      - Página de Produção — dashboard interativo com abas dinâmicas, slider before/after e design sonoro
      - Página de Marketing/Pós-Produção — dashboard com métricas de ROI, estratégias e conteúdo de valor
      - Suporte — canal direto via formulário integrado ao WhatsApp e Formspree
      - Páginas informativas — Sobre, Equipe, Parcerias, Profissionais, Bibliotecas, Termos, Privacidade, Cookies
      - Internacionalização (i18n) — sistema próprio de contexto de idioma com arquivos de tradução completos
      - Animações fluidas com Framer Motion em toda a interface`,
      process: `1. Planejamento
      - Definição do escopo como TCC, mapeando o nicho do mercado audiovisual
      - Estruturação das páginas e jornada do usuário (home → serviço → contato)
      - Definição da identidade visual: paleta cinematográfica, tipografia premium 
      
      2. Setup do Projeto
      - Inicialização com Vite + React 19 para máxima performance de desenvolvimento
      - Configuração do React Router DOM v7 para navegação SPA com múltiplas rotas
      - Estrutura de pastas modular: pages/, components/, styles/, assets/, translations/, data/

      3. Desenvolvimento da Interface
      - Criação de componentes reutilizáveis (NavbarPremium, Footer, LandingPage, Colaboradores, Metodos)
      - Implementação de CSS Modules para escopo de estilos isolado por componente
      - Sistema de âncoras de scroll com SideScrollDots para navegação interna suave
      - Componentes interativos: dashboards com abas dinâmicas, sliders before/after, accordions

      4. Internacionalização
      - Sistema de contexto próprio (LanguageContext) com hook useLanguage()
      - Arquivos de tradução completos em PT e EN (pt.js / en.js) com mais de 90KB de conteúdo localizado

      5. Animações e UX
      - Framer Motion para transições de página, animações de entrada e micro-interações
      - AnimatePresence para transições suaves entre abas e seções
      - Hover effects e feedback visual em todos os elementos interativos

      6. Integrações Externas
      - Formspree para captura e envio de formulários por e-mail
      - WhatsApp Business via link direto para atendimento instantâneo
      - Font Awesome + Lucide React + React Icons para iconografia consistente
      - Vercel Analytics para monitoramento de tráfego em produção
     
      7. Deploy e Publicação
      - Build de produção via vite build
      - Deploy automático na Vercel integrado ao repositório GitHub (CI/CD)
      - Apontamento de DNS via Hostinger para domínio personalizado
      - Alternativa de deploy via GitHub Pages (gh-pages) também configurada`,
      technologies: [],
      images: [{type: 'video', src: video5}, {type: 'video', src: video6}],
    },

    githubUrl: 'https://github.com/Anders0nlima/TC-cine',
    liveUrl: 'https://anders0nlima.github.io/TC-cine/',
  },
  {
  id: 5,
  title: 'DataMind-BI',
  subtitle: 'Plataforma de Business Intelligence segura e com capacidade de ação autônoma, que combina análise local com DuckDB, conversão de texto para SQL (Text-to-SQL) via Gemini e interface de usuário generativa dinâmica, tudo isso respaldado por rigorosos critérios estatísticos de natureza acadêmica.',
  description: 'Plataforma de Business Intelligence segura e com capacidade de ação autônoma, que combina análise local com DuckDB, conversão de texto para SQL (Text-to-SQL) via Gemini e interface de usuário generativa dinâmica, tudo isso respaldado por rigorosos critérios estatísticos de natureza acadêmica.',
  image: image9,
  tags: ['react', 'docker', 'telemetry','statistical-analysis', 'business-intelligence', 'data-analytics', 'recharts', 'gemini-api','text-to-SQL', 'pydantic', 'fastapi', 'duckdb', 'langfuse', 'generative-ui', 'agentec-ai'],
  sleepingTitle: "App sem Hospedagem",
  sleepingMessage: "Este aplicativo não está hospedado no momento. Se desejar testá-lo localmente, há um guia passo a passo no GitHub explicando como executá-lo. Basta clicar em 'GitHub' no card. Se preferir apenas conhecer suas funcionalidades e implementação, consulte o 'README'.",

  readme: {
    overview: `O DataMind BI é uma plataforma moderna de Business Intelligence (BI) Conversacional, desenhada para democratizar a análise de dados sem abrir mão da privacidade e do rigor matemático. A aplicação permite que qualquer usuário, técnico ou leigo, faça o upload de bases de dados (CSV ou Excel) e converse com suas informações em linguagem natural.
    
    O grande diferencial do projeto está na sua arquitetura de privacidade por design (Privacy-First): diferente de soluções comuns que enviam planilhas inteiras para APIs de Inteligência Artificial, o DataMind BI utiliza um fluxo onde a IA (Google Gemini) recebe apenas a estrutura da tabela (schema) para gerar instruções SQL. Essas instruções são então executadas de forma local, rápida e segura na máquina do usuário através do motor DuckDB, garantindo que nenhum dado sensível vaze para a nuvem.
    
    Além da segurança, a plataforma se destaca pela confiabilidade acadêmica, implementando algoritmos de análise exploratória embasados nas diretrizes do IBGE e padrões da ABNT (como a Regra de Sturges para histogramas e formatação tabular estrita). O resultado é uma ferramenta que combina a facilidade do ChatGPT com o poder do PowerBI, envelopada em uma interface de usuário premium e altamente responsiva.`,
    process: `O Desafio e a Arquitetura
    O desenvolvimento começou com um desafio claro: unir a facilidade de interfaces baseadas em Chat (LLMs) com ferramentas visuais de BI, sem comprometer a segurança dos dados. Optei por uma arquitetura em duas camadas principais: um backend em Python (FastAPI), encarregado de rodar o DuckDB e orquestrar as chamadas para a API do Gemini; e um frontend robusto em React (Vite, TypeScript, TailwindCSS) focado em performance visual e fluidez.
    
    Inteligência Artificial e Processamento Local
    A lógica central exigiu a construção de um tradutor Texto-para-SQL. A IA foi "treinada" via system prompts avançados para entender perguntas abertas ("Qual a média de idade?", "Quais produtos vendem mais?") e devolver comandos SQL perfeitos para o dialeto do DuckDB. O backend intercepta esse SQL, consulta a base de dados mantida em memória, formata os resultados e os devolve para o frontend. Isso transformou a IA em um "tradutor" e o sistema local no verdadeiro "processador".
    
    Design de Interface (UI/UX)
    Para o frontend, o objetivo foi criar uma experiência que causasse impacto à primeira vista. Desenhei uma interface no estilo dark mode premium, dividindo a tela em dois ambientes de trabalho simultâneos:
    - Um Canvas Generativo à esquerda, onde gráficos (Recharts) e tabelas (padrão IBGE) surgem organicamente.
    - O Assistente Conversacional à direita, mantendo o histórico e o fluxo da análise.
    
    Implementei o Zustand com persistência no armazenamento local (Local Storage) para suportar um sistema complexo de Pastas e Múltiplos Chats. O usuário pode alternar perfeitamente entre uma análise de RH e uma de Vendas, mantendo o contexto, as mensagens e as configurações (como casas decimais) intactas.
    
    Geração de Relatórios (Exportação)
    Um dos requisitos técnicos mais interessantes foi construir a camada de exportação. Como o Canvas é dinâmico, desenvolvi algoritmos utilizando bibliotecas como html2canvas, jsPDF e xlsx para que o usuário consiga transformar instantaneamente sua sessão de chat em uma planilha do Excel formatada em abas, ou em um relatório PDF limpo, corporativo e pronto para impressão.`,
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
    subtitle: 'Sistema de agendamento para salão de beleza',
    description: 'Sistema de agendamento para salão de beleza',
    image: image2,
    tags: ['React', 'TypeScript', 'JavaScript'],
    warning1: "Status do Projeto: Offline",
    warning2: "O site está atualmente offline. Sinta-se à vontade para ver o código-fonte no GitHub ou no readme.",
    

    readme: {
      overview: 'Wilson Hair é um sistema web de agendamento desenvolvido para otimizar a gestão de atendimentos em salões de beleza. A plataforma foi projetada com três níveis de acesso — administrador, funcionário e cliente — garantindo que cada usuário visualize e utilize apenas as funcionalidades correspondentes ao seu perfil, identificadas no momento do login.',
      process: 'O desenvolvimento do projeto seguiu uma arquitetura baseada em camadas, separando responsabilidades entre os diferentes tipos de usuários. O foco esteve na criação de uma interface intuitiva e eficiente, facilitando o processo de agendamento para clientes, a organização da agenda para funcionários e o controle geral do sistema pelo administrador. Também houve atenção especial à usabilidade, responsividade e clareza dos fluxos de navegação.',
      technologies: ['React', 'Vite', 'JavaScript', 'TypeScript', 'Vite', 'Figma (UI Design)'],
      images: [{type: 'video', src: video2}, {type: 'image', src: image3}],
    },    

    githubUrl: 'https://github.com/Anders0nlima/frontend-wilson',
    liveUrl: '*',
    isOffline: true,
    //offlineMessage: 'O site está fora do ar no momento, fique livre para ver o código fonte no github ou o readme.',
    //warning1: "Status do Projeto: Offline",
    //warning2: "O site está atualmente offline. Sinta-se à vontade para ver o código-fonte no GitHub ou no readme."

  },*/
  {
    id: 3,
    title: 'Análise de Salários na Área de Dados',
    subtitle: 'Dashboard interativo desenvolvido em Python com Streamlit para exploração e análise de salários na área de dados. A aplicação consome um dataset público diretamente da web e permite ao usuário filtrar, comparar e visualizar tendências salariais de diferentes cargos, níveis de senioridade, tipos de contrato e países',
    description: 'Dashboard interativo desenvolvido em Python com Streamlit para exploração e análise de salários na área de dados. A aplicação consome um dataset público diretamente da web e permite ao usuário filtrar, comparar e visualizar tendências salariais de diferentes cargos, níveis de senioridade, tipos de contrato e países',
    image: image6,
    tags: ['python', 'streamlit', 'pandas', 'plotly', 'data-analysis', 'dashboard', 'data-visualization', 'data-science', 'exploratory-data-analysis', 'interactive-dashboard'],
    sleepingTitle: "App em repouso",
    sleepingMessage: "Este aplicativo entrou em repouso por inatividade. Clique em 'Yes, get this app back up!' para acessar a página e reativá-lo!",

    readme: {
      overview: `O mercado de dados cresce rapidamente e entender a remuneração em diferentes perfis é essencial para profissionais que buscam crescimento ou mudança de carreira. Este projeto responde perguntas como:
      - Quais são os cargos mais bem pagos na área de dados?
      - Como a senioridade impacta o salário?
      - Há diferença de remuneração entre modelos presencial, híbrido e remoto?
      - Quais países pagam mais para Cientistas de Dados?
      A aplicação apresenta esses insights por meio de KPIs e 4 visualizações interativas, com filtros que permitem segmentar os dados de acordo com o perfil de interesse do usuário.`,
      process: `1. Fonte dos dados
      Os dados são carregados diretamente de um repositório público no GitHub via pd.read_csv(), contendo registros com ano, cargo, senioridade, tipo de contrato, tamanho da empresa, modalidade de trabalho, salário anual (USD) e país de residência.

      2. Filtragem interativa
      Quatro filtros na barra lateral permitem segmentar os dados por:
      - Ano — evolução temporal dos salários
      - Senioridade — Junior, Pleno, Sênior etc.
      - Tipo de contrato — CLT, PJ, Freelance etc.
      - Tamanho da empresa — pequeno, médio ou grande porte

      3. Cálculo de KPIs
      Com base nos dados filtrados, são calculados e exibidos em destaque:
      - Salário médio anual (USD)
      -Salário máximo anual (USD)
      - Total de registros encontrados
      - Cargo mais frequente no filtro aplicado

      4. Visualizações com Plotly Express
      Quatro gráficos interativos são gerados dinamicamente:
      - Gráfico de barras horizontal → Top 10 cargos por salário médio
      - Histograma → Distribuição dos salários anuais
      - Gráfico de pizza (donut) → Proporção dos tipos de trabalho (presencial / híbrido / remoto)
      - Mapa coroplético → Salário médio de Cientistas de Dados por país

      5. Tabela de dados detalhados
      Ao final, o dataframe filtrado completo é exibido em uma tabela interativa para análise linha a linha.`,
      technologies: [],
      images: [{type: 'image', src: image7}, {type: 'image', src: image8}],
    },

    githubUrl: 'https://github.com/Anders0nlima/analise-de-dashboard',
    liveUrl: 'https://dashboard-analys.streamlit.app/',
    isSleeping: true,
  },
  /*{
    id: 4,
    title: '[Analise de Dados]',
    subtitle: '------',
    description: '[Estimativa de conclusão ~ 15.01.2026]',
    image: image4,
    tags: ['---', '---'],

    readme: {
      overview: '---',
      process: '---',
      technologies: ['---', '---', '---'],
      images: ['/screens/home.png', '/screens/projects.png'],
    },

    githubUrl: '*',
    liveUrl: '*',
  },*/
  /*{
  id: 5,
  title: 'DataMind-BI',
  subtitle: 'Plataforma de Business Intelligence segura e com capacidade de ação autônoma, que combina análise local com DuckDB, conversão de texto para SQL (Text-to-SQL) via Gemini e interface de usuário generativa dinâmica, tudo isso respaldado por rigorosos critérios estatísticos de natureza acadêmica.',
  description: 'Plataforma de Business Intelligence segura e com capacidade de ação autônoma, que combina análise local com DuckDB, conversão de texto para SQL (Text-to-SQL) via Gemini e interface de usuário generativa dinâmica, tudo isso respaldado por rigorosos critérios estatísticos de natureza acadêmica.',
  image: image9,
  tags: ['react', 'docker', 'telemetry','statistical-analysis', 'business-intelligence', 'data-analytics', 'recharts', 'gemini-api','text-to-SQL', 'pydantic', 'fastapi', 'duckdb', 'langfuse', 'generative-ui', 'agentec-ai'],
  readme: {
    overview: `O DataMind BI é uma plataforma moderna de Business Intelligence (BI) Conversacional, desenhada para democratizar a análise de dados sem abrir mão da privacidade e do rigor matemático. A aplicação permite que qualquer usuário, técnico ou leigo, faça o upload de bases de dados (CSV ou Excel) e converse com suas informações em linguagem natural.
    
    O grande diferencial do projeto está na sua arquitetura de privacidade por design (Privacy-First): diferente de soluções comuns que enviam planilhas inteiras para APIs de Inteligência Artificial, o DataMind BI utiliza um fluxo onde a IA (Google Gemini) recebe apenas a estrutura da tabela (schema) para gerar instruções SQL. Essas instruções são então executadas de forma local, rápida e segura na máquina do usuário através do motor DuckDB, garantindo que nenhum dado sensível vaze para a nuvem.
    
    Além da segurança, a plataforma se destaca pela confiabilidade acadêmica, implementando algoritmos de análise exploratória embasados nas diretrizes do IBGE e padrões da ABNT (como a Regra de Sturges para histogramas e formatação tabular estrita). O resultado é uma ferramenta que combina a facilidade do ChatGPT com o poder do PowerBI, envelopada em uma interface de usuário premium e altamente responsiva.`,
    process: `O Desafio e a Arquitetura
    O desenvolvimento começou com um desafio claro: unir a facilidade de interfaces baseadas em Chat (LLMs) com ferramentas visuais de BI, sem comprometer a segurança dos dados. Optei por uma arquitetura em duas camadas principais: um backend em Python (FastAPI), encarregado de rodar o DuckDB e orquestrar as chamadas para a API do Gemini; e um frontend robusto em React (Vite, TypeScript, TailwindCSS) focado em performance visual e fluidez.
    
    Inteligência Artificial e Processamento Local
    A lógica central exigiu a construção de um tradutor Texto-para-SQL. A IA foi "treinada" via system prompts avançados para entender perguntas abertas ("Qual a média de idade?", "Quais produtos vendem mais?") e devolver comandos SQL perfeitos para o dialeto do DuckDB. O backend intercepta esse SQL, consulta a base de dados mantida em memória, formata os resultados e os devolve para o frontend. Isso transformou a IA em um "tradutor" e o sistema local no verdadeiro "processador".
    
    Design de Interface (UI/UX)
    Para o frontend, o objetivo foi criar uma experiência que causasse impacto à primeira vista. Desenhei uma interface no estilo dark mode premium, dividindo a tela em dois ambientes de trabalho simultâneos:
    - Um Canvas Generativo à esquerda, onde gráficos (Recharts) e tabelas (padrão IBGE) surgem organicamente.
    - O Assistente Conversacional à direita, mantendo o histórico e o fluxo da análise.
    
    Implementei o Zustand com persistência no armazenamento local (Local Storage) para suportar um sistema complexo de Pastas e Múltiplos Chats. O usuário pode alternar perfeitamente entre uma análise de RH e uma de Vendas, mantendo o contexto, as mensagens e as configurações (como casas decimais) intactas.
    
    Geração de Relatórios (Exportação)
    Um dos requisitos técnicos mais interessantes foi construir a camada de exportação. Como o Canvas é dinâmico, desenvolvi algoritmos utilizando bibliotecas como html2canvas, jsPDF e xlsx para que o usuário consiga transformar instantaneamente sua sessão de chat em uma planilha do Excel formatada em abas, ou em um relatório PDF limpo, corporativo e pronto para impressão.`,
    technologies: [],
    images: [{type: 'video', src: video3}, {type: 'video', src: video4}],
  },
  githubUrl: 'https://github.com/Anders0nlima/DataMind-BI',
  liveUrl: 'https://...',
}*/
];