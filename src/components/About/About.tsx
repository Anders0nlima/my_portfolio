import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './About.module.css';

type ExperienceTab = 'professional' | 'academic' | 'volunteer';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const About = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ExperienceTab>('professional');

  const techStack = [
    { name: 'Python' },
    { name: 'SQL' },
    { name: 'React' },
    { name: 'Power BI' },
    { name: 'Pandas' },
    { name: 'Machine Learning' }
  ];

  const tabs: { key: ExperienceTab; label: string; icon: string }[] = [
    { key: 'professional', label: t('about.experience.professional'), icon: 'briefcase' },
    { key: 'academic', label: t('about.experience.academic'), icon: 'graduation' },
    { key: 'volunteer', label: t('about.experience.volunteer'), icon: 'heart' }
  ];

  const getExperiences = (tab: ExperienceTab): ExperienceItem[] => {
    return t(`about.experience.${tab}Exp`) as any;
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.gradient}>{t('about.title')}</span>
          </h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.bio}>
          <div className={styles.bioContent}>
            <p className={styles.bioParagraph}>{t('about.bio.p1')}</p>
            <p className={styles.bioParagraph}>{t('about.bio.p2')}</p>
            <p className={styles.bioParagraph}>{t('about.bio.p3')}</p>

            <div className={styles.badges}>
              <div className={styles.badgeAvailable}>
                <div className={styles.pulse}></div>
                <span>{t('about.bio.available')}</span>
              </div>
              <div className={styles.badgeExperience}>
                <span>{t('about.bio.experience')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.experience}>
          <h3 className={styles.experienceTitle}>{t('about.experience.title')}</h3>

          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
              >
                <svg className={styles.tabIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  {tab.icon === 'briefcase' && (
                    <>
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </>
                  )}
                  {tab.icon === 'graduation' && (
                    <>
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </>
                  )}
                  {tab.icon === 'heart' && (
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  )}
                </svg>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.timeline}>
            {getExperiences(activeTab).map((exp: ExperienceItem, index: number) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>

                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <h4 className={styles.timelineTitle}>{exp.title}</h4>
                    <span className={styles.timelinePeriod}>{exp.period}</span>
                  </div>
                  <p className={styles.timelineCompany}>{exp.company}</p>
                  <p className={styles.timelineDescription}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.techStack}>
          <h3 className={styles.techStackTitle}>{t('about.techStack')}</h3>
          <div className={styles.techGrid}>
            {techStack.map((tech, index) => (
              <div key={index} className={styles.techCard}>
                <div className={styles.techIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    {index % 2 === 0 ? (
                      <polyline points="16 18 22 12 16 6"></polyline>
                    ) : (
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    )}
                  </svg>
                </div>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>

          <div className={styles.additionalSkills}>
            {['Tableau', 'NumPy', 'Scikit-learn', 'Node.js', 'Git', 'Excel'].map((skill, index) => (
              <span key={index} className={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
