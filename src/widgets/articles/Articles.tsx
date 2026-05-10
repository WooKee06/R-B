import { motion } from "framer-motion";
import { Container } from "../../shared/ui/Container";
import { Section } from "../../shared/ui/Section";
import { Button } from "../../shared/ui/Button";
import { staggerContainer, staggerItem } from "../../shared/lib";
import styles from "./Articles.module.scss";

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
    title: "Methodological Framework for the Analysis of TikTok",
    excerpt:
      " Organic + platform: +340% engagement in 2 months. A case about virality that sells without breaking the budget.",
    date: "May 7, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    category: "Design",
  },
  {
    id: 2,
    title: "−25% cost per lead due to creative audit",
    excerpt:
      "  Transparent analytics, hypotheses in 24 hours, and scaling what really works. No water.",
    date: "May 5, 2026",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    category: "Development",
  },
  {
    id: 3,
    title: "The Epistemological Convergence of Design and Conversion",
    excerpt:
      "  From bold visuals to UX that doesn't annoy. Analyzing a rebranding case  with a 47% increase in CR.",
    date: "May 3, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&h=400&fit=crop",
    category: "Branding",
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
          <h2 className={styles.articles__title}>
            Growth, recognition, and return on investment: not just quantitative
            indicators
          </h2>
          <div>
            <p className={styles.articles__subtitle}>
              An award-winning full-service agency. R&B Agency combines high-end
              digital marketing, bold design, and conversion-driven development
              — with a sharp focus on understanding your brand and audience
              first.
            </p>
            <Button variant="border">See more</Button>
          </div>
        </motion.div>

        <motion.div
          className={styles.articles__grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              className={styles.articleCard}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={styles.articleCard__content}>
                <div className={styles.articleCard__meta}>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className={styles.articleCard__title}>{article.title}</h3>
                <p className={styles.articleCard__excerpt}>{article.excerpt}</p>
                <span className={styles.articleCard__link}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
          <Button variant="secondary" size="md">
            View All Articles
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
};
