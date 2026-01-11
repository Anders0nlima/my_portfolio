import { useState, useEffect } from 'react';
import { useLanguage, type Language } from '../../context/LanguageContext';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'pt', label: 'Português', flag: '🇵🇹' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' }
  ];

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={styles.logo}
          >
            Data Portfolio
          </button>

          <nav className={styles.nav}>
            <button 
              onClick={() => scrollToSection('about')}
              className={styles.navLink}
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={styles.navLink}
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={styles.navLink}
            >
              {t('nav.contact')}
            </button>

            <div className={styles.langSwitcher}>
              <button 
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className={styles.langButton}
              >
                <span className={styles.flag}>{currentLang?.flag}</span>
                <span className={styles.langCode}>{language.toUpperCase()}</span>
                <svg 
                  className={`${styles.chevron} ${showLangDropdown ? styles.chevronUp : ''}`}
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {showLangDropdown && (
                <>
                  <div 
                    className={styles.langOverlay} 
                    onClick={() => setShowLangDropdown(false)}
                  />
                  <div className={styles.langDropdown}>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLangDropdown(false);
                        }}
                        className={`${styles.langOption} ${language === lang.code ? styles.langActive : ''}`}
                      >
                        <span className={styles.flag}>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button className={styles.downloadBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>{t('nav.downloadCV')}</span>
            </button>
          </nav>

          <button className={styles.mobileMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
