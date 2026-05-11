import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, animate, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import { Container } from "../../shared/ui/Container";
import { Section } from "../../shared/ui/Section";
import { Button } from "../../shared/ui/Button";
import { fadeInUp, staggerContainer, staggerItem } from "../../shared/lib";
import styles from "./CaseStudyPage.module.scss";

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

interface CaseStudy {
  id: number;
  client: string;
  title: string;
  category: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  image: string;
  color: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: "Luxe Dining",
    title: "Brand Identity & Digital Campaign for a Premium Restaurant Chain",
    category: "Branding",
    tags: ["Brand Identity", "Web Design", "SMM"],
    challenge:
      "A high-end restaurant chain with 12 locations was struggling with an outdated brand image and declining social media engagement. They needed a complete brand refresh and a digital strategy to attract a younger, affluent audience.",
    solution:
      "We crafted a sophisticated new visual identity, redesigned their website with immersive gastronomic photography, and launched a data-driven SMM campaign featuring influencer collaborations and mouth-watering video content.",
    results: [
      { label: "Engagement", value: "+156%" },
      { label: "Reach", value: "3.2M" },
      { label: "Revenue Growth", value: "2x" },
      { label: "New Locations", value: "+4" },
    ],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    color: "#c9a96e",
  },
  {
    id: 2,
    client: "Verve Fashion",
    title: "Influencer Marketing Campaign That Generated 500K+ Followers",
    category: "Influencer Marketing",
    tags: ["Influencer Marketing", "Content", "Video Production"],
    challenge:
      "Verve Fashion, an emerging streetwear brand, needed to break through the noise in a saturated market. With a limited budget, they required a high-impact strategy to build brand awareness and drive sales.",
    solution:
      "We identified and partnered with 28 micro-influencers whose audiences matched Verve's target demographic. Our team produced authentic, trend-driven content — from unboxing videos to styled shoots — that resonated with Gen Z.",
    results: [
      { label: "New Followers", value: "500K+" },
      { label: "Engagement Rate", value: "8.9%" },
      { label: "Sales Uplift", value: "+230%" },
      { label: "ROI", value: "4.7x" },
    ],
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop",
    color: "#e74c3c",
  },
  {
    id: 3,
    client: "TechFlow",
    title: "B2B Lead Generation Pipeline Generating 12K MQLs Monthly",
    category: "Performance",
    tags: ["PPC", "SEO", "CRO", "Marketing Automation"],
    challenge:
      "TechFlow, a B2B SaaS platform, had a complex product with a long sales cycle. Their existing lead generation efforts were underperforming — high CPA and low conversion rates were stifling growth.",
    solution:
      "We rebuilt their entire digital funnel: retargeting campaigns, SEO-optimized content hub, AI-driven lead scoring, and A/B tested landing pages. The result was a predictable, scalable revenue machine.",
    results: [
      { label: "ROI", value: "340%" },
      { label: "MQLs / Month", value: "12K" },
      { label: "CPA Reduction", value: "-58%" },
      { label: "Pipeline Value", value: "$4.2M" },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    color: "#3498db",
  },
  {
    id: 4,
    client: "Bloom Cosmetics",
    title: "Full Rebranding & E-Commerce Redesign That Doubled Conversion",
    category: "Web Design",
    tags: ["Branding", "UX/UI", "Shopify Development"],
    challenge:
      "Bloom Cosmetics had strong brand recognition but their website was outdated, slow, and had a poor mobile experience. Conversion rates were stagnating and cart abandonment was at 78%.",
    solution:
      "We executed a complete brand evolution — from logo to packaging — and rebuilt their Shopify store with a mobile-first approach, implementing one-click checkout, personalized recommendations, and micro-animations.",
    results: [
      { label: "Conversion Rate", value: "2.5x" },
      { label: "Page Load Speed", value: "-45%" },
      { label: "Cart Abandonment", value: "-32%" },
      { label: "Avg. Order Value", value: "+28%" },
    ],
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
    color: "#e84393",
  },
  {
    id: 5,
    client: "FitLife App",
    title: "User Acquisition Campaign with 200K Installs in 90 Days",
    category: "UA",
    tags: ["User Acquisition", "ASO", "Creative", "Analytics"],
    challenge:
      "FitLife, a fitness subscription app, needed to scale their user base rapidly ahead of their Series A fundraising. They required cost-efficient installs with strong retention metrics.",
    solution:
      "We designed a multi-channel UA strategy across TikTok, Meta, and Apple Search Ads. Our creative team produced 40+ video ad variations, and our analytics team optimized bidding in real-time.",
    results: [
      { label: "Installs", value: "200K" },
      { label: "CPI", value: "$0.84" },
      { label: "D7 Retention", value: "38%" },
      { label: "Subscription Rate", value: "12%" },
    ],
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    color: "#00b894",
  },
  {
    id: 6,
    client: "Urban Eats",
    title: "SMM & Viral Content Strategy for a Food Delivery Platform",
    category: "SMM",
    tags: ["SMM", "Content", "Video", "Community Management"],
    challenge:
      "Urban Eats, a regional food delivery platform, was losing market share to bigger competitors. They needed a low-cost, high-impact strategy to build a loyal community and drive app downloads.",
    solution:
      'We created a hyper-local content strategy featuring "day in the life" videos with delivery partners, user-generated content campaigns, and witty TikTok trends that showcased the brand\'s personality.',
    results: [
      { label: "Video Views", value: "1M+" },
      { label: "New Followers", value: "78K" },
      { label: "App Downloads", value: "+185%" },
      { label: "Order Frequency", value: "+42%" },
    ],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
    color: "#f39c12",
  },
];

const categories = [
  "All",
  "Branding",
  "Influencer Marketing",
  "Performance",
  "Web Design",
  "UA",
  "SMM",
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "8x", label: "Avg. ROAS" },
  { value: "50+", label: "Team Members" },
  { value: "12+", label: "Industry Awards" },
];

export const CaseStudyPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filteredCases =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeFilter);

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
                Case <span className="text-gradient">Studies</span>
              </motion.h1>
              <motion.p className={styles.hero__subtitle} variants={fadeInUp}>
                Real projects, real results. Explore how we helped brands
                transform their digital presence and achieve measurable growth.
              </motion.p>
              <motion.div className={styles.hero__stats} variants={fadeInUp}>
                {stats.map((stat) => (
                  <div key={stat.label} className={styles.hero__statItem}>
                    <AnimatedCounter value={stat.value} className={styles.hero__statValue} />
                    <span className={styles.hero__statLabel}>{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </Container>
        </section>

        <Section className={styles.cases}>
          <Container>
            <motion.div
              className={styles.cases__filters}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={styles.cases__filterBtn}
                  data-active={activeFilter === cat}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            <motion.div
              className={styles.cases__grid}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <AnimatePresence mode="wait">
                {filteredCases.map((c) => (
                  <motion.div
                    key={c.id}
                    className={styles.caseCard}
                    variants={staggerItem}
                    layout
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    onClick={() => setSelectedCase(c)}
                  >
                    <div className={styles.caseCard__imageWrap}>
                      <motion.img
                        src={c.image}
                        alt={c.client}
                        className={styles.caseCard__image}
                        loading="lazy"
                      />
                      <div className={styles.caseCard__overlay}>
                        <span className={styles.caseCard__view}>
                          View Case Study
                        </span>
                      </div>
                    </div>
                    <div className={styles.caseCard__content}>
                      <div className={styles.caseCard__meta}>
                        <span
                          className={styles.caseCard__category}
                          style={{ color: c.color }}
                        >
                          {c.category}
                        </span>
                        <span className={styles.caseCard__client}>
                          {c.client}
                        </span>
                      </div>
                      <h3 className={styles.caseCard__title}>{c.title}</h3>
                      <div className={styles.caseCard__tags}>
                        {c.tags.map((tag) => (
                          <span key={tag} className={styles.caseCard__tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className={styles.caseCard__results}>
                        {c.results.slice(0, 2).map((r) => (
                          <div
                            key={r.label}
                            className={styles.caseCard__result}
                          >
                            <span className={styles.caseCard__resultValue}>
                              {r.value}
                            </span>
                            <span className={styles.caseCard__resultLabel}>
                              {r.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredCases.length === 0 && (
              <motion.p
                className={styles.cases__empty}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                No case studies found in this category.
              </motion.p>
            )}
          </Container>
        </Section>

        <AnimatePresence>
          {selectedCase && (
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                className={styles.modal__content}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className={styles.modal__close}
                  onClick={() => setSelectedCase(null)}
                  aria-label="Close"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <div className={styles.modal__header}>
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.client}
                    className={styles.modal__image}
                  />
                  <div className={styles.modal__headerOverlay} />
                  <div className={styles.modal__headerContent}>
                    <span
                      className={styles.modal__category}
                      style={{ color: selectedCase.color }}
                    >
                      {selectedCase.category}
                    </span>
                    <h2 className={styles.modal__client}>
                      {selectedCase.client}
                    </h2>
                    <h3 className={styles.modal__title}>
                      {selectedCase.title}
                    </h3>
                  </div>
                </div>

                <div className={styles.modal__body}>
                  <div className={styles.modal__section}>
                    <h4 className={styles.modal__sectionTitle}>
                      The Challenge
                    </h4>
                    <p className={styles.modal__text}>
                      {selectedCase.challenge}
                    </p>
                  </div>

                  <div className={styles.modal__section}>
                    <h4 className={styles.modal__sectionTitle}>The Solution</h4>
                    <p className={styles.modal__text}>
                      {selectedCase.solution}
                    </p>
                  </div>

                  <div className={styles.modal__section}>
                    <h4 className={styles.modal__sectionTitle}>The Results</h4>
                    <div className={styles.modal__results}>
                      {selectedCase.results.map((r) => (
                        <div key={r.label} className={styles.modal__resultCard}>
                          <span className={styles.modal__resultValue}>
                            {r.value}
                          </span>
                          <span className={styles.modal__resultLabel}>
                            {r.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.modal__tags}>
                    {selectedCase.tags.map((tag) => (
                      <span key={tag} className={styles.modal__tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
                Ready to Build Your
                <span className="text-gradient"> Success Story?</span>
              </motion.h2>
              <motion.p className={styles.cta__subtitle} variants={fadeInUp}>
                Let's discuss how we can help you achieve your goals with a
                tailored digital strategy.
              </motion.p>
              <motion.div className={styles.cta__actions} variants={fadeInUp}>
                <Button variant="primary" size="lg" asMotion>
                  Start a Project
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => navigate("/")}
                >
                  Back to Home
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
