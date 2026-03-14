import type { Project } from '../types/Project';

import image1 from "../assets/imagens/tccine1.png"
import image2 from "../assets/imagens/wilson2.png"
import image3 from "../assets/imagens/imagem5.png"
import image4 from "../assets/imagens/imagem4.png"
import image6 from "../assets/imagens/imagem6.png"
import image7 from "../assets/imagens/imagem7.png"
import image8 from "../assets/imagens/imagem8.png"
import video1 from "../assets/imagens/video1.mp4"
import video2 from "../assets/imagens/video2.mp4"

export const projects: Project[] = [
  {
    id: 1,
    title: 'TCCINE',
    subtitle: 'Site audiovisual',
    description: 'Plataforma audiovisual.',
    image: image1,
    tags: ['React', 'JavaScript'],

    readme: {
      overview: 'TCCINE é uma plataforma dedicada a conectar pessoas com profissionais e recursos essenciais para a produção audiovisual. Ideal para quem busca serviços como edição de vídeo, efeitos sonoros, correção de cor e outras técnicas que enriquecem o trabalho final.',
      process: 'O desenvolvimento da TCCINE foi realizado utilizando React com Vite, priorizando performance, organização do código e uma boa experiência do usuário. Inicialmente, foi feita uma análise de plataformas similares e uma definição clara da estrutura do projeto, incluindo rotas, componentes reutilizáveis e organização de pastas. O layout foi inspirado em interfaces modernas voltadas para o setor criativo, com foco em clareza visual e responsividade. Durante o desenvolvimento, foram utilizados conceitos de componentização, separação de responsabilidades e boas práticas de front-end. A responsividade foi garantida por meio de Media Queries, permitindo o uso tanto em dispositivos móveis quanto em desktops.Para a comunicação com os usuários, foi integrada a ferramenta Formspree, possibilitando o envio de formulários diretamente para o e-mail sem necessidade de backend próprio. Por fim, o projeto passou por testes visuais e funcionais antes de ser publicado em ambiente de produção',
      technologies: ['React', 'Vite', 'JavaScript'],
      images: [{type: 'video', src: video1}, {type: 'image', src: image4}],
    },

    githubUrl: 'https://github.com/Anders0nlima/TC-cine',
    liveUrl: 'https://anders0nlima.github.io/TC-cine/',
  },
  {
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

  },
  {
    id: 3,
    title: 'Análise de Salários na Área de Dados',
    subtitle: 'Dashboard interativo para exploração de dados salariais',
    description: 'Dashboard interativo para exploração de dados salariais',
    image: image6,
    tags: ['Análise de Dados', 'Dashboard', 'Visualização de Dados'],
    sleepingTitle: "App em repouso",
    sleepingMessage: "Este aplicativo entrou em repouso por inatividade. Clique em 'Yes, get this app back up!' para acessar a página e reativá-lo!",

    readme: {
      overview: 'Dashboard interativo desenvolvido com Streamlit para análise de salários na área de dados ao longo dos últimos anos. O projeto permite explorar informações como cargos, senioridade, tipo de contrato, tamanho da empresa e modelo de trabalho (remoto, híbrido ou presencial), facilitando a compreensão de padrões e tendências do mercado.',
      process: 'Os dados foram carregados a partir de um dataset público e tratados com a biblioteca Pandas para filtragem, agregação e cálculo de métricas. Foram implementados filtros dinâmicos para refinar a análise por ano, senioridade, tipo de contrato e tamanho da empresa. As visualizações foram construídas com Plotly, incluindo gráficos de barras, histogramas, gráfico de pizza e um mapa geográfico (choropleth) para análise salarial por país.',
      technologies: ['Python', 'Pandas', 'Streamlit', 'Plotly'],
      images: [{type: 'image', src: image7}, {type: 'image', src: image8}],
    },

    githubUrl: 'https://github.com/Anders0nlima/analise-de-dashboard',
    liveUrl: 'https://dashboard-analys.streamlit.app/',
    isSleeping: true,
  }
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
];