import { motion } from 'framer-motion';
import { Container } from '../../shared/ui/Container';
import { Section } from '../../shared/ui/Section';
import { Button } from '../../shared/ui/Button';
import { staggerContainer, staggerItem } from '../../shared/lib';
import styles from './Articles.module.scss';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'The Future of Web Design in 2026',
    excerpt: 'Exploring the latest trends and technologies shaping the future of digital experiences.',
    date: 'May 7, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    category: 'Design',
  },
  {
    id: 2,
    title: 'Building Scalable React Applications',
    excerpt: 'Best practices and architecture patterns for enterprise-level React development.',
    date: 'May 5, 2026',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
    category: 'Development',
  },
  {
    id: 3,
    title: 'Brand Identity in the Digital Age',
    excerpt: 'How modern brands are adapting their visual identity for digital-first audiences.',
    date: 'May 3, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&h=400&fit=crop',
    category: 'Branding',
  },
];

export const Articles = () => {
  return (
    <Section id="articles" className={styles.articles}>
      <Container>
        <motion.div
          className={styles.articles__header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge">Insights</span>
          <h2 className={styles.articles__title}>
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className={styles.articles__subtitle}>
            Thoughts, insights, and perspectives from our team of experts.
          </p>
        </motion.div>

        <motion.div
          className={styles.articles__grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              className={styles.articleCard}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className={styles.articleCard__imageWrap}>
                <img src={article.image} alt={article.title} loading="lazy" />
                <span className={styles.articleCard__category}>{article.category}</span>
              </div>
              <div className={styles.articleCard__content}>
                <div className={styles.articleCard__meta}>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className={styles.articleCard__title}>{article.title}</h3>
                <p className={styles.articleCard__excerpt}>{article.excerpt}</p>
                <span className={styles.articleCard__link}>
                  Read More →
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className={styles.articles__cta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button variant="secondary" size="md">View All Articles</Button>
        </motion.div>
      </Container>
    </Section>
  );
};
