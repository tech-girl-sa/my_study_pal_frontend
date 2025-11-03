import classes from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { FaBell, FaUserCircle } from "react-icons/fa";
import { useState } from 'react';
import {  FaRightFromBracket, FaUser } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';



export default function Navbar(){
  const [open, setOpen] = useState(false);

  const handleProfile = () => {
    setOpen(false);
    navigate("/dashboard/profile");
  };

  const handleLogout = () => {
    setOpen(false);
    navigate("/logout");
  };

    return <>
    <div className={classes.navbar}>
    <div className={classes.logo}> <img src={logo} alt="Study Pal logo"/></div>
    <div className={classes.navbarIcons}>
      <FaBell className={classes.icon}/>
      <FaUserCircle className={classes.icon}
      onClick={() => setOpen(!open)} 
      style={{ cursor: "pointer" }}/>
    </div>
  </div>
  {open && (
        <div className={classes.userDropdown}>
          <button className={classes.dropdownItem}>
            <FaUser /> Profile
          </button>
          <button className={classes.dropdownItem}>
            <FaRightFromBracket /><NavLink to="/logout/">Logout</NavLink> 
          </button>
        </div>
      )}
  </>
}