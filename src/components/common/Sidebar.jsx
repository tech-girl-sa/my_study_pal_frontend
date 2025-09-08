import classes from './Sidebar.module.css';
import { FaHome, FaBook, FaCopy, FaFolderOpen, FaPenNib, FaCog } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function Sidebar(){

    return  <aside className={classes.sidebar}>
    <nav className={classes.nav}>
      <NavLink to="/dashboard" class="nav-link active"><FaHome/> Home</NavLink>
      <NavLink to="/dashboard/subjects"><FaBook/> Subjects</NavLink>
      <NavLink to="/dashboard/courses"><FaCopy/> Courses</NavLink>
      <NavLink to="/dashboard/documents"><FaFolderOpen/> Documents</NavLink>
      <a href="/main/quizzes"><FaPenNib/> Quizzes</a>
      <a href="#"><FaCog/>Settings</a>
    </nav>
    <div className={classes.sidebarFooter}>© 2025 Study Pal</div>
  </aside>
}