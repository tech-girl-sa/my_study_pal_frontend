import logo from "../../assets/logo.png";
import classes from './HomeNavBar.module.css'

export default function HomeNavBar(){
    return <nav className={classes.navbar}>
    <div className={classes.logo}> <img src={logo} alt="Study Pal logo"/></div>
    <ul className={classes.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="signup">Sign Up</a></li>
    </ul>
    </nav>
}