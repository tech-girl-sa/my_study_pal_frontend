import { useState } from "react";
import Filters from "../../common/filters.jsx";
import PageHeader from "../../common/PageHeader";
import Pagination from "../../common/Pagination.jsx";
import SubjectsGrid from "../../subjects/SubjectsGrid.jsx";
import classes from "./Subjects.module.css"
import { useGetSubjectTags } from "../../../utils/hooks.js";



export default function Subjects(){
  const [filters, setFilters] =  useState({
    search:"",
    ordering:"",
    filters:{}
  })

  const {data:tags} = useGetSubjectTags()

  const filterChoices=[]
    return <>
    <div className={classes.Page}>
    <PageHeader title="All Subjects" subtitle="Explore all the subjects in your study space."/>
   <Filters tags={tags} placeholder="Search subjects..." 
   filterChoices={filterChoices} 
   buttonText="Create New Subject"
    path="/dashboard/subjects/create/"
   setFilters={setFilters}
   filters={filters}

   />
   </div>
  <SubjectsGrid filters={filters}/>
 <Pagination pagesNbr={3}/>
  </>
}