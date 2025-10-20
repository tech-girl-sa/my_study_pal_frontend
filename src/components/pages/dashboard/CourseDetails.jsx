import { NavLink } from "react-router-dom";
import { useGetCourse, useGetSection } from "../../../utils/hooks";
import RoundBlueButton from "../../common/RoundBlueButton";
import ChatSection from "../../Dashboard components/ChatSection";
import SectionSideBar from "../../Dashboard components/SectionSideBar";
import classes from "./CourseDetails.module.css"
import { FaPen, FaUpload, FaBoxArchive, FaPlus } from "react-icons/fa6";



export default function CourseDetails(){
  const {data:course} = useGetCourse()
  const {data:section} = useGetSection()
  
    return <div className={classes.coursePage}>

    <div className={classes.courseMain}>
    
      <div className={classes.courseHeader}>
         <div className={classes.courseInfo}>
          <h2 className={classes.courseTitle}>{course?.title}</h2>
          <span className={classes.currentSection}>Section: <strong>{section?.title}</strong></span>
        </div>
        <div className={classes.courseActions}>
        <RoundBlueButton><FaPen /><NavLink to={`/dashboard/courses/${course?.id}/${section?.id}/update`}> Edit Section </NavLink></RoundBlueButton>
        <RoundBlueButton><FaUpload /> Upload Document</RoundBlueButton>
        <RoundBlueButton className={classes.archiveBtn}><FaBoxArchive /> Archive Section</RoundBlueButton>
        <RoundBlueButton><FaPlus /> Create Quiz</RoundBlueButton>
        </div>
      </div>
  
 
       <ChatSection document_id={course?.document}/>
       </div>

  <SectionSideBar course={course}/>
 
  </div>
}