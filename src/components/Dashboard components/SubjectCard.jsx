
import classes from './SubjectCard.module.css';
import { FaFileAlt, FaPencilAlt } from "react-icons/fa";


export default function SubjectCard({subject}){
    
    return (
      
        <div className={classes.contentCard}>
          <div className={classes.cardHeader}>
            <div className={classes.subjectTitle}>{subject.title}</div>
            <div className={classes.courseCount}>{subject.courses_count} Courses</div>
          </div>
          <div className={classes.cardBody}>
            <p>{subject.description}</p>
          </div>
          <div className={classes.cardFooter}>
            <div className={classes.linkGroup}>
              <a href="#" className={classes.documents}>
                <FaFileAlt /> {subject.documents_count} Documents
              </a>
              <a href="#" className={classes.quizzes}>
                <FaPencilAlt /> {subject.quizzes_count} Quizzes
              </a>
            </div>
            <a href="#">View All Courses</a>
          </div>
        </div>
    );
}