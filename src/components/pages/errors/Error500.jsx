
import styles from "./Error500.module.css";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Error500(){

    return (
            <div className={styles.errorContainer}>
                <FaExclamationTriangle className={styles.errorIcon} />
                <h1 className={styles.errorCode}>500</h1>
                <h2 className={styles.errorHeader}>Internal Server Error</h2>
                <p className={styles.errorText}>
                  Oops! Something went wrong on our end. Please try again later.
                </p>
                <a href="/" className={styles.errorButton}>
                  Back to Home
                </a>
            </div>
          );
}