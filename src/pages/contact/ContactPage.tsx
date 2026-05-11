import { motion } from 'framer-motion';
import { useStores } from '../../app/providers/MobxProvider';
import { Header } from '../../widgets/header';
import { Footer } from '../../widgets/footer';
import { Container } from '../../shared/ui/Container';
import { Section } from '../../shared/ui/Section';
import { Button } from '../../shared/ui/Button';
import { fadeInUp, staggerContainer } from '../../shared/lib';
import styles from './ContactPage.module.scss';

const contactInfo = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Office',
    value: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    href: 'https://maps.google.com/?q=2972+Westheimer+Rd+Santa+Ana+Illinois+85486',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92V19.92C22.0001 20.1985 21.939 20.4731 21.821 20.7234C21.703 20.9737 21.5312 21.1937 21.3182 21.3681C21.1052 21.5424 20.8564 21.6667 20.5898 21.7315C20.3232 21.7963 20.0452 21.8 19.777 21.742C16.6529 21.0616 13.699 19.7565 11.12 17.92C8.71411 16.2433 6.71667 14.0602 5.25 11.5C3.39312 8.34626 2.22356 4.78806 2 3.223C1.942 2.95477 1.94572 2.67676 2.01053 2.41018C2.07534 2.14359 2.19962 1.89481 2.37396 1.68179C2.5483 1.46877 2.76834 1.29697 3.01864 1.17901C3.26894 1.06105 3.54352 1.00007 3.822 1.00007H6.822C7.18254 0.995634 7.53222 1.11899 7.81329 1.34852C8.09436 1.57806 8.28947 1.89946 8.367 2.257C8.56069 3.14568 8.86681 4.00745 9.28 4.823C9.46892 5.19988 9.54427 5.62309 9.49697 6.04151C9.44966 6.45993 9.28171 6.85611 9.012 7.183L8.088 8.107C9.58506 10.7224 11.6776 12.8149 14.293 14.312L15.217 13.388C15.5439 13.1183 15.9401 12.9503 16.3585 12.903C16.7769 12.8557 17.2001 12.9311 17.577 13.12C18.3926 13.5332 19.2543 13.8393 20.143 14.033C20.5005 14.1105 20.8219 14.3056 21.0515 14.5867C21.281 14.8678 21.4044 15.2175 21.4 15.578L22 16.92Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Phone',
    value: '(406) 555-0120',
    href: 'tel:+14065550120',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Email',
    value: 'retsu-rb-agency@gmail.com',
    href: 'mailto:retsu-rb-agency@gmail.com',
  },
];

const socials = [
  {
    label: 'TikTok',
    href: '#',
    initials: 'TT',
  },
  {
    label: 'Telegram',
    href: '#',
    initials: 'TG',
  },
  {
    label: 'Instagram',
    href: '#',
    initials: 'IG',
  },
  {
    label: 'LinkedIn',
    href: '#',
    initials: 'IN',
  },
];

export const ContactPage = () => {
  const { uiStore } = useStores();

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.hero__bg} />
          <Container>
            <motion.div
              className={styles.hero__inner}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div className={styles.hero__badge} variants={fadeInUp}>
                Get in Touch
              </motion.div>
              <motion.h1 className={styles.hero__title} variants={fadeInUp}>
                Let's <span className="text-gradient">Talk</span>
              </motion.h1>
              <motion.p className={styles.hero__subtitle} variants={fadeInUp}>
                Have a project in mind? We'd love to hear about it. Reach out
                and let's create something great together.
              </motion.p>
            </motion.div>
          </Container>
        </section>

        <Section className={styles.content}>
          <Container>
            <div className={styles.content__grid}>
              <motion.div
                className={styles.info}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={staggerContainer}
              >
                <motion.h2 className={styles.info__title} variants={fadeInUp}>
                  Contact Information
                </motion.h2>
                <motion.p className={styles.info__text} variants={fadeInUp}>
                  We're always open to new opportunities and collaborations.
                  Whether you need a full-scale campaign or a creative
                  consultation — we're just a message away.
                </motion.p>

                <motion.div className={styles.info__list} variants={fadeInUp}>
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={styles.info__item}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <span className={styles.info__icon}>{item.icon}</span>
                      <div className={styles.info__itemContent}>
                        <span className={styles.info__itemLabel}>
                          {item.label}
                        </span>
                        <span className={styles.info__itemValue}>
                          {item.value}
                        </span>
                      </div>
                    </a>
                  ))}
                </motion.div>

                <motion.div className={styles.socials} variants={fadeInUp}>
                  <span className={styles.socials__label}>Follow Us</span>
                  <div className={styles.socials__list}>
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className={styles.socials__link}
                        aria-label={s.label}
                      >
                        {s.initials}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className={styles.map}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={styles.map__container}>
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-88.0%2C40.0%2C-87.5%2C40.5&amp;layer=mapnik&amp;marker=40.2%2C-87.8"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    title="Office Location"
                    loading="lazy"
                  />
                  <div className={styles.map__overlay}>
                    <div className={styles.map__pin}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" fill="#e7ce5c"/>
                        <circle cx="12" cy="10" r="3" fill="black"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles.map__info}>
                  <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                  <Button
                    variant="border"
                    size="sm"
                    onClick={() =>
                      window.open(
                        'https://maps.google.com/?q=2972+Westheimer+Rd+Santa+Ana+Illinois+85486',
                        '_blank',
                      )
                    }
                  >
                    Open in Maps
                  </Button>
                </div>
              </motion.div>
            </div>
          </Container>
        </Section>

        <Section className={styles.cta}>
          <Container>
            <motion.div
              className={styles.cta__inner}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              <motion.h2 className={styles.cta__title} variants={fadeInUp}>
                Prefer a Quick Call Back?
                <span className="text-gradient"> We're Ready</span>
              </motion.h2>
              <motion.p className={styles.cta__subtitle} variants={fadeInUp}>
                Drop your details and our team will get back to you within 24
                hours.
              </motion.p>
              <motion.div className={styles.cta__actions} variants={fadeInUp}>
                <Button variant="primary" size="lg" asMotion>
                  Schedule a Call
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => uiStore.setPage('case-study')}
                >
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
};
