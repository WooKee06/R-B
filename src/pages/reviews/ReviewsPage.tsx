import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import { Container } from "../../shared/ui/Container";
import { Section } from "../../shared/ui/Section";
import { Button } from "../../shared/ui/Button";
import { fadeInUp, staggerContainer, staggerItem } from "../../shared/lib";
import LiquidGlass from "@/shared/ui/LiquidGlass/LiquidGlass";
import styles from "./ReviewsPage.module.scss";

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO",
    company: "TechVision Inc.",
    content:
      "Working with Nexus transformed our digital presence. Their strategic approach and attention to detail exceeded our expectations. The team's creativity and professionalism made the entire process seamless.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    date: "March 2026",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "CTO",
    company: "StartupFlow",
    content:
      "The team delivered a complex platform ahead of schedule. Their technical expertise and design sensibility are unmatched. We saw a 200% increase in user engagement within the first month.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 5,
    date: "February 2026",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "BrandCo",
    content:
      "Our engagement rates increased by 150% after the rebrand. Nexus truly understands modern digital experiences. They didn't just meet our expectations — they completely redefined them.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    date: "January 2026",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder",
    company: "Elevate Labs",
    content:
      "From strategy to execution, Nexus was phenomenal. They helped us scale our operations and build a brand that truly resonates with our audience. Highly recommended.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 4,
    date: "December 2025",
  },
  {
    id: 5,
    name: "Amanda Foster",
    role: "VP of Marketing",
    company: "Pinnacle Media",
    content:
      "Nexus brought a fresh perspective to our digital strategy. Their data-driven approach combined with stunning creative execution delivered results beyond our KPIs.",
    avatar:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
    rating: 5,
    date: "November 2025",
  },
  {
    id: 6,
    name: "James O'Brien",
    role: "Product Lead",
    company: "Finova",
    content:
      "Great experience working with the Nexus team. They were responsive, innovative, and truly cared about our success. The redesign boosted our conversion rate by 85%.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 4,
    date: "October 2025",
  },
  {
    id: 7,
    name: "Lisa Park",
    role: "Brand Manager",
    company: "Aura Beauty",
    content:
      "Nexus completely revamped our brand identity and online presence. The attention to every visual detail and the strategic thinking behind the campaign was truly impressive.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    rating: 5,
    date: "September 2025",
  },
  {
    id: 8,
    name: "Ryan Mitchell",
    role: "Director",
    company: "GreenLeaf Ventures",
    content:
      "Professional, creative, and results-oriented. Nexus delivered an exceptional campaign that helped us reach our target audience effectively. Would definitely work with them again.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 4,
    date: "August 2025",
  },
  {
    id: 9,
    name: "Sofia Martinez",
    role: "Head of Growth",
    company: "CloudSync",
    content:
      "The level of dedication and expertise at Nexus is outstanding. They don't just deliver projects — they build lasting partnerships. Our ROI has never been better.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    date: "July 2025",
  },
];

const ratingFilters = ["All", "5", "4", "3", "2", "1"];

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

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 1L11.472 5.636L16.5 6.364L13 9.818L13.944 15L9 12.364L4.056 15L5 9.818L1.5 6.364L6.528 5.636L9 1Z"
      fill={filled ? "#e7ce5c" : "none"}
      stroke={filled ? "#e7ce5c" : "rgba(255,255,255,0.15)"}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ReviewsPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("All");

  const stats = (t("reviewsPage.stats", { returnObjects: true }) as { label: string }[]).map(
    (s: { label: string }, i: number) => ({
      ...s,
      value: ["4.9", "200+", "98%", "50+"][i],
    })
  );

  const filteredReviews =
    activeFilter === "All"
      ? reviews
      : reviews.filter((r) => r.rating >= Number(activeFilter));

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
                {t("reviewsPage.heroTitle")} <span className="text-gradient">{t("reviewsPage.heroTitleGradient")}</span>
              </motion.h1>
              <motion.p className={styles.hero__subtitle} variants={fadeInUp}>
                {t("reviewsPage.heroSubtitle")}
              </motion.p>
              <motion.div className={styles.hero__stats} variants={fadeInUp}>
                {stats.map((stat: { label: string; value: string }) => (
                  <div key={stat.label} className={styles.hero__statItem}>
                    <AnimatedCounter
                      value={stat.value}
                      className={styles.hero__statValue}
                    />
                    <span className={styles.hero__statLabel}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </Container>
        </section>

        <Section className={styles.reviews}>
          <Container>
            <motion.div
              className={styles.reviews__filters}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {ratingFilters.map((rating) => (
                <button
                  key={rating}
                  className={styles.reviews__filterBtn}
                  data-active={activeFilter === rating}
                  onClick={() => setActiveFilter(rating)}
                >
                  {rating === "All"
                    ? t("reviewsPage.all")
                    : (
                      <span className={styles.reviews__filterStars}>
                        {rating}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M9 1L11.472 5.636L16.5 6.364L13 9.818L13.944 15L9 12.364L4.056 15L5 9.818L1.5 6.364L6.528 5.636L9 1Z"
                            fill="#e7ce5c"
                            stroke="#e7ce5c"
                          />
                        </svg>
                      </span>
                    )}
                </button>
              ))}
            </motion.div>

            <motion.div
              className={styles.reviews__grid}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {filteredReviews.map((review) => (
                <motion.div key={review.id} variants={staggerItem}>
                  <LiquidGlass className={styles.reviewCard}>
                    <div className={styles.reviewCard__header}>
                      <div className={styles.reviewCard__author}>
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className={styles.reviewCard__avatar}
                          loading="lazy"
                        />
                        <div className={styles.reviewCard__authorInfo}>
                          <h4 className={styles.reviewCard__name}>
                            {review.name}
                          </h4>
                          <span className={styles.reviewCard__role}>
                            {review.role}, {review.company}
                          </span>
                        </div>
                      </div>
                      <span className={styles.reviewCard__date}>
                        {review.date}
                      </span>
                    </div>

                    <div className={styles.reviewCard__rating}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon
                          key={star}
                          filled={star <= review.rating}
                        />
                      ))}
                    </div>

                    <div className={styles.reviewCard__content}>
                      <p>{review.content}</p>
                    </div>
                  </LiquidGlass>
                </motion.div>
              ))}
            </motion.div>

            {filteredReviews.length === 0 && (
              <motion.p
                className={styles.reviews__empty}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {t("reviewsPage.noResults")}
              </motion.p>
            )}
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
                {t("reviewsPage.ctaTitle")}
                <span className="text-gradient"> {t("reviewsPage.ctaTitleGradient")}</span>
              </motion.h2>
              <motion.p className={styles.cta__subtitle} variants={fadeInUp}>
                {t("reviewsPage.ctaSubtitle")}
              </motion.p>
              <motion.div className={styles.cta__actions} variants={fadeInUp}>
                <Button variant="primary" size="lg" asMotion>
                  {t("reviewsPage.leaveReview")}
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => navigate("/")}
                >
                  {t("reviewsPage.backHome")}
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
