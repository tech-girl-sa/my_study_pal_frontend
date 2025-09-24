import { useGetCourse } from "../../../utils/hooks";
import RoundBlueButton from "../../common/RoundBlueButton";
import ChatSection from "../../Dashboard components/ChatSection";
import SectionSideBar from "../../Dashboard components/SectionSideBar";
import classes from "./CourseDetails.module.css"
import { FaPen, FaUpload, FaBoxArchive, FaPlus } from "react-icons/fa6";



export default function CourseDetails(){
  const {data:course, isLoading, error} = useGetCourse()
  
    return <div className={classes.coursePage}>

    <div className={classes.courseMain}>
    
      <div className={classes.courseHeader}>
         <div className={classes.courseInfo}>
          <h2 className={classes.courseTitle}>{course?.title}</h2>
          <span className={classes.currentSection}>Section: <strong>Introduction</strong></span>
        </div>
        <div className={classes.courseActions}>
        <RoundBlueButton><FaPen /> Edit Section</RoundBlueButton>
        <RoundBlueButton><FaUpload /> Upload Document</RoundBlueButton>
        <RoundBlueButton className="archive-btn"><FaBoxArchive /> Archive Section</RoundBlueButton>
        <RoundBlueButton><FaPlus /> Create Quiz</RoundBlueButton>
        </div>
      </div>
  
 
       <ChatSection/>
       </div>

  <SectionSideBar course={course}/>
 
  </div>
}