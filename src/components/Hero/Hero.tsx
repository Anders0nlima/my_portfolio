import { useNavigate } from 'react-router-dom'; // Importamos o hook de navegação
import { useLanguage } from '../../context/LanguageContext';
import styles from './Hero.module.css';

const Hero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate(); // Inicializamos o navegador

  // Substituímos o scroll manual pelo redirecionamento de rota
  const handleViewProjects = () => {
    navigate('/projects');
  };

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
        
        <svg className={styles.dataviz} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <polyline
            points="100,400 200,350 300,380 400,300 500,320 600,280"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
          />
          <polyline
            points="200,500 300,480 400,520 500,460 600,490 700,440"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
          />
        </svg>

        <div className={`${styles.icon} ${styles.icon1}`}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        </div>
        <div className={`${styles.icon} ${styles.icon2}`}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          </svg>
        </div>
        <div className={`${styles.icon} ${styles.icon3}`}>
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          {t('hero.badge')}
        </div>
        
        <h1 className={styles.headline}>
          <span className={styles.gradient}>
            {t('hero.headline1')}
          </span>
          <br />
          <span className={styles.white}>{t('hero.headline2')}</span>
        </h1>

        <p className={styles.subheadline}>
          {t('hero.subheadline')}
        </p>

        <div className={styles.actions}>
          {/* Botões agora chamam as funções de navegação */}
          <button onClick={handleViewProjects} className={styles.primaryBtn}>
            <span>{t('hero.viewProjects')}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          
          <button onClick={handleGetInTouch} className={styles.secondaryBtn}>
            {t('hero.getInTouch')}
          </button>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statValue}>50+</div>
            <div className={styles.statLabel}>{t('hero.stats.projects')}</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>1M+</div>
            <div className={styles.statLabel}>{t('hero.stats.dataPoints')}</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>15+</div>
            <div className={styles.statLabel}>{t('hero.stats.techTools')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;