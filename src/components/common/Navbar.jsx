import classes from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { FaBell, FaUserCircle } from "react-icons/fa";
import { useState } from 'react';
import {  FaRightFromBracket, FaUser } from "react-icons/fa6";
import { useSubmit, useNavigate } from 'react-router-dom';



export default function Navbar(){
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const submit = useSubmit();

  const handleProfile = () => {
    setOpen(false);
    navigate("/dashboard/userProfile");
  };

  const handleLogout = () => {
    setOpen(false);
    submit(null, { method: "post", action: "/logout" });
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
          <button className={classes.dropdownItem}
          onClick={handleProfile}>
            <FaUser /> Profile
          </button>
          <button className={classes.dropdownItem}
          onClick={handleLogout}>
            <FaRightFromBracket />Logout
          </button>
        </div>
      )}
  </>
}