import classes from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Navbar(){

    return <div className={classes.navbar}>
    <div className={classes.logo}> <img src={logo} alt="Study Pal logo"/></div>
    <div className={classes.navbarIcons}>
      <FaBell className={classes.icon}/>
      <FaUserCircle className={classes.icon}/>
    </div>
  </div>
}