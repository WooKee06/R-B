import { motion } from 'framer-motion';
import { Container } from '../../shared/ui/Container';
import { Section } from '../../shared/ui/Section';
import { staggerContainer, staggerItem, cardHover } from '../../shared/lib';
import styles from './Services.module.scss';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: '✦',
    title: 'Brand Strategy',
    description: 'We craft compelling brand narratives that resonate with your audience and drive meaningful engagement.',
  },
  {
    icon: '◈',
    title: 'UI/UX Design',
    description: 'Premium interfaces that blend aesthetics with functionality for exceptional user experiences.',
  },
  {
    icon: '◆',
    title: 'Web Development',
    description: 'Scalable, performant applications built with cutting-edge technologies and best practices.',
  },
  {
    icon: '◇',
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that amplify your reach and convert audiences into loyal customers.',
  },
  {
    icon: '○',
    title: 'Motion Design',
    description: 'Captivating animations and transitions that bring your digital products to life.',
  },
  {
    icon: '□',
    title: 'Consulting',
    description: 'Strategic guidance to navigate the digital landscape and accelerate your growth trajectory.',
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
          <span className="section-badge">Our Services</span>
          <h2 className={styles.services__title}>
            What We <span className="text-gradient">Do Best</span>
          </h2>
          <p className={styles.services__subtitle}>
            We combine strategy, design, and technology to create digital experiences that stand out.
          </p>
        </motion.div>

        <motion.div
          className={styles.services__grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
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
              <motion.div className={styles.serviceCard__inner} variants={cardHover} whileHover="hover">
                <span className={styles.serviceCard__icon}>{service.icon}</span>
                <h3 className={styles.serviceCard__title}>{service.title}</h3>
                <p className={styles.serviceCard__description}>{service.description}</p>
                <span className={styles.serviceCard__arrow}>→</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};
