import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Container } from "../../shared/ui/Container";
import { Section } from "../../shared/ui/Section";
import styles from "./Testimonials.module.scss";
import LiquidGlass from "@/shared/ui/LiquidGlass/LiquidGlass";
import AUBg from "../../../public/AboutUS/Aboutus.png";

import "swiper/css";
import "swiper/css/navigation";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO",
    company: "TechVision Inc.",
    content:
      "Working with Nexus transformed our digital presence. Their strategic approach and attention to detail exceeded our expectations.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "CTO",
    company: "StartupFlow",
    content:
      "The team delivered a complex platform ahead of schedule. Their technical expertise and design sensibility are unmatched.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "BrandCo",
    content:
      "Our engagement rates increased by 150% after the rebrand. Nexus truly understands modern digital experiences.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "BrandCo",
    content:
      "Our engagement rates increased by 150% after the rebrand. Nexus truly understands modern digital experiences.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const sliderSlides: Testimonial[] = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export const Testimonials = () => {
  const { t } = useTranslation();
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <Section id="testimonials" className={styles.testimonials}>
      <Container>
        <motion.div
          className={styles.testimonials__header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <h2 className={styles.testimonials__title}>{t("testimonials.title")}</h2>
          <p className={styles.articles__subtitle}>
            {t("testimonials.subtitle")}
          </p>
        </motion.div>
        <img src={AUBg} alt="" className={styles.aboutUsBg} width={350} />

        <div className={styles.sliderWrapper}>
          <button
            ref={setPrevEl}
            className={styles.swiperBtn}
            aria-label="Previous"
          >
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_9093_25)">
                <path
                  d="M7.5 14L1.58005 8.08005C0.73716 7.23716 0.81406 5.84875 1.74487 5.1041L7.5 0.5"
                  stroke="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_9093_25">
                  <rect width="8" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl, nextEl }}
            slidesPerView={1}
            spaceBetween={28}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {sliderSlides.map((testimonial, index) => (
              <SwiperSlide key={`${testimonial.id}-${index}`}>
                <LiquidGlass
                  style={{ padding: "35px" }}
                  className={styles.testimonialGlass}
                >
                  <div className={styles.testimonialCard}>
                    <div className={styles.testimonialCard__author}>
                      <section>
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          loading="lazy"
                        />
                        <div>
                          <h4>{testimonial.name}</h4>
                          <span>
                            {testimonial.role}, {testimonial.company}
                          </span>
                        </div>
                      </section>
                      <svg
                        width="44"
                        height="33"
                        viewBox="0 0 44 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.0579 22.7326C19.0579 27.772 15.5877 31.5898 10.307 31.5898C5.02632 31.5898 0.5 27.3139 0.5 19.6785C0.5 10.2105 7.59123 2.11687 16.7947 0.589783V6.24003C11.514 7.30899 7.59123 11.1267 7.59123 15.5553C8.49649 14.9445 9.70351 14.4863 11.6649 14.4863C15.5877 14.4863 19.0579 17.3878 19.0579 22.7326ZM43.5 22.7326C43.5 27.772 39.8789 31.5898 34.5982 31.5898C29.4684 31.5898 24.7912 27.3139 24.7912 19.6785C24.7912 10.2105 31.8825 2.11687 41.2368 0.589783V6.24003C35.9561 7.30899 32.0333 11.1267 32.0333 15.4026C32.9386 14.7918 34.2965 14.4863 36.107 14.4863C40.0298 14.4863 43.5 17.3878 43.5 22.7326Z"
                          fill="white"
                          fillOpacity="0.2"
                          stroke="url(#paint0_linear_9082_102)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_9082_102"
                            x1="0.500001"
                            y1="1.08978"
                            x2="47"
                            y2="32.0898"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="0.294339"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className={styles.testimonialCard__content}>
                      <p>{testimonial.content}</p>
                    </div>
                  </div>
                </LiquidGlass>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={setNextEl}
            className={`${styles.swiperBtn} ${styles.swiperBtnNext}`}
            aria-label="Next"
          >
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_9093_25)">
                <path
                  d="M0.5 14L6.41995 8.08005C7.26284 7.23716 7.18594 5.84875 6.25513 5.1041L0.5 0.5"
                  stroke="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_9093_25">
                  <rect width="8" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </Container>
    </Section>
  );
};
