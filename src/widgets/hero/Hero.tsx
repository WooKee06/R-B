import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "../../shared/ui/Button";
import { useNavigate } from "react-router-dom";
import {
  decorBottomRightVariants,
  decorTopLeftVariants,
  fadeInUp,
  scrollHintVariants,
  staggerContainer,
} from "../../shared/lib";
import { HeroBackground } from "./HeroBackground/HeroBackground";
import DecorBottomRightImg from "../../../public/home/decorBottomRight.png";
import DecorTopLeftImg from "../../../public/home/decorTopLeft.png";
import LiquidGlass from "@/shared/ui/LiquidGlass/LiquidGlass";
import styles from "./Hero.module.scss";

export const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
              <span>{t("hero.createdBy")}</span>
              <h3>{t("hero.retsuCreator")}</h3>
            </section>
            <section className={styles.glassInfo}>
              <span>{t("hero.submittedOn")}</span>
              <h3>{t("hero.date")}</h3>
            </section>
          </LiquidGlass>
        </motion.div>

        <div className={styles.title}>
          <motion.h2 className={styles.hero__title} variants={fadeInUp}>
            {t("hero.title1")}
          </motion.h2>
          <motion.h2 className={styles.hero__title} variants={fadeInUp}>
            {t("hero.title2")}
          </motion.h2>
        </div>
        <motion.p className={styles.hero__subtitle} variants={fadeInUp}>
          {t("hero.subtitle")}
        </motion.p>
        <motion.div className={styles.hero__actions} variants={fadeInUp}>
          <Button variant="primary" size="lg" asMotion>
            {t("hero.scheduleCall")}
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
          <Button
            variant="glass"
            size="lg"
            asMotion
            onClick={() => navigate("/case-study")}
          >
            {t("hero.viewCaseStudy")}
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

                <small>{t("hero.usersCount")}</small>
              </ul>
              <h3>
                <div></div>
                {t("hero.activeUsers")}
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
