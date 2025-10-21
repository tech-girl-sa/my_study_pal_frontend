import classes from './Sidebar.module.css';
import { FaHome, FaBook, FaCopy, FaFolderOpen, FaPenNib, FaCog } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function Sidebar(){
  const assignClass = ({ isActive }) => isActive ? `${classes.active} ` : ''

    return  <aside className={classes.sidebar}>
    <nav className={classes.nav}>
      <NavLink to="/dashboard" end className={assignClass}><FaHome/> Home</NavLink>
      <NavLink to="/dashboard/subjects" className={assignClass}><FaBook/> Subjects</NavLink>
      <NavLink to="/dashboard/courses" className={assignClass}><FaCopy/> Courses</NavLink>
      <NavLink to="/dashboard/documents" className={assignClass}><FaFolderOpen/> Documents</NavLink>
      <a href="/dashboard/quizzes" className={assignClass}><FaPenNib/> Quizzes</a>
      <a href="#" className={assignClass}><FaCog/>Settings</a>
    </nav>
    <div className={classes.sidebarFooter}>© 2025 Study Pal</div>
  </aside>
}