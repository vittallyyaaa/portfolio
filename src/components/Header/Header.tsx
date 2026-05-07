import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          VM
        </a>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </nav>

        <div className={styles.actions}>
          <button className={`button-transparent ${styles.langButton}`}>
            EN
          </button>
          <button className={`button-transparent ${styles.themeButton}`}>
            Theme
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
