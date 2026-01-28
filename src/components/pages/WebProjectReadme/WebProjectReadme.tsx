import { useParams } from 'react-router-dom';
import { useProjects } from '../../../hooks/useProjects';
import styles from './WebProjectReadme.module.css';

const WebProjectReadme = () => {
  const { id } = useParams<{ id: string }>();
  const projects = useProjects();

  const project = projects.find(p => p.id === Number(id));

  if (!project || !project.readme) {
    return <p>Projeto não encontrado.</p>;
  }

  return (
    <section className={styles.readme}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <div className={styles.links}>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live Site
          </a>
        )}
      </div>

      <article className={styles.content}>
        {project.readme.overview && <p>{project.readme.overview}</p>}
      </article>
    </section>
  );
};

export default WebProjectReadme;