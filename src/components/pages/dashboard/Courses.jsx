import Table from "../../common/Table"
import classes from "./Courses.module.css"
import Filters from "../../common/filters.jsx";
import PageHeader from "../../common/PageHeader";
import Pagination from "../../common/Pagination.jsx";
import { useGetCourses } from "../../../utils/hooks.js";
import { NavLink } from "react-router-dom";




  const tags = [
    { id: 1, label: "STEM" },
    { id: 2, label: "Humanities" },
    { id: 3, label: "Languages" },
    { id: 4, label: "Popular" },
    { id: 5, label: "New" },
  ];

  
export default function Courses(){
const filterChoices=[[{key:"",label:"All Subjects"},{key:"math",label:"Math"},{key:"science",label:"Science"}]]
const {data:courses}= useGetCourses()
    return <>
    <div className={classes.Page}>
    <PageHeader title="All Courses" subtitle="Explore all the courses in your study space."/>
   <Filters tags={tags} placeholder="Search courses..." 
   filterChoices={filterChoices} buttonText="Create New Course" />
   </div>
    <Table headers={["Course Title", "Subject", "Documents", "Created at" ,"View Course"]}>
          {courses?.map(course=> (<tr id={course.id}>
            <td  className={classes.courseTitle}><NavLink
              to={`/dashboard/courses/${course.id}/${course.first_section_id}`} >
                {course.title}</NavLink></td>
            <td>{course.subject}</td>
            <td>{course.document_title}</td>
            <td>{new Date(course.created_at).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
})}</td>
            <td><NavLink to={`/dashboard/courses/${course.id}/${course.first_section_id}`} class="view-course-link">View Course</NavLink></td>
          </tr>))}
     </Table>
 <Pagination pagesNbr={3}/>
  </>
}