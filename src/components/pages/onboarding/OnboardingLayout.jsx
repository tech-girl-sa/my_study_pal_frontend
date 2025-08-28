import { Outlet } from "react-router-dom";
import classes from './OnboardingLayout.module.css';
import { useEffect } from "react";
import robotHeadLeft from "../../../assets/robot_head_left.png";

export default function OnboardingLayout() {
    useEffect(() => {
      document.body.classList.add(classes.onboardingPage);
  
      return () => {
        document.body.classList.remove(classes.onboardingPage);
      };
    }, []);
  
    return (
      <>
        <div className={classes.progressWrapper}>
          <div className={classes.progressBar}>
            <div className={`${classes.step} ${classes.stepActive}`}>1</div>
            <div className={classes.bar}></div>
            <div className={classes.step}>2</div>
            <div className={classes.bar}></div>
            <div className={classes.step}>3</div>
            <div className={classes.bar}></div>
            <div className={classes.step}>4</div>
          </div>
        </div>
  
        <div className={classes.formArea}>
          <img
            className={classes.robotHead}
            src={robotHeadLeft}
            alt="Smart Robot"
          />
          <Outlet />
        </div>
      </>
    );
  }
  