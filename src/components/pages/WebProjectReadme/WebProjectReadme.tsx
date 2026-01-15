import { useParams } from 'react-router-dom';
import { projects } from '../../../data/projects.data';
import styles from './WebProjectReadme.module.css';

const WebProjectReadme = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === Number(id));

  if (!project || project.type !== 'web') {
    return <p>Projeto não encontrado.</p>;
  }

  return (
    <section className={styles.readme}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <div className={styles.links}>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          Live Site
        </a>
      </div>

      <article className={styles.content}>
        <pre>{project.readme}</pre>
      </article>

      <h2>Principais Componentes</h2>
      <div className={styles.components}>
        {project.components?.map((comp, index) => (
          <div key={index}>
            <img src={comp.image} alt={comp.name} />
            <p>{comp.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebProjectReadme;