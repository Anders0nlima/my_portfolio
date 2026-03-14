import styles from './ProjectCard.module.css';
import toast from 'react-hot-toast';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  onReadmeClick: () => void;
  isOffline?: boolean;
  isSleeping?: boolean;
  warning1?: string; 
  warning2?: string; 
  sleepingTitle?: string;
  sleepingMessage?: string;
}

const ProjectCard = ({
  image,
  title,
  description,
  liveUrl,
  githubUrl,
  onReadmeClick,
  isOffline = false,
  isSleeping = false,
  warning1,
  warning2,
  sleepingTitle,
  sleepingMessage,
}: ProjectCardProps) => {
  const { t } = useLanguage();

  const handleOfflineClick = (e: React.MouseEvent) => {
    e.preventDefault();

    toast(() => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.2rem', color: '#00D1FF', display: 'flex', alignItems: 'center' }}>
            ⓘ
          </span>
          <span style={{ fontWeight: 'bold', color: '#00D1FF' }}>
            {/* Prioriza o texto do objeto, se não houver, usa a tradução global */}
            {warning1 || t('projects.warning1')}
          </span>
        </div>

        <p style={{ margin: 0, color: '#fff', fontSize: '0.9rem' }}>
          {warning2 || t('projects.warning2')}
        </p>
      </div>
    ), {
      duration: 6000,
      style: {
        background: '#1A1A1A',
        color: '#fff',
        border: '1px solid #00D1FF',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 4px 12px rgba(0, 209, 255, 0.3)',
      },
    });
  };

  const handleSleepingClick = (e: React.MouseEvent) => {
    e.preventDefault();

    toast((toastItem) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
            ⏳
          </span>
          <span style={{ fontWeight: 'bold', color: '#00D1FF' }}> 
            {sleepingTitle || t('projects.sleepingTitle')}
          </span>
        </div>

        <p style={{ margin: 0, color: '#fff', fontSize: '0.9rem' }}>
          {sleepingMessage || t('projects.sleepingMessage')}
        </p>

        {/* Botão OK dentro do Toast */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
          <button
            onClick={() => {
              toast.dismiss(toastItem.id); // Fecha a notificação
              if (liveUrl) window.open(liveUrl, '_blank'); // Abre o site em nova aba
            }}
            style={{
              background: '#00D1FF',
              color: '#000',
              border: 'none',
              padding: '6px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.2s ease'
            }}
          >
            OK
          </button>
        </div>
      </div>
    ), {
      duration: 10000, // Duração maior (10s) para dar tempo do usuário ler e clicar
      style: {
        background: '#1A1A1A',
        color: '#fff',
        border: '1px solid #00D1FF', // Borda amarela combinando com o ícone
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 4px 12px rgba(0, 209, 255, 0.3)', 
      },
    });
  };

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
            isOffline ? (
              <button
                onClick={handleOfflineClick}
                className={styles.primaryBtn}
                style={{ cursor: 'pointer', border: 'none' }}
              >
                Visit
              </button>
            ) : isSleeping ? (
              <button
                onClick={handleSleepingClick} // <--- Chama o alerta de dormir
                className={styles.primaryBtn}
                style={{ cursor: 'pointer', border: 'none' }}
              >
                Visit
              </button>
            ) : (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryBtn}
              >
                Visit
              </a>
            )
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

          <button onClick={onReadmeClick} className={styles.ghostBtn}>
            README
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;