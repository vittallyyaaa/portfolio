import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Skills.module.css";

const techs = ["react", "typescript", "javascript", "css", "git", "vite"] as const;

function Skills() {
  const { t } = useTranslation();
  const [activeTech, setActiveTech] = useState<(typeof techs)[number]>("react");

  return (
    <section className={styles.techOrbit} id="skills">
      <div className={styles.header}>
        <p className={styles.label}>{t("tech.label")}</p>

        <h2 className={styles.title}>
          {t("tech.title")} <span>{t("tech.titleAccent")}</span>
        </h2>

        <p className={styles.subtitle}>{t("tech.subtitle")}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.orbitWrapper}>
          <div className={styles.orbit}>
            <div className={styles.core}>
              <span>{t("tech.coreSmall")}</span>
              <strong>{t("tech.coreTitle")}</strong>
            </div>

            {techs.map((tech, index) => (
              <button
                key={tech}
                className={`${styles.planet} ${styles[`planet${index + 1}`]} ${
                  activeTech === tech ? styles.active : ""
                }`}
                onClick={() => setActiveTech(tech)}
              >
                {t(`tech.items.${tech}.name`)}
              </button>
            ))}
          </div>
        </div>

        <article className={styles.infoCard}>
          <div className={styles.cardTop}>
            <p>{t("tech.selected")}</p>
            <span>{t(`tech.items.${activeTech}.level`)}</span>
          </div>

          <h3>{t(`tech.items.${activeTech}.name`)}</h3>

          <p className={styles.description}>
            {t(`tech.items.${activeTech}.description`)}
          </p>

          <div className={styles.tags}>
            {(
              t(`tech.items.${activeTech}.tags`, {
                returnObjects: true,
              }) as string[]
            ).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span />
              <span />
              <span />
              <p>{t("tech.terminal")}</p>
            </div>

            <pre>
              <code>{t(`tech.items.${activeTech}.code`)}</code>
            </pre>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Skills;