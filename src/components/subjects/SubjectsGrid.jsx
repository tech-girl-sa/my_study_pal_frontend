import { useGetSubjects } from "../../utils/hooks";
import EmptyState from "../common/EmptyState";
import SubjectDetailsCard from "./SubjectDetailsCard";
import classes from './SubjectsGrid.module.css'



export default function SubjectsGrid({filters}){
    const {data:subjects, isLoading, error} = useGetSubjects(filters)
    return (<div className={classes.subjectsGrid}>
     { subjects?.map(subject => <SubjectDetailsCard subject={subject}/>)}
     {subjects?.length === 0 && <EmptyState path='/dashboard/subjects/create' label="Add Subject"
      icon="📚"  message="No subjects yet!"
      subtext="Start by adding your first subject to organize your learning journey. "/>}
  </div>)
}