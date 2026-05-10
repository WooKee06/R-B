import { motion } from "framer-motion";
import { Container } from "../../shared/ui/Container";
import { Section } from "../../shared/ui/Section";
import { Button } from "../../shared/ui/Button";
import { fadeInUp } from "../../shared/lib";
import styles from "./Cta.module.scss";

export const Cta = () => {
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
            Ready to Dominate Your
            <span className="text-gradient">Online Space?</span>
          </motion.h2>
          <motion.p className={styles.cta__subtitle} variants={fadeInUp}>
            Let's discuss how we can help you achieve your goals with a tailored
            digital strategy.
          </motion.p>
          <motion.div className={styles.cta__actions} variants={fadeInUp}>
            <Button variant="primary" size="lg" asMotion>
              Start a Project
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
