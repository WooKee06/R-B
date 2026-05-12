import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import { Container } from "../../shared/ui/Container";
import { Section } from "../../shared/ui/Section";
import { Button } from "../../shared/ui/Button";
import { fadeInUp, staggerContainer, cardHover } from "../../shared/lib";
import styles from "./ServicesPage.module.scss";

interface Service {
  icon: string;
  title: string;
  description: string;
  details: string;
}

const services: Service[] = [
  {
    icon: "./Servise/Icon Container.svg",
    title: "Expertise That Drives Results",
    description:
      "Our team of seasoned professionals brings years of experience and deep industry expertise to every project.",
    details:
      "We don't just follow trends — we set them. From strategy through execution, every deliverable is backed by data, refined by creativity, and built for impact.",
  },
  {
    icon: "./Servise/Icon Container-1.svg",
    title: "Tailored Business Solutions",
    description:
      "We understand that every business is unique.",
    details:
      "Our solutions are fully customized to your goals, audience, and market reality. No templates, no shortcuts — just a strategy that fits your DNA.",
  },
  {
    icon: "./Servise/Icon Container-2.svg",
    title: "Cutting-Edge Web Design",
    description:
      "Leave a lasting impression with top-notch web design.",
    details:
      "Modern, fast, and built to convert. Every pixel is placed with purpose — blending aesthetics with performance for an experience users love.",
  },
  {
    icon: "./Servise/Icon Container-3.svg",
    title: "Mobile-First Approach",
    description:
      "We prioritize responsive, mobile-first design.",
    details:
      "In today's mobile-centric world, your website needs to look and work perfectly everywhere. We build for every screen, without compromise.",
  },
  {
    icon: "./Servise/Icon Container-4.svg",
    title: "Marketing Strategies",
    description:
      "Data-driven marketing that targets with precision.",
    details:
      "Maximizing reach, engagement, and ROI. Our campaigns are built on real insights, tested relentlessly, and optimized for what works.",
  },
  {
    icon: "./Servise/Icon Container-5.svg",
    title: "Search Engine Optimization",
    description:
      "Boost your online visibility with expert SEO.",
    details:
      "From local SEO to global reach, we get you found. Technical audits, content strategy, and link-building that drives sustainable organic growth.",
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
                Our <span className="text-gradient">Services</span>
              </motion.h1>
              <motion.p className={styles.hero__subtitle} variants={fadeInUp}>
                From strategy to execution — we deliver end-to-end digital
                solutions that drive real business growth.
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
                  key={service.title}
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
                      {service.title}
                    </h3>
                    <p className={styles.serviceCard__description}>
                      {service.description}
                    </p>
                    <p className={styles.serviceCard__details}>
                      {service.details}
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
              <motion.span
                className="section-badge"
                variants={fadeInUp}
              >
                Meet the Founders
              </motion.span>
              <motion.h2 className={styles.team__title} variants={fadeInUp}>
                The Minds Behind
                <span className="text-gradient"> R&B Agency</span>
              </motion.h2>
              <motion.p
                className={styles.team__subtitle}
                variants={fadeInUp}
              >
                Two founders, one vision — to reshape digital marketing with
                creativity, data, and relentless ambition.
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
                      transition: { staggerChildren: 0.15, delayChildren: index * 0.2 },
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
                    <span className={styles.teamCard__role}>
                      {member.role}
                    </span>
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
                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
              }}
            >
              {[
                { value: "8+", label: "Years Experience" },
                { value: "50+", label: "Team Members" },
                { value: "200+", label: "Projects Delivered" },
                { value: "12+", label: "Industry Awards" },
              ].map((stat) => (
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
                Ready to Work With Us?
                <span className="text-gradient"> Let's Talk</span>
              </motion.h2>
              <motion.p className={styles.cta__subtitle} variants={fadeInUp}>
                Whether you need a full-scale campaign or a creative
                consultation — we're just a message away.
              </motion.p>
              <motion.div className={styles.cta__actions} variants={fadeInUp}>
                <Button variant="primary" size="lg" asMotion>
                  Start a Project
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
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
