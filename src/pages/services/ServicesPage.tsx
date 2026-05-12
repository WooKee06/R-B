import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import { Container } from "../../shared/ui/Container";
import { Section } from "../../shared/ui/Section";
import { Button } from "../../shared/ui/Button";
import { fadeInUp, staggerContainer, cardHover } from "../../shared/lib";
import styles from "./ServicesPage.module.scss";

interface Service {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  detailsKey: string;
}

const services: Service[] = [
  {
    icon: "./Servise/Icon Container.svg",
    titleKey: "servicesPage.servicesList.0.title",
    descriptionKey: "servicesPage.servicesList.0.description",
    detailsKey: "servicesPage.servicesList.0.details",
  },
  {
    icon: "./Servise/Icon Container-1.svg",
    titleKey: "servicesPage.servicesList.1.title",
    descriptionKey: "servicesPage.servicesList.1.description",
    detailsKey: "servicesPage.servicesList.1.details",
  },
  {
    icon: "./Servise/Icon Container-2.svg",
    titleKey: "servicesPage.servicesList.2.title",
    descriptionKey: "servicesPage.servicesList.2.description",
    detailsKey: "servicesPage.servicesList.2.details",
  },
  {
    icon: "./Servise/Icon Container-3.svg",
    titleKey: "servicesPage.servicesList.3.title",
    descriptionKey: "servicesPage.servicesList.3.description",
    detailsKey: "servicesPage.servicesList.3.details",
  },
  {
    icon: "./Servise/Icon Container-4.svg",
    titleKey: "servicesPage.servicesList.4.title",
    descriptionKey: "servicesPage.servicesList.4.description",
    detailsKey: "servicesPage.servicesList.4.details",
  },
  {
    icon: "./Servise/Icon Container-5.svg",
    titleKey: "servicesPage.servicesList.5.title",
    descriptionKey: "servicesPage.servicesList.5.description",
    detailsKey: "servicesPage.servicesList.5.details",
  },
];

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials: { label: string; href: string }[];
}

const team: TeamMember[] = [
  {
    name: "Alex Retsu",
    role: "Co-Founder & Creative Director",
    bio: "Visionary creative with 8+ years in digital branding and content strategy. Alex has led campaigns generating over 50M+ views across TikTok and Instagram, blending bold aesthetics with performance-driven storytelling.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    socials: [
      { label: "TT", href: "#" },
      { label: "TG", href: "#" },
      { label: "IG", href: "#" },
    ],
  },
  {
    name: "Marcus Blake",
    role: "Co-Founder & Growth Strategist",
    bio: "Data-obsessed marketer with a track record of scaling brands from zero to seven figures. Marcus specializes in growth architecture, funnel optimization, and turning audience insights into revenue.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    socials: [
      { label: "TT", href: "#" },
      { label: "TG", href: "#" },
      { label: "IN", href: "#" },
    ],
  },
];

const AnimatedCounter = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  const match = value.match(/^([+-]?\d*\.?\d+)(.*)$/);
  const targetNumber = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const hasLeadingSign =
    match?.[1]?.startsWith("+") || match?.[1]?.startsWith("-") || false;
  const sign = hasLeadingSign ? match![1][0] : "";

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, targetNumber, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplayValue(
          Number.isInteger(targetNumber)
            ? Math.round(latest).toString()
            : latest.toFixed(1),
        );
      },
    });

    return () => controls.stop();
  }, [isInView, targetNumber]);

  return (
    <span ref={ref} className={className}>
      {sign}
      {displayValue}
      {suffix}
    </span>
  );
};

export const ServicesPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const stats = (
    t("servicesPage.stats", { returnObjects: true }) as { label: string }[]
  ).map((s: { label: string }, i: number) => ({
    ...s,
    value: ["8+", "50+", "200+", "12+"][i],
  }));

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.hero__bg} />
          <Container>
            <motion.div
              className={styles.hero__inner}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 className={styles.hero__title} variants={fadeInUp}>
                {t("servicesPage.heroTitle")}{" "}
                <span className="text-gradient">
                  {t("servicesPage.heroTitleGradient")}
                </span>
              </motion.h1>
              <motion.p className={styles.hero__subtitle} variants={fadeInUp}>
                {t("servicesPage.heroSubtitle")}
              </motion.p>
            </motion.div>
          </Container>
        </section>

        <Section className={styles.services}>
          <Container>
            <motion.div
              className={styles.services__grid}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {services.map((service) => (
                <motion.div
                  key={service.titleKey}
                  className={styles.serviceCard}
                  variants={cardHover}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <div className={styles.serviceCard__inner}>
                    <span className={styles.serviceCard__icon}>
                      <img src={service.icon} alt="" width={72} />
                    </span>
                    <h3 className={styles.serviceCard__title}>
                      {t(service.titleKey)}
                    </h3>
                    <p className={styles.serviceCard__description}>
                      {t(service.descriptionKey)}
                    </p>
                    <p className={styles.serviceCard__details}>
                      {t(service.detailsKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </Section>

        <Section className={styles.team}>
          <div className={styles.team__bg} />
          <Container>
            <motion.div
              className={styles.team__header}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 className={styles.team__title} variants={fadeInUp}>
                {t("servicesPage.teamTitle")}
                <span className="text-gradient">
                  {" "}
                  {t("servicesPage.teamTitleGradient")}
                </span>
              </motion.h2>
              <motion.p className={styles.team__subtitle} variants={fadeInUp}>
                {t("servicesPage.teamSubtitle")}
              </motion.p>
            </motion.div>

            <div className={styles.team__grid}>
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  className={styles.teamCard}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.15,
                        delayChildren: index * 0.2,
                      },
                    },
                  }}
                >
                  <motion.div
                    className={styles.teamCard__imageWrap}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9, y: 40 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className={styles.teamCard__image}
                      loading="lazy"
                    />
                    <div className={styles.teamCard__imageOverlay} />
                    <div className={styles.teamCard__socials}>
                      {member.socials.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          className={styles.teamCard__socialLink}
                          aria-label={social.label}
                        >
                          {social.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className={styles.teamCard__info}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: 0.3 },
                      },
                    }}
                  >
                    <h3 className={styles.teamCard__name}>{member.name}</h3>
                    <span className={styles.teamCard__role}>{member.role}</span>
                    <p className={styles.teamCard__bio}>{member.bio}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.team__stats}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.3 },
                },
              }}
            >
              {stats.map((stat: { label: string; value: string }) => (
                <motion.div
                  key={stat.label}
                  className={styles.team__statItem}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    className={styles.team__statValue}
                  />
                  <span className={styles.team__statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </Section>

        <Section className={styles.cta}>
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
                {t("servicesPage.ctaTitle")}
                <span className="text-gradient">
                  {" "}
                  {t("servicesPage.ctaTitleGradient")}
                </span>
              </motion.h2>
              <motion.p className={styles.cta__subtitle} variants={fadeInUp}>
                {t("servicesPage.ctaSubtitle")}
              </motion.p>
              <motion.div className={styles.cta__actions} variants={fadeInUp}>
                <Button variant="primary" size="lg" asMotion>
                  {t("servicesPage.startProject")}
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => navigate("/contact")}
                >
                  {t("servicesPage.contactUs")}
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
};
