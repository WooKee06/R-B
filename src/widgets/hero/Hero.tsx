import { motion } from 'framer-motion';
import { Container } from '../../shared/ui/Container';
import { Button } from '../../shared/ui/Button';
import { fadeInUp, staggerContainer } from '../../shared/lib';
import styles from './Hero.module.scss';

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12+', label: 'Years Experience' },
];

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__glow} />
      <div className={styles.hero__glowSecondary} />

      <Container>
        <motion.div
          className={styles.hero__content}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.hero__badge} variants={fadeInUp}>
            <span className={styles.hero__badgeDot} />
            Digital Agency for Modern Brands
          </motion.div>

          <motion.h1 className={styles.hero__title} variants={fadeInUp}>
            Crafting <span className={styles.hero__titleAccent}>Digital</span>
            <br />
            Excellence
          </motion.h1>

          <motion.p className={styles.hero__subtitle} variants={fadeInUp}>
            We build premium digital experiences that elevate brands and drive growth.
            Strategy, design, and technology — unified.
          </motion.p>

          <motion.div className={styles.hero__actions} variants={fadeInUp}>
            <Button variant="primary" size="lg" asMotion>
              Explore Our Work
            </Button>
            <Button variant="glass" size="lg" asMotion>
              Watch Showreel
            </Button>
          </motion.div>

          <motion.div className={styles.hero__stats} variants={staggerContainer}>
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className={styles.hero__stat}
                variants={fadeInUp}
              >
                <span className={styles.hero__statValue}>{stat.value}</span>
                <span className={styles.hero__statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        className={styles.hero__scrollHint}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className={styles.hero__scrollLine} />
      </motion.div>
    </section>
  );
};
