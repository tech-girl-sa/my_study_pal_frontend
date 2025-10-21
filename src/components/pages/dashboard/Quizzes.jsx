import React from "react";
import classes from "./Quizzes.module.css";

export default function Quizzes() {
  return (
    <div className={classes.comingSoonContainer}>
      <div className={classes.comingSoonCard}>
        <h1 className={classes.comingSoonTitle}>🚀 Coming Soon!</h1>
        <p className={classes.comingSoonSubtitle}>
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div className={classes.comingSoonEmoji}>✨💡📚</div>
      </div>
    </div>
  );
}