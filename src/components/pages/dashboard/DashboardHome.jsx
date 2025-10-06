import classes from './DashboardHome.module.css'
import ChatWidgetSection from "../../Dashboard components/ChatWidgetSection";
import SubjectCard from "../../Dashboard components/SubjectCard";
import Section from "../../common/Section";
import Table from '../../common/Table';
import { useGetCourses, useGetSubjects } from '../../../utils/hooks';
import { NavLink } from 'react-router-dom';



export default function DashboardHome(){
   const {data:subjects, isLoading, error} = useGetSubjects()
   const {data:courses}= useGetCourses()
    return <>
    
    <ChatWidgetSection/>
    <Section title="Recent Subjects" icon="book">
  <div className={classes.cardContainer}>
    {subjects?.map(subject=><SubjectCard subject={subject} key={subject.id}/>)}
    </div>
  </Section >
  
  <Section title="Recent Courses" icon="copy" >
 
 <Table headers={["Course Title", "Subject", "View Course"]}>
        {courses?.map(course=> (<tr id={course.id}>
          <td  className={classes.courseTitle}><a href="#">{course.title}</a></td>
          <td>{course.subject}</td>
          <td><NavLink to={`/dashboard/courses/${course.id}/${course.first_section_id}`} class="view-course-link">View Course</NavLink></td>
        </tr>))}
   </Table>
  </Section>
  </>
}