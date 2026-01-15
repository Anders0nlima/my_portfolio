import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, type Language } from '../../context/LanguageContext';
import styles from './Header.module.css';

// Ícones dos idiomas
import ptIcon from '../../assets/icons/brazil-flag_3909370.png';
import frIcon from '../../assets/icons/france_3909323.png';
import enIcon from '../../assets/icons/united-kingdom_3909136.png';

// CVs
import cvPt from '../../assets/cv/cv-anderson-lima-pt.pdf';
import cvEn from '../../assets/cv/cv-anderson-lima-en.pdf';
import cvFr from '../../assets/cv/cv-anderson-lima-fr.pdf';

const cvByLanguage: Record<Language, string> = {
  pt: cvPt,
  en: cvEn,
  fr: cvFr,
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvByLanguage[language];
    link.download = `Anderson_Lima_CV_${language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const languages: {
    code: Language;
    label: string;
    icon: string;
  }[] = [
    { code: 'en', label: 'English', icon: enIcon },
    { code: 'pt', label: 'Português', icon: ptIcon },
    { code: 'fr', label: 'Français', icon: frIcon },
  ];

  const currentLang = languages.find(lang => lang.code === language);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            Anderson Lima
          </Link>

          <nav className={styles.nav}>
            <Link
              to="/about"
              className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
            >
              {t('nav.about')}
            </Link>

            <Link
              to="/projects"
              className={`${styles.navLink} ${isActive('/projects') ? styles.active : ''}`}
            >
              {t('nav.projects')}
            </Link>

            <Link
              to="/contact"
              className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
            >
              {t('nav.contact')}
            </Link>

            {/* Seletor de idioma */}
            <div className={styles.langSwitcher}>
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className={styles.langButton}
                aria-label="Change language"
              >
                <img
                  src={currentLang?.icon}
                  alt={currentLang?.label}
                  className={styles.langIcon}
                />
                <span className={styles.langCode}>
                  {language.toUpperCase()}
                </span>
                <svg
                  className={`${styles.chevron} ${
                    showLangDropdown ? styles.chevronUp : ''
                  }`}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {showLangDropdown && (
                <>
                  <div
                    className={styles.langOverlay}
                    onClick={() => setShowLangDropdown(false)}
                  />
                  <div className={styles.langDropdown}>
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLangDropdown(false);
                        }}
                        className={`${styles.langOption} ${
                          language === lang.code ? styles.langActive : ''
                        }`}
                      >
                        <img
                          src={lang.icon}
                          alt={lang.label}
                          className={styles.langIcon}
                        />
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Download CV */}
            <button
              className={styles.downloadBtn}
              onClick={handleDownloadCV}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>{t('nav.downloadCV')}</span>
            </button>
          </nav>

          {/* Menu mobile (visual) */}
          <button className={styles.mobileMenu} aria-label="Open menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;