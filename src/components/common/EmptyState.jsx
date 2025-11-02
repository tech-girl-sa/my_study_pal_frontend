import classes from "./EmptyState.module.css";
import { NavLink } from "react-router-dom";
import RoundBlueButton from "./RoundBlueButton";
import { FaPlus } from "react-icons/fa6";

export default function EmptyState({ 
  icon = "📘", 
  message, 
  subtext, 
  label, 
  path 
}) {
  return (
    <div className={classes.emptyState}>
      <div className={classes.icon}>{icon}</div>
      <p className={classes.message}>{message}</p>
      {subtext && <p className={classes.subtext}>{subtext}</p>}
      {label && path && (
        <RoundBlueButton >
            <FaPlus />
            <NavLink to={path}>
          {label}
          </NavLink>
        </RoundBlueButton>
      )}
    </div>
  );
}
