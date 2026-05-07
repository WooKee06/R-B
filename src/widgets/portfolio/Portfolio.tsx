import { motion } from 'framer-motion';
import { Container } from '../../shared/ui/Container';
import { Section } from '../../shared/ui/Section';
import { staggerContainer, staggerItem } from '../../shared/lib';
import styles from './Portfolio.module.scss';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, title: 'E-Commerce Platform', category: 'Web Development', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop' },
  { id: 2, title: 'Brand Identity System', category: 'Branding', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop' },
  { id: 3, title: 'Mobile Banking App', category: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop' },
  { id: 4, title: 'SaaS Dashboard', category: 'Web Development', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
  { id: 5, title: 'Fitness Mobile App', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop' },
  { id: 6, title: 'Restaurant Booking', category: 'Web Development', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop' },
];

export const Portfolio = () => {
  return (
    <Section id="portfolio" className={styles.portfolio}>
      <Container>
        <motion.div
          className={styles.portfolio__header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge">Portfolio</span>
          <h2 className={styles.portfolio__title}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className={styles.portfolio__subtitle}>
            A selection of our recent work across various industries and platforms.
          </p>
        </motion.div>

        <motion.div
          className={styles.portfolio__grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className={styles.projectCard__imageWrap}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectCard__image}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  loading="lazy"
                />
                <div className={styles.projectCard__overlay}>
                  <span className={styles.projectCard__category}>{project.category}</span>
                  <h3 className={styles.projectCard__title}>{project.title}</h3>
                  <span className={styles.projectCard__view}>View Project →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};
