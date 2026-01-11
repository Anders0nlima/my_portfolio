import { useLanguage } from '../../context/LanguageContext';
import { type Project } from '../../App';
import styles from './Projects.module.css';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
  projectImages: string[];
}

const Projects = ({ onProjectClick, projectImages }: ProjectsProps) => {
  const { t } = useLanguage();

  const projectsData = t('projects.projects') as any[];

  const projects: Project[] = projectsData.map((proj, index) => ({
    id: index + 1,
    title: proj.title,
    description: proj.description,
    image: projectImages[index % projectImages.length],
    tags: proj.tags,
    problem: proj.problem,
    process: proj.process,
    result: proj.result,
    chartImages: [
      projectImages[(index + 1) % projectImages.length],
      projectImages[(index + 2) % projectImages.length]
    ]
  }));

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.gradient}>{t('projects.title')}</span>
          </h2>
          <div className={styles.underline}></div>
          <p className={styles.subtitle}>{t('projects.subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={styles.card}
              onClick={() => onProjectClick(project)}
            >
              <div className={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                />
                <div className={styles.imageOverlay}></div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>

                <p className={styles.description}>{project.description}</p>

                <div className={styles.tags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>

                <button className={styles.cta}>
                  <span>{t('projects.viewCaseStudy')}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
