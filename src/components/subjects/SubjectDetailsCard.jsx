import classes from './SubjectDetailsCard.module.css'
import { FaArrowRight } from "react-icons/fa"; 

export default function SubjectDetailsCard({subject}){
   return <div className={classes.subjectCard}>
   <div className={classes.subjectInfo}>
     <h3 className={classes.subjectName}>{subject.name}</h3>
     <p className={classes.subjectDescription}>{subject.description}</p>
     <div className={classes.subjectMeta}>
       <span><strong>{subject.courses}</strong> Courses</span>
       <span><strong>{subject.documents}</strong> Documents</span>
       <span><strong>{subject.quizzes}</strong> Quizzes</span>
     </div>
     <div className={classes.subjectTags}>
       {subject.tags.map(tag => <span className={classes.tag}>{tag}</span>)}
       
     </div>
   </div>
    <a href={subject.link} className={classes.subjectAction}>View Details <FaArrowRight className={classes.icon}/></a>
 </div>
}