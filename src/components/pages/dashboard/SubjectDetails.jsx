import { NavLink, useParams } from "react-router-dom";
import {  useGetCourses, useGetCoursesTags, useGetDocuments, useGetSubject } from "../../../utils/hooks"
import Filters from "../../common/filters";
import PageHeader from "../../common/PageHeader"
import Pagination from "../../common/Pagination";
import Section from "../../common/Section"
import Table from "../../common/Table";
import { useState } from "react";
import CoursesClasses from "./Courses.module.css"
import { FaTrash } from "react-icons/fa";
import { FaPen, FaBoxArchive} from "react-icons/fa6";
import documentClasses from "./Documents.module.css"
import classes from "./SubjectDetails.module.css"
import RoundBlueButton from "../../common/RoundBlueButton";
import { useModalUtil } from "../../../utils/utilsHooks";
import ConfirmDeleteModal from "../../common/ConfirmDeleteModal";



export default function SubjectDetails(){
  const {isModalOpen, openModal, closeModal} = useModalUtil()
  const {subjectId}= useParams()
  const [Coursefilters, setCourseFilters] =  useState({
    search:"",
    ordering:"",
    filters:{subject:subjectId}
  })
    const {data:subject} = useGetSubject()
    const {data:courses} = useGetCourses(Coursefilters)
    const {data:tags} = useGetCoursesTags(subjectId)
    
    const [Documentfilters, setDocumentFilters] =  useState({
            search:"",
            ordering:"",
            filters:{subject:subjectId}
          })
    const {data:documents}= useGetDocuments(Documentfilters)
    
    return <>
    <PageHeader title={subject?.title} subtitle={subject?.description}/>
    <div className={classes.actionButtons}>
            <RoundBlueButton><FaPen /> 
            <NavLink to={`/dashboard/subjects/${subjectId}/`}>Edit Subject</NavLink>
            </RoundBlueButton>
            <RoundBlueButton className={classes.archiveBtn} onClick={openModal}><FaTrash/> Delete Subject</RoundBlueButton>
            </div>
    <Section title="Courses" icon="book">

    <Filters tags={tags} placeholder="Search courses..."  
    buttonText="Create New Course"  path="/dashboard/courses/create/"
    filters={Coursefilters} setFilters={setCourseFilters} filterChoices={[]}/>
    <Table headers={["Course Title", "Documents", "Created at" ,"View Course"]}>
          {courses?.map(course=> (<tr id={course.id}>
            <td  className={CoursesClasses.courseTitle}><NavLink
              to={`/dashboard/courses/${course.id}/${course.first_section_id}`} >
                {course.title}</NavLink></td>
        
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
    <Section title="Documents" icon="folder">
     <Filters 
        tags={[]} 
        placeholder="Search documents..." 
        filterChoices={[]}
        filters={Documentfilters}
        setFilters={setDocumentFilters}
        ></Filters>
    
    <Table headers={["Document Title", "Subject", "Course", "Created at" ,"Actions"]}>
              {documents?.map(document=> (<tr id={document.id}>
                <td  className={documentClasses.name}><a href={document.file}>{document.title}</a></td>
                <td>{document.subject}</td>
                <td>{document.course}</td>
                <td>{new Date(document.created_at).toLocaleDateString("en-US", {
                                                              year: "numeric",
                                                              month: "long",
                                                              day: "numeric",
                                                              hour: "2-digit",
                                                              minute: "2-digit",
                                                            })}
                </td>
                <td><button className={documentClasses.deleteBtn}><FaTrash/></button></td>
              </tr>))}
         </Table>
    
     <Pagination pagesNbr={2}></Pagination>   
     <ConfirmDeleteModal isOpen={isModalOpen} onClose={closeModal} />         
    </Section>
    </>
}