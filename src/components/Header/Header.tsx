import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

import styles from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";

    document.documentElement.setAttribute("data-theme", savedTheme);
    setIsDark(savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);

    setIsDark(nextTheme === "dark");
  };

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === "en" ? "ua" : "en";

    i18n.changeLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          VM
        </a>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>
            {t("nav.about")}
          </a>

          <a href="#projects" onClick={() => setIsOpen(false)}>
            {t("nav.projects")}
          </a>

          <a href="#contact" onClick={() => setIsOpen(false)}>
            {t("nav.contact")}
          </a>
          <div className={styles.mobileActions}>
            <button
              className={`button-transparent ${styles.langButton}`}
              onClick={toggleLanguage}
            >
              {t("header.language")}
            </button>

            <button
              className={`button-transparent ${styles.themeButton}`}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </nav>

        <div className={styles.actions}>
          <button
            className={`button-transparent ${styles.langButton}`}
            onClick={toggleLanguage}
          >
            {t("header.language")}
          </button>

          <button
            className={`button-transparent ${styles.themeButton}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        <button
          className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
