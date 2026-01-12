import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Contact.module.css';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Simulação de envio de formulário
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    /* Removido o id="contact" pois agora é uma página acessada via rota */
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.gradient}>{t('contact.title')}</span>
          </h2>
          <div className={styles.underline}></div>
          <p className={styles.subtitle}>{t('contact.subtitle')}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={styles.textarea}
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`${styles.submitBtn} ${submitted ? styles.submitted : ''}`}
              >
                {submitted ? (
                  <>
                    <span>{t('contact.form.sent')}</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>{t('contact.form.send')}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className={styles.infoContainer}>
            <div>
              <h3 className={styles.infoTitle}>{t('contact.connect')}</h3>
              <p className={styles.infoDesc}>{t('contact.connectDesc')}</p>
            </div>

            <div className={styles.socialLinks}>
              {/* Ajuste os links abaixo com seus dados reais */}
              <a href="mailto:seu-email@dominio.com" className={styles.socialCard}>
                <div className={styles.socialIcon} style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', borderColor: 'rgba(6, 182, 212, 0.2)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <div className={styles.socialLabel}>{t('contact.social.email')}</div>
                  <div className={styles.socialValue}>seu-email@dominio.com</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/seuperfil" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                <div className={styles.socialIcon} style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <div className={styles.socialLabel}>{t('contact.social.linkedin')}</div>
                  <div className={styles.socialValue}>linkedin.com/in/seuperfil</div>
                </div>
              </a>

              <a href="https://github.com/seugithub" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                <div className={styles.socialIcon} style={{ backgroundColor: 'rgba(107, 114, 128, 0.1)', borderColor: 'rgba(107, 114, 128, 0.2)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div>
                  <div className={styles.socialLabel}>{t('contact.social.github')}</div>
                  <div className={styles.socialValue}>github.com/seugithub</div>
                </div>
              </a>
            </div>

            <div className={styles.infoBox}>
              <h4 className={styles.infoBoxTitle}>{t('contact.quickResponse.title')}</h4>
              <p className={styles.infoBoxText}>{t('contact.quickResponse.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;