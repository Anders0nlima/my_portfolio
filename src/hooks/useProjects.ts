import { useLanguage } from '../context/LanguageContext';

import { projects as projectsPT } from '../data/projects.data';
import { projectsFr as projectsFR } from '../data/projects.data.fr';
import { projectsEn as projectsEN } from '../data/projects.data.en';

import type { Project } from '../types/Project';

export const useProjects = (): Project[] => {
  const { language } = useLanguage();

  const projectsMap: Record<string, Project[]> = {
    pt: projectsPT,
    fr: projectsFR,
    en: projectsEN,
  };

  return projectsMap[language] ?? projectsPT;
};