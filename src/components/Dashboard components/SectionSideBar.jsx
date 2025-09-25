import { NavLink } from "react-router-dom";
import { useGetSections } from "../../utils/hooks";
import Pagination from "../common/Pagination";
import classes from "./SectionSideBar.module.css";
import { FaTrash, FaPen } from "react-icons/fa";


export default function SectionSideBar({course}){

    const {data:sections, isLoading, error} = useGetSections()

    return <aside className={classes.rightSidebar}>
    <div className={classes.sidebarHeader}>
      <div>
      <h4>Current Course:</h4>
      <h3 className={classes.title}>  {course?.title}</h3>
      </div>
      <button ><FaPen/> Edit Course</button>
      <button class="archiveBtn" ><FaTrash/> Archive Course</button>
    </div>
    <ul className={classes.tocList}>
      {sections?.map(section=><li><NavLink to={`/dashboard/courses/${section.course}/${section.id}`}>{section.title}</NavLink></li>)}

    </ul>
  
    <div className={classes.sidebarSeparator}></div>
  
   <Pagination className={classes.sidebarPagination} pagesNbr={2}/>
  </aside>
}