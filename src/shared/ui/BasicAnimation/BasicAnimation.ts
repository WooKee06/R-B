export const mobileMenuVariants = {
  closed: { opacity: 0, y: -20 },
  open: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

export const mobileItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 },
};
