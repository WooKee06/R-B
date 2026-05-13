import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./VideoPromo.module.scss";
import MainVideo from "../../../public/Video/Info.mp4";

const springAnimation = {
  initial: { opacity: 0, y: 80, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 14,
      mass: 0.6,
    } as const,
  },
  exit: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    transition: { duration: 0.3, ease: "easeInOut" as const } as const,
  },
};

export const VideoPromo = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleClose = () => {
    setDismissed(true);
    setVisible(false);
    videoRef.current?.pause();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className={styles.wrapper} {...springAnimation}>
          <button
            className={styles.close}
            onClick={handleClose}
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className={styles.videoContainer}>
            <video
              ref={videoRef}
              className={styles.video}
              src={MainVideo}
              muted
              loop
              playsInline
              controls
            />
          </div>

          <p className={styles.description}>
            {t(
              "videoPromo.description",
              "We create digital products that make a difference.",
            )}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
