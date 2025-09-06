import classes from './DashboardHome.module.css'
import ChatWidgetSection from "../../Dashboard components/ChatWidgetSection";
import SubjectCard from "../../Dashboard components/SubjectCard";
import Section from "../../common/Section";
import Table from '../../common/Table';

const subjects = [
  {
    "title": "Mathematics",
    "courses_count": 10,
    "description": "A wide range of topics from algebra to calculus.",
    "documents_count": 8,
    "quizzes_count": 5
  },
  {
    "title": "Science",
    "courses_count": 8,
    "description": "Explore the fascinating world of physics, chemistry, and biology.",
    "documents_count": 12,
    "quizzes_count": 6
  },
  {
    "title": "Literature",
    "courses_count": 15,
    "description": "Delve into classic and modern literature from various authors.",
    "documents_count": 10,
    "quizzes_count": 4
  }
]
const courses = [
  {
    id: 1,
    title: "Advanced Calculus",
    subject: "Mathematics",
    link: "#",
  },
  {
    id: 2,
    title: "Organic Chemistry",
    subject: "Science",
    link: "#",
  },
  {
    id: 3,
    title: "Shakespearean Literature",
    subject: "Literature",
    link: "#",
  },
  {
    id: 4,
    title: "Data Structures and Algorithms",
    subject: "Computer Science",
    link: "#",
  },
  {
    id: 5,
    title: "Modern Art History",
    subject: "Arts",
    link: "#",
  },
];



export default function DashboardHome(){
    return <>
    
    <ChatWidgetSection/>
    <Section title="Recent Subjects" icon="book">
  <div className={classes.cardContainer}>
    {subjects.map(subject=><SubjectCard subject={subject} key={subject.id}/>)}
    </div>
  </Section >
  
  <Section title="Recent Courses" icon="copy" >
 
 <Table headers={["Course Title", "Subject", "View Course"]}>
        {courses.map(course=> (<tr id={course.id}>
          <td  className={classes.courseTitle}><a href="#">{course.title}</a></td>
          <td>{course.subject}</td>
          <td><a href="#" class="view-course-link">View Course</a></td>
        </tr>))}
   </Table>
  </Section>
  </>
}