import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import CaseStudyModal from './components/CaseStudyModal/CaseStudyModal';
import styles from './App.module.css';

// Interface de tipos
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  problem: string;
  process: string;
  result: string;
  chartImages: string[];
}

// Componente auxiliar para resetar o scroll ao mudar de página
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectImages = [
    '/project-dashboard-1.png',
    '/project-analytics-2.png',
    '/project-realtime-3.png',
    '/project-supply-4.png'
  ];

  return (
    <LanguageProvider>
      
        <ScrollToTop />
        <div className={styles.app}>
          <Header />
          
          <main className={styles.main}>
            <Routes>
              {/* Rota principal: Apenas o Hero (Home) */}
              <Route path="/" element={<Hero />} />
              
              {/* Rota Sobre Mim */}
              <Route path="/about" element={<About />} />
              
              {/* Rota Projetos */}
              <Route 
                path="/projects" 
                element={
                  <Projects 
                    onProjectClick={setSelectedProject} 
                    projectImages={projectImages} 
                  />
                } 
              />
              
              {/* Rota Contato */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Data Portfolio. All rights reserved.</p>
          </footer>

          {/* O Modal continua aqui para poder ser aberto de qualquer página que liste projetos */}
          {selectedProject && (
            <CaseStudyModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </div>
      
    </LanguageProvider>
  );
}

export default App;