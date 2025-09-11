import Pagination from "../common/Pagination";
import classes from "./SectionSideBar.module.css";
import { FaTrash, FaPen } from "react-icons/fa";


export default function SectionSideBar(){
    return <aside className={classes.rightSidebar}>
    <div className={classes.sidebarHeader}>
      <div>
      <h4>Current Course:</h4>
      <h3 className={classes.title}>  Calculus Basics</h3>
      </div>
      <button ><FaPen/> Edit Course</button>
      <button class="archiveBtn" ><FaTrash/> Archive Course</button>
    </div>
    <ul className={classes.tocList}>
      <li><a href="#section1">Introduction</a></li>
      <li><a href="#section2">Derivatives</a></li>
      <li><a href="#section3">Integrals</a></li>
      <li><a href="#section4">Limits</a></li>
      <li><a href="#section5">Applications</a></li>
    </ul>
  
    <div className={classes.sidebarSeparator}></div>
  
   <Pagination className={classes.sidebarPagination} pagesNbr={2}/>
  </aside>
}