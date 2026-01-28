import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { LanguageProvider } from './context/LanguageContext';
// import { usePageLoading } from './context/PageLoadingContext'; // LOADING (desativado)

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import CaseStudyModal from './components/CaseStudyModal/CaseStudyModal';
import NotFound from './components/NotFound/NotFound';
// import PageLoader from './components/PageLoader/PageLoader'; // LOADING (desativado)

import WebProjectReadme from './components/pages/WebProjectReadme/WebProjectReadme';
import type { Project } from './types/Project';

import styles from './App.module.css';

/* ================= TYPES ================= */

//export interface Project {
//id: number;
//  title: string;
//  description: string;
//  image: string;
//  tags: string[];

  // ===== Tipo do projeto =====
//  type?: 'data' | 'web';

  // ===== Data projects (modelo atual – NÃO alterado)
//  problem?: string;
//  process?: string;
//  result?: string;
//  chartImages?: string[];

  // ===== Web projects (modelo novo)
//  readme?: string;
//  githubUrl?: string;
//  liveUrl?: string;
//  components?: {
//    name: string;
//    image: string;
//  }[];
//}

/* ================= SCROLL RESET ================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* ================= APP ================= */

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  //const location = useLocation();

  // const { loading, showLoader, hideLoader } = usePageLoading(); // LOADING (desativado)

  //const projectImages = [
  //  '/project-dashboard-1.png',
  //  '/project-analytics-2.png',
  //  '/project-realtime-3.png',
  //  '/project-supply-4.png',
  //];

  /* ================= LOADING ENTRE ROTAS ================= */
  /*
  useEffect(() => {
    let timer: number;

    // Só mostra o loader se a navegação demorar
    timer = window.setTimeout(() => {
      showLoader();
    }, 400); //  pode ajustar (300–600ms é o ideal)

    // Cleanup SEMPRE garante que não fique preso
    return () => {
      clearTimeout(timer);
      hideLoader();
    };
  }, [location.pathname, showLoader, hideLoader]);
  */

  return (
    <LanguageProvider>
      <ScrollToTop />

      {/* LOADER GLOBAL (desativado) */}
      {/* {loading && <PageLoader />} */}

      <div className={styles.app}>
        <Header />

        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/projects"
              element={
                <Projects onProjectClick={setSelectedProject}/>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:id" element={<WebProjectReadme />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className={styles.footer}>
          <p>
            &copy; {new Date().getFullYear()} Data Portfolio. All rights reserved.
          </p>
        </footer>

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