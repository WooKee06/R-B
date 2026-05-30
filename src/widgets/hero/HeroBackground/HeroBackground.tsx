import BgHero from "../../../../public/home/HeroBackground/HeroBackground.png";
import styles from "./HeroBackground.module.scss";

export const HeroBackground = () => {
  return (
    <div
      className={styles.background}
      style={{ backgroundImage: `url(${BgHero})` }}
    />
  );
};
