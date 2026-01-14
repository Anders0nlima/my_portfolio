import { Routes, Route } from 'react-router-dom';

import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import NotFound from './components/NotFound/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/projects"
        element={<Projects onProjectClick={() => {}} projectImages={[]} />}
      />
      <Route path="/contact" element={<Contact />} />

      {/* Página 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}