import type { Project } from '../../types/Project';
import styles from './Projects.module.css';

import { projects } from '../../data/projects.data';
import { projectsEn } from '../../data/projects.data.en';
import { projectsFr } from '../../data/projects.data.fr';

import ProjectCard from '../ProjectCard/ProjectCard';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const Projects = ({ onProjectClick }: ProjectsProps) => {
  const { t, language } = useLanguage();

  const projectsByLang: Record<string, Project[]> = {
    pt: projects,
    en: projectsEn,
    fr: projectsFr,
  };

  const projectsData = projectsByLang[language] ?? projects;

  return (
    <section className={styles.projects}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.gradient}>
            {t('projects.title')}
          </span>
        </h2>

        <p className={styles.subtitle}>
          {t('projects.subtitle')}
        </p>
      </div>

      <div className={styles.grid}>
        {projectsData.map(project => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            onReadmeClick={() => onProjectClick(project)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;