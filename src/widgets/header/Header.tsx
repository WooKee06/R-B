import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../app/providers/MobxProvider';
import { Container } from '../../shared/ui/Container';
import { Button } from '../../shared/ui/Button';
import { useScroll } from '../../shared/hooks';
import styles from './Header.module.scss';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Articles', href: '#articles' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const mobileMenuVariants = {
  closed: { opacity: 0, y: -20 },
  open: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const mobileItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 },
};

export const Header = observer(() => {
  const { uiStore } = useStores();
  const scrolled = useScroll();
  const [activeLink, setActiveLink] = useState('');

  return (
    <>
      <motion.header
        className={styles.header}
        data-scrolled={scrolled || uiStore.isMobileMenuOpen}
      >
        <Container>
          <div className={styles.header__inner}>
            <a href="#" className={styles.header__logo}>
              <span className={styles.header__logoIcon}>◈</span>
              <span className={styles.header__logoText}>Nexus</span>
            </a>

            <nav className={styles.header__nav} aria-label="Main navigation">
              <ul className={styles.header__navList}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={styles.header__navLink}
                      data-active={activeLink === link.href}
                      onClick={() => setActiveLink(link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <Button variant="primary" size="sm" className={styles.header__cta}>
              Get in Touch
            </Button>

            <button
              className={styles.header__burger}
              aria-label={uiStore.isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={uiStore.isMobileMenuOpen}
              onClick={uiStore.toggleMobileMenu}
            >
              <span className={styles.header__burgerLine} />
              <span className={styles.header__burgerLine} />
              <span className={styles.header__burgerLine} />
            </button>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {uiStore.isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              className={styles.mobileMenu__nav}
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={styles.mobileMenu__link}
                  variants={mobileItemVariants}
                  onClick={uiStore.closeMobileMenu}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div variants={mobileItemVariants}>
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={uiStore.closeMobileMenu}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
