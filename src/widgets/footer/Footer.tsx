import { Container } from '../../shared/ui/Container';
import styles from './Footer.module.scss';

const footerLinks = {
  Services: ['Brand Strategy', 'UI/UX Design', 'Web Development', 'Digital Marketing', 'Motion Design'],
  Company: ['About Us', 'Careers', 'Blog', 'Contact'],
  Resources: ['Case Studies', 'Documentation', 'Help Center', 'Privacy Policy'],
};

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__grid}>
          <div className={styles.footer__brand}>
            <a href="#" className={styles.footer__logo}>
              <span className={styles.footer__logoIcon}>◈</span>
              <span>Nexus</span>
            </a>
            <p className={styles.footer__description}>
              Crafting premium digital experiences that elevate brands and drive growth.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className={styles.footer__column}>
              <h4 className={styles.footer__columnTitle}>{title}</h4>
              <ul className={styles.footer__links}>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.footer__link}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.footer__bottom}>
          <p>© 2026 Nexus Digital Agency. All rights reserved.</p>
          <div className={styles.footer__socials}>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Dribbble">Dribbble</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
