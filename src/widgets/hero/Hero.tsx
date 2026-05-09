import { motion, type Variants } from "framer-motion";
import { Button } from "../../shared/ui/Button";
import {
  decorBottomRightVariants,
  decorTopLeftVariants,
  fadeInUp,
  scrollHintVariants,
  staggerContainer,
} from "../../shared/lib";
import { HeroBackground } from "./HeroBackground/HeroBackground";
import DecorBottomRightImg from "/Hero/decorBottomRight.png";
import DecorTopLeftImg from "/Hero/decorTopLeft.png";
import LiquidGlass from "@/shared/ui/LiquidGlass/LiquidGlass";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <HeroBackground />

      <motion.div
        className={styles.hero__content}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className={styles.hero__decorTopLeft}
          style={{ backgroundImage: `url(${DecorTopLeftImg})` }}
          variants={decorTopLeftVariants}
        >
          <LiquidGlass
            style={{
              padding: "20px 60px",
              display: "flex",
              gap: "70px",
              width: "max-content",
              position: "relative",
              right: "-270px",
              top: "40px",
            }}
            className={styles.hero__decorTopLeftContent}
          >
            <section className={styles.glassInfo}>
              <span>Created by:</span>
              <h3>Retsu @Tik Tok Creater</h3>
            </section>
            <section className={styles.glassInfo}>
              <span>Submitted on:</span>
              <h3>May 4, 2026</h3>
            </section>
          </LiquidGlass>
        </motion.div>

        <div className={styles.title}>
          <motion.h2 className={styles.hero__title} variants={fadeInUp}>
            Stay ahead with our
          </motion.h2>
          <motion.h2 className={styles.hero__title} variants={fadeInUp}>
            innovative approach
          </motion.h2>
        </div>
        <motion.p className={styles.hero__subtitle} variants={fadeInUp}>
          An award-winning full-service agency. R&B Agency combines high-end
          digital marketing, bold design, and conversion-driven development —
          with a sharp focus on understanding your brand and audience first.
        </motion.p>
        <motion.div className={styles.hero__actions} variants={fadeInUp}>
          <Button variant="primary" size="lg" asMotion>
            Schedule Call
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
          </Button>
          <Button variant="glass" size="lg" asMotion>
            View Case Study
          </Button>
        </motion.div>

        <motion.div
          className={styles.hero__decorBottomRight}
          style={{ backgroundImage: `url(${DecorBottomRightImg})` }}
          variants={decorBottomRightVariants}
        >
          <LiquidGlass
            style={{
              padding: "30px",
              display: "flex",
              gap: "70px",
              width: "max-content",
              position: "relative",
              left: "-100px",
              bottom: "-230px",
            }}
            className={styles.hero__decorBottomRightContent}
          >
            <section className={styles.glassInfo}>
              <ul>
                <li></li>
                <li className={styles.cimage}></li>
                <li className={styles.cimage}></li>

                <small>1.350 C</small>
              </ul>
              <h3>
                <div></div>Active Users Worldwide
              </h3>
            </section>
          </LiquidGlass>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.hero__scrollHint}
        variants={scrollHintVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span className={styles.hero__scrollLine} />
        </motion.div>
      </motion.div>
    </section>
  );
};
