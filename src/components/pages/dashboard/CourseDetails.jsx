import { NavLink } from "react-router-dom";
import { useDeleteSection, useGetCourse, useGetSection } from "../../../utils/hooks";
import RoundBlueButton from "../../common/RoundBlueButton";
import ChatSection from "../../Dashboard components/ChatSection";
import SectionSideBar from "../../Dashboard components/SectionSideBar";
import classes from "./CourseDetails.module.css"
import { FaPen, FaUpload, FaTrash, FaPlus } from "react-icons/fa6";
import { useModalUtil } from "../../../utils/utilsHooks";
import ConfirmDeleteModal from "../../common/ConfirmDeleteModal";



export default function CourseDetails(){
  const {isModalOpen, instanceId, openModal, closeModal} = useModalUtil()
  const {data:course} = useGetCourse()
  const {data:section} = useGetSection()
  const {mutate:deleteSection, isPending, isError, error}= useDeleteSection(
    `/dashboard/courses/`, 
    instanceId, closeModal)
  
  
    return <div className={classes.coursePage}>

    <div className={classes.courseMain}>
    
      <div className={classes.courseHeader}>
         <div className={classes.courseInfo}>
          <h2 className={classes.courseTitle}>{course?.title}</h2>
          <span className={classes.currentSection}>Section: <strong>{section?.title}</strong></span>
        </div>
        <div className={classes.courseActions}>
        <RoundBlueButton><FaPen /><NavLink to={`/dashboard/courses/${course?.id}/${section?.id}/update`}> Edit Section </NavLink></RoundBlueButton>
        <RoundBlueButton><FaUpload /><NavLink to={`/dashboard/documents/?courseId=${course?.id}`}> Upload Document</NavLink></RoundBlueButton>
        <RoundBlueButton className={classes.archiveBtn} id={section?.id} onClick={openModal}><FaTrash/> Delete Section</RoundBlueButton>
        <RoundBlueButton><FaPlus /> Create Quiz</RoundBlueButton>
        </div>
      </div>
  
 
       <ChatSection document_id={course?.document}/>
       </div>

  <SectionSideBar course={course}/>
  <ConfirmDeleteModal isOpen={isModalOpen} onClose={closeModal} onConfirm={deleteSection}/>      
 
  </div>
}