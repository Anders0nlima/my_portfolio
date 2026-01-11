import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { type Project } from '../../App';
import styles from './CaseStudyModal.module.css';

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

const CaseStudyModal = ({ project, onClose }: CaseStudyModalProps) => {
  const { t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeBtn}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.header}>
          <img src={project.image} alt={project.title} className={styles.headerImage} />
          <div className={styles.headerOverlay}></div>
          
          <div className={styles.headerContent}>
            <h2 className={styles.title}>{project.title}</h2>
            <div className={styles.tags}>
              {project.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconBox} style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3 className={styles.sectionTitle}>{t('caseStudy.problem')}</h3>
            </div>
            <p className={styles.sectionText}>{project.problem}</p>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconBox} style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.3)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6m5.2-11.2l-4.2 4.2m0 6l4.2 4.2M1 12h6m6 0h6M5.8 5.8l4.2 4.2m0 6l-4.2 4.2"></path>
                </svg>
              </div>
              <h3 className={styles.sectionTitle}>{t('caseStudy.process')}</h3>
            </div>
            <p className={styles.sectionText}>{project.process}</p>

            {project.chartImages && project.chartImages.length > 0 && (
              <div className={styles.chartGrid}>
                {project.chartImages.map((chartImage, index) => (
                  <div key={index} className={styles.chartContainer}>
                    <img src={chartImage} alt={`Analysis ${index + 1}`} className={styles.chartImage} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconBox} style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.3)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className={styles.sectionTitle}>{t('caseStudy.result')}</h3>
            </div>
            <p className={styles.sectionText}>{project.result}</p>
            
            <div className={styles.impactBox}>
              <p className={styles.impactText}>✨ {t('caseStudy.impact')}</p>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <button onClick={onClose} className={styles.footerBtn}>
            {t('caseStudy.close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
