import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Container } from "../../shared/ui/Container";
import { Section } from "../../shared/ui/Section";
import { staggerContainer, staggerItem, cardHover } from "../../shared/lib";
import styles from "./Services.module.scss";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "./Servise/Icon Container.svg",
    title: "services.servicesList.0.title",
    description: "services.servicesList.0.description",
  },
  {
    icon: "./Servise/Icon Container-1.svg",
    title: "services.servicesList.1.title",
    description: "services.servicesList.1.description",
  },
  {
    icon: "./Servise/Icon Container-2.svg",
    title: "services.servicesList.2.title",
    description: "services.servicesList.2.description",
  },
  {
    icon: "./Servise/Icon Container-3.svg",
    title: "services.servicesList.3.title",
    description: "services.servicesList.3.description",
  },
  {
    icon: "./Servise/Icon Container-4.svg",
    title: "services.servicesList.4.title",
    description: "services.servicesList.4.description",
  },
  {
    icon: "./Servise/Icon Container-5.svg",
    title: "services.servicesList.5.title",
    description: "services.servicesList.5.description",
  },
];

export const Services = () => {
  const { t } = useTranslation();
  return (
    <Section id="services" className={styles.services}>
      <Container>
        <motion.div
          className={styles.services__header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.services__title}>
            {t("services.title")} <br />
            <span className="text-gradient">{t("services.titleGradient")}</span>
          </h2>
          <p className={styles.services__subtitle}>
            {t("services.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className={styles.services__grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className={styles.serviceCard}
              variants={staggerItem}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                className={styles.serviceCard__inner}
                variants={cardHover}
                whileHover="hover"
              >
                <span className={styles.serviceCard__icon}>
                  <img src={service.icon} alt="" width={80} />
                </span>
                <h3 className={styles.serviceCard__title}>{t(service.title)}</h3>
                <p className={styles.serviceCard__description}>
                  {t(service.description)}
                </p>
                <button className={styles.serviceCard__btn}>
                  <span>{t("services.learnMore")}</span>
                  <svg
                    width="68"
                    height="48"
                    viewBox="0 0 68 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="68" height="48" rx="24" fill="#1A1A1A" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M26.2227 23.9999C26.2227 23.3233 26.7554 22.7749 27.4127 22.7749H37.9448L34.5212 19.5746C34.0474 19.1057 34.0327 18.3302 34.4882 17.8425C34.9437 17.3548 35.697 17.3396 36.1708 17.8085L41.7241 23.1169C41.9575 23.3478 42.0893 23.6667 42.0893 23.9999C42.0893 24.3331 41.9575 24.6519 41.7241 24.8829L36.1708 30.1912C35.697 30.6602 34.9437 30.645 34.4882 30.1573C34.0327 29.6696 34.0474 28.8941 34.5212 28.4252L37.9448 25.2249H27.4127C26.7554 25.2249 26.2227 24.6764 26.2227 23.9999Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};
