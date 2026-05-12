import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Container } from '../../shared/ui/Container';
import styles from './Footer.module.scss';
import Logo from '../../../public/logo.svg';

export const Footer = () => {
  const { t } = useTranslation();

  const columnKeys = ['Navigation', 'Licence', 'Contact'] as const;

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container>
        <div className={styles.footer__grid}>
          <div className={styles.footer__brand}>
            <a href="#" className={styles.footer__logo}>
              <img src={Logo} alt="" />
            </a>
            <p className={styles.footer__description}>
              {t('footer.description')}
            </p>
          </div>

          {columnKeys.map((key) => (
            <div key={key} className={styles.footer__column}>
              <h4 className={styles.footer__columnTitle}>{t(`footer.columns.${key}`)}</h4>
              <ul className={styles.footer__links}>
                {(t(`footer.links.${key}`, { returnObjects: true }) as string[]).map((link: string) => (
                  <li key={link}>
                    <a href="#" className={styles.footer__link}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.footer__bottom}>
          <p>{t('footer.copyright')}</p>
          <div className={styles.footer__socials}>
            <a href="#" aria-label="Twitter">
              {t('footer.tiktok')}
            </a>
            <a href="#" aria-label="LinkedIn">
              {t('footer.telegram')}
            </a>
          </div>
        </div>
      </Container>
    </motion.footer>
  );
};
