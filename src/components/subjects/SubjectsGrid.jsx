import { useGetSubjects } from "../../utils/hooks";
import SubjectDetailsCard from "./SubjectDetailsCard";
import classes from './SubjectsGrid.module.css'



export default function SubjectsGrid({filters}){
    const {data:subjects, isLoading, error} = useGetSubjects(filters)
    return (<div className={classes.subjectsGrid}>
     { subjects?.map(subject => <SubjectDetailsCard subject={subject}/>)}
  </div>)
}