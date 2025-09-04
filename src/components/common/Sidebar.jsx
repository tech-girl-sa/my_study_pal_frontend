import classes from './Sidebar.module.css';
import { FaHome, FaBook, FaCopy, FaFolderOpen, FaPenNib, FaCog } from "react-icons/fa";

export default function Sidebar(){

    return  <aside className={classes.sidebar}>
    <nav className={classes.nav}>
      <a href="/main/dashboard" class="nav-link active"><FaHome/> Home</a>
      <a href="/main/subjects"><FaBook/> Subjects</a>
      <a href="/main/courses"><FaCopy/> Courses</a>
      <a href="/main/documents"><FaFolderOpen/> Documents</a>
      <a href="/main/quizzes"><FaPenNib/> Quizzes</a>
      <a href="#"><FaCog/>Settings</a>
    </nav>
    <div className={classes.sidebarFooter}>© 2025 Study Pal</div>
  </aside>
}