import { useState } from "react";
import { useGetDocumentFiltersChoices, useGetDocuments } from "../../../utils/hooks.js";
import FileUpload from "../../common/FileUpload.jsx";
import PageHeader from "../../common/PageHeader";
import Pagination from "../../common/Pagination";
import Section from "../../common/Section";
import Table from "../../common/Table.jsx";
import Filters from "../../common/filters.jsx";
import classes from "./Documents.module.css";
import { FaTrash } from "react-icons/fa";
import ConfirmDeleteModal from "../../common/ConfirmDeleteModal.jsx";
import { useModalUtil } from "../../../utils/utilsHooks.js";


export default function Documents(){
  const {isModalOpen, openModal, closeModal} = useModalUtil()
  const {data:filtersChoices} = useGetDocumentFiltersChoices()
    const filterChoices=[
      { filterKey:"subject",
        filterChoices:[
          {key:"",label:"All Subjects"},
          ...(filtersChoices?.subjects || [])
        ]
        },
      {filterKey:"course",
        filterChoices: [
          {key:"",label:"All Courses"},
          ...(filtersChoices?.courses || [])
        ]
        }
      ]
    const [filters, setFilters] =  useState({
        search:"",
        ordering:"",
        filters:{}
      })
    const {data:documents}= useGetDocuments(filters)
   

    return <>
    <PageHeader title="Documents" subtitle="Explore all the documents in your study space."></PageHeader>
    <Section title="Upload Document" icon="upload">

        <FileUpload></FileUpload>
    </Section>
    
    
    <Section title="All Documents" icon="folder">
 

    <Filters 
    tags={[]} 
    placeholder="Search documents..." 
    filterChoices={filterChoices}
    filters={filters}
    setFilters={setFilters}
    ></Filters>

<Table headers={["Document Title", "Subject", "Course", "Created at" ,"Actions"]}>
          {documents?.map(document=> (<tr id={document.id}>
            <td  className={classes.name}><a href={document.file}>{document.title}</a></td>
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
            <td><button className={classes.deleteBtn} onClick={openModal}><FaTrash/></button></td>
          </tr>))}
     </Table>

 <Pagination pagesNbr={2}></Pagination>
 </Section>
 <ConfirmDeleteModal isOpen={isModalOpen} onClose={closeModal} />
  </>

}