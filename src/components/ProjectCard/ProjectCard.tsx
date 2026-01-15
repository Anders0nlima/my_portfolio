import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  onReadmeClick: () => void;
}

const ProjectCard = ({
  image,
  title,
  description,
  liveUrl,
  githubUrl,
  onReadmeClick,
}: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className={styles.buttons}>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              Visit
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              GitHub
            </a>
          )}

          <button
            onClick={onReadmeClick}
            className={styles.ghostBtn}
          >
            README
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;