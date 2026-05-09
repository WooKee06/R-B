import s from './LiquidGlass.module.scss';
import { motion } from 'framer-motion';

interface LiquidGlassProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  animate?: any;
  initial?: any;
  transition?: any;
  whileHover?: any;
}

const LiquidGlass = ({
  children,
  style,
  className = "",
  animate,
  initial,
  transition,
  whileHover,
}: LiquidGlassProps) => {
  return (
    <>
      <motion.div
        initial={initial}
        transition={transition}
        animate={animate}
        whileHover={whileHover}
        style={style}
        className={`${s.glassContainer} ${className}`}
      >
        {children}
      </motion.div>

      <svg style={{ display: 'none' }}>
        <filter id="container-glass" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006 0.006"
            numOctaves="2"
            seed="92"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="30" result="blur" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blur"
            scale="100"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </>
  );
};

export default LiquidGlass;
