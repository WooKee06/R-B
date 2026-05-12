import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Container } from "../../shared/ui/Container";
import { Section } from "../../shared/ui/Section";
import { staggerContainer, staggerItem } from "../../shared/lib";
import styles from "./Portfolio.module.scss";
import CardBg from "../../../public/Servise/CardBg.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "MStore",
    category: "Web Development",
    description:
      "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Beauty",
    description:
      "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Mangcoding",
    category: "UI/UX Design",
    description:
      "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "MangStore",
    category: "Web Development",
    description:
      "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
];

export const Portfolio = () => {
  const { t } = useTranslation();
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
          <h2 className={styles.portfolio__title}>{t("portfolio.title")}</h2>
          <p className={styles.portfolio__subtitle}>
            {t("portfolio.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className={styles.portfolio__grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={styles.projectCard__imageWrap}>
                <motion.img
                  src={CardBg}
                  alt={project.title}
                  className={styles.projectCard__image}
                  loading="lazy"
                />
                <button className={styles.projectCard__linkBtn} aria-label="Open project">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2447 8.8163L9.95214 1.38957C9.94368 1.25121 9.90802 1.11373 9.84722 0.985017C9.73064 0.725727 9.51985 0.51493 9.26056 0.398349C9.13185 0.337547 8.99436 0.301892 8.856 0.293428L1.42928 0.000835705C1.29078 -0.00462057 1.15472 0.0172546 1.02886 0.0652121C0.903002 0.11317 0.789804 0.18627 0.695734 0.28034C0.505751 0.470324 0.40521 0.734187 0.416229 1.01388C0.427248 1.29358 0.548925 1.5662 0.754492 1.77176C0.960059 1.97733 1.23268 2.09901 1.51237 2.11003L6.40629 2.29542L0.278072 8.42364C0.088863 8.61285 -0.0112685 8.87563 -0.000294491 9.15419C0.0106799 9.43275 0.131862 9.70425 0.33659 9.90898C0.541319 10.1137 0.812825 10.2349 1.09138 10.2459C1.36994 10.2568 1.63273 10.1567 1.82194 9.9675L7.95016 3.83928L8.13555 8.7332C8.14044 8.87183 8.17274 9.01028 8.23059 9.14056C8.28844 9.27085 8.37069 9.39039 8.47259 9.4923C8.5745 9.5942 8.69404 9.67645 8.82432 9.7343C8.95461 9.79215 9.09306 9.82445 9.23169 9.82934C9.37036 9.83537 9.50669 9.8139 9.63282 9.76615C9.75895 9.7184 9.87237 9.64533 9.96655 9.55116C10.0607 9.45698 10.1338 9.34355 10.1815 9.21743C10.2293 9.0913 10.2508 8.95497 10.2447 8.8163Z" fill="#030205"/>
                  </svg>
                </button>
                <div className={styles.projectCard__overlay}>
                  <span className={styles.projectCard__category}>
                    {project.category}
                  </span>
                  <h3 className={styles.projectCard__title}>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};
