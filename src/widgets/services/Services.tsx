import { motion } from "framer-motion";
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
    icon: "./public/Servise/Icon Container.svg",
    title: "Expertise That Drives Results",
    description:
      "Our team of seasoned professionals brings years of experience and deep industry expertise to every project. We don’t just follow trends — we set them.",
  },
  {
    icon: "./public/Servise/Icon Container-1.svg",
    title: "Tailored Business Solutions",
    description:
      "We understand that every business is unique. That’s why our solutions are fully customized to your goals, audience, and market reality.",
  },
  {
    icon: "./public/Servise/Icon Container-2.svg",
    title: "Cutting-Edge Web Design",
    description:
      "Leave a lasting impression on your audience with our top‑notch web design services. Modern, fast, and built to convert.",
  },
  {
    icon: "./public/Servise/Icon Container-3.svg",
    title: "Mobile-First Approach",
    description:
      "In today’s mobile‑centric world, we prioritize responsive, mobile‑first design to ensure your website looks and works perfectly everywhere.",
  },
  {
    icon: "./public/Servise/Icon Container-4.svg",
    title: "Marketing Strategies",
    description:
      "Our data‑driven marketing strategies allow us to target the right audience with precision — maximizing reach, engagement, and ROI.",
  },
  {
    icon: "./public/Servise/Icon Container-5.svg",
    title: "Search Engine Optimization",
    description:
      "Boost your online visibility with our expert SEO techniques. From local SEO to global reach, we get you found.",
  },
];

export const Services = () => {
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
            Reasons to Choose R&B Agency <br />
            <span className="text-gradient">For Your Digital Journey</span>
          </h2>
          <p className={styles.services__subtitle}>
            Partnering with R&B means more than just advertising. Expect
            increased brand visibility, deeper customer engagement, and
            measurable ROI. Every solution we craft is tailored to your business
            DNA — for results that last.
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
                <h3 className={styles.serviceCard__title}>{service.title}</h3>
                <p className={styles.serviceCard__description}>
                  {service.description}
                </p>
                <button className={styles.serviceCard__btn}>
                  <span>Learn More</span>
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
