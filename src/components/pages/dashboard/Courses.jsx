import Table from "../../common/Table"
import classes from "./Courses.module.css"
import Filters from "../../common/filters.jsx";
import PageHeader from "../../common/PageHeader";
import Pagination from "../../common/Pagination.jsx";


const courses = [
    {
      id: 1,
      title: "Algebra Basics",
      url: "courses/1/",
      subject: "Mathematics",
      documents: 6,
      quizzes: 3,
      created: "Feb 12, 2025",
      actions: "View"
    },
    {
      id: 2,
      title: "Cell Structures",
      url: "#",
      subject: "Biology",
      documents: 4,
      quizzes: 2,
      created: "Mar 5, 2025",
      actions: "View"
    }
  ];

  const tags = [
    { id: 1, label: "STEM" },
    { id: 2, label: "Humanities" },
    { id: 3, label: "Languages" },
    { id: 4, label: "Popular" },
    { id: 5, label: "New" },
  ];

  
export default function Courses(){
const filterChoices=[[{key:"",label:"All Subjects"},{key:"math",label:"Math"},{key:"science",label:"Science"}]]
    
    return <>
    <div className={classes.Page}>
    <PageHeader title="All Courses" subtitle="Explore all the courses in your study space."/>
   <Filters tags={tags} placeholder="Search courses..." 
   filterChoices={filterChoices} buttonText="Create New Course" />
   </div>
    <Table headers={["Course Title", "Subject", "Documents", "Quizzes", "Created at" ,"View Course"]}>
          {courses.map(course=> (<tr id={course.id}>
            <td  className={classes.courseTitle}><a href={course.url} >{course.title}</a></td>
            <td>{course.subject}</td>
            <td>{course.documents}</td>
            <td>{course.quizzes}</td>
            <td>{course.created}</td>
            <td><a href={course.url} class="view-course-link">View Course</a></td>
          </tr>))}
     </Table>
 <Pagination pagesNbr={3}/>
  </>
}