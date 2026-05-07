import { motion } from 'framer-motion';
import { Container } from '../../shared/ui/Container';
import { Section } from '../../shared/ui/Section';
import { staggerContainer, staggerItem } from '../../shared/lib';
import styles from './Testimonials.module.scss';

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
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'TechVision Inc.',
    content: 'Working with Nexus transformed our digital presence. Their strategic approach and attention to detail exceeded our expectations.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'CTO',
    company: 'StartupFlow',
    content: 'The team delivered a complex platform ahead of schedule. Their technical expertise and design sensibility are unmatched.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    company: 'BrandCo',
    content: 'Our engagement rates increased by 150% after the rebrand. Nexus truly understands modern digital experiences.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

export const Testimonials = () => {
  return (
    <Section id="testimonials" className={styles.testimonials}>
      <Container>
        <motion.div
          className={styles.testimonials__header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge">Testimonials</span>
          <h2 className={styles.testimonials__title}>
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <motion.div
          className={styles.testimonials__grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className={styles.testimonialCard}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className={styles.testimonialCard__content}>
                <svg className={styles.testimonialCard__quote} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p>{testimonial.content}</p>
              </div>
              <div className={styles.testimonialCard__author}>
                <img src={testimonial.avatar} alt={testimonial.name} loading="lazy" />
                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}, {testimonial.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};
