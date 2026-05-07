import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.badge}>{t("hero.badge")}</p>

          <h1 className={styles.title}>
            {t("hero.title")} <span>{t("hero.accent")}</span>
          </h1>

          <p className={styles.description}>{t("hero.description")}</p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryButton}>
              {t("hero.projects")}
            </a>

            <a href="#contact" className={styles.secondaryButton}>
              {t("hero.contact")}
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span />
            <span />
            <span />
          </div>

          <pre>
            <code>{`const developer = {
  name: "Vitalii",
  role: "Frontend Developer",
  stack: ["React", "TypeScript", "CSS"],
};`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export default Hero;
