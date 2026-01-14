import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import HeroAnimation from './HeroAnimation';
import styles from './Hero.module.css';

const Hero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleViewProjects = () => navigate('/projects');
  const handleGetInTouch = () => navigate('/contact');

  return (
    <section className={styles.hero}>
      
      {/* ================= BACKGROUND ================= */}
      <div className={styles.background}>
        <div className={`${styles.shape} ${styles.shape1}`} />
        <div className={`${styles.shape} ${styles.shape2}`} />
        <div className={`${styles.shape} ${styles.shape3}`} />
      </div>

      {/* ================= LAYOUT ================= */}
      <div className={styles.container}>

        {/* ===== LEFT: CONTENT ===== */}
        <div className={styles.content}>
          {/* Badge (opcional) */}
          {/* <div className={styles.badge}>{t('hero.badge')}</div> */}

          <h1 className={styles.headline}>
            <span className={styles.gradient}>
              {t('hero.headline1')}
            </span>
            <br />
            <span className={styles.white}>
              {t('hero.headline2')}
            </span>
          </h1>

          <p className={styles.subheadline}>
            {t('hero.subheadline')}
          </p>

          <div className={styles.actions}>
            <button
              onClick={handleViewProjects}
              className={styles.primaryBtn}
            >
              <span>{t('hero.viewProjects')}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            <button
              onClick={handleGetInTouch}
              className={styles.secondaryBtn}
            >
              {t('hero.getInTouch')}
            </button>
          </div>

          <div className={styles.stats}>
            {/* Seus stats aqui */}
          </div>
        </div>

        {/* ===== RIGHT: ANIMATION ===== */}
        <div className={styles.modelContainer}>
          <HeroAnimation />
        </div>

      </div>
    </section>
  );
};

export default Hero;