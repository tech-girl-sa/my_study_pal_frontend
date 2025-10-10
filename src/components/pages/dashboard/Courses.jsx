import Table from "../../common/Table"
import classes from "./Courses.module.css"
import Filters from "../../common/filters.jsx";
import PageHeader from "../../common/PageHeader";
import Pagination from "../../common/Pagination.jsx";
import { useGetCourses, useGetCoursesTags, useGetSubjectChoices } from "../../../utils/hooks.js";
import { NavLink } from "react-router-dom";
import { useState } from "react";



  
export default function Courses(){
const {data:subjectChoices} = useGetSubjectChoices()
const filterChoices=[
  {
  filterKey:"subject",
  filterChoices: [{key:"",label:"Select subject"},...(subjectChoices || [])]
}

]
const [filters, setFilters] =  useState({
  search:"",
  ordering:"",
  filters:{}
})
const {data:courses}= useGetCourses(filters)
const {data:tags} = useGetCoursesTags()

    return <>
    <div className={classes.Page}>
    <PageHeader title="All Courses" subtitle="Explore all the courses in your study space."/>
   <Filters tags={tags} placeholder="Search courses..." 
   filterChoices={filterChoices} buttonText="Create New Course" 
   filters={filters} setFilters={setFilters}/>
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