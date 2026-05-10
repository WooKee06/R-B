import { motion } from "framer-motion";
import { Container } from "../../shared/ui/Container";
import styles from "./Footer.module.scss";
import Logo from "../../../public/logo.png";

const footerLinks = {
  Navigation: ["Service", "Agency", "Case Study", "Resource", "Contact"],
  Licence: ["Privacy Policy", "Copyright", "Email Address"],
  Contact: [
    "(406) 555-0120",
    "Hey@boostim.com",
    "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
    "Privacy Policy",
  ],
};

export const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container>
        <div className={styles.footer__grid}>
          <div className={styles.footer__brand}>
            <a href="#" className={styles.footer__logo}>
              <img src={Logo} alt="" />
            </a>
            <p className={styles.footer__description}>
              An award-winning full-service agency. R&B Agency combines high-end
              digital marketing, bold design, and conversion-driven development
              — with a sharp focus on understanding your brand and audience
              first.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className={styles.footer__column}>
              <h4 className={styles.footer__columnTitle}>{title}</h4>
              <ul className={styles.footer__links}>
                {links.map((link) => (
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
          <p>© 2026 Nexus Digital Agency. All rights reserved.</p>
          <div className={styles.footer__socials}>
            <a href="#" aria-label="Twitter">
              Tik Tok
            </a>
            <a href="#" aria-label="LinkedIn">
              Telegramm
            </a>
          </div>
        </div>
      </Container>
    </motion.footer>
  );
};
