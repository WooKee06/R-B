import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { useStores } from "../../app/providers/MobxProvider";
import { Container } from "../../shared/ui/Container";
import { Button } from "../../shared/ui/Button";
import { LanguageSwitcher } from "../../shared/ui/LanguageSwitcher/LanguageSwitcher";
import { useScroll } from "../../shared/hooks";
import styles from "./Header.module.scss";
import Logo from "../../../public/logo.svg";
import {
  mobileItemVariants,
  mobileMenuVariants,
} from "@/shared/ui/BasicAnimation/BasicAnimation";
import { Link } from "react-router-dom";

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

const MotionLink = motion.create(Link);

export const Header = observer(() => {
  const { uiStore } = useStores();
  const { t } = useTranslation();
  const scrolled = useScroll();
  const [activeLink, setActiveLink] = useState("");

  const navLinks: NavLink[] = [
    {
      label: t("header.nav.agency"),
      href: "/#portfolio",
      dropdown: {
        popularServices: [
          {
            label: t("header.dropdown.tiktokAds"),
            href: "/#services",
            description: t("header.dropdown.tiktokAdsDesc"),
          },
          {
            label: t("header.dropdown.influencerMarketing"),
            href: "/#services",
            description: t("header.dropdown.influencerMarketingDesc"),
          },
        ],
        links: [
          { label: t("header.dropdown.aboutUs"), href: "/#about" },
          { label: t("header.dropdown.ourTeam"), href: "/#team" },
          { label: t("header.dropdown.caseStudies"), href: "/case-study" },
          { label: t("header.dropdown.faq"), href: "/#faq" },
        ],
      },
    },
    { label: t("header.nav.services"), href: "/services" },
    { label: t("header.nav.caseStudy"), href: "/case-study" },
    { label: t("header.nav.reviews"), href: "/reviews" },
    { label: t("header.nav.contact"), href: "/contact" },
  ];

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    if (uiStore.isMobileMenuOpen) {
      uiStore.closeMobileMenu();
    }
  };

  return (
    <>
      <motion.header
        className={styles.header}
        data-scrolled={scrolled || uiStore.isMobileMenuOpen}
      >
        <Container>
          <div className={styles.header__inner}>
            <Link to="/" className={styles.header__logo}>
              <img src={Logo} alt="" />
            </Link>

            <nav className={styles.header__nav} aria-label="Main navigation">
              <ul className={styles.header__navList}>
                {navLinks.map((link) => (
                  <li
                    key={link.href}
                    className={styles.header__navItem}
                  >
                    <Link
                      to={link.href}
                      className={styles.header__navLink}
                      data-active={activeLink === link.href}
                      onClick={() => handleNavClick(link.href)}
                    >
                      {link.label}
                      {/* {link.dropdown && (
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
                      )} */}
                    </Link>

                    {/* {link.dropdown && (
                      <AnimatePresence>
                        {hoveredDropdown === link.href && (
                          <motion.div
                            className={styles.dropdown}
                            initial={{ opacity: 0, y: 8, scaleY: 0.95 }}
                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                            exit={{ opacity: 0, y: 8, scaleY: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            style={{ transformOrigin: "top center" }}
                          >
                            <div className={styles.dropdown__inner}>
                              <div className={styles.dropdown__services}>
                                {link.dropdown.popularServices.map(
                                  (service) => (
                                    <Link
                                      key={service.href}
                                      to={service.href}
                                      className={styles.dropdown__serviceCard}
                                    >
                                      <span
                                        className={
                                          styles.dropdown__serviceLabel
                                        }
                                      >
                                        {service.label}
                                      </span>
                                    </Link>
                                  ),
                                )}
                              </div>
                              <div className={styles.dropdown__divider} />
                              <div className={styles.dropdown__links}>
                                {link.dropdown.links.map((item) => (
                                  <Link
                                    key={item.href}
                                    to={item.href}
                                    className={styles.dropdown__link}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )} */}
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.header__actions}>
              <Button variant="border" size="sm" className={styles.header__cta}>
                {t("header.connect")}
              </Button>
            </div>

            <button
              className={
                uiStore.isMobileMenuOpen
                  ? styles.header__burgerOpen
                  : styles.header__burger
              }
              aria-label={uiStore.isMobileMenuOpen ? "Close menu" : "Open menu"}
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
            initial={{ opacity: 0, zIndex: "-1" }}
            animate={{ opacity: 1, zIndex: "20" }}
            exit={{ opacity: 0, zIndex: "-1" }}
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
                <MotionLink
                  key={link.href}
                  to={link.href}
                  className={styles.mobileMenu__link}
                  variants={mobileItemVariants}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </MotionLink>
              ))}
              <motion.div
                variants={mobileItemVariants}
                className={styles.mobileMenu__switcher}
              >
                <LanguageSwitcher />
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={uiStore.closeMobileMenu}
                >
                  {t("header.getInTouch")}
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
