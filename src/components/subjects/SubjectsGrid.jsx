import SubjectDetailsCard from "./SubjectDetailsCard";
import classes from './SubjectsGrid.module.css'

const subjects = [
    {
      id: 1,
      name: "Mathematics",
      description: "Explore algebra, calculus, and statistics with 10 courses available.",
      courses: 10,
      documents: 8,
      quizzes: 5,
      tags: ["STEM", "Popular"],
      link: "subjects/1",
    },
    {
      id: 2,
      name: "Biology",
      description: "Dive into the world of cells, ecosystems, and evolution with 7 courses.",
      courses: 7,
      documents: 5,
      quizzes: 3,
      tags: ["STEM", "New"],
      link: "#",
    },
    {
      id: 3,
      name: "History",
      description: "Learn about ancient civilizations, world wars, and cultural revolutions.",
      courses: 6,
      documents: 4,
      quizzes: 2,
      tags: ["Humanities", "Popular"],
      link: "#",
    },
  ];

export default function SubjectsGrid(){
    return (<div className={classes.subjectsGrid}>
     { subjects.map(subject => <SubjectDetailsCard subject={subject}/>)}
  </div>)
}