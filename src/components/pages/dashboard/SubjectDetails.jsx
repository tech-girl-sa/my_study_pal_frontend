import { NavLink } from "react-router-dom";
import {  useGetCourses, useGetSubject } from "../../../utils/hooks"
import Filters from "../../common/filters";
import PageHeader from "../../common/PageHeader"
import Pagination from "../../common/Pagination";
import Section from "../../common/Section"
import Table from "../../common/Table";
import { useState } from "react";
import classes from "./Courses.module.css"

const tags = [
    "STEM" ,
   "Humanities" ,
    "Languages" ,
    "Popular" ,
    "New" ,
  ];


export default function SubjectDetails(){
    const {data:subject} = useGetSubject()
    const {data:courses}= useGetCourses()
    const [filters, setFilters] =  useState({
        search:"",
        ordering:"",
        filters:{}
      })

    return <>
    <PageHeader title={subject?.title} subtitle={subject?.description}/>
    <Section title="Courses" icon="book">

    <Filters tags={tags} placeholder="Search courses..."  buttonText="Create New Course" 
    filters={filters} setFilters={setFilters} filterChoices={[]}/>
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
    </Section>
    </>
}