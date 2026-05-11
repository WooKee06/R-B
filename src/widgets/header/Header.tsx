import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../app/providers/MobxProvider';
import { Container } from '../../shared/ui/Container';
import { Button } from '../../shared/ui/Button';
import { useScroll } from '../../shared/hooks';
import styles from './Header.module.scss';
import Logo from '../../../public/logo.svg';
import {
  mobileItemVariants,
  mobileMenuVariants,
} from '@/shared/ui/BasicAnimation/BasicAnimation';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: {
    popularServices: DropdownItem[];
    links: DropdownItem[];
  };
}

const navLinks: NavLink[] = [
  {
    label: 'Agency',
    href: '#portfolio',
    dropdown: {
      popularServices: [
        {
          label: 'TikTok Ads Management',
          href: '#services',
          description: 'запуск и оптимизация рекламных кампаний',
        },
        {
          label: 'Influencer Marketing',
          href: '#services',
          description: 'коллаборации с блогерами',
        },
      ],
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Team', href: '#team' },
        { label: 'Case Studies', href: '#articles' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
  },
  { label: 'Services', href: '#services' },
  { label: 'Case study', href: '#articles' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const Header = observer(() => {
  const { uiStore } = useStores();
  const scrolled = useScroll();
  const [activeLink, setActiveLink] = useState('');
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  return (
    <>
      <motion.header
        className={styles.header}
        data-scrolled={scrolled || uiStore.isMobileMenuOpen}
      >
        <Container>
          <div className={styles.header__inner}>
            <a href="#" className={styles.header__logo}>
              <img src={Logo} alt="" />
            </a>

            <nav className={styles.header__nav} aria-label="Main navigation">
              <ul className={styles.header__navList}>
                {navLinks.map((link) => (
                  <li
                    key={link.href}
                    className={styles.header__navItem}
                    onMouseEnter={() =>
                      link.dropdown && setHoveredDropdown(link.href)
                    }
                    onMouseLeave={() => setHoveredDropdown(null)}
                  >
                    <a
                      href={link.href}
                      className={styles.header__navLink}
                      data-active={activeLink === link.href}
                      onClick={() => setActiveLink(link.href)}
                    >
                      {link.label}
                      {link.dropdown && (
                        <span
                          className={styles.header__navArrow}
                          data-open={hoveredDropdown === link.href}
                        >
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                          >
                            <path
                              d="M1 1L5 5L9 1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      )}
                    </a>

                    {link.dropdown && (
                      <AnimatePresence>
                        {hoveredDropdown === link.href && (
                          <motion.div
                            className={styles.dropdown}
                            initial={{ opacity: 0, y: 8, scaleY: 0.95 }}
                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                            exit={{ opacity: 0, y: 8, scaleY: 0.95 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            style={{ transformOrigin: 'top center' }}
                          >
                            <div className={styles.dropdown__inner}>
                              <div className={styles.dropdown__services}>
                                {link.dropdown.popularServices.map(
                                  (service) => (
                                    <a
                                      key={service.href}
                                      href={service.href}
                                      className={styles.dropdown__serviceCard}
                                    >
                                      <span
                                        className={
                                          styles.dropdown__serviceLabel
                                        }
                                      >
                                        {service.label}
                                      </span>
                                    </a>
                                  ),
                                )}
                              </div>
                              <div className={styles.dropdown__divider} />
                              <div className={styles.dropdown__links}>
                                {link.dropdown.links.map((item) => (
                                  <a
                                    key={item.href}
                                    href={item.href}
                                    className={styles.dropdown__link}
                                  >
                                    {item.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <Button variant="border" size="sm" className={styles.header__cta}>
              Connect
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
