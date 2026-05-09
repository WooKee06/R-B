import { type ButtonHTMLAttributes, forwardRef } from "react";
import { motion, type MotionProps } from "framer-motion";
import styles from "./Button.module.scss";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "glass"
  | "border";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  asMotion?: boolean;
  fullWidth?: boolean;
}

const ButtonInner = (
  {
    variant = "primary",
    size = "md",
    children,
    className,
    asMotion,
    fullWidth,
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) => {
  const classNames = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    fullWidth && styles["button--fullWidth"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (asMotion) {
    return (
      <motion.button
        ref={ref}
        className={classNames}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...(props as MotionProps)}
      >
        <span className={styles.button__content}>{children}</span>
        <span className={styles.button__glow} />
      </motion.button>
    );
  }

  return (
    <button ref={ref} className={classNames} {...props}>
      <span className={styles.button__content}>{children}</span>
      <span className={styles.button__glow} />
    </button>
  );
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(ButtonInner);
