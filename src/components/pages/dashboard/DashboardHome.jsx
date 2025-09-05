import classes from './DashboardHome.module.css'
import ChatWidgetSection from "../../Dashboard components/ChatWidgetSection";
import SubjectCard from "../../Dashboard components/SubjectCard";
import Section from "../../common/Section";

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



export default function DashboardHome(){
    return <>
    
    <ChatWidgetSection/>
    <Section title="Recent Subjects" icon="book">
  <div className={classes.cardContainer}>
    {subjects.map(subject=><SubjectCard subject={subject} key={subject.id}/>)}
    </div>
  </Section >
  
  <Section title="Recent Courses" icon="copy" >
 
  <div class="table-container">
    <table class="courses-table">
      <thead>
        <tr>
          <th>Course Title</th>
          <th>Subject</th>
          <th>View Course</th>
        </tr>
      </thead>
      <tbody>
 
        <tr>
          <td><a href="#" class="course-title">Advanced Calculus</a></td>
          <td>Mathematics</td>
          <td><a href="#" class="view-course-link">View Course</a></td>
        </tr>

    
        <tr>
          <td><a href="#" class="course-title">Organic Chemistry</a></td>
          <td>Science</td>
          <td><a href="#" class="view-course-link">View Course</a></td>
        </tr>

  
        <tr>
          <td><a href="#" class="course-title">Shakespearean Literature</a></td>
          <td>Literature</td>
          <td><a href="#" class="view-course-link">View Course</a></td>
        </tr>


        <tr>
          <td><a href="#" class="course-title">Data Structures and Algorithms</a></td>
          <td>Computer Science</td>
          <td><a href="#" class="view-course-link">View Course</a></td>
        </tr>
        <tr>
          <td><a href="#" class="course-title">Modern Art History</a></td>
          <td>Arts</td>
          <td><a href="#" class="view-course-link">View Course</a></td>
        </tr>
      </tbody>
    </table>
  </div>
  </Section>
  </>
}