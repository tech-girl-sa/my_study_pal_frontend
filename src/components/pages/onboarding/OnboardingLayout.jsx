import { Outlet,NavLink } from "react-router-dom";
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
              <NavLink  className={({ isActive }) =>
     isActive ? `${classes.step} ${classes.stepActive}` : classes.step
  } to="step1">1</NavLink>
            <div className={classes.bar}></div>
            <NavLink  className={({ isActive }) =>
     isActive ? `${classes.step} ${classes.stepActive}` : classes.step
  } to="step2">2</NavLink>
            <div className={classes.bar}></div>
            <NavLink  className={({ isActive }) =>
     isActive ? `${classes.step} ${classes.stepActive}` : classes.step
  } to="step3">3</NavLink>
            <div className={classes.bar}></div>
            <NavLink  className={({ isActive }) =>
     isActive ? `${classes.step} ${classes.stepActive}` : classes.step
  } to="step4">4</NavLink>
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
  