import BgHero from "/Hero/bg-hero.png";
import styles from "./HeroBackground.module.scss";

export const HeroBackground = () => {
  return (
    <div
      className={styles.background}
      style={{ backgroundImage: `url(${BgHero})` }}
    />
  );
};
