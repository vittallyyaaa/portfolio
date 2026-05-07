import styles from "./Background.module.css";

function Background() {
  return (
    <div className={styles.background}>
      <span className={`${styles.shape} ${styles.circle} ${styles.circle1}`} />
      <span className={`${styles.shape} ${styles.circle} ${styles.circle2}`} />
      <span className={`${styles.shape} ${styles.circle} ${styles.circle3}`} />

      <span className={`${styles.shape} ${styles.cross} ${styles.cross1}`} />
      <span className={`${styles.shape} ${styles.cross} ${styles.cross2}`} />
      <span className={`${styles.shape} ${styles.cross} ${styles.cross3}`} />
      <span className={`${styles.shape} ${styles.cross} ${styles.cross4}`} />

      <span className={`${styles.shape} ${styles.ring} ${styles.ring1}`} />
      <span className={`${styles.shape} ${styles.ring} ${styles.ring2}`} />

      <span className={`${styles.shape} ${styles.dot} ${styles.dot1}`} />
      <span className={`${styles.shape} ${styles.dot} ${styles.dot2}`} />
      <span className={`${styles.shape} ${styles.dot} ${styles.dot3}`} />
      <span className={`${styles.shape} ${styles.dot} ${styles.dot4}`} />
    </div>
  );
}

export default Background;