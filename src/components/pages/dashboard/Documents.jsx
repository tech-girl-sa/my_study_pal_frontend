import { useGetDocuments } from "../../../utils/hooks.js";
import FileUpload from "../../common/FileUpload.jsx";
import PageHeader from "../../common/PageHeader";
import Pagination from "../../common/Pagination";
import Section from "../../common/Section";
import Table from "../../common/Table.jsx";
import Filters from "../../common/filters.jsx";
import classes from "./Documents.module.css";
import { FaTrash, FaCloudUploadAlt } from "react-icons/fa";


const documents = [
    {
      id: 1,
      name: "Linear Algebra Notes.pdf",
      subject: "Mathematics",
      course: "Algebra Foundations",
      dateCreated: "Apr 20, 2025",
    },
    {
      id: 2,
      name: "French Grammar Summary.docx",
      subject: "Languages",
      course: "French A1",
      dateCreated: "Mar 5, 2025",
    }
  ];

export default function Documents(){
    const filterChoices=[
      { filterKey:"subjects",
        fiterChoices:[{key:"",label:"All Subjects"},
          {key:"math",label:"Math"},
          {key:"science",label:"Science"}]},
      {filterKey:"courses",
         filterChoices: [{key:"",label:"All Courses"},
            {key:"linear-algebra",label:"Linear Algebra"},
            {key:"french",label:"French"}]
        }
      ]
    const {data:documents}= useGetDocuments()
    console.log(documents)
    return <>
    <PageHeader title="Documents" subtitle="Explore all the documents in your study space."></PageHeader>
    <Section title="Upload Document" icon="upload">

        <FileUpload></FileUpload>
    </Section>
    
    
    <Section title="All Documents" icon="folder">
 

    <Filters tags={[]} placeholder="Search documents..." filterChoices={filterChoices}></Filters>

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
            <td><button className={classes.deleteBtn}><FaTrash/></button></td>
          </tr>))}
     </Table>

 <Pagination pagesNbr={2}></Pagination>
 </Section>
  </>

}