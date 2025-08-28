
import styles from "./Error404.module.css";
import { FaCompass, FaGauge , FaHouse,  FaLifeRing } from "react-icons/fa6";

export default function Error404() {
  return (
    <>
      <div className={styles.notfoundWrapper}>
        
        <div className={styles.illustration} aria-hidden="true">
          <FaCompass />
        </div>

        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page not found</h2>
        <p className={styles.subtitle}>
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className={styles.actions}>
          <a href="/" className={`${styles.btn} ${styles.primary}`}>
            <FaHouse /> Home
          </a>
          <a href="/dashboard" className={`${styles.btn} ${styles.outline}`}>
            <FaGauge /> Dashboard
          </a>
          <a href="/support" className={`${styles.btn} ${styles.ghost}`}>
            <FaLifeRing /> Support
          </a>
        </div>
      </div>
    </>
  );
}
