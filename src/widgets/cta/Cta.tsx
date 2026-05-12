import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Container } from "../../shared/ui/Container";
import { Section } from "../../shared/ui/Section";
import { Button } from "../../shared/ui/Button";
import { fadeInUp } from "../../shared/lib";
import styles from "./Cta.module.scss";

export const Cta = () => {
  const { t } = useTranslation();
  return (
    <Section id="contact" className={styles.cta}>
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
            {t("cta.title")}
            <span className="text-gradient">{t("cta.titleGradient")}</span>
          </motion.h2>
          <motion.p className={styles.cta__subtitle} variants={fadeInUp}>
            {t("cta.subtitle")}
          </motion.p>
          <motion.div className={styles.cta__actions} variants={fadeInUp}>
            <Button variant="primary" size="lg" asMotion>
              {t("cta.startProject")}
            </Button>
            <Button variant="ghost" size="lg">
              retsu-rb-agency@gmail.com
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};
