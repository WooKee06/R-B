import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './Section.module.scss';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  withReveal?: boolean;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } as const,
    },
};

export const Section = ({ children, className, id, withReveal = true }: SectionProps) => {
  const classNames = [styles.section, className].filter(Boolean).join(' ');

  if (withReveal) {
    return (
      <motion.section
        id={id}
        className={classNames}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <section id={id} className={classNames}>
      {children}
    </section>
  );
};
