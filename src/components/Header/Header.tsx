import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importamos as ferramentas de rota
import { useLanguage, type Language } from '../../context/LanguageContext';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation(); // Para saber em qual página estamos

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'pt', label: 'Português', flag: '🇵🇹' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' }
  ];

  const currentLang = languages.find(lang => lang.code === language);

  // Função auxiliar para definir se o link está ativo (opcional para estilo)
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo agora é um Link para a Home (/) */}
          <Link to="/" className={styles.logo}>
            Data Portfolio
          </Link>

          <nav className={styles.nav}>
            {/* Trocamos botões por componentes Link */}
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