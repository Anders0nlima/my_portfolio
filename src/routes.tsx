import { Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects onProjectClick={() => {}} projectImages={[]} />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Rota 404 - Caso o usuário digite uma URL que não existe */}
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}