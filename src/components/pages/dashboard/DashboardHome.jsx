import classes from './DashboardHome.module.css'
import ChatWidgetSection from "../../Dashboard components/ChatWidgetSection";
import SubjectCard from "../../Dashboard components/SubjectCard";
import Section from "../../common/Section";
import Table from '../../common/Table';
import { useGetCourses, useGetSubjects } from '../../../utils/hooks';
import { NavLink } from 'react-router-dom';
import EmptyState from '../../common/EmptyState';



export default function DashboardHome(){
   const {data:subjects, isLoading, error} = useGetSubjects()
   const {data:courses}= useGetCourses()
  
    return <>
    
    <ChatWidgetSection/>
    <Section title="Recent Subjects" icon="book" url="/dashboard/subjects">
  <div className={classes.cardContainer}>
    {subjects?.map(subject=><SubjectCard subject={subject} key={subject.id}/>)}
    </div>
     {subjects?.length === 0 && <EmptyState path='/dashboard/subjects/create' label="Add Subject"
          icon="📚"  message="No subjects yet!"
          subtext="Start by adding your first subject to organize your learning journey. "/>}
  </Section >
  
  <Section title="Recent Courses" icon="copy"  url="/dashboard/courses" >
 
 <Table headers={["Course Title", "Subject", "View Course"]}>
        {courses?.map(course=> (<tr id={course.id}>
          <td  className={classes.courseTitle}><a href="#">{course.title}</a></td>
          <td>{course.subject_title}</td>
          <td><NavLink to={`/dashboard/courses/${course.id}/${course.first_section_id}`} class="view-course-link">View Course</NavLink></td>
        </tr>))}
   </Table>
   {courses?.length === 0 && <EmptyState
       icon="🎓"  message="You haven’t added any courses yet."
       subtext="Start building your learning path by creating your first course."/>}
  </Section>
  </>
}