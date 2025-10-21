import { NavLink } from 'react-router-dom';
import classes from './SubjectDetailsCard.module.css'
import { FaArrowRight } from "react-icons/fa"; 

export default function SubjectDetailsCard({subject}){

   return <div className={classes.subjectCard}>
   <div className={classes.subjectInfo}>
     <h3 className={classes.subjectName}>{subject.title}</h3>
     <p className={classes.subjectDescription}>{subject.description}</p>
     <div className={classes.subjectMeta}>
       <span><strong>{subject.courses_count}</strong> Courses</span>
       <span><strong>{subject.documents_count}</strong> Documents</span>
     </div>
     <div className={classes.subjectTags}>
       {subject.tags.map(tag => <span className={classes.tag}>{tag}</span>)}
       
     </div>
   </div>
    <NavLink to={`/dashboard/subjects/${subject.id}`} className={classes.subjectAction}>View Details <FaArrowRight className={classes.icon}/></NavLink>
 </div>
}