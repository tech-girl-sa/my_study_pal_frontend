import { useState } from "react";
import Filters from "../../common/filters.jsx";
import PageHeader from "../../common/PageHeader";
import Pagination from "../../common/Pagination.jsx";
import SubjectsGrid from "../../subjects/SubjectsGrid.jsx";
import classes from "./Subjects.module.css"

const tags = [
  { id: 1, label: "STEM" },
  { id: 2, label: "Humanities" },
  { id: 3, label: "Languages" },
  { id: 4, label: "Popular" },
  { id: 5, label: "New" },
];

export default function Subjects(){
  const [filters, setFilters] =  useState({
    search:"",
    ordering:"",
    filters:{}
  })

  const filterChoices=[]
    return <>
    <div className={classes.Page}>
    <PageHeader title="All Subjects" subtitle="Explore all the subjects in your study space."/>
   <Filters tags={tags} placeholder="Search subjects..." 
   filterChoices={filterChoices} buttonText="Create New Subject"
   setFilters={setFilters}
   filters={filters}
   />
   </div>
  <SubjectsGrid filters={filters}/>
 <Pagination pagesNbr={3}/>
  </>
}