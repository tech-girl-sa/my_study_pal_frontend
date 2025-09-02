import logo from "../../assets/logo.png";
import classes from './HomeNavBar.module.css';
import { NavLink } from "react-router-dom";

export default function HomeNavBar(){
    return <nav className={classes.navbar}>
    <div className={classes.logo}> <img src={logo} alt="Study Pal logo"/></div>
    <ul className={classes.navLinks}>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><a href="#">Features</a></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">Signup</NavLink></li>
    </ul>
    </nav>
}