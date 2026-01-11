import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import CaseStudyModal from './components/CaseStudyModal/CaseStudyModal';
import styles from './App.module.css';

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
      <div className={styles.app}>
        <Header />
        
        <main className={styles.main}>
          <Hero />
          <About />
          <Projects onProjectClick={setSelectedProject} projectImages={projectImages} />
          <Contact />
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2026 Data Portfolio. All rights reserved.</p>
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
