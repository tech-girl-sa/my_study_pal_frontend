import { NavLink } from "react-router-dom";
import { useDeleteCourse,  useGetSections } from "../../utils/hooks";
import Pagination from "../common/Pagination";
import classes from "./SectionSideBar.module.css";
import { FaTrash, FaPen, FaPlus} from "react-icons/fa";
import ConfirmDeleteModal from "../common/ConfirmDeleteModal";
import { useModalUtil } from "../../utils/utilsHooks";


export default function SectionSideBar({course}){
    const {isModalOpen, instanceId, openModal, closeModal} = useModalUtil()
    const {data:sections, isLoading, error} = useGetSections()
    const {mutate:deleteCourse, isPending, isError}= useDeleteCourse('/dashboard/courses', instanceId, closeModal)
    
    
    return <aside className={classes.rightSidebar}>
    <div className={classes.sidebarHeader}>
      <div>
      <h4>Current Course:</h4>
      <h3 className={classes.title}>  {course?.title}</h3>
      </div>
      <button className={classes.rightSidebarButton}><FaPlus/> <NavLink to={`/dashboard/courses/${course?.id}/create_section`}>Create Section </NavLink></button>
      <button className={classes.rightSidebarButton}><FaPen/><NavLink to={`/dashboard/courses/${course?.id}/update`}> Edit Course</NavLink></button>
      <button className={`${classes.archiveBtn} ${classes.rightSidebarButton}`} onClick={openModal} id={course?.id}><FaTrash/> Delete Course</button>
    </div>
    <ul className={classes.tocList}>
      {sections?.map(section=><li><NavLink to={`/dashboard/courses/${section.course}/${section.id}`}>{section.title}</NavLink></li>)}

    </ul>
  
    <div className={classes.sidebarSeparator}></div>
  
   <Pagination className={classes.sidebarPagination} pagesNbr={2}/>
   <ConfirmDeleteModal isOpen={isModalOpen} onClose={closeModal}  onConfirm={deleteCourse}/>  
  </aside>
}